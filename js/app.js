
const DATA = window.BOTC_DATA;
const GH = "https://raw.githubusercontent.com/S4R13/botc-lotr-wiki/main/";
const app = document.getElementById("app");
const bottomNav = document.getElementById("bottomNav");

const ROLE_THEME = {
  ALDEANOS:{label:"Aldeano", accent:"#49c8ff", glow:"rgba(73,200,255,.28)"},
  FORASTEROS:{label:"Forastero", accent:"#49c8ff", glow:"rgba(73,200,255,.22)"},
  ESBIRROS:{label:"Esbirro", accent:"#ff6f74", glow:"rgba(255,111,116,.30)"},
  DEMONIOS:{label:"Demonio", accent:"#ff6f74", glow:"rgba(255,111,116,.34)"}
};

const icons = {
 home:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 10.7 12 3l9 7.7"/><path d="M5.5 9.2V21h5v-6h3v6h5V9.2"/></svg>`,
 people:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="3.5"/><path d="M5.8 20c.7-4 2.8-6 6.2-6s5.5 2 6.2 6"/></svg>`,
 book:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 5.2c2.8-.8 5.3-.3 8 1.7v12c-2.7-2-5.2-2.5-8-1.7z"/><path d="M20 5.2c-2.8-.8-5.3-.3-8 1.7v12c2.7-2 5.2-2.5 8-1.7z"/></svg>`,
 setup:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="8.5"/><path d="m9 15 1.1-3.9L15 9l-1.2 3.9z"/></svg>`
};

function routeTo(hash){ location.hash = hash; }
function parseHash(){
  const raw=(location.hash || "#/home").slice(1);
  const [path,query=""] = raw.split("?");
  return {parts:path.split("/").filter(Boolean), query:new URLSearchParams(query)};
}
function asset(path){ return GH + path; }
function backButton(){
 return `<button class="round gold" onclick="history.length>1?history.back():routeTo('#/home')" aria-label="Volver">
 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m15 18-6-6 6-6"/></svg></button>`;
}
function topbar(leftHtml="", right=false){
  return `<div class="topbar ${right ? "" : "rightless"}">${leftHtml}${right ? right : '<div class="topbar-spacer"></div>'}</div>`;
}
function imgWithFallback(src,alt,cls=""){
 return `<img class="${cls}" src="${src}" alt="${alt}" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><span class="fallback" style="display:none">${alt.charAt(0)}</span>`;
}
function renderNav(active){
 const items=[
  ["home","Inicio","#/home",icons.home],
  ["characters","Personajes","#/characters",icons.people],
  ["almanac","Almanaque","#/almanac",icons.book],
  ["setup","Preparar","#/setup",icons.setup]
 ];
 bottomNav.innerHTML=items.map(([id,label,href,svg])=>`<button class="nav ${active===id?"active":""}" onclick="routeTo('${href}')">${svg}<span>${label}</span></button>`).join("");
}
function escapeAttr(text){
  return String(text).replace(/"/g,"&quot;");
}
function renderHome(){
 renderNav("home");
 app.innerHTML=`
  <div class="search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="7.4"/><path d="m16.6 16.6 4 4"/></svg><input id="homeSearch" placeholder="Buscar en el almanaque..."><span class="star">✧</span></div>
  <section class="hero"><img src="${asset("assets/saga/el-senor-de-los-anillos.png")}" alt="El Señor de los Anillos"></section>
  <div class="motto">El conocimiento también es una aventura</div>
  <section class="script-grid">
   ${Object.values(DATA.scripts).map(s=>`<button class="script-thumb" onclick="routeTo('#/script/${s.id}')"><img src="${asset(s.image)}" alt="${s.title}"></button>`).join("")}
  </section>`;
 document.getElementById("homeSearch").addEventListener("keydown",e=>{
  if(e.key==="Enter" && e.target.value.trim()) routeTo("#/characters?q="+encodeURIComponent(e.target.value.trim()));
 });
}

let currentRole="ALDEANOS";
function renderScript(id){
 const s=DATA.scripts[id]; if(!s){routeTo("#/home");return}
 renderNav("");
 currentRole="ALDEANOS";
 app.innerHTML=`
  ${topbar(backButton())}
  <section class="page-hero"><img src="${asset(s.image)}" alt="${s.title}"><div class="eyebrow">${s.subtitle}</div><h1>${s.title}</h1></section>
  <div class="two-col"><section class="copy-block"><h3>Sinopsis</h3><p>${s.synopsis}</p></section><section class="copy-block"><h3>Gameplay</h3><p>${s.gameplay}</p></section></div>
  <div class="pills" id="rolePills"></div><div class="count" id="charCount"></div><div class="char-list" id="charList"></div>`;
 renderRolePills(id); renderCharacterRows(id);
}
function renderRolePills(id){
 const box=document.getElementById("rolePills");
 box.innerHTML=Object.keys(DATA.categoryLabels).map(cat=>`<button class="pill ${cat===currentRole?"active":""}" data-cat="${cat}">${DATA.categoryLabels[cat]}</button>`).join("");
 box.querySelectorAll("button").forEach(b=>b.onclick=()=>{currentRole=b.dataset.cat;renderRolePills(id);renderCharacterRows(id)});
}

function renderCharacterRows(id){
 const ids=(DATA.scripts[id].characters[currentRole]||[])
   .slice()
   .sort((a,b)=>DATA.characters[a].name.localeCompare(DATA.characters[b].name,"es",{sensitivity:"base"}));

 document.getElementById("charCount").textContent=`${DATA.categoryLabels[currentRole]} · ${ids.length}`;
 document.getElementById("charList").innerHTML=ids.map(cid=>{
  const c=DATA.characters[cid],v=c.versions[id]||Object.values(c.versions)[0];
  return `<div class="char-row" onclick="routeTo('#/character/${c.id}?script=${id}')">
   <div class="token">${imgWithFallback(asset(c.image),c.name)}</div>
   <div><div class="char-name">${c.name}</div><div class="char-ability">${v.ability||"Consulta su ficha"}</div></div><div class="arrow">›</div></div>`;
 }).join("");
}



function renderCharacters(query=""){
 renderNav("characters");
 const q=query.toLowerCase();
 const list=Object.values(DATA.characters)
   .filter(c=>{
     const base = c.name.toLowerCase().includes(q);
     const ability = Object.values(c.versions).some(v => (v.ability||"").toLowerCase().includes(q) || (v.ficha||"").toLowerCase().includes(q));
     return !q || base || ability;
   })
   .sort((a,b)=>a.name.localeCompare(b.name,"es",{sensitivity:"base"}));

 app.innerHTML=`
 ${topbar()}
 <div class="almanac-head"><div class="almanac-mark">♙</div><div class="eyebrow">Índice de personajes</div><h1>Personajes</h1><p>Todos los personajes de los tres Scripts en una única biblioteca, ordenados alfabéticamente. Un personaje compartido existe una sola vez.</p></div>
 <div class="search almanac-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="7.4"/><path d="m16.6 16.6 4 4"/></svg><input id="charSearch" value="${escapeAttr(query)}" placeholder="Buscar personaje o habilidad..."></div>
 <div class="count">${list.length} personajes</div>
 <div class="char-list">
   ${list.map(c=>`<div class="char-row" onclick="routeTo('#/character/${c.id}')">
     <div class="token">${imgWithFallback(asset(c.image),c.name)}</div>
     <div><div class="char-name">${c.name}</div><div class="char-ability">${DATA.categoryLabels[c.category]||c.category} · ${c.appearances.map(x=>DATA.scripts[x].title).join(" · ")}</div></div>
     <div class="arrow">›</div>
   </div>`).join("")}
 </div>`;
 const input=document.getElementById("charSearch");
 input.oninput=()=>renderCharacters(input.value);
}



function abilityExplanation(c,v){
  const guide = c.abilityGuide || v.ability;
  const details = (v.almanac || []).filter(x=>{
    const t=x.toLowerCase();
    return !t.startsWith("[+") && !/borracho o envenenado/.test(t);
  }).slice(0,2);

  return `
    <p>${guide}</p>
    ${details.length ? `<ul>${details.map(x=>`<li>${x}</li>`).join("")}</ul>` : ""}
  `;
}


function tipsFor(c,v){
  const ability=(v.ability||"").toLowerCase();
  const ficha=(v.ficha||"").toLowerCase();
  const rules=(v.almanac||[]).join(" ").toLowerCase();
  const text=ability+" "+ficha+" "+rules;
  const tips=[];

  if(/sabes|aprendes|informaci|personaje/.test(text)){
    tips.push("No trates tu información como una prueba aislada. Compárala con nominaciones, votos, muertes y otras habilidades antes de convertir una lectura en una acusación.");
  }
  if(/elige/.test(ability) && /cada noche/.test(ability)){
    tips.push("Cambia tus elecciones cuando la mesa cambie. Repetir un mismo patrón puede ser útil, pero también puede regalar al Mal demasiada información sobre lo que estás intentando comprobar.");
  }
  if(/una vez por partida|1\/partida|1.ª vez|3 usos/.test(text)){
    tips.push("Tu recurso es limitado. Intenta reservarlo para un momento en que pueda confirmar una sospecha, romper una protección o cambiar realmente una ejecución.");
  }
  if(/anillo/.test(text)){
    tips.push("Lleva mentalmente el recorrido físico del Anillo. No confundas 'registrar como Portador' con poseerlo realmente: varias habilidades de este guion dependen exactamente de esa diferencia.");
  }
  if(/protege|no puede morir|podría no morir|evita/.test(text)){
    tips.push("Piensa un turno por delante. Las protecciones suelen ser más fuertes cuando anticipas el objetivo del Mal que cuando intentas reaccionar después.");
  }
  if(/nomin|vot|ejecuci/.test(text)){
    tips.push("Tu habilidad afecta directamente al ritmo del día. Antes de usarla, piensa no solo en quién puede morir, sino también en qué información revelará la votación.");
  }
  if(/muere|morir|muerte/.test(text) && !/protege|no puede morir|podría no morir|evita/.test(text)){
    tips.push("Presta atención al orden de resolución. En este Script una ejecución, una muerte y una sustitución de muerte pueden ser cosas distintas.");
  }

  // Global LOTR rule: any Good character can become Evil at 3 Corruption.
  if(v.category==="ALDEANOS" || v.category==="FORASTEROS"){
    tips.push("Vigila tu Corrupción. Si un personaje Bueno alcanza 3, se vuelve Malvado inmediatamente: a partir de ese momento tu estrategia cambia y ya no debes dar por sentado que tus intereses siguen siendo los del equipo bueno.");
  }

  if(v.category==="FORASTEROS"){
    tips.push("Como Forastero, parte de tu valor está en que la mesa entienda correctamente tu desventaja. Explica lo necesario sin convertirte automáticamente en el centro de todas las sospechas.");
  }

  if(!tips.length){
    tips.push("Lee tu habilidad de forma literal y piensa qué información deja detrás de cada uso. En Blood on the Clocktower, el valor no está solo en el efecto, sino en lo que la mesa puede deducir de él.");
  }

  return Array.from(new Set(tips)).slice(0,4);
}


function bluffFor(c,v){
  const bluffs=[];
  const ability=(v.ability||"").toLowerCase();

  if(v.category==="ALDEANOS" || c.category==="ALDEANOS"){
    bluffs.push(`Si finges ser ${c.name}, prepara una cronología clara de usos y resultados; la coherencia vale más que el dramatismo.`);
    bluffs.push("No reveles toda tu supuesta información de golpe. Un farol dosificado suele parecer más auténtico.");
  } else if(v.category==="FORASTEROS" || c.category==="FORASTEROS"){
    bluffs.push(`Si finges ser ${c.name}, aprovecha que los Forasteros pueden justificar resultados incómodos, ambiguos o perjudiciales para el equipo bueno.`);
    bluffs.push("Construye un relato plausible sobre por qué tu personaje ha provocado confusión sin convertir cada contradicción en una excusa.");
  }
  if(/sabes|aprendes|descubres|ves/.test(ability)) bluffs.push("Prepara información concreta y compatible con la mesa; una fuente de información perfecta y demasiado cómoda suele resultar sospechosa.");
  if(/elige/.test(ability)) bluffs.push("Recuerda tus elecciones ficticias. Si más tarde cambias a quién dijiste haber elegido, el farol se desmorona rápido.");
  if(/una vez por partida|1\/partida|1.ª vez/.test(ability)) bluffs.push("No inventes el uso de una habilidad limitada demasiado pronto: guardar ese supuesto recurso te da margen para reaccionar a la partida.");
  return Array.from(new Set(bluffs)).slice(0,4);
}


function counterStrategyFor(c,v,sid){
  const tips=[];
  const ability=(v.ability||"").toLowerCase();
  const ficha=(v.ficha||"").toLowerCase();
  const rules=(v.almanac||[]).join(" ").toLowerCase();
  const text=ability+" "+ficha+" "+rules;

  const script=DATA.scripts[sid];
  const goodIds=[
    ...(script.characters.ALDEANOS||[]),
    ...(script.characters.FORASTEROS||[])
  ];

  const good=goodIds.map(id=>DATA.characters[id]).filter(Boolean);

  const detectors = good.filter(g=>{
    const gv=g.versions[sid]||Object.values(g.versions)[0];
    const t=((gv.ability||"")+" "+(gv.ficha||"")+" "+(gv.almanac||[]).join(" ")).toLowerCase();
    return /malvado|demonio|esbirro|personaje|corrupci|alineaci|registro/.test(t);
  }).slice(0,4);

  const protectors = good.filter(g=>{
    const gv=g.versions[sid]||Object.values(g.versions)[0];
    const t=((gv.ability||"")+" "+(gv.ficha||"")+" "+(gv.almanac||[]).join(" ")).toLowerCase();
    return /protege|no puede morir|podría no morir|muere en su lugar|sacrific/.test(t);
  }).slice(0,3);

  if(v.category==="DEMONIOS"){
    tips.push(`Contra ${c.name}, el objetivo principal del equipo bueno es reducir la lista de posibles Demonios. Confirmar quién no puede ser ${c.name} es casi tan valioso como encontrar directamente al jugador correcto.`);

    if(detectors.length){
      tips.push(`Cruza la información de ${detectors.map(x=>x.name).join(", ")} con el comportamiento social, las nominaciones y las muertes. Ninguna lectura aislada debería bastar por sí sola.`);
    }

    if(/anillo/.test(text)){
      tips.push("Controla el recorrido físico del Anillo. Si el Demonio puede intentar TOMARLO, una lectura equivocada sobre su Portador puede terminar la partida sin necesidad de una muerte nocturna.");
    }

    if(/no puede morir|protecci/.test(text)){
      tips.push(`Si ${c.name} tiene protección contra muerte, no desperdicies una ejecución mientras esa protección siga activa. Busca el momento o la habilidad que permita atravesarla.`);
    }

    if(/mata|muere|muerte/.test(text)){
      tips.push("Observa el patrón de muertes nocturnas: qué jugadores desaparecen, quién se beneficia y qué información deja de producirse. El Demonio suele intentar eliminar primero a quienes pueden confirmar o acotar su identidad.");
    }

    if(protectors.length){
      tips.push(`Personajes como ${protectors.map(x=>x.name).join(", ")} pueden obligar al Demonio a perder tempo o a escoger objetivos peores. Protege especialmente a quienes generan información recurrente o conservan una habilidad decisiva.`);
    }
  } else {
    tips.push(`Contra ${c.name}, intenta identificar qué parte de la información o del estado de la mesa puede estar manipulando. Los Esbirros suelen ganar más ocultando la verdad que sobreviviendo hasta el final.`);

    if(detectors.length){
      tips.push(`Usa lecturas de ${detectors.map(x=>x.name).join(", ")} como piezas de un puzle, no como veredictos automáticos. Un Esbirro puede explotar registros falsos, Corrupción o información comprometida para crear contradicciones.`);
    }

    if(/registro|registra/.test(text)){
      tips.push("Si aparecen resultados incompatibles, revisa primero los efectos de registro falso antes de acusar a quien dio la información.");
    }
    if(/venen|borrach/.test(text)){
      tips.push("La información inesperadamente mala puede ser síntoma de veneno o borrachera. Busca qué personaje podría estar produciendo ese estado y en qué momento empezó la contradicción.");
    }
    if(/corrup/.test(text)){
      tips.push("Sigue la Corrupción con cuidado. Un personaje Bueno puede llegar a 3 y volverse Malvado, haciendo que una persona antes fiable pase a jugar para el otro equipo.");
    }
    if(/nomina|vot/.test(text)){
      tips.push("No construyas todo el plan del día alrededor de una única persona. Si este Esbirro puede bloquear nominaciones o votos, distribuye responsabilidades antes de que actúe.");
    }
    if(/anillo/.test(text)){
      tips.push("Distingue siempre entre poseer físicamente el Anillo y registrar como si se tuviera. Esa diferencia puede desmontar buena parte del engaño de este personaje.");
    }

    tips.push("Cuando un jugador quede confirmado como malo, revisa retrospectivamente a quién defendió, confirmó, protegió o desacreditó. Esas relaciones suelen ser más reveladoras que sus acusaciones directas.");
  }

  return Array.from(new Set(tips)).slice(0,6);
}



function renderCharacter(id,scriptHint){
 const c=DATA.characters[id]; if(!c){routeTo("#/characters");return}
 renderNav("characters");
 const sid=scriptHint&&c.versions[scriptHint]?scriptHint:c.appearances[0];
 const v=c.versions[sid];
 const theme=ROLE_THEME[v.category] || ROLE_THEME.ALDEANOS;
 app.innerHTML=`
 ${topbar(backButton())}
 <section class="character-page" style="--role-accent:${theme.accent};--role-glow:${theme.glow}">
   <section class="character-head">
     <div class="big-token">${imgWithFallback(asset(c.image),c.name)}</div>
     <h1>${c.name}</h1>
     <span class="role-badge">${theme.label}</span>
   </section>
   <div class="ability-quote">${v.ability}</div>
   <div class="section-tabs">
     <button class="section-tab active" data-tab="resumen">Resumen</button>
     <button class="section-tab" data-tab="running">Narración</button>
     <button class="section-tab" data-tab="strategy">Estrategia</button>
   </div>
   <div class="character-content" id="characterContent"></div>
 </section>`;

 function draw(tab){
  const box=document.getElementById("characterContent");
  if(tab==="resumen"){
    box.innerHTML = `
      <section class="row-section">
        <div class="row-icon">◌</div>
        <div><h3>Sobre el personaje</h3><p class="about-text">${c.lore}</p></div>
      </section>
      <section class="row-section">
        <div class="row-icon">✦</div>
        <div><h3>Habilidad</h3>${abilityExplanation(c,v)}</div>
      </section>
    `;
  } else if(tab==="running"){
    box.innerHTML = `
      <section class="row-section">
        <div class="row-icon">☾</div>
        <div><h3>Narrador</h3><p>${v.night||"Este personaje no tiene una fila nocturna regular."}</p></div>
      </section>
      ${v.examples && v.examples.length ? `
      <section class="row-section">
        <div class="row-icon">◇</div>
        <div><h3>Ejemplos</h3><ul>${v.examples.map(x=>`<li>${x}</li>`).join("")}</ul></div>
      </section>` : ""}
    `;
  } else {
    const tips = tipsFor(c,v);
    const evil = v.category==="ESBIRROS" || v.category==="DEMONIOS";

    const finalSection = evil
      ? `<section class="row-section">
           <div class="row-icon">⚔</div>
           <div><h3>Pelear contra ${c.name}</h3><ul class="tip-list">${counterStrategyFor(c,v,sid).map(x=>`<li>${x}</li>`).join("")}</ul></div>
         </section>`
      : `<section class="row-section">
           <div class="row-icon">≋</div>
           <div><h3>Hacerte pasar por ${c.name}</h3><ul class="tip-list">${bluffFor(c,v).map(x=>`<li>${x}</li>`).join("")}</ul></div>
         </section>`;

    box.innerHTML = `
      <section class="row-section">
        <div class="row-icon">⊹</div>
        <div><h3>Presente en</h3><div class="appearances">${c.appearances.map(x=>`<span class="tag">${DATA.scripts[x].title}</span>`).join("")}</div></div>
      </section>
      <section class="row-section">
        <div class="row-icon">✧</div>
        <div><h3>Consejos</h3><ul class="tip-list">${tips.map(x=>`<li>${x}</li>`).join("")}</ul></div>
      </section>
      ${finalSection}
    `;

  }
 }

 draw("resumen");
 document.querySelectorAll(".section-tab").forEach(b=>{
   b.onclick=()=>{
     document.querySelectorAll(".section-tab").forEach(x=>x.classList.remove("active"));
     b.classList.add("active");
     draw(b.dataset.tab);
   };
 });
}

function renderAlmanac(query=""){
 renderNav("almanac");
 const q=query.toLowerCase();
 const featuredIds=["anillo","corrupcion"];
 const reminderIds=["borracho-envenenado","nominaciones","ejecucion-muerte","preparacion"];
 const featured = featuredIds.map(id => DATA.almanac[id]).filter(e => !q || e.title.toLowerCase().includes(q) || e.summary.toLowerCase().includes(q));
 const reminders = reminderIds.map(id => DATA.almanac[id]).filter(Boolean).filter(e => !q || e.title.toLowerCase().includes(q) || e.summary.toLowerCase().includes(q));

 app.innerHTML=`
 ${topbar()}
 <header class="almanac-head">
   <div class="almanac-mark">✦</div>
   <div class="eyebrow">Reglas · lóricos · recordatorios</div>
   <h1>Almanaque</h1>
   <p>Los dos lóricos centrales de esta adaptación se explican aquí con detalle. Más abajo encontrarás recordatorios breves de reglas de Blood on the Clocktower que todo el grupo ya conoce, pero conviene tener a mano.</p>
 </header>
 <div class="search almanac-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="7.4"/><path d="m16.6 16.6 4 4"/></svg><input id="almSearch" value="${escapeAttr(query)}" placeholder="Anillo, Corrupción, nominaciones..."></div>
 <section class="feature-almanac">
   ${featured.map(e=>`
     <article class="feature-entry">
       <div class="feature-head">
         <div class="feature-icon">${e.icon?`<img src="${asset(e.icon)}" alt="">`:"✧"}</div>
         <div><div class="eyebrow">${e.eyebrow}</div><h2>${e.title}</h2><p class="lead">${e.summary}</p></div>
       </div>
       <div class="feature-rules">
         ${e.body.map((x,i)=>`<div class="rule-item"><div class="rule-num">${String(i+1).padStart(2,"0")}</div><p>${x}</p></div>`).join("")}
       </div>
       ${e.examples && e.examples.length ? `<section class="row-section"><div class="row-icon">◇</div><div><h3>Ejemplos</h3><ul>${e.examples.map(x=>`<li>${x}</li>`).join("")}</ul></div></section>`:""}
       ${e.storyteller ? `<section class="story-box"><div class="micro">Para el Narrador</div><p>${e.storyteller}</p></section>`:""}
     </article>
   `).join("")}
 </section>
 <section class="reminders">
   <div class="eyebrow" style="text-align:center">Recordatorios BOTC</div>
   <div class="reminder-list">
     ${reminders.map(e=>`<article class="reminder-row"><h3>${e.title}</h3><p>${e.summary}</p></article>`).join("")}
   </div>
 </section>`;
 document.getElementById("almSearch").oninput=e=>renderAlmanac(e.target.value);
}

function renderSetup(){
 renderIntegratedSetup();
}

function router(){
 const r=parseHash(),[page,arg]=r.parts;
 if(!page||page==="home") renderHome();
 else if(page==="script") renderScript(arg);
 else if(page==="characters") renderCharacters(r.query.get("q")||"");
 else if(page==="character") renderCharacter(arg,r.query.get("script"));
 else if(page==="almanac") renderAlmanac(r.query.get("q")||"");
 else if(page==="setup") renderSetup();
 else renderHome();
 window.scrollTo(0,0);
}
window.routeTo=routeTo;
window.addEventListener("hashchange",router);
window.addEventListener("DOMContentLoaded",router);
