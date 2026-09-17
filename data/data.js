window.BOTC_DATA = {
  "scripts": {
    "i": {
      "id": "i",
      "slug": "la-comunidad-del-anillo",
      "title": "La Comunidad del Anillo",
      "subtitle": "Script I",
      "image": "assets/scripts/la-comunidad-del-anillo.png",
      "synopsis": "La Comunidad inicia el viaje con el Anillo mientras la lealtad, la información y la tentación empiezan a tensar al grupo.",
      "gameplay": "El Anillo y la Corrupción atraviesan toda la partida. El Bien debe localizar, proteger y mover el Portador sin regalar certezas al Mal; registros falsos, sacrificios y protecciones hacen que la información deba interpretarse con cuidado.",
      "identity": "",
      "characters": {
        "ALDEANOS": [
          "arwen",
          "barbol",
          "elrond",
          "frodo",
          "galadriel",
          "gandalf-blanco",
          "gandalf-gris",
          "gimli",
          "glorfindel",
          "legolas",
          "merry",
          "pippin",
          "sam",
          "trancos"
        ],
        "FORASTEROS": [
          "bilbo",
          "boromir",
          "cebadillla",
          "gollum"
        ],
        "ESBIRROS": [
          "lurtz",
          "nazgul",
          "ojo-de-sauron",
          "saruman"
        ],
        "DEMONIOS": [
          "balrog",
          "rey-brujo",
          "sauron"
        ]
      }
    },
    "ii": {
      "id": "ii",
      "slug": "las-dos-torres",
      "title": "Las Dos Torres",
      "subtitle": "Script II",
      "image": "assets/scripts/las-dos-torres.png",
      "synopsis": "La Comunidad se ha roto. Los jugadores lidian con frentes separados, nuevas alianzas y una presión creciente alrededor del Anillo.",
      "gameplay": "la Comunidad se ha roto. El guion mezcla separación, dependencia, confianza, corrupción y presión sobre el movimiento del Anillo.",
      "identity": "la Comunidad se ha roto. El guion mezcla separación, dependencia, confianza, corrupción y presión sobre el movimiento del Anillo.",
      "characters": {
        "ALDEANOS": [
          "aragorn",
          "barbol",
          "faramir",
          "frodo",
          "gandalf-blanco",
          "gimli",
          "legolas",
          "merry",
          "pippin",
          "sam",
          "theoden",
          "eomer",
          "eowyn"
        ],
        "FORASTEROS": [
          "gollum",
          "haldir",
          "hama",
          "palantir"
        ],
        "ESBIRROS": [
          "grima",
          "nazgul",
          "ojo-de-sauron",
          "saruman"
        ],
        "DEMONIOS": [
          "ella-larana",
          "sauron",
          "ugluk"
        ]
      }
    },
    "iii": {
      "id": "iii",
      "slug": "el-retorno-del-rey",
      "title": "El Retorno del Rey",
      "subtitle": "Script III",
      "image": "assets/scripts/el-retorno-del-rey.png",
      "synopsis": "Los caminos separados convergen en la confrontación final. El poder, el sacrificio y el destino del Anillo alcanzan su punto crítico.",
      "gameplay": "caminos separados convergen en la confrontación final. El guion enfatiza sacrificio, liderazgo, muertos que regresan, presión de voto y el riesgo de que el poder del Anillo cree un nuevo Demonio.",
      "identity": "caminos separados convergen en la confrontación final. El guion enfatiza sacrificio, liderazgo, muertos que regresan, presión de voto y el riesgo de que el poder del Anillo cree un nuevo Demonio.",
      "characters": {
        "ALDEANOS": [
          "aragorn",
          "beregond",
          "faramir",
          "frodo",
          "gandalf-blanco",
          "gimli",
          "isildur",
          "legolas",
          "merry",
          "pippin",
          "rey-de-los-muertos",
          "sam",
          "eomer",
          "eowyn"
        ],
        "FORASTEROS": [
          "denethor",
          "gollum",
          "imrahil",
          "palantir"
        ],
        "ESBIRROS": [
          "boca-de-sauron",
          "gothmog",
          "nazgul",
          "ojo-de-sauron"
        ],
        "DEMONIOS": [
          "gorbag",
          "rey-brujo",
          "sauron"
        ]
      }
    }
  },
  "characters": {
    "frodo": {
      "id": "frodo",
      "name": "Frodo",
      "category": "ALDEANOS",
      "image": "assets/characters/frodo.png",
      "appearances": [
        "i",
        "ii",
        "iii"
      ],
      "versions": {
        "i": {
          "ability": "Empiezas con el Anillo. Cada noche*, elige un jugador: si tiene el Anillo, lo tomas; si no, está borracho hasta el anochecer.",
          "ficha": "ANILLO · TOMAR / BORRACHO",
          "almanac": [
            "Frodo comienza la partida como Portador físico del Anillo.",
            "Cada noche excepto la primera, elige a un jugador vivo o muerto.",
            "Si el elegido posee físicamente el Anillo, Frodo lo toma inmediatamente y sabe que lo recuperó porque recibe el objeto.",
            "Si no posee físicamente el Anillo, queda borracho inmediatamente durante esa noche y el día siguiente; deja de estar borracho al comenzar el siguiente anochecer.",
            "El registro falso de Bilbo no crea un Anillo físico: Frodo no recupera nada y Bilbo queda borracho si no lo posee realmente.",
            "Si Frodo recupera el Anillo de alguien que había declarado PASAR, ese pase queda cancelado.",
            "Si Frodo está borracho o envenenado al actuar, elige normalmente pero no toma el Anillo ni emborracha al objetivo.",
            "USAR / PASAR / CONSERVAR son reglas globales del Fabled El Anillo Único, no parte de la habilidad de Frodo. Frodo no puede elegir a un Portador invisible."
          ],
          "examples": [
            "Sam tiene el Anillo. Frodo elige a Sam y lo recupera; Sam no queda borracho.",
            "Bilbo registra como Portador pero no tiene el Anillo. Frodo lo elige: no obtiene el Anillo y Bilbo queda borracho.",
            "Un muerto posee el Anillo. Frodo puede elegirlo y recuperarlo."
          ],
          "night": "Primera noche: asegúrate de que Frodo comienza con el Anillo; no lo despiertes para esta habilidad. Otras noches: despierta a Frodo y haz que señale a un jugador. Si posee físicamente el Anillo, entrégaselo a Frodo y resuelve los efectos de cambio de Portador. Si no, coloca BORRACHO junto al elegido. Duerme a Frodo. Al siguiente anochecer, retira ese BORRACHO.",
          "category": "ALDEANOS"
        },
        "ii": {
          "ability": "Empiezas con el Anillo. Cada noche*, elige un jugador: si tiene el Anillo, lo tomas; si no, está borracho hasta el anochecer.",
          "ficha": "ANILLO · TOMAR / BORRACHO",
          "almanac": [
            "Frodo comienza como Portador físico del Anillo si está en juego.",
            "Cada noche excepto la primera, elige a un jugador vivo o muerto.",
            "Si el elegido posee físicamente el Anillo, Frodo lo toma inmediatamente; si no, queda borracho durante esa noche y el día siguiente, hasta el anochecer.",
            "Registrar como si se tuviera el Anillo no equivale a poseerlo físicamente.",
            "Si Frodo está borracho o envenenado al actuar, su elección no toma el Anillo ni emborracha.",
            "Frodo no puede elegir a un jugador invisible."
          ],
          "examples": [
            "Frodo elige al Portador real y recupera el Anillo.",
            "Frodo elige a Bilbo que solo registra como Portador: no obtiene el Anillo y Bilbo queda borracho.",
            "El Portador está muerto; Frodo puede elegirlo y recuperar el Anillo."
          ],
          "night": "Primera noche: si Frodo está en juego, asegúrate de que comienza con el Anillo; no lo despiertes para esta habilidad. Otras noches: despiértalo, obtén una elección válida y resuelve TOMAR/BORRACHO inmediatamente.",
          "category": "ALDEANOS"
        },
        "iii": {
          "ability": "Empiezas con el Anillo. Cada noche*, elige un jugador: si tiene el Anillo, lo tomas; si no, está borracho hasta el anochecer.",
          "ficha": "ANILLO · TOMAR / BORRACHO",
          "almanac": [
            "Frodo comienza como Portador físico del Anillo si está en juego.",
            "Cada noche excepto la primera, elige a un jugador vivo o muerto.",
            "Si el elegido posee físicamente el Anillo, Frodo lo toma inmediatamente; si no, queda borracho durante esa noche y el día siguiente, hasta el anochecer.",
            "Registrar como si se tuviera el Anillo no equivale a poseerlo físicamente.",
            "Si Frodo está borracho o envenenado al actuar, su elección no toma el Anillo ni emborracha.",
            "Frodo no puede elegir a un jugador invisible."
          ],
          "examples": [
            "Frodo elige al Portador real y recupera el Anillo.",
            "Frodo elige a Bilbo que solo registra como Portador: no obtiene el Anillo y Bilbo queda borracho.",
            "El Portador está muerto; Frodo puede elegirlo y recuperar el Anillo."
          ],
          "night": "Primera noche: si Frodo está en juego, asegúrate de que comienza con el Anillo; no lo despiertes para esta habilidad. Otras noches: despiértalo, obtén una elección válida y resuelve TOMAR/BORRACHO inmediatamente.",
          "category": "ALDEANOS"
        }
      },
      "lore": "Hobbit de la Comarca y heredero del Anillo Único. A lo largo de la saga carga con el peso de la misión de destruirlo, mientras su voluntad es puesta a prueba por la Corrupción y la tentación del poder.",
      "abilityGuide": "Empiezas la partida como Portador físico del Anillo. Cada noche excepto la primera eliges a un jugador: si tiene realmente el Anillo, lo recuperas; si no lo tiene, queda borracho hasta el siguiente anochecer."
    },
    "sam": {
      "id": "sam",
      "name": "Sam",
      "category": "ALDEANOS",
      "image": "assets/characters/sam.png",
      "appearances": [
        "i",
        "ii",
        "iii"
      ],
      "versions": {
        "i": {
          "ability": "Empiezas sabiendo quién es Frodo. Si Frodo fuera a morir por ejecución, mueres en su lugar. [+Frodo]",
          "ficha": "CONOCE A FRODO · SACRIFICIO",
          "almanac": [
            "[+Frodo] garantiza que Frodo esté en juego cuando Sam lo está.",
            "En la primera noche, Sam aprende qué jugador es Frodo; aprende identidad, no alineación.",
            "Si Frodo cambia posteriormente de alineación, Sam no recibe información nueva.",
            "Cuando Frodo es ejecutado, primero se comprueba si otra habilidad impide que muera. Solo si todavía fuera a morir se activa Sam.",
            "Frodo sigue siendo el jugador ejecutado; Sam sustituye la muerte, no la ejecución. El día termina normalmente.",
            "Si Sam ya está muerto, borracho o envenenado en el momento de la resolución, no puede sustituir la muerte.",
            "Si la muerte sustitutiva de Sam es impedida por otra habilidad, Frodo continúa vivo.",
            "Sam solo protege una muerte causada por ejecución; no protege a Frodo de muertes nocturnas u otras fuentes.",
            "Si el personaje Frodo cambia de jugador, la habilidad se refiere al Frodo actual, aunque Sam no aprende automáticamente su nueva identidad."
          ],
          "examples": [
            "Elrond evita la muerte de Frodo tras su ejecución: Sam no se sacrifica.",
            "Frodo va a morir por ejecución: Sam muere en su lugar.",
            "Sam está envenenado cuando Frodo va a morir por ejecución: Frodo muere."
          ],
          "night": "Primera noche: despierta a Sam, señala al jugador que es Frodo y duerme a Sam. No aparece en otras noches. Cuando Frodo fuera a morir por ejecución, resuelve el sacrificio inmediatamente.",
          "category": "ALDEANOS"
        },
        "ii": {
          "ability": "Empiezas sabiendo quién es Frodo. Si Frodo fuera a morir por ejecución, mueres en su lugar. [+Frodo]",
          "ficha": "CONOCE A FRODO · SACRIFICIO",
          "almanac": [
            "[+Frodo] garantiza que Frodo esté en juego cuando Sam lo está.",
            "En la primera noche, Sam aprende qué jugador es Frodo, no su alineación.",
            "Si Frodo fuera a morir por ejecución, primero se resuelven efectos que impidan esa muerte; solo si aún fuera a morir, Sam muere en su lugar.",
            "Frodo sigue siendo el ejecutado y el día termina normalmente.",
            "Sam debe estar vivo y tener habilidad cuando se resuelve la sustitución.",
            "Si la muerte de Sam es impedida, Frodo sigue vivo."
          ],
          "examples": [
            "Frodo es ejecutado pero una protección impide su muerte: Sam no se sacrifica.",
            "Frodo va a morir por ejecución: Sam muere en su lugar.",
            "Sam está envenenado cuando se resuelve la ejecución: Frodo muere."
          ],
          "night": "Primera noche: despierta a Sam y señala a Frodo. No tiene fila nocturna posterior. Resuelve su sacrificio inmediatamente cuando Frodo fuera a morir por ejecución.",
          "category": "ALDEANOS"
        },
        "iii": {
          "ability": "Empiezas sabiendo quién es Frodo. Si Frodo fuera a morir por ejecución, mueres en su lugar. [+Frodo]",
          "ficha": "CONOCE A FRODO · SACRIFICIO",
          "almanac": [
            "[+Frodo] garantiza que Frodo esté en juego cuando Sam lo está.",
            "En la primera noche, Sam aprende qué jugador es Frodo, no su alineación.",
            "Si Frodo fuera a morir por ejecución, primero se resuelven efectos que impidan esa muerte; solo si aún fuera a morir, Sam muere en su lugar.",
            "Frodo sigue siendo el ejecutado y el día termina normalmente.",
            "Sam debe estar vivo y tener habilidad cuando se resuelve la sustitución.",
            "Si la muerte de Sam es impedida, Frodo sigue vivo."
          ],
          "examples": [
            "Frodo es ejecutado pero una protección impide su muerte: Sam no se sacrifica.",
            "Frodo va a morir por ejecución: Sam muere en su lugar.",
            "Sam está envenenado cuando se resuelve la ejecución: Frodo muere."
          ],
          "night": "Primera noche: despierta a Sam y señala a Frodo. No tiene fila nocturna posterior. Resuelve su sacrificio inmediatamente cuando Frodo fuera a morir por ejecución.",
          "category": "ALDEANOS"
        }
      },
      "lore": "Jardinero, amigo y compañero inseparable de Frodo. Su lealtad absoluta sostiene la misión incluso en los momentos más oscuros del viaje hacia Mordor.",
      "abilityGuide": "Empiezas sabiendo qué jugador es Frodo. Si Frodo fuera a morir como consecuencia de una ejecución, mueres tú en su lugar, siempre que sigas vivo y tu habilidad funcione."
    },
    "gandalf-gris": {
      "id": "gandalf-gris",
      "name": "Gandalf Gris",
      "category": "ALDEANOS",
      "image": "assets/characters/gandalf-gris.png",
      "appearances": [
        "i"
      ],
      "versions": {
        "i": {
          "ability": "Cada noche, elige 2 jugadores: sabes si uno es Frodo. La 1.ª vez que mueres, permaneces vivo pero registras como muerto. Tras pasar 2 noches muerto, al amanecer te conviertes en Gandalf Blanco.",
          "ficha": "BUSCA A FRODO · MUERTE APARENTE · → GANDALF BLANCO",
          "almanac": [
            "Cada noche elige dos jugadores y recibe SÍ si al menos uno es Frodo; de lo contrario recibe NO. Puede elegir vivos o muertos.",
            "La primera vez que moriría, no muere realmente: permanece vivo pero registra como muerto.",
            "Durante este estado se trata como muerto para casi todos los efectos de registro y para las reglas sociales: no puede nominar normalmente y dispone del voto fantasma propio de un muerto.",
            "Para el estado real de la partida y el final del juego, Gandalf sigue vivo.",
            "Su registro como muerto cuenta para habilidades que cuentan muertos, incluido Treebeard.",
            "Gandalf debe pasar dos noches registrando como muerto. La noche en la que ocurre su muerte aparente cuenta como NOCHE 1 si la muerte ocurre de noche; si muere durante el día, la noche siguiente es NOCHE 1. Tras completar NOCHE 2, se transforma al amanecer siguiente.",
            "Si muere una segunda vez durante el intervalo, esa muerte es real y permanente y la transformación se cancela.",
            "Al transformarse, conserva sus recuerdos e información, cambia su personaje a Gandalf Blanco y su Corrupción se reinicia a 0. Su alineación no cambia automáticamente.",
            "Si el Balrog lo elige con su muerte nocturna, ambos mueren realmente; Gandalf no entra en transición y no se transforma.",
            "Si Gandalf está borracho o envenenado, su información puede ser falsa y su propia primera-muerte especial no funciona. La muerte mutua del Balrog depende del Balrog, no de Gandalf."
          ],
          "examples": [
            "Gandalf sufre su muerte aparente en Noche 4: esa es NOCHE 1. Pasa Noche 5 como NOCHE 2 y se convierte en Gandalf Blanco al amanecer del Día 5.",
            "Durante su muerte aparente vuelve a ser atacado y muere: la segunda muerte es real y no se transforma.",
            "El Balrog mata a Gandalf Gris: ambos mueren y el Bien gana por la muerte del Demonio."
          ],
          "night": "Cada noche mientras Gandalf Gris esté realmente activo: despiértalo y haz que señale a 2 jugadores; muestra SÍ si uno es Frodo y NO en caso contrario. Cuando sufra su primera muerte válida, no lo marques como realmente muerto: registra como muerto y coloca MUERTO · NOCHE 1 o prepara el conteo para la primera noche si murió de día. Mientras registra como muerto no despierta como Gandalf Gris. Tras completar MUERTO · NOCHE 2, al amanecer sustituye su ficha por Gandalf Blanco y deja de registrar como muerto.",
          "category": "ALDEANOS"
        }
      },
      "lore": "Mago de la Compañía y guía de la misión al comienzo de la saga. Su sabiduría, prudencia y capacidad para leer a las personas hacen que su palabra pese en la mesa.",
      "abilityGuide": "Cada noche eliges a 2 jugadores y sabes si al menos uno de ellos es Frodo. La primera vez que fueras a morir no mueres realmente, aunque registras como muerto; tras pasar 2 noches en ese estado, al amanecer te conviertes en Gandalf Blanco."
    },
    "gandalf-blanco": {
      "id": "gandalf-blanco",
      "name": "Gandalf Blanco",
      "category": "ALDEANOS",
      "image": "assets/characters/blanco.png",
      "appearances": [
        "i",
        "ii",
        "iii"
      ],
      "versions": {
        "i": {
          "ability": "Cada noche, elige un jugador: sabes si es Malvado.",
          "ficha": "DETECTA MALVADO",
          "almanac": [
            "Gandalf Blanco no entra en la bolsa; solo aparece mediante la transformación de Gandalf Gris.",
            "Cada noche elige un jugador vivo o muerto y aprende si actualmente es Malvado.",
            "Saruman puede hacer que un jugador registre como Malvado para esta información.",
            "Pippin puede provocar información falsa si Gandalf Blanco lo elige.",
            "Si Gandalf está borracho o envenenado, puede recibir información falsa.",
            "Transformarse reinicia la Corrupción, pero no la alineación: un Gandalf Gris Malvado puede convertirse en un Gandalf Blanco Malvado."
          ],
          "examples": [
            "Gandalf Blanco elige a un Aldeano Bueno afectado por Saruman y puede recibir SÍ.",
            "Elige a Pippin: el Narrador puede darle información falsa."
          ],
          "night": "Cada noche mientras Gandalf Blanco esté vivo: despiértalo y haz que señale a un jugador. Muestra SÍ si registra como Malvado y NO en caso contrario, teniendo en cuenta borrachera, veneno y Pippin. Duerme a Gandalf.",
          "category": "ALDEANOS"
        },
        "ii": {
          "ability": "Cada noche, elige un jugador: sabes si es Malvado.",
          "ficha": "DETECTA MALVADO",
          "almanac": [
            "Cada noche elige a un jugador vivo o muerto y aprende si actualmente registra como Malvado.",
            "Saruman puede alterar el registro relevante para esta información.",
            "Pippin puede provocar información falsa si Gandalf Blanco lo elige.",
            "Si Gandalf Blanco está borracho o envenenado, puede recibir información falsa.",
            "No aprende por qué un jugador es Malvado ni cuándo cambió de alineación."
          ],
          "examples": [
            "Elige a un Bueno que registra como Malvado por Saruman y puede recibir SÍ.",
            "Elige a Pippin y el Narrador puede darle información falsa."
          ],
          "night": "Cada noche: despierta a Gandalf Blanco, haz que señale a un jugador válido y muestra SÍ/NO según registro y estados de borrachera/envenenamiento.",
          "category": "ALDEANOS"
        },
        "iii": {
          "ability": "Cada noche, elige un jugador: sabes si es Malvado.",
          "ficha": "DETECTA MALVADO",
          "almanac": [
            "Cada noche elige a un jugador vivo o muerto y aprende si actualmente registra como Malvado.",
            "Saruman puede alterar el registro relevante para esta información.",
            "Pippin puede provocar información falsa si Gandalf Blanco lo elige.",
            "Si Gandalf Blanco está borracho o envenenado, puede recibir información falsa.",
            "No aprende por qué un jugador es Malvado ni cuándo cambió de alineación."
          ],
          "examples": [
            "Elige a un Bueno que registra como Malvado por Saruman y puede recibir SÍ.",
            "Elige a Pippin y el Narrador puede darle información falsa."
          ],
          "night": "Cada noche: despierta a Gandalf Blanco, haz que señale a un jugador válido y muestra SÍ/NO según registro y estados de borrachera/envenenamiento.",
          "category": "ALDEANOS"
        }
      },
      "lore": "Gandalf regresa transformado tras la caída en Moria. Como Gandalf Blanco asume un papel aún más directo de liderazgo y auxilio frente a las fuerzas de Sauron.",
      "abilityGuide": "Cada noche eliges a un jugador y el Narrador te indica si actualmente registra como Malvado. La información depende del registro, por lo que efectos como Saruman pueden alterar lo que recibes."
    },
    "trancos": {
      "id": "trancos",
      "name": "Trancos",
      "category": "ALDEANOS",
      "image": "assets/characters/trancos.png",
      "appearances": [
        "i"
      ],
      "versions": {
        "i": {
          "ability": "Cada noche, elige un jugador: sabes si es un Aldeano. Mientras estés vivo, Arwen no puede morir. [+Arwen]",
          "ficha": "DETECTA ALDEANO · PROTEGE A ARWEN",
          "almanac": [
            "[+Arwen] garantiza que Arwen esté en juego cuando Trancos lo está.",
            "Cada noche elige un jugador vivo o muerto y aprende si registra como Aldeano.",
            "Saruman registra como Bueno y Aldeano para habilidades de información y puede ser detectado como Aldeano.",
            "Pippin puede provocar información falsa si Trancos lo elige.",
            "Mientras Trancos esté vivo y tenga habilidad, Arwen no puede morir por ninguna fuente.",
            "Si Trancos está borracho o envenenado, la protección de Arwen queda temporalmente inactiva; vuelve al recuperar su habilidad.",
            "Si Trancos muere, la protección termina inmediatamente.",
            "Merry puede hacer que Arwen pueda morir hasta el anochecer aunque la habilidad de Trancos normalmente lo impida."
          ],
          "examples": [
            "Trancos elige a Saruman sano: puede aprender SÍ debido al registro de Saruman.",
            "Trancos está envenenado y el Demonio mata a Arwen: Arwen puede morir.",
            "Merry nomina a Arwen usando su habilidad; ese día Arwen puede morir pese a Trancos."
          ],
          "night": "Cada noche: despierta a Trancos y haz que señale a un jugador. Muestra SÍ si registra como Aldeano; de lo contrario, NO. Duerme a Trancos. Mientras Trancos esté vivo y tenga habilidad, impide cualquier muerte de Arwen salvo que un efecto permita expresamente que muera.",
          "category": "ALDEANOS"
        }
      },
      "lore": "Aragorn bajo su identidad de montaraz del Norte. Antes de reclamar abiertamente su linaje, actúa como protector discreto y guía de la Compañía.",
      "abilityGuide": "Cada noche eliges a un jugador y sabes si actualmente registra como Aldeano. Además, mientras sigas vivo, Arwen no puede morir."
    },
    "arwen": {
      "id": "arwen",
      "name": "Arwen",
      "category": "ALDEANOS",
      "image": "assets/characters/arwen.png",
      "appearances": [
        "i"
      ],
      "versions": {
        "i": {
          "ability": "Empiezas sabiendo quién es Trancos. Si Trancos muere, mueres esa noche.",
          "ficha": "CONOCE A TRANCOS · MUERE CON ÉL",
          "almanac": [
            "En la primera noche aprende qué jugador es Trancos; aprende identidad, no alineación.",
            "Si Trancos cambia posteriormente de alineación, Arwen no recibe información nueva.",
            "Cuando Trancos muere por cualquier causa, Arwen muere esa misma noche.",
            "Mientras Trancos está vivo y tiene habilidad, su propia habilidad impide que Arwen muera.",
            "Si Arwen está borracha o envenenada cuando Trancos muere, el desencadenante falla y no ocurre retroactivamente al recuperar su habilidad.",
            "Si Trancos muere durante el día, la muerte de Arwen se resuelve durante la noche siguiente.",
            "Si Trancos muere durante la noche, la muerte de Arwen se resuelve esa misma noche."
          ],
          "examples": [
            "Trancos es ejecutado durante el día. Esa noche Arwen muere.",
            "Arwen está envenenada cuando Trancos muere; no muere por su propia habilidad aunque después se cure."
          ],
          "night": "Primera noche: despierta a Arwen, señala a Trancos y duerme a Arwen. Cuando Trancos muera, si Arwen está viva y tiene habilidad, marca la muerte de Arwen para esa misma noche y resuélvela en el momento apropiado.",
          "category": "ALDEANOS"
        }
      },
      "lore": "Hija de Elrond, vinculada al destino de Aragorn y a la esperanza de los Pueblos Libres. Representa sacrificio, amor y la elección consciente del destino.",
      "abilityGuide": "Empiezas sabiendo qué jugador es Trancos. Mientras Trancos siga con vida no ocurre nada especial; si muere, tu propia muerte queda programada para esa misma noche."
    },
    "glorfindel": {
      "id": "glorfindel",
      "name": "Glorfindel",
      "category": "ALDEANOS",
      "image": "assets/characters/glorfindel.png",
      "appearances": [
        "i"
      ],
      "versions": {
        "i": {
          "ability": "Las habilidades de los Esbirros no te afectan. Si el Demonio te mata mientras hay 5 o más jugadores vivos, un jugador Bueno vivo sabe quién es el Demonio.",
          "ficha": "ESBIRROS NO AFECTAN · REVELA DEMONIO",
          "almanac": [
            "Las habilidades de Esbirros no pueden afectar a Glorfindel mientras tenga habilidad.",
            "Saruman no puede alterar su registro. Nazgûl no obtiene información útil mediante una selección que dependa de afectar a Glorfindel, y el Ojo de Sauron no puede verlo al usar el Anillo.",
            "La protección solo se aplica a Esbirros; los Demonios afectan a Glorfindel normalmente.",
            "Si un Demonio mata a Glorfindel mientras hay 5 o más jugadores vivos, el Narrador elige a un jugador Bueno vivo para aprender la identidad del Demonio.",
            "El conteo se realiza en el momento en que el Demonio mata a Glorfindel.",
            "Si Glorfindel está borracho o envenenado, las habilidades de Esbirros pueden afectarlo y su revelación al morir por el Demonio no funciona."
          ],
          "examples": [
            "Glorfindel usa el Anillo: el Ojo de Sauron no aprende quién lo usó y Glorfindel no recibe aviso del Ojo.",
            "El Demonio mata a Glorfindel con 6 vivos: un Bueno vivo aprende quién es el Demonio.",
            "Glorfindel está envenenado cuando el Demonio lo mata: no se produce revelación."
          ],
          "night": "No tiene una fila nocturna regular. Cuando una habilidad de Esbirro fuera a afectarlo, ignora ese efecto mientras Glorfindel tenga habilidad. Si el Demonio mata a Glorfindel con 5+ vivos y Glorfindel tiene habilidad, despierta inmediatamente a un jugador Bueno vivo elegido por el Narrador, muestra el token/personaje del Demonio o señala inequívocamente al jugador Demonio, y vuelve a dormirlo.",
          "category": "ALDEANOS"
        }
      },
      "lore": "Poderoso elfo de Rivendel cuya mera presencia inspira confianza. En el legendarium es una figura de auxilio providencial frente a la Sombra.",
      "abilityGuide": "Mientras tengas habilidad, las habilidades de los Esbirros no pueden afectarte. Además, si el Demonio te mata cuando quedan 5 o más jugadores vivos, el Narrador informa a un jugador Bueno vivo de quién es el Demonio."
    },
    "elrond": {
      "id": "elrond",
      "name": "Elrond",
      "category": "ALDEANOS",
      "image": "assets/characters/elrond.png",
      "appearances": [
        "i"
      ],
      "versions": {
        "i": {
          "ability": "Cada noche, elige un jugador: si es ejecutado mañana, podría no morir.",
          "ficha": "PROTECCIÓN DE EJECUCIÓN",
          "almanac": [
            "Cada noche elige un jugador, vivo o muerto.",
            "Si el elegido es ejecutado durante el día siguiente, el Narrador puede decidir que la ejecución no lo mate.",
            "La ejecución sí ocurre y consume la ejecución del día aunque el jugador sobreviva.",
            "Elrond puede elegirse a sí mismo.",
            "Si Elrond estaba borracho o envenenado al elegir, no crea protección.",
            "Si después de elegir queda borracho o envenenado antes de la ejecución, el efecto persistente queda inactivo mientras esté comprometido.",
            "Si Frodo es el elegido y es ejecutado, primero se resuelve la posible supervivencia de Elrond. Sam solo se sacrifica si Frodo todavía fuera a morir."
          ],
          "examples": [
            "Elrond protege a Frodo y el Narrador decide que sobreviva a su ejecución: Sam no muere.",
            "Elrond protege al Rey Brujo con 4 vivos; el Narrador puede hacer que sobreviva a la ejecución."
          ],
          "night": "Cada noche: despierta a Elrond y haz que señale a un jugador. Coloca el recordatorio PROTEGIDO junto al elegido y duerme a Elrond. Durante el día siguiente, si ese jugador es ejecutado y Elrond tiene habilidad, decide si la ejecución causa su muerte. Retira el recordatorio al anochecer.",
          "category": "ALDEANOS"
        }
      },
      "lore": "Señor de Rivendel, sabio y prudente. Es uno de los grandes guardianes de la memoria y del consejo, capaz de proteger y orientar a quienes luchan contra Sauron.",
      "abilityGuide": "Cada noche eliges a un jugador y creas una protección para el día siguiente. Si ese jugador es ejecutado, el Narrador puede decidir que sobreviva; la ejecución sí ocurre y consume la ejecución del día."
    },
    "legolas": {
      "id": "legolas",
      "name": "Legolas",
      "category": "ALDEANOS",
      "image": "assets/characters/legolas.png",
      "appearances": [
        "i",
        "ii",
        "iii"
      ],
      "versions": {
        "i": {
          "ability": "Cada noche*, elige un jugador: sabes si tiene Corrupción.",
          "ficha": "DETECTA CORRUPCIÓN",
          "almanac": [
            "Cada noche excepto la primera elige un jugador vivo o muerto.",
            "Aprende SÍ si ese personaje tiene al menos 1 Corrupción y NO si tiene 0.",
            "Un Malvado natural normalmente no tiene Corrupción y, por tanto, da NO.",
            "Un personaje convertido en Malvado por alcanzar 3 Corrupción sigue teniendo Corrupción y da SÍ.",
            "Pippin puede provocar información falsa si Legolas lo elige.",
            "Si Legolas está borracho o envenenado, puede recibir información falsa.",
            "Un objetivo borracho o envenenado sigue siendo leído normalmente si Legolas está sano.",
            "[+Legolas] es un modificador de preparación: si Gimli está en juego, Legolas también debe estarlo."
          ],
          "examples": [
            "Legolas elige a un Sauron natural: recibe NO, porque los Malvados naturales no acumulan Corrupción.",
            "Elige a Boromir con 2 Corrupción: recibe SÍ.",
            "Elige a un Aldeano que llegó a 3 y se volvió Malvado: recibe SÍ."
          ],
          "night": "Otras noches: despierta a Legolas y haz que señale a un jugador. Muestra SÍ si su personaje tiene al menos 1 Corrupción y NO si tiene 0, modificando la información si corresponde por Pippin, borrachera o veneno. Duerme a Legolas.",
          "category": "ALDEANOS"
        },
        "ii": {
          "ability": "Cada noche*, elige un jugador: sabes si tiene Corrupción.",
          "ficha": "DETECTA CORRUPCIÓN",
          "almanac": [
            "Cada noche excepto la primera, elige a un jugador vivo o muerto.",
            "Recibe SÍ si el personaje tiene al menos 1 Corrupción; NO si tiene 0.",
            "La alineación no importa para esta lectura: un Malvado por Corrupción puede seguir teniendo marcadores.",
            "Pippin puede provocar información falsa si es elegido.",
            "Un jugador invisible no puede ser elegido."
          ],
          "examples": [
            "Legolas elige a un Bueno con 2 Corrupción: recibe SÍ.",
            "Elige a un Malvado natural sin Corrupción: recibe NO."
          ],
          "night": "Otras noches: despierta a Legolas, obtén una elección válida y muestra SÍ si tiene Corrupción, teniendo en cuenta Pippin y borrachera/envenenamiento.",
          "category": "ALDEANOS"
        },
        "iii": {
          "ability": "Cada noche*, elige un jugador: sabes si tiene Corrupción.",
          "ficha": "DETECTA CORRUPCIÓN",
          "almanac": [
            "Cada noche excepto la primera, elige a un jugador vivo o muerto.",
            "Recibe SÍ si el personaje tiene al menos 1 Corrupción; NO si tiene 0.",
            "La alineación no importa para esta lectura: un Malvado por Corrupción puede seguir teniendo marcadores.",
            "Pippin puede provocar información falsa si es elegido.",
            "Un jugador invisible no puede ser elegido."
          ],
          "examples": [
            "Legolas elige a un Bueno con 2 Corrupción: recibe SÍ.",
            "Elige a un Malvado natural sin Corrupción: recibe NO."
          ],
          "night": "Otras noches: despierta a Legolas, obtén una elección válida y muestra SÍ si tiene Corrupción, teniendo en cuenta Pippin y borrachera/envenenamiento.",
          "category": "ALDEANOS"
        }
      },
      "lore": "Príncipe élfico del Bosque Negro y miembro de la Compañía. Su agilidad, percepción y fidelidad a sus aliados lo convierten en un apoyo constante.",
      "abilityGuide": "Cada noche excepto la primera eliges a un jugador y sabes si ese personaje tiene al menos 1 Corrupción. No aprendes cuánta tiene ni por qué la ganó."
    },
    "gimli": {
      "id": "gimli",
      "name": "Gimli",
      "category": "ALDEANOS",
      "image": "assets/characters/gimli.png",
      "appearances": [
        "i",
        "ii",
        "iii"
      ],
      "versions": {
        "i": {
          "ability": "Empiezas sabiendo quién es Legolas. La primera vez que Legolas es nominado, quien lo nominó es ejecutado. [+Legolas]",
          "ficha": "CONOCE A LEGOLAS · CASTIGA NOMINACIÓN",
          "almanac": [
            "[+Legolas] garantiza que Legolas esté en juego cuando Gimli lo está.",
            "En la primera noche aprende qué jugador es Legolas.",
            "La primera vez que Legolas es nominado, antes de cualquier votación, el nominador es ejecutado inmediatamente.",
            "El jugador ejecutado es el nominador, no Legolas. El día termina por haberse producido una ejecución.",
            "El nominador puede estar vivo o, si una habilidad especial le permitió nominar muerto, puede estar muerto; un muerto puede ser ejecutado aunque no pueda morir de nuevo.",
            "Si Gimli está borracho o envenenado cuando ocurre la primera nominación de Legolas, la habilidad no produce ejecución. Al ser un desencadenante de una sola vez, se considera gastado y no se activa en nominaciones posteriores.",
            "Si Gimli está muerto, no tiene habilidad y no se activa."
          ],
          "examples": [
            "Merry murió sin usar su habilidad y usa su nominación especial contra Legolas. Gimli ejecuta inmediatamente a Merry; el día termina.",
            "Lurtz marcó a Legolas. Al ser nominado, Gimli ejecuta al nominador antes de que haya votación, por lo que el umbral de Lurtz no llega a utilizarse."
          ],
          "night": "Primera noche: despierta a Gimli, señala a Legolas y duerme a Gimli. Durante el día, en la primera nominación de Legolas, si Gimli tiene habilidad, ejecuta inmediatamente al nominador antes de votar y termina el día. Marca la habilidad como usada.",
          "category": "ALDEANOS"
        },
        "ii": {
          "ability": "Empiezas sabiendo quién es Legolas. La primera vez que Legolas es nominado, quien lo nominó es ejecutado. [+Legolas]",
          "ficha": "CONOCE A LEGOLAS · CASTIGA NOMINACIÓN",
          "almanac": [
            "[+Legolas] garantiza que Legolas esté en juego.",
            "En la primera noche, Gimli aprende qué jugador es Legolas.",
            "La primera vez que Legolas es nominado, el nominator es ejecutado inmediatamente antes de votar.",
            "La ejecución consume la ejecución del día y el día termina.",
            "Si Gimli está borracho o envenenado cuando ocurre la primera nominación, el efecto falla y la oportunidad se gasta.",
            "La habilidad puede activarse aunque el nominator sea un jugador con una nominación especial permitida estando muerto."
          ],
          "examples": [
            "Un jugador nomina por primera vez a Legolas: es ejecutado inmediatamente y no se vota esa nominación.",
            "Gimli está envenenado durante esa primera nominación: no ocurre nada y la habilidad no vuelve a activarse."
          ],
          "night": "Primera noche: despierta a Gimli y señala a Legolas. Durante el día, vigila la primera nominación de Legolas y resuelve la ejecución inmediata si Gimli tiene habilidad.",
          "category": "ALDEANOS"
        },
        "iii": {
          "ability": "Empiezas sabiendo quién es Legolas. La primera vez que Legolas es nominado, quien lo nominó es ejecutado. [+Legolas]",
          "ficha": "CONOCE A LEGOLAS · CASTIGA NOMINACIÓN",
          "almanac": [
            "[+Legolas] garantiza que Legolas esté en juego.",
            "En la primera noche, Gimli aprende qué jugador es Legolas.",
            "La primera vez que Legolas es nominado, el nominator es ejecutado inmediatamente antes de votar.",
            "La ejecución consume la ejecución del día y el día termina.",
            "Si Gimli está borracho o envenenado cuando ocurre la primera nominación, el efecto falla y la oportunidad se gasta.",
            "La habilidad puede activarse aunque el nominator sea un jugador con una nominación especial permitida estando muerto."
          ],
          "examples": [
            "Un jugador nomina por primera vez a Legolas: es ejecutado inmediatamente y no se vota esa nominación.",
            "Gimli está envenenado durante esa primera nominación: no ocurre nada y la habilidad no vuelve a activarse."
          ],
          "night": "Primera noche: despierta a Gimli y señala a Legolas. Durante el día, vigila la primera nominación de Legolas y resuelve la ejecución inmediata si Gimli tiene habilidad.",
          "category": "ALDEANOS"
        }
      },
      "lore": "Enano de la Casa de Durin y miembro de la Compañía. Su valor, franqueza y resistencia le permiten mantenerse firme incluso en las situaciones más comprometidas.",
      "abilityGuide": "Empiezas sabiendo quién es Legolas. La primera vez que alguien nomina a Legolas, esa persona es ejecutada inmediatamente antes de la votación, siempre que tu habilidad funcione."
    },
    "merry": {
      "id": "merry",
      "name": "Merry",
      "category": "ALDEANOS",
      "image": "assets/characters/merry.png",
      "appearances": [
        "i",
        "ii",
        "iii"
      ],
      "versions": {
        "i": {
          "ability": "Una vez por partida, cuando nominas a un jugador, hasta el anochecer ese jugador puede morir aunque una habilidad impida que muera. Si mueres antes de usar esta habilidad, puedes nominar una vez estando muerto.",
          "ficha": "1/PG: ANULA PROTECCIÓN DE MUERTE · NOMINA MUERTO",
          "almanac": [
            "Una vez por partida, Merry puede vincular su habilidad a una nominación que él mismo realiza.",
            "Desde esa nominación hasta el anochecer, el nominado puede morir aunque cualquier habilidad normalmente impida su muerte.",
            "No elimina ni borra las habilidades que protegen al objetivo; simplemente permite que ese objetivo muera durante la duración.",
            "Puede atravesar la protección del Rey Brujo, la protección de Trancos sobre Arwen y la inmunidad a muerte de Gollum mientras porta el Anillo.",
            "No cancela redirecciones de muerte ni efectos que no sean una prohibición de morir.",
            "Si Merry muere antes de usar esta habilidad, obtiene exactamente una nominación especial estando muerto. Esa nominación no consume su voto fantasma.",
            "Si Merry está borracho o envenenado cuando intenta usar la parte de bypass, la nominación ocurre normalmente pero el objetivo no pierde su protección; la habilidad de una vez por partida se considera gastada.",
            "Si Merry murió antes de usarla, su permiso especial para nominar muerto forma parte de la habilidad y requiere que pueda usarla en ese momento."
          ],
          "examples": [
            "Merry nomina al Rey Brujo con 5 vivos y usa su habilidad. Si el Rey Brujo es ejecutado ese día, puede morir.",
            "Merry nomina a Gollum con el Anillo. Gollum puede morir ese día, pero su represalia contra el nominador sigue resolviéndose.",
            "Merry nomina a Arwen: hasta el anochecer puede morir aunque Trancos siga vivo."
          ],
          "night": "No tiene fila nocturna. Durante el día, cuando Merry declare su uso al nominar, marca SIN HABILIDAD/USADA y señala al nominado con un recordatorio PUEDE MORIR hasta el anochecer. Si Merry murió antes de usarla, permítele una única nominación estando muerto y marca la habilidad como usada.",
          "category": "ALDEANOS"
        },
        "ii": {
          "ability": "Una vez por partida, cuando nominas a un jugador, hasta el anochecer ese jugador puede morir aunque una habilidad impida que muera. Si mueres antes de usar esta habilidad, puedes nominar una vez estando muerto.",
          "ficha": "ROMPE PROTECCIÓN · NOMINACIÓN PÓSTUMA",
          "almanac": [
            "Merry decide usar su habilidad cuando realiza una nominación; el objetivo puede morir hasta el anochecer aunque una habilidad normalmente lo impida.",
            "No cancela redirecciones ni sustituye una muerte por otra: solo permite que ese jugador pueda morir.",
            "Si Merry muere antes de usar la habilidad, obtiene exactamente una nominación adicional estando muerto.",
            "Su voto fantasma y su nominación especial son recursos distintos.",
            "Si está borracho o envenenado al usarla, la habilidad se gasta y el objetivo no pierde sus protecciones."
          ],
          "examples": [
            "Merry usa la habilidad al nominar a un Demonio protegido: si es ejecutado, puede morir.",
            "Merry muere sin haberla usado; más tarde puede realizar una nominación estando muerto."
          ],
          "night": "No tiene fila nocturna fija. Marca SIN HABILIDAD al usarla. Si muere antes de usarla, marca PUEDE NOMINAR y retira el recordatorio cuando realice esa nominación.",
          "category": "ALDEANOS"
        },
        "iii": {
          "ability": "Una vez por partida, cuando nominas a un jugador, hasta el anochecer ese jugador puede morir aunque una habilidad impida que muera. Si mueres antes de usar esta habilidad, puedes nominar una vez estando muerto.",
          "ficha": "ROMPE PROTECCIÓN · NOMINACIÓN PÓSTUMA",
          "almanac": [
            "Merry decide usar su habilidad cuando realiza una nominación; el objetivo puede morir hasta el anochecer aunque una habilidad normalmente lo impida.",
            "No cancela redirecciones ni sustituye una muerte por otra: solo permite que ese jugador pueda morir.",
            "Si Merry muere antes de usar la habilidad, obtiene exactamente una nominación adicional estando muerto.",
            "Su voto fantasma y su nominación especial son recursos distintos.",
            "Si está borracho o envenenado al usarla, la habilidad se gasta y el objetivo no pierde sus protecciones."
          ],
          "examples": [
            "Merry usa la habilidad al nominar a un Demonio protegido: si es ejecutado, puede morir.",
            "Merry muere sin haberla usado; más tarde puede realizar una nominación estando muerto."
          ],
          "night": "No tiene fila nocturna fija. Marca SIN HABILIDAD al usarla. Si muere antes de usarla, marca PUEDE NOMINAR y retira el recordatorio cuando realice esa nominación.",
          "category": "ALDEANOS"
        }
      },
      "lore": "Uno de los hobbits de la Comarca que acompaña la aventura. Su evolución lo lleva de observador inquieto a pieza importante en la guerra contra la Sombra.",
      "abilityGuide": "Una vez por partida, cuando tú nominas a alguien, puedes hacer que ese jugador pueda morir hasta el anochecer aunque otra habilidad normalmente lo impida. Si mueres antes de haber usado esta capacidad, conservas una única nominación especial estando muerto."
    },
    "galadriel": {
      "id": "galadriel",
      "name": "Galadriel",
      "category": "ALDEANOS",
      "image": "assets/characters/galadriel.png",
      "appearances": [
        "i"
      ],
      "versions": {
        "i": {
          "ability": "Una vez por partida, por la noche, elige un jugador: pierde toda su Corrupción. Si es Malvado debido a la Corrupción, se vuelve Bueno. Sabe que Galadriel lo eligió.",
          "ficha": "1/PG: PURIFICA CORRUPCIÓN",
          "almanac": [
            "Una vez por partida, durante la noche, Galadriel elige a un jugador sin saber cuánta Corrupción tiene.",
            "El elegido pierde toda su Corrupción.",
            "Si era Malvado únicamente porque alcanzó 3 Corrupción, vuelve inmediatamente a ser Bueno.",
            "Un Malvado natural no cambia de alineación.",
            "El objetivo sabe que Galadriel lo eligió, pero Galadriel no aprende el resultado.",
            "Si Galadriel está borracha o envenenada al usar la habilidad, no ocurre nada pero el uso se gasta.",
            "Si Sauron está sano, cualquier cambio de alineación causado por Galadriel desencadena su aviso.",
            "Excepción de Boromir: si Galadriel hace que Boromir pase de Malvado a Bueno, Boromir queda permanentemente borracho."
          ],
          "examples": [
            "Galadriel elige a un Aldeano Bueno con 2 Corrupción: queda en 0 y sigue Bueno.",
            "Elige a un personaje Malvado por 3 Corrupción: vuelve a Bueno con 0.",
            "Elige a Saruman: no cambia de alineación porque es Malvado natural."
          ],
          "night": "Cada noche mientras conserve su uso: despierta a Galadriel. Puede negar con la cabeza o señalar a un jugador. Si elige, marca su habilidad como usada, elimina toda la Corrupción del objetivo y, si era Malvado debido a ella, cámbialo a Bueno. Despierta al objetivo, muéstrale que Galadriel lo eligió y duerme al objetivo. Resuelve inmediatamente cualquier aviso de Sauron.",
          "category": "ALDEANOS"
        }
      },
      "lore": "Dama de Lórien y una de las figuras élficas más poderosas de la Tercera Edad. Su mirada penetra intenciones y futuros posibles, aunque siempre desde la contención.",
      "abilityGuide": "Una vez por partida, por la noche, eliges a un jugador y eliminas toda su Corrupción. Si era Malvado únicamente por haber alcanzado 3 Corrupción, vuelve a ser Bueno; además, sabe que Galadriel lo eligió."
    },
    "pippin": {
      "id": "pippin",
      "name": "Pippin",
      "category": "ALDEANOS",
      "image": "assets/characters/pippin.png",
      "appearances": [
        "i",
        "ii",
        "iii"
      ],
      "versions": {
        "i": {
          "ability": "Si otro jugador te elige con una habilidad que solo obtiene información, puede recibir información falsa.",
          "ficha": "SEÑUELO DE INFORMACIÓN",
          "almanac": [
            "Solo afecta a habilidades cuya selección de Pippin sirve exclusivamente para obtener información.",
            "Puede alterar, entre otras, la información de Gandalf Gris, Gandalf Blanco, Trancos y Legolas.",
            "No afecta a Frodo, Boromir, Galadriel, Sauron ni otras habilidades que produzcan efectos además de o en lugar de información.",
            "El Narrador decide si la información que recibe el jugador que eligió a Pippin es verdadera o falsa dentro de lo permitido por esa habilidad.",
            "Pippin no sabe que ha provocado información falsa.",
            "Si Pippin está borracho o envenenado, esta capacidad está inactiva."
          ],
          "examples": [
            "Trancos elige a Pippin: el Narrador puede darle una respuesta falsa sobre si Pippin es Aldeano.",
            "Gandalf Gris elige a Pippin y a otro jugador: el Narrador puede falsear la respuesta de su consulta.",
            "Frodo elige a Pippin: Pippin no altera el resultado porque Frodo no es una habilidad puramente informativa."
          ],
          "night": "No tiene fila nocturna. Cuando una habilidad puramente informativa elija a Pippin y Pippin tenga habilidad, el Narrador puede dar información falsa al jugador que está obteniendo la información.",
          "category": "ALDEANOS"
        },
        "ii": {
          "ability": "Si otro jugador te elige con una habilidad que solo obtiene información, puede recibir información falsa.",
          "ficha": "DISTORSIONA INFORMACIÓN",
          "almanac": [
            "Solo afecta habilidades cuya única consecuencia sea obtener información.",
            "Puede distorsionar habilidades como Gandalf Blanco, Legolas o Aragorn si esas habilidades únicamente preguntan información sobre Pippin.",
            "No afecta a habilidades que además cambian estado, mueven el Anillo, causan Corrupción, protegen, envenenan o matan.",
            "Pippin no sabe cuándo su habilidad ha provocado información falsa.",
            "Si Pippin está borracho o envenenado, su habilidad no distorsiona la información."
          ],
          "examples": [
            "Legolas elige a Pippin: el Narrador puede responder falsamente sobre Corrupción.",
            "Gríma elige a Pippin: Pippin queda envenenado y puede ganar Corrupción normalmente; su habilidad no altera ese efecto."
          ],
          "night": "No tiene fila nocturna propia. Cuando una habilidad puramente informativa elija a Pippin, decide si la información será verdadera o falsa.",
          "category": "ALDEANOS"
        },
        "iii": {
          "ability": "Si otro jugador te elige con una habilidad que solo obtiene información, puede recibir información falsa.",
          "ficha": "DISTORSIONA INFORMACIÓN",
          "almanac": [
            "Solo afecta habilidades cuya única consecuencia sea obtener información.",
            "Puede distorsionar habilidades como Gandalf Blanco, Legolas o Aragorn si esas habilidades únicamente preguntan información sobre Pippin.",
            "No afecta a habilidades que además cambian estado, mueven el Anillo, causan Corrupción, protegen, envenenan o matan.",
            "Pippin no sabe cuándo su habilidad ha provocado información falsa.",
            "Si Pippin está borracho o envenenado, su habilidad no distorsiona la información."
          ],
          "examples": [
            "Legolas elige a Pippin: el Narrador puede responder falsamente sobre Corrupción.",
            "Gríma elige a Pippin: Pippin queda envenenado y puede ganar Corrupción normalmente; su habilidad no altera ese efecto."
          ],
          "night": "No tiene fila nocturna propia. Cuando una habilidad puramente informativa elija a Pippin, decide si la información será verdadera o falsa.",
          "category": "ALDEANOS"
        }
      },
      "lore": "Curioso, impulsivo y valiente a su manera. Sus errores pueden desestabilizar el viaje, pero también abrir caminos inesperados en la historia.",
      "abilityGuide": "Tu habilidad se activa cuando otro jugador te elige con una habilidad que únicamente obtiene información. En ese caso, el Narrador puede darle información falsa, aunque tú no controlas qué información recibe."
    },
    "boromir": {
      "id": "boromir",
      "name": "Boromir",
      "category": "FORASTEROS",
      "image": "assets/characters/boromir.png",
      "appearances": [        "i"
      ],
      "versions": {
        "i": {
          "ability": "Cada noche*, elige un jugador y ganas 1 Corrupción. Si tiene el Anillo, lo tomas y te vuelves Malvado.",
          "ficha": "BUSCA ANILLO · +1 CORRUPCIÓN · TRAICIÓN",
          "almanac": [
            "Cada noche excepto la primera, Boromir elige a un jugador vivo o muerto y gana 1 Corrupción, encuentre o no el Anillo.",
            "Si el elegido posee físicamente el Anillo, Boromir lo toma inmediatamente y se vuelve Malvado, independientemente de su Corrupción actual.",
            "El antiguo Portador sabe que ya no tiene el objeto, pero no aprende por esta habilidad quién se lo quitó.",
            "Bilbo registrando como Portador no crea un Anillo físico y no activa la traición.",
            "Si Boromir ya es Malvado, conserva la habilidad; los Malvados naturales/no-Buenos no ganan nueva Corrupción por la regla global, pero puede seguir buscando y tomando físicamente el Anillo.",
            "Un Boromir Malvado no puede USAR el Anillo.",
            "Galadriel puede eliminar su Corrupción y devolverlo a Bueno si su Maldad proviene de Corrupción; si Galadriel causa Boromir Malvado→Bueno, Boromir queda permanentemente borracho.",
            "Si Boromir está borracho o envenenado al actuar, no gana Corrupción, no toma el Anillo y no cambia de alineación."
          ],
          "examples": [
            "Boromir falla su búsqueda: gana 1 Corrupción.",
            "Boromir encuentra el Anillo con solo 1 Corrupción: lo toma y se vuelve Malvado inmediatamente.",
            "Elige a Bilbo, que registra como Portador pero no posee el Anillo: gana Corrupción pero no lo toma ni se vuelve Malvado por el hallazgo."
          ],
          "night": "Otras noches: despierta a Boromir y haz que señale a un jugador. Si Boromir es Bueno y tiene habilidad, añade 1 Corrupción. Si el elegido posee físicamente el Anillo, entrégaselo a Boromir y cambia su alineación a Malvado. Resuelve inmediatamente los efectos de movimiento del Anillo y el aviso de Sauron. Duerme a Boromir.",
          "category": "FORASTEROS"
        }
      },
      "lore": "Heredero de Gondor, noble y valiente, pero vulnerable a la llamada del Anillo. Encarna la tensión entre la necesidad desesperada y la corrupción del poder.",
      "abilityGuide": "Cada noche excepto la primera eliges a un jugador y ganas 1 Corrupción, aciertes o no. Si ese jugador posee físicamente el Anillo, lo tomas inmediatamente y te vuelves Malvado."
    },
    "cebadillla": {
      "id": "cebadillla",
      "name": "Cebadilla Mantecona",
      "category": "FORASTEROS",
      "image": "assets/characters/cebadillla.png",
      "appearances": [
        "i"
      ],
      "versions": {
        "i": {
          "ability": "Al comienzo del segundo día, sabes 3 personajes, exactamente 1 de los cuales está en juego.",
          "ficha": "CARTA: 3 PERSONAJES · EXACTAMENTE 1 EN JUEGO",
          "almanac": [
            "La información se entrega una sola vez, antes de comenzar el Día 2.",
            "El Narrador muestra tres personajes; exactamente uno está en juego si Cebadilla está sano y sobrio.",
            "Los otros dos no están en juego y pueden ser personajes que el Demonio esté usando como bluff.",
            "Si Cebadilla está borracho o envenenado al recibir la información, esta puede ser falsa.",
            "La habilidad informa sobre personajes, no jugadores."
          ],
          "examples": [
            "Cebadilla ve Frodo, Elrond y Lurtz. Solo Elrond está realmente en juego.",
            "Está envenenado al amanecer del Día 2 y puede recibir un trío que no cumpla exactamente uno."
          ],
          "night": "Al final de la Noche 2, antes de anunciar el amanecer, despierta a Cebadilla. Muéstrale tres tokens de personaje, exactamente uno de los cuales está en juego si tiene habilidad. Duerme a Cebadilla.",
          "category": "FORASTEROS"
        }
      },
      "lore": "Posadero de Bree, amable y bienintencionado, aunque propenso a los despistes. En la historia sirve como pequeño nexo humano entre los hobbits y los peligros del exterior.",
      "abilityGuide": "Al comienzo del segundo día, el Narrador te muestra 3 personajes. Exactamente 1 de esos personajes está en juego, así que tu tarea es contrastar esa pequeña lista con las afirmaciones de la mesa."
    },
    "bilbo": {
      "id": "bilbo",
      "name": "Bilbo",
      "category": "FORASTEROS",
      "image": "assets/characters/bilbo.png",
      "appearances": [
        "i"
      ],
      "versions": {
        "i": {
          "ability": "Puedes registrar como si tuvieras el Anillo. Si recibes el Anillo, debes pasarlo inmediatamente.",
          "ficha": "FALSO PORTADOR · PASA INMEDIATAMENTE",
          "almanac": [
            "Bilbo puede registrar como Portador del Anillo para habilidades que consultan o detectan registro.",
            "Este registro no crea una copia física del Anillo y no engaña efectos que requieren posesión física, como Frodo, Boromir o TOMAR EL ANILLO.",
            "Nazgûl puede recibir un SÍ falso al elegir a Bilbo aunque Bilbo no posea físicamente el Anillo.",
            "Si Bilbo recibe físicamente el Anillo por cualquier movimiento, debe pasarlo inmediatamente a otro jugador.",
            "El pase de Bilbo es inmediato, incluso si ocurre en mitad de la noche, y puede producir una cadena de movimientos.",
            "Cada movimiento físico puede desencadenar un nuevo aviso de Nazgûl.",
            "Si Bilbo está borracho o envenenado, no registra falsamente y su pase obligatorio queda inactivo. Si recibe el Anillo en ese estado, puede conservarlo y no debe pasarlo retroactivamente al recuperar su habilidad."
          ],
          "examples": [
            "Nazgûl elige a Bilbo sin Anillo; el Narrador puede tratarlo como Portador y responder SÍ.",
            "Frodo elige a Bilbo sin Anillo: no recupera nada y Bilbo queda borracho.",
            "El Anillo pasa A→Bilbo. Bilbo elige inmediatamente a C y el Anillo pasa Bilbo→C; Nazgûl puede recibir dos actualizaciones."
          ],
          "night": "No tiene fila nocturna regular. Siempre que Bilbo reciba físicamente el Anillo y tenga habilidad, despiértalo inmediatamente, indícale que debe pasarlo y haz que señale a otro jugador. Mueve el Anillo a ese jugador y resuelve los efectos de cambio de Portador. Duerme a Bilbo.",
          "category": "FORASTEROS"
        }
      },
      "lore": "Tío de Frodo y antiguo portador del Anillo. Su experiencia y el rastro que el Anillo ha dejado en él convierten su figura en un eco constante del pasado.",
      "abilityGuide": "Puedes registrar como si fueras el Portador del Anillo aunque no lo tengas físicamente, por lo que algunas habilidades pueden recibir una lectura engañosa sobre ti. Si llegas a recibir realmente el Anillo, debes pasarlo inmediatamente."
    },
    "gollum": {
      "id": "gollum",
      "name": "Gollum",
      "category": "FORASTEROS",
      "image": "assets/characters/gollum.png",
      "appearances": [
        "i",
        "ii",
        "iii"
      ],
      "versions": {
        "i": {
          "ability": "Mientras tengas el Anillo, no puedes morir. Cuando eres nominado, quien te nominó muere. Si tienes el Anillo cuando termina la partida, ganas.",
          "ficha": "ANILLO: NO MUERE · NOMINADOR MUERE · VICTORIA PERSONAL",
          "almanac": [
            "Mientras Gollum posea físicamente el Anillo y tenga habilidad, no puede morir por ninguna fuente.",
            "Cada vez que Gollum es nominado y tiene habilidad, el nominador muere inmediatamente.",
            "La nominación continúa después de la muerte del nominador y puede llegar a votarse, salvo que otro efecto termine el día.",
            "La represalia no depende de que Gollum tenga el Anillo.",
            "Merry puede hacer que Gollum pueda morir hasta el anochecer aunque posea el Anillo; la represalia de Gollum sigue funcionando.",
            "Si Gollum está borracho o envenenado, tanto la protección contra muerte como la represalia quedan inactivas.",
            "Si Gollum posee físicamente el Anillo cuando la partida termina, Gollum gana personalmente, esté vivo o muerto y aunque esté borracho o envenenado. Esta condición de victoria es una regla especial y no depende de que su habilidad esté activa."
          ],
          "examples": [
            "Un jugador nomina a Gollum: el nominador muere y la nominación sigue.",
            "Gollum tiene el Anillo y es ejecutado: no muere.",
            "Merry nomina a Gollum usando su habilidad: Merry puede morir por la represalia y Gollum puede morir ese día si es ejecutado."
          ],
          "night": "No tiene fila nocturna regular. Cuando Gollum sea nominado y tenga habilidad, mata inmediatamente al nominador. Siempre que Gollum vaya a morir y posea el Anillo, impide la muerte salvo que un efecto permita expresamente que muera. Al terminar la partida, comprueba la posesión física del Anillo para su victoria personal.",
          "category": "FORASTEROS"
        },
        "ii": {
          "ability": "Mientras tengas el Anillo, no puedes morir. Cuando eres nominado, quien te nominó muere. Si tienes el Anillo cuando termina la partida, ganas.",
          "ficha": "INMUNE CON ANILLO · REPRESALIA · VICTORIA PERSONAL",
          "almanac": [
            "Mientras Gollum posea físicamente el Anillo y tenga habilidad, no puede morir por ninguna causa.",
            "Cada vez que Gollum es nominado, el nominator muere inmediatamente; la nominación continúa si el día no ha terminado por otra razón.",
            "La represalia no requiere que Gollum tenga el Anillo.",
            "Merry puede permitir que Gollum muera pese a su inmunidad durante el día correspondiente.",
            "Si Gollum está borracho o envenenado, su inmunidad y represalia no funcionan.",
            "Su condición de victoria personal depende de poseer físicamente el Anillo al terminar la partida y no de su habilidad activa."
          ],
          "examples": [
            "Gollum tiene el Anillo y es ejecutado: no muere, salvo que otra habilidad permita su muerte.",
            "Un jugador nomina a Gollum: ese jugador muere inmediatamente.",
            "Gollum está muerto pero posee el Anillo cuando termina la partida: cumple su victoria personal."
          ],
          "night": "No tiene fila nocturna. Vigila posesión del Anillo y nominaciones. Al finalizar la partida, comprueba si Gollum es el Portador físico.",
          "category": "FORASTEROS"
        },
        "iii": {
          "ability": "Mientras tengas el Anillo, no puedes morir. Cuando eres nominado, quien te nominó muere. Si tienes el Anillo cuando termina la partida, ganas.",
          "ficha": "INMUNE CON ANILLO · REPRESALIA · VICTORIA PERSONAL",
          "almanac": [
            "Mientras Gollum posea físicamente el Anillo y tenga habilidad, no puede morir por ninguna causa.",
            "Cada vez que Gollum es nominado, el nominator muere inmediatamente; la nominación continúa si el día no ha terminado por otra razón.",
            "La represalia no requiere que Gollum tenga el Anillo.",
            "Merry puede permitir que Gollum muera pese a su inmunidad durante el día correspondiente.",
            "Si Gollum está borracho o envenenado, su inmunidad y represalia no funcionan.",
            "Su condición de victoria personal depende de poseer físicamente el Anillo al terminar la partida y no de su habilidad activa."
          ],
          "examples": [
            "Gollum tiene el Anillo y es ejecutado: no muere, salvo que otra habilidad permita su muerte.",
            "Un jugador nomina a Gollum: ese jugador muere inmediatamente.",
            "Gollum está muerto pero posee el Anillo cuando termina la partida: cumple su victoria personal."
          ],
          "night": "No tiene fila nocturna. Vigila posesión del Anillo y nominaciones. Al finalizar la partida, comprueba si Gollum es el Portador físico.",
          "category": "FORASTEROS"
        }
      },
      "lore": "Criatura consumida por el Anillo, dividida entre servidumbre, deseo y resentimiento. Su relación con el objeto es íntima y profundamente trágica.",
      "abilityGuide": "Mientras poseas físicamente el Anillo no puedes morir. Cada vez que alguien te nomina, esa persona muere; además, si sigues siendo el Portador cuando termina la partida, cumples tu condición personal de victoria."
    },
    "saruman": {
      "id": "saruman",
      "name": "Saruman",
      "category": "ESBIRROS",
      "image": "assets/characters/saruman.png",
      "appearances": [
        "i",
        "ii"
      ],
      "versions": {
        "i": {
          "ability": "Cada noche, elige un jugador: hasta el próximo anochecer puede registrar como Malvado. Registras como Bueno y Aldeano para habilidades de información.",
          "ficha": "FALSO MALVADO · REGISTRA BUENO/ALDEANO",
          "almanac": [
            "Cada noche Saruman elige a un jugador; hasta el próximo anochecer ese jugador puede registrar como Malvado.",
            "El objetivo no cambia realmente de alineación y no obtiene habilidades Malvadas.",
            "El registro falso del objetivo es Malvado, no específicamente Esbirro o Demonio.",
            "Saruman registra como Bueno y Aldeano únicamente para habilidades de información.",
            "Esto puede engañar a Gandalf Blanco y Trancos, pero no hace que Saruman tenga Corrupción para Legolas.",
            "Si Saruman está borracho o envenenado, su objetivo deja de registrar falsamente y el propio disfraz informativo de Saruman queda inactivo. Los efectos persistentes pueden reanudarse si recupera la habilidad antes de expirar."
          ],
          "examples": [
            "Saruman elige a Sam: Gandalf Blanco puede recibir SÍ al consultar si Sam es Malvado.",
            "Trancos elige a Saruman: puede recibir SÍ porque Saruman registra como Aldeano para información.",
            "Legolas elige a Saruman: normalmente recibe NO, porque el disfraz no crea Corrupción."
          ],
          "night": "Cada noche: retira el recordatorio de la noche anterior al llegar su expiración. Despierta a Saruman y haz que señale a un jugador. Coloca REGISTRA MALVADO junto al elegido hasta el próximo anochecer. Duerme a Saruman. Para habilidades de información, trata a Saruman como Bueno y Aldeano mientras tenga habilidad.",
          "category": "ESBIRROS"
        },
        "ii": {
          "ability": "Cada noche, elige 1 jugador: hasta el próximo anochecer puede registrar como Malvado. Registras como Bueno y Aldeano para habilidades de información.",
          "ficha": "REGISTRO FALSO",
          "almanac": [
            "Cada noche Saruman elige a un jugador válido; hasta el próximo anochecer ese jugador puede registrar como Malvado.",
            "El Narrador decide cuándo aplicar ese registro falso a habilidades relevantes.",
            "Saruman registra como Bueno y Aldeano específicamente para habilidades de información.",
            "Su registro no cambia alineación real, tipo real ni Corrupción.",
            "Un jugador invisible no puede ser elegido.",
            "Si Saruman está borracho o envenenado, su elección y su propio registro especial no funcionan."
          ],
          "examples": [
            "Gandalf Blanco consulta a un Bueno afectado por Saruman y puede recibir SÍ.",
            "Aragorn consulta a Saruman y puede tratarlo como Bueno/Aldeano para la información correspondiente."
          ],
          "night": "Cada noche: despierta a Saruman, obtén una elección válida y marca REGISTRA MALVADO hasta el próximo anochecer. Aplica su auto-registro Bueno/Aldeano a información mientras tenga habilidad.",
          "category": "ESBIRROS"
        }
      },
      "lore": "Jefe de los Istari caído en la ambición y la manipulación. Prefiere la voz, la corrupción y el control indirecto antes que la confrontación abierta.",
      "abilityGuide": "Cada noche eliges a un jugador que, hasta el próximo anochecer, puede registrar como Malvado sin cambiar realmente de alineación. Tú, en cambio, registras como Bueno y Aldeano para habilidades de información."
    },
    "nazgul": {
      "id": "nazgul",
      "name": "Nazgûl",
      "category": "ESBIRROS",
      "image": "assets/characters/nazgul.png",
      "appearances": [
        "i",
        "ii",
        "iii"
      ],
      "versions": {
        "i": {
          "ability": "Cada noche, elige un jugador: si tiene el Anillo, sabes que lo tiene; si no, sabes a qué distancia de ese jugador se encuentra el Anillo. Cuando el Anillo cambia de Portador, sabes que ha cambiado y a qué distancia de ti está el nuevo Portador.",
          "ficha": "RASTREA ANILLO · ACTUALIZA MOVIMIENTOS",
          "almanac": [
            "Cada noche elige a un jugador. Si ese jugador posee o registra como poseedor del Anillo, recibe SÍ.",
            "Si no, recibe la distancia circular mínima en asientos desde el jugador elegido hasta el Portador físico real. No recibe dirección.",
            "Bilbo puede provocar un SÍ falso mediante su registro.",
            "Cada vez que el Anillo cambia físicamente de Portador, Nazgûl recibe inmediatamente un aviso de que ha cambiado y la distancia circular mínima desde el asiento del Nazgûl hasta el nuevo Portador.",
            "El aviso de movimiento no revela identidad ni dirección.",
            "Movimientos consecutivos, como A→Bilbo→C, pueden producir varias actualizaciones.",
            "Las habilidades de Esbirros no afectan a Glorfindel: seleccionar directamente a Glorfindel no debe proporcionar información útil a través de él, y un movimiento cuyo nuevo Portador sea Glorfindel no genera la actualización mientras Glorfindel tenga habilidad.",
            "Si Nazgûl está borracho o envenenado al consultar o cuando ocurre un movimiento, esa parte de su habilidad no funciona."
          ],
          "examples": [
            "Nazgûl elige a un jugador situado a distancia 2 del Portador y recibe 2.",
            "Elige a Bilbo sin Anillo y Bilbo registra como Portador: puede recibir SÍ.",
            "El Anillo cambia de manos y el nuevo Portador está a 3 asientos del Nazgûl: Nazgûl recibe un aviso de cambio y un 3."
          ],
          "night": "Cada noche: despierta al Nazgûl y haz que señale a un jugador. Si registra como Portador, muestra SÍ; si no, muestra la distancia mínima desde ese jugador hasta el Portador físico. Duerme al Nazgûl. Cada vez que el Anillo cambie físicamente de Portador, si la habilidad puede afectar al nuevo Portador, despierta inmediatamente al Nazgûl, indica CAMBIO y muestra la distancia mínima desde el Nazgûl al nuevo Portador; después duérmelo.",
          "category": "ESBIRROS"
        },
        "ii": {
          "ability": "Cada noche, elige 1 jugador: si tiene el Anillo, sabes que lo tiene; si no, sabes a qué distancia de ese jugador se encuentra el Anillo. Cuando el Anillo cambia de Portador, sabes que ha cambiado y a qué distancia de ti está el nuevo Portador.",
          "ficha": "RASTREA EL ANILLO",
          "almanac": [
            "Cada noche el Nazgûl elige a un jugador válido. Si posee o registra como si poseyera el Anillo, puede aprender que lo tiene.",
            "Si no, aprende la distancia mínima en asientos desde ese jugador hasta el Portador físico; no aprende dirección.",
            "Cada vez que el Anillo cambia físicamente de Portador, el Nazgûl aprende inmediatamente que cambió y la distancia mínima desde su propio asiento al nuevo Portador.",
            "No aprende identidad ni dirección del nuevo Portador.",
            "Bilbo puede provocar un positivo falso al registrar como Portador, pero no altera la localización física para distancias.",
            "Un Portador invisible no puede ser elegido para la consulta nocturna, aunque los movimientos del Anillo pueden seguir activar la reacción si la habilidad no requiere elegirlo."
          ],
          "examples": [
            "El Nazgûl elige a Bilbo, que registra como Portador: puede recibir que lo tiene aunque el Anillo esté en otro lugar.",
            "El Anillo pasa al amanecer: el Nazgûl aprende que cambió y la nueva distancia desde su asiento."
          ],
          "night": "Cada noche: despierta al Nazgûl y obtén una elección válida. Da la información de posesión/distancia. Siempre que el Anillo cambie físicamente de Portador y el Nazgûl tenga habilidad, despiértalo para informar CAMBIÓ + distancia.",
          "category": "ESBIRROS"
        },
        "iii": {
          "ability": "Cada noche, elige 1 jugador: si tiene el Anillo, sabes que lo tiene; si no, sabes a qué distancia de ese jugador se encuentra el Anillo. Cuando el Anillo cambia de Portador, sabes que ha cambiado y a qué distancia de ti está el nuevo Portador.",
          "ficha": "RASTREA EL ANILLO",
          "almanac": [
            "Cada noche el Nazgûl elige a un jugador válido. Si posee o registra como si poseyera el Anillo, puede aprender que lo tiene.",
            "Si no, aprende la distancia mínima en asientos desde ese jugador hasta el Portador físico; no aprende dirección.",
            "Cada vez que el Anillo cambia físicamente de Portador, el Nazgûl aprende inmediatamente que cambió y la distancia mínima desde su propio asiento al nuevo Portador.",
            "No aprende identidad ni dirección del nuevo Portador.",
            "Bilbo puede provocar un positivo falso al registrar como Portador, pero no altera la localización física para distancias.",
            "Un Portador invisible no puede ser elegido para la consulta nocturna, aunque los movimientos del Anillo pueden seguir activar la reacción si la habilidad no requiere elegirlo."
          ],
          "examples": [
            "El Nazgûl elige a Bilbo, que registra como Portador: puede recibir que lo tiene aunque el Anillo esté en otro lugar.",
            "El Anillo pasa al amanecer: el Nazgûl aprende que cambió y la nueva distancia desde su asiento."
          ],
          "night": "Cada noche: despierta al Nazgûl y obtén una elección válida. Da la información de posesión/distancia. Siempre que el Anillo cambie físicamente de Portador y el Nazgûl tenga habilidad, despiértalo para informar CAMBIÓ + distancia.",
          "category": "ESBIRROS"
        }
      },
      "lore": "Siervos espectrales de Sauron, ligados por completo a su voluntad. Son cazadores del Anillo y agentes de terror más que combatientes ordinarios.",
      "abilityGuide": "Cada noche eliges a un jugador. Si posee el Anillo, lo sabes; si no, el Narrador te informa de la distancia hasta el Portador. Además, cada vez que el Anillo cambia de manos sabes que se ha movido y a qué distancia de ti está el nuevo Portador."
    },
    "ojo-de-sauron": {
      "id": "ojo-de-sauron",
      "name": "Ojo de Sauron",
      "category": "ESBIRROS",
      "image": "assets/characters/ojo.png",
      "appearances": [
        "i",
        "ii",
        "iii"
      ],
      "versions": {
        "i": {
          "ability": "Cuando un jugador usa el Anillo, sabes quién es. Ese jugador sabe que el Ojo de Sauron lo ha visto.",
          "ficha": "DETECTA USO DEL ANILLO",
          "almanac": [
            "Se activa cuando un jugador USA el Anillo, no por poseerlo, conservarlo, pasarlo o recibirlo.",
            "El Ojo aprende la identidad del jugador que lo usó y ese jugador aprende que el Ojo lo ha visto.",
            "Glorfindel no es afectado por habilidades de Esbirros: si usa el Anillo, el Ojo no aprende quién es y Glorfindel no recibe aviso.",
            "Si el Ojo está borracho o envenenado cuando se resuelve el uso, no detecta al Portador y este no recibe aviso."
          ],
          "examples": [
            "Frodo usa el Anillo: el Ojo aprende que Frodo lo usó y Frodo sabe que el Ojo lo vio.",
            "Glorfindel usa el Anillo: no se produce ningún aviso."
          ],
          "night": "No tiene fila nocturna regular independiente. Inmediatamente cuando se resuelva USAR EL ANILLO al principio de la noche, si el Ojo tiene habilidad y el usuario puede ser afectado, despierta al Ojo y señala al usuario; después informa al usuario de que el Ojo lo ha visto. La invisibilidad obtenida por USAR no cancela este desencadenante ya producido.",
          "category": "ESBIRROS"
        },
        "ii": {
          "ability": "Cuando un jugador usa el Anillo, sabes quién es. Ese jugador sabe que el Ojo de Sauron lo ha visto.",
          "ficha": "DETECTA USO DEL ANILLO",
          "almanac": [
            "Se activa inmediatamente cuando un jugador elige USAR el Anillo.",
            "El Ojo aprende exactamente qué jugador lo usó y ese jugador es informado de que el Ojo lo vio.",
            "La detección no depende de que el usuario siga siendo Bueno después de ganar Corrupción.",
            "Si el Ojo está borracho o envenenado al activarse, no aprende y el usuario no recibe el aviso.",
            "La invisibilidad causada por el propio uso no impide este desencadenante, porque la elección de USAR ocurrió antes y la habilidad no está eligiendo al Portador."
          ],
          "examples": [
            "Frodo usa el Anillo: el Ojo aprende que fue Frodo y Frodo sabe que fue visto.",
            "El Ojo está envenenado: el uso ocurre normalmente pero no hay detección ni aviso."
          ],
          "night": "No tiene fila fija. Al resolverse USAR al principio de la noche, si el Ojo tiene habilidad, despiértalo y señala al usuario; luego despierta al usuario y comunica que el Ojo lo vio.",
          "category": "ESBIRROS"
        },
        "iii": {
          "ability": "Cuando un jugador usa el Anillo, sabes quién es. Ese jugador sabe que el Ojo de Sauron lo ha visto.",
          "ficha": "DETECTA USO DEL ANILLO",
          "almanac": [
            "Se activa inmediatamente cuando un jugador elige USAR el Anillo.",
            "El Ojo aprende exactamente qué jugador lo usó y ese jugador es informado de que el Ojo lo vio.",
            "La detección no depende de que el usuario siga siendo Bueno después de ganar Corrupción.",
            "Si el Ojo está borracho o envenenado al activarse, no aprende y el usuario no recibe el aviso.",
            "La invisibilidad causada por el propio uso no impide este desencadenante, porque la elección de USAR ocurrió antes y la habilidad no está eligiendo al Portador."
          ],
          "examples": [
            "Frodo usa el Anillo: el Ojo aprende que fue Frodo y Frodo sabe que fue visto.",
            "El Ojo está envenenado: el uso ocurre normalmente pero no hay detección ni aviso."
          ],
          "night": "No tiene fila fija. Al resolverse USAR al principio de la noche, si el Ojo tiene habilidad, despiértalo y señala al usuario; luego despierta al usuario y comunica que el Ojo lo vio.",
          "category": "ESBIRROS"
        }
      },
      "lore": "Manifestación de la vigilancia incansable de Sauron. Más que un personaje concreto, representa la presión constante del Enemigo sobre todos los movimientos del Bien.",
      "abilityGuide": "Cada vez que un jugador USA el Anillo, sabes inmediatamente quién ha sido. Ese jugador también sabe que el Ojo de Sauron lo ha visto."
    },
    "lurtz": {
      "id": "lurtz",
      "name": "Lurtz",
      "category": "ESBIRROS",
      "image": "assets/characters/lurtz.png",
      "appearances": [
        "i"
      ],
      "versions": {
        "i": {
          "ability": "Cada noche, elige un jugador: mañana, si es nominado, 1 voto es suficiente para marcarlo para ejecución.",
          "ficha": "MARCA · 1 VOTO",
          "almanac": [
            "Cada noche, incluida la primera, Lurtz elige a un jugador.",
            "Durante el día siguiente, si ese jugador es nominado, un solo voto basta para colocarlo como candidato actual a ejecución.",
            "No es ejecutado inmediatamente: nominaciones posteriores pueden superar su total y sustituirlo como candidato.",
            "El objetivo no sabe que ha sido marcado.",
            "Lurtz puede elegir a un jugador Malvado para apoyar un bluff.",
            "Si Lurtz está borracho o envenenado al elegir, no se crea marca.",
            "Si Legolas está marcado y es nominado por primera vez mientras Gimli tiene habilidad, Gimli ejecuta al nominador antes de que se vote; la marca de Lurtz no llega a aplicarse."
          ],
          "examples": [
            "Lurtz marca a Frodo. Frodo es nominado y recibe 1 voto: queda marcado para ejecución. Más tarde otro jugador obtiene 4 votos y lo desplaza.",
            "Lurtz marca a Legolas; al ser nominado por primera vez, Gimli ejecuta al nominador antes de la votación."
          ],
          "night": "Cada noche: despierta a Lurtz y haz que señale a un jugador. Coloca MARCADO junto al elegido y duerme a Lurtz. Durante el día siguiente, si es nominado, trata 1 voto como suficiente para ponerlo en la marca de ejecución. Retira MARCADO al anochecer.",
          "category": "ESBIRROS"
        }
      },
      "lore": "Capitán uruk-hai creado para dar caza a la Compañía. Es violencia directa, obediencia brutal y presión implacable sobre los héroes.",
      "abilityGuide": "Cada noche eliges a un jugador. Si ese jugador es nominado durante el día siguiente, basta 1 solo voto para marcarlo para ejecución."
    },
    "rey-brujo": {
      "id": "rey-brujo",
      "name": "Rey Brujo",
      "category": "DEMONIOS",
      "image": "assets/characters/rey-brujo.png",
      "appearances": [
        "i",
        "iii"
      ],
      "versions": {
        "i": {
          "ability": "Cada noche*, elige un jugador: muere. No puedes morir mientras haya 5 o más jugadores vivos.",
          "ficha": "MATA · NO PUEDE MORIR CON 5+ VIVOS",
          "almanac": [
            "Cada noche excepto la primera elige a un jugador, que muere si la habilidad funciona.",
            "Puede elegir a un jugador muerto; no muere de nuevo y esto puede usarse para conservar el número de vivos.",
            "Mientras haya 5 o más jugadores vivos, el Rey Brujo no puede morir por ninguna fuente.",
            "Con exactamente 5 vivos sigue protegido. Al bajar a 4 vivos, la protección desaparece inmediatamente.",
            "Puede ser ejecutado con 5+ vivos; la ejecución ocurre y termina el día, pero no muere.",
            "Merry puede hacer que pueda morir hasta el anochecer, atravesando esta protección.",
            "Si está borracho o envenenado, su muerte nocturna falla y su protección contra muerte queda inactiva.",
            "En lugar de su muerte nocturna puede usar la acción global TOMAR EL ANILLO; esta acción global sigue disponible aunque su habilidad de personaje esté comprometida."
          ],
          "examples": [
            "Hay 5 vivos y el Rey Brujo es ejecutado: sobrevive, pero el día termina.",
            "Merry lo nomina usando su habilidad con 5 vivos y es ejecutado: puede morir.",
            "El Rey Brujo está envenenado y es ejecutado con 5 vivos: puede morir."
          ],
          "night": "Otras noches: despierta al Rey Brujo. El Demonio decide realizar su muerte normal o intentar TOMAR EL ANILLO. Para la muerte normal, haz que señale a un jugador y márcalo para morir si la habilidad funciona. Para TOMAR EL ANILLO, sigue la instrucción global y no realices muerte demoníaca. Duerme al Rey Brujo. Mientras tenga habilidad y haya 5+ vivos, impide su muerte.",
          "category": "DEMONIOS"
        },
        "iii": {
          "ability": "Cada noche*, elige 1 jugador: muere. No puedes morir mientras haya 5 o más jugadores vivos.",
          "ficha": "MUERTE · INMUNIDAD CON 5+",
          "almanac": [
            "Cada noche excepto la primera, el Rey Brujo elige a un jugador válido para morir o sustituye esa muerte por TOMAR EL ANILLO.",
            "Mientras haya 5 o más jugadores vivos y tenga habilidad, no puede morir por ninguna causa.",
            "Una ejecución del Rey Brujo con 5 o más vivos sigue siendo una ejecución y termina el día, aunque no muera.",
            "Con 4 o menos jugadores vivos, su inmunidad desaparece.",
            "Merry o Éowyn pueden permitir que muera pese a una habilidad que normalmente impediría esa muerte cuando sus condiciones se cumplen.",
            "Si está borracho o envenenado, su muerte falla y su inmunidad desaparece; TOMAR sigue siendo posible por el Fabled."
          ],
          "examples": [
            "Con 5 vivos, el Rey Brujo es ejecutado: no muere y el día termina.",
            "Éowyn nomina al Rey Brujo y es ejecutado: puede morir pese a la inmunidad."
          ],
          "night": "Otras noches: despierta al Rey Brujo para muerte o TOMAR. Durante el día y otras fuentes de muerte, comprueba el número de vivos y si tiene habilidad antes de impedir su muerte.",
          "category": "DEMONIOS"
        }
      },
      "lore": "Señor de los Nazgûl y principal lugarteniente de Sauron en la guerra. Su presencia anuncia desesperación, miedo y dominio del campo de batalla.",
      "abilityGuide": "Cada noche excepto la primera eliges a un jugador, que muere si tu habilidad funciona. Mientras haya 5 o más jugadores vivos no puedes morir por ninguna fuente; al bajar a 4 vivos, esa protección desaparece."
    },
    "balrog": {
      "id": "balrog",
      "name": "Balrog",
      "category": "DEMONIOS",
      "image": "assets/characters/balrog.png",
      "appearances": [
        "i"
      ],
      "versions": {
        "i": {
          "ability": "Cada noche*, elige un jugador: muere. Si eliges a Gandalf Gris, ambos morís.",
          "ficha": "MATA · GANDALF GRIS: AMBOS MUEREN",
          "almanac": [
            "Cada noche excepto la primera elige a un jugador, que muere si la habilidad funciona.",
            "Si el Balrog elige a Gandalf Gris como objetivo de esta muerte nocturna, Gandalf Gris y el Balrog mueren realmente.",
            "La muerte de Gandalf en este caso no activa su transición a Gandalf Blanco.",
            "Como el Demonio muere, el Bien gana salvo que otra condición especial determine lo contrario.",
            "Que Gandalf esté borracho o envenenado no evita la muerte mutua, porque el efecto pertenece al Balrog.",
            "Si el Balrog está borracho o envenenado, ni la muerte normal ni la muerte mutua funcionan.",
            "TOMAR EL ANILLO es una acción global distinta: intentar tomar el Anillo de Gandalf Gris no activa la muerte mutua."
          ],
          "examples": [
            "Balrog elige a Gandalf Gris: ambos mueren; Gandalf no se transforma.",
            "Balrog borracho elige a Gandalf Gris: la habilidad no produce las muertes.",
            "Balrog usa TOMAR EL ANILLO sobre Gandalf Gris: no se activa la cláusula de ambos mueren."
          ],
          "night": "Otras noches: despierta al Balrog. Decide muerte normal o TOMAR EL ANILLO. Si realiza la muerte, haz que señale a un jugador. Si es Gandalf Gris y el Balrog tiene habilidad, mata realmente a ambos; de lo contrario, resuelve la muerte normal. Duerme al Balrog.",
          "category": "DEMONIOS"
        }
      },
      "lore": "Demonio ancestral de fuego y sombra, eco de las antiguas guerras del mundo. Su aparición marca uno de los puntos de ruptura más duros de la travesía.",
      "abilityGuide": "Cada noche excepto la primera eliges a un jugador, que muere si tu habilidad funciona. Si eliges a Gandalf Gris, la confrontación es letal para ambos: Gandalf Gris y tú morís de verdad."
    },
    "sauron": {
      "id": "sauron",
      "name": "Sauron",
      "category": "DEMONIOS",
      "image": "assets/characters/sauron.png",
      "appearances": [
        "i",
        "ii",
        "iii"
      ],
      "versions": {
        "i": {
          "ability": "Cada noche*, elige un jugador: muere. Además, elige a otro jugador: gana 1 Corrupción. Cuando un personaje cambia de alineamiento, sabes que ha cambiado, pero no qué jugador es.",
          "ficha": "MATA · CORROMPE A OTRO · DETECTA CAMBIO DE ALINEACIÓN",
          "almanac": [
            "Cada noche excepto la primera, Sauron realiza su muerte normal o la sustituye por TOMAR EL ANILLO. Después elige a otro jugador distinto para ganar 1 Corrupción.",
            "El objetivo de Corrupción debe ser diferente del objetivo de la muerte o del intento de TOMAR.",
            "Un Malvado natural no acumula Corrupción por la regla global.",
            "Si un personaje Bueno alcanza 3 Corrupción, se vuelve Malvado inmediatamente y se informa al jugador esa misma noche.",
            "Cada vez que cualquier personaje cambia de alineación y Sauron tiene habilidad, Sauron sabe que se ha producido un cambio, pero no aprende quién fue.",
            "El aviso se produce tanto para Bueno→Malvado como para Malvado→Bueno, por ejemplo por Galadriel.",
            "Sauron puede deducir algunos cambios causados por su propio objetivo, pero la habilidad no confirma identidad.",
            "Si Sauron está borracho o envenenado, su muerte, Corrupción y aviso de alineación no funcionan.",
            "En lugar de la muerte nocturna puede intentar TOMAR EL ANILLO. Si lo hace, renuncia solo a la muerte; su elección separada de Corrupción sigue formando parte de su habilidad y se resuelve si está sano."
          ],
          "examples": [
            "Sauron da la tercera Corrupción a un Aldeano: se vuelve Malvado y Sauron recibe un aviso de cambio, sin identidad.",
            "Galadriel devuelve a Bueno a un personaje corrompido: Sauron recibe otro aviso.",
            "Sauron intenta TOMAR EL ANILLO y falla; no hay muerte demoníaca, pero todavía puede aplicar su Corrupción separada si su habilidad funciona."
          ],
          "night": "Otras noches: despierta a Sauron. Decide muerte normal o TOMAR EL ANILLO. Si mata, haz que señale a un jugador y resuelve la muerte cuando corresponda. Después haz que señale a un jugador distinto para Corrupción y, si es un personaje Bueno y Sauron tiene habilidad, añade 1 Corrupción. Duerme a Sauron. Siempre que un personaje cambie de alineación y Sauron tenga habilidad, despiértalo inmediatamente, indícale que ha ocurrido un CAMBIO DE ALINEACIÓN sin señalar a nadie y vuelve a dormirlo. Notas pendientes para revisión conjunta Confirmar si Bárbol puede elegirse a sí mismo y/o elegir a un jugador muerto. El texto actual no lo restringe. Cerrar la redacción exacta de la interacción Nazgûl–Glorfindel, especialmente qué información se da cuando Nazgûl selecciona directamente a Glorfindel. Definir si Bilbo puede pasar el Anillo al jugador que se lo acaba de entregar y cualquier restricción adicional de su pase inmediato. Cerrar el timing exacto de la muerte pendiente de Arwen si Trancos muere durante el día y Arwen queda borracha o envenenada antes de la resolución nocturna. Definir los nombres y diseño final de todos los reminder tokens y actualizar las hojas auxiliares del Script I a la nueva versión.",
          "category": "DEMONIOS"
        },
        "ii": {
          "ability": "Cada noche*, elige 1 jugador: muere. Además, elige a otro jugador: gana 1 Corrupción. Cuando un personaje cambia de alineamiento, sabes que ha cambiado, pero no qué jugador es.",
          "ficha": "MUERTE · CORRUPCIÓN · DETECTA CAMBIOS",
          "almanac": [
            "Cada noche excepto la primera, Sauron realiza su muerte normal o la sustituye por TOMAR EL ANILLO mediante el Fabled.",
            "Además de la muerte o intento de TOMAR, elige a otro jugador válido para que gane 1 Corrupción si es Bueno.",
            "La segunda elección debe ser un jugador diferente al objetivo de la muerte o del intento de TOMAR.",
            "Cuando cualquier personaje cambia de alineamiento, Sauron aprende que ocurrió un cambio, pero no quién cambió ni a qué alineación salvo lo deducible.",
            "Si Sauron está borracho o envenenado, su muerte, Corrupción e información de cambio de alineamiento fallan; TOMAR sigue disponible por ser regla del Fabled.",
            "Un jugador invisible no puede ser elegido para la muerte, la Corrupción ni TOMAR."
          ],
          "examples": [
            "Sauron intenta TOMAR y falla; aun así elige a otro jugador para ganar Corrupción.",
            "Un Bueno alcanza 3 Corrupción y se vuelve Malvado: Sauron sabe que hubo un cambio, no quién fue."
          ],
          "night": "Otras noches: despierta a Sauron. Obtén primero muerte o intento de TOMAR. Después obtén una segunda elección distinta para Corrupción. Cuando ocurra un cambio de alineación y Sauron tenga habilidad, infórmale en el momento apropiado de que hubo un cambio.",
          "category": "DEMONIOS"
        },
        "iii": {
          "ability": "Cada noche*, elige 1 jugador: muere. Además, elige a otro jugador: gana 1 Corrupción. Cuando un personaje cambia de alineamiento, sabes que ha cambiado, pero no qué jugador es.",
          "ficha": "MUERTE · CORRUPCIÓN · DETECTA CAMBIOS",
          "almanac": [
            "Cada noche excepto la primera, Sauron realiza su muerte normal o la sustituye por TOMAR EL ANILLO mediante el Fabled.",
            "Además de la muerte o intento de TOMAR, elige a otro jugador válido para que gane 1 Corrupción si es Bueno.",
            "La segunda elección debe ser un jugador diferente al objetivo de la muerte o del intento de TOMAR.",
            "Cuando cualquier personaje cambia de alineamiento, Sauron aprende que ocurrió un cambio, pero no quién cambió ni a qué alineación salvo lo deducible.",
            "Si Sauron está borracho o envenenado, su muerte, Corrupción e información de cambio de alineamiento fallan; TOMAR sigue disponible por ser regla del Fabled.",
            "Un jugador invisible no puede ser elegido para la muerte, la Corrupción ni TOMAR."
          ],
          "examples": [
            "Sauron intenta TOMAR y falla; aun así elige a otro jugador para ganar Corrupción.",
            "Un Bueno alcanza 3 Corrupción y se vuelve Malvado: Sauron sabe que hubo un cambio, no quién fue."
          ],
          "night": "Otras noches: despierta a Sauron. Obtén primero muerte o intento de TOMAR. Después obtén una segunda elección distinta para Corrupción. Cuando ocurra un cambio de alineación y Sauron tenga habilidad, infórmale en el momento apropiado de que hubo un cambio.",
          "category": "DEMONIOS"
        }
      },
      "lore": "El gran enemigo. Aunque no siempre actúa de forma visible, su voluntad domina la guerra, la Corrupción y la obsesión alrededor del Anillo.",
      "abilityGuide": "Cada noche excepto la primera eliges a un jugador para que muera y a otro para que gane 1 Corrupción. Además, cada vez que un personaje cambia de alineación sabes que alguien ha cambiado, pero no quién."
    },
    "aragorn": {
      "id": "aragorn",
      "name": "Aragorn",
      "category": "ALDEANOS",
      "image": "assets/characters/aragorn.png",
      "appearances": [
        "ii",
        "iii"
      ],
      "versions": {
        "ii": {
          "ability": "Cada noche, elige 2 jugadores: si ambos son Buenos, uno de ellos no puede morir por el Demonio esta noche.",
          "ficha": "LIDERAZGO · PROTECCIÓN",
          "almanac": [
            "Aragorn elige dos jugadores. El Narrador comprueba sus alineaciones actuales.",
            "Si ambos son Buenos, el Narrador elige a uno de los dos para protegerlo de la habilidad del Demonio esa noche.",
            "Si uno o ambos son Malvados, no se aplica protección. Aragorn no aprende si la condición se cumplió.",
            "La protección solo impide morir por el Demonio; no impide ejecución ni muertes de otras habilidades.",
            "Un jugador invisible no puede ser elegido por Aragorn.",
            "Si Aragorn está borracho o envenenado, no se aplica protección."
          ],
          "examples": [
            "Aragorn elige a dos Buenos; el Narrador protege a uno y el Demonio intenta matarlo: no muere.",
            "Elige a un Bueno y un Malvado: no protege a nadie."
          ],
          "night": "Cada noche: despierta a Aragorn y obtén dos elecciones válidas. Si ambos son Buenos y Aragorn tiene habilidad, marca a uno con PROTEGIDO hasta el final de la noche.",
          "category": "ALDEANOS"
        },
        "iii": {
          "ability": "Cada noche, elige 2 jugadores: si ambos son Buenos, uno de ellos no puede morir por el Demonio esta noche.",
          "ficha": "LIDERAZGO · PROTECCIÓN",
          "almanac": [
            "Aragorn elige dos jugadores. El Narrador comprueba sus alineaciones actuales.",
            "Si ambos son Buenos, el Narrador elige a uno de los dos para protegerlo de la habilidad del Demonio esa noche.",
            "Si uno o ambos son Malvados, no se aplica protección. Aragorn no aprende si la condición se cumplió.",
            "La protección solo impide morir por el Demonio; no impide ejecución ni muertes de otras habilidades.",
            "Un jugador invisible no puede ser elegido por Aragorn.",
            "Si Aragorn está borracho o envenenado, no se aplica protección."
          ],
          "examples": [
            "Aragorn elige a dos Buenos; el Narrador protege a uno y el Demonio intenta matarlo: no muere.",
            "Elige a un Bueno y un Malvado: no protege a nadie."
          ],
          "night": "Cada noche: despierta a Aragorn y obtén dos elecciones válidas. Si ambos son Buenos y Aragorn tiene habilidad, marca a uno con PROTEGIDO hasta el final de la noche.",
          "category": "ALDEANOS"
        }
      },
      "lore": "Heredero de Isildur y futuro rey de Gondor y Arnor. En la saga representa el liderazgo legítimo, el deber y la capacidad de unir pueblos distintos.",
      "abilityGuide": "Cada noche eliges a 2 jugadores. Si ambos son Buenos, el Narrador protege a uno de ellos de la muerte causada por el Demonio durante esa noche. No sabes si la condición se cumplió ni cuál de los dos quedó protegido."
    },
    "barbol": {
      "id": "barbol",
      "name": "Bárbol",
      "category": "ALDEANOS",
      "image": "assets/characters/barbol.png",
      "appearances": [
        "i",
        "ii"
      ],
      "versions": {
        "ii": {
          "ability": "Si hay 3 o más jugadores Buenos muertos, despiertas. Una vez por partida, por la noche, elige un jugador: no puede morir esta noche ni la siguiente.",
          "ficha": "DESPIERTA POR LOS CAÍDOS · PROTECCIÓN DOBLE",
          "almanac": [
            "Bárbol solo es despertado cuando la condición de 3 o más Buenos muertos se cumple.",
            "Gandalf Gris registrando como muerto cuenta para esta condición mientras registre así.",
            "Una vez por partida, cuando despierta, Bárbol puede elegir a un jugador para protegerlo durante dos noches consecutivas.",
            "La protección impide morir por cualquier causa nocturna durante esas dos noches; no impide ejecución durante el día.",
            "Un jugador invisible no puede ser elegido.",
            "Si Bárbol está borracho o envenenado al usar la habilidad, la oportunidad se gasta y no se aplica protección."
          ],
          "examples": [
            "Hay 3 Buenos muertos. Bárbol despierta y protege a Sam; Sam no puede morir esa noche ni la siguiente.",
            "Solo hay 2 Buenos muertos: Bárbol no despierta."
          ],
          "night": "Otras noches: si hay al menos 3 Buenos muertos y Bárbol conserva su uso, despiértalo y permite que elija si usa la habilidad. Marca PROTEGIDO 1 y mueve a PROTEGIDO 2 la noche siguiente; retira después.",
          "category": "ALDEANOS"
        },
        "i": {
          "ability": "Si hay 3 o más jugadores Buenos muertos, despiertas. Una vez por partida, por la noche, elige un jugador: no puede morir esta noche ni la siguiente.",
          "ficha": "3+ BUENOS MUERTOS · 1/PG PROTEGE 2 NOCHES",
          "almanac": [
            "Treebeard no despierta hasta que haya al menos 3 jugadores que sean o registren como Buenos muertos.",
            "Gandalf Gris en su estado de muerte aparente cuenta como muerto para este umbral.",
            "Una vez alcanzado el umbral, Treebeard continúa pudiendo despertar en noches posteriores aunque el estado de otros jugadores cambie, mientras conserve su habilidad y su uso.",
            "Treebeard puede esperar y no gastar su habilidad la primera noche que despierta.",
            "Cuando la usa, elige a un jugador; ese jugador no puede morir durante esa noche ni durante la noche siguiente.",
            "El efecto no protege durante los días intermedios.",
            "Si Treebeard está borracho o envenenado al usarla, no crea protección y el uso se gasta.",
            "Si Treebeard se emborracha o envenena durante la duración, su efecto persistente queda inactivo mientras esté comprometido y puede reanudarse si recupera la habilidad antes de terminar la duración."
          ],
          "examples": [
            "Gandalf registra muerto y hay otros 2 Buenos muertos: Treebeard cumple el umbral y puede despertar.",
            "Treebeard protege a Sam. Esa noche y la siguiente, una muerte que fuera a sufrir Sam puede ser impedida."
          ],
          "night": "Si hay 3+ Buenos que cuentan como muertos y Treebeard conserva su uso, despiértalo. Puede negar con la cabeza o señalar a un jugador. Si elige, marca la habilidad como usada y coloca PROTEGIDO 1 junto al objetivo. Impide su muerte esa noche. En la noche siguiente cambia a PROTEGIDO 2 e impide nuevamente su muerte. Retira el recordatorio al amanecer siguiente.",
          "category": "ALDEANOS"
        }
      },
      "lore": "El Ent más antiguo y pastor de árboles de Fangorn. Lento pero imponente, representa la fuerza antigua de la Tierra Media cuando finalmente decide actuar.",
      "abilityGuide": "Tu habilidad permanece dormida hasta que haya al menos 3 jugadores Buenos muertos. Cuando eso ocurre, despiertas; una vez por partida, por la noche, puedes elegir a un jugador para que no pueda morir esa noche ni la siguiente."
    },
    "theoden": {
      "id": "theoden",
      "name": "Théoden",
      "category": "ALDEANOS",
      "image": "assets/characters/theoden.png",
      "appearances": [
        "ii"
      ],
      "versions": {
        "ii": {
          "ability": "Mientras Gríma esté vivo, estás borracho. Cada noche, elige 1 jugador: no puede morir esta noche. [+Gríma]",
          "ficha": "BORRACHO POR GRÍMA · PROTECCIÓN",
          "almanac": [
            "[+Gríma] garantiza que Gríma esté en juego cuando Théoden lo está.",
            "Mientras Gríma esté vivo, Théoden está borracho aunque Gríma esté borracho o envenenado.",
            "Théoden se despierta y elige cada noche incluso mientras está borracho, pero su protección no funciona.",
            "Cuando Gríma muere, Théoden deja de estar borracho inmediatamente por esta habilidad.",
            "La protección impide morir esa noche por cualquier causa que permita protección.",
            "Un jugador invisible no puede ser elegido."
          ],
          "examples": [
            "Gríma vive: Théoden elige a Éowyn, pero no la protege.",
            "Gríma muere durante el día; esa noche Théoden elige a Éowyn y ahora sí puede protegerla."
          ],
          "night": "Cada noche: despierta a Théoden y obtén una elección válida. Si Gríma está muerto y Théoden tiene habilidad, marca al elegido PROTEGIDO hasta el amanecer.",
          "category": "ALDEANOS"
        }
      },
      "lore": "Rey de Rohan, debilitado y manipulado antes de recuperar su dignidad. Su arco gira en torno al despertar, la autoridad recuperada y el ejemplo en batalla.",
      "abilityGuide": "Mientras Gríma esté vivo estás borracho, por lo que tu habilidad no funciona correctamente. Cada noche eliges a un jugador para que no pueda morir esa noche; cuando Gríma deja de mantenerte borracho, esa protección puede empezar a ser fiable."
    },
    "eomer": {
      "id": "eomer",
      "name": "Éomer",
      "category": "ALDEANOS",
      "image": "assets/characters/eomer.png",
      "appearances": [
        "ii",
        "iii"
      ],
      "versions": {
        "ii": {
          "ability": "Una vez por partida, por la noche, elige 1 jugador: si es Malvado, muere; si es Bueno, mueres tú.",
          "ficha": "JUICIO ARRIESGADO",
          "almanac": [
            "Éomer elige un jugador vivo válido una vez por partida.",
            "La alineación actual del elegido determina quién muere.",
            "Si el elegido es Malvado, muere el elegido; si es Bueno, muere Éomer.",
            "El efecto comprueba alineación real salvo registros que expresamente afecten a este tipo de habilidad.",
            "Un jugador invisible no puede ser elegido.",
            "Si Éomer está borracho o envenenado, la oportunidad se gasta y nadie muere por su habilidad."
          ],
          "examples": [
            "Éomer elige a un Esbirro: el Esbirro muere.",
            "Éomer elige a un Aldeano Bueno: Éomer muere."
          ],
          "night": "Cada noche mientras conserve el uso: despierta a Éomer y pregúntale si desea usarlo. Si sí, obtén una elección válida, resuelve la muerte correspondiente y marca SIN HABILIDAD.",
          "category": "ALDEANOS"
        },
        "iii": {
          "ability": "Una vez por partida, por la noche, elige 1 jugador: si es Malvado, muere; si es Bueno, mueres tú.",
          "ficha": "JUICIO ARRIESGADO",
          "almanac": [
            "Éomer elige un jugador vivo válido una vez por partida.",
            "La alineación actual del elegido determina quién muere.",
            "Si el elegido es Malvado, muere el elegido; si es Bueno, muere Éomer.",
            "El efecto comprueba alineación real salvo registros que expresamente afecten a este tipo de habilidad.",
            "Un jugador invisible no puede ser elegido.",
            "Si Éomer está borracho o envenenado, la oportunidad se gasta y nadie muere por su habilidad."
          ],
          "examples": [
            "Éomer elige a un Esbirro: el Esbirro muere.",
            "Éomer elige a un Aldeano Bueno: Éomer muere."
          ],
          "night": "Cada noche mientras conserve el uso: despierta a Éomer y pregúntale si desea usarlo. Si sí, obtén una elección válida, resuelve la muerte correspondiente y marca SIN HABILIDAD.",
          "category": "ALDEANOS"
        }
      },
      "lore": "Mariscal de la Marca y uno de los grandes capitanes de Rohan. Actúa con franqueza y decisión, incluso cuando las circunstancias políticas son confusas.",
      "abilityGuide": "Una vez por partida, por la noche, eliges a un jugador. Si es Malvado, muere; si es Bueno, mueres tú en su lugar, así que conviene usar la habilidad cuando tengas una sospecha fuerte."
    },
    "eowyn": {
      "id": "eowyn",
      "name": "Éowyn",
      "category": "ALDEANOS",
      "image": "assets/characters/eowyn.png",
      "appearances": [
        "ii",
        "iii"
      ],
      "versions": {
        "ii": {
          "ability": "Si nominas al Demonio y es ejecutado, muere aunque una habilidad impida que muera.",
          "ficha": "EJECUTA AL DEMONIO",
          "almanac": [
            "La habilidad se aplica cuando Éowyn es quien nominó al jugador que resulta ser el Demonio y ese jugador es ejecutado.",
            "Permite que el Demonio muera pese a habilidades que normalmente impedirían esa muerte.",
            "No altera el número de votos requerido ni garantiza la ejecución.",
            "No afecta a un jugador que solo registre como Demonio si no es realmente un Demonio, salvo que una regla de registro diga lo contrario.",
            "Si Éowyn está borracha o envenenada al resolverse la ejecución, no supera la protección."
          ],
          "examples": [
            "Éowyn nomina al Rey Brujo con 5 jugadores vivos y es ejecutado: puede morir pese a su protección.",
            "Otro jugador nomina al Rey Brujo: la habilidad de Éowyn no interviene."
          ],
          "night": "No tiene fila nocturna. Durante las ejecuciones, comprueba si Éowyn fue la nominadora del Demonio y si tiene habilidad; si es así, ignora efectos que impidan esa muerte.",
          "category": "ALDEANOS"
        },
        "iii": {
          "ability": "Si nominas al Demonio y es ejecutado, muere aunque una habilidad impida que muera.",
          "ficha": "EJECUTA AL DEMONIO",
          "almanac": [
            "La habilidad se aplica cuando Éowyn es quien nominó al jugador que resulta ser el Demonio y ese jugador es ejecutado.",
            "Permite que el Demonio muera pese a habilidades que normalmente impedirían esa muerte.",
            "No altera el número de votos requerido ni garantiza la ejecución.",
            "No afecta a un jugador que solo registre como Demonio si no es realmente un Demonio, salvo que una regla de registro diga lo contrario.",
            "Si Éowyn está borracha o envenenada al resolverse la ejecución, no supera la protección."
          ],
          "examples": [
            "Éowyn nomina al Rey Brujo con 5 jugadores vivos y es ejecutado: puede morir pese a su protección.",
            "Otro jugador nomina al Rey Brujo: la habilidad de Éowyn no interviene."
          ],
          "night": "No tiene fila nocturna. Durante las ejecuciones, comprueba si Éowyn fue la nominadora del Demonio y si tiene habilidad; si es así, ignora efectos que impidan esa muerte.",
          "category": "ALDEANOS"
        }
      },
      "lore": "Sobrina de Théoden, marcada por el anhelo de actuar más allá del rol que otros le imponen. Su coraje silencioso es esencial en el clímax de la guerra.",
      "abilityGuide": "Tu habilidad se activa si tú nominas al Demonio y ese Demonio es ejecutado. En ese caso muere aunque otra habilidad normalmente impidiera su muerte."
    },
    "faramir": {
      "id": "faramir",
      "name": "Faramir",
      "category": "ALDEANOS",
      "image": "assets/characters/faramir.png",
      "appearances": [
        "ii",
        "iii"
      ],
      "versions": {
        "ii": {
          "ability": "Cada noche*, elige 1 jugador: si es Bueno, pierde toda la Corrupción acumulada.",
          "ficha": "PURIFICA CORRUPCIÓN",
          "almanac": [
            "Cada noche excepto la primera, elige a un jugador válido.",
            "Si el elegido es Bueno, retira toda su Corrupción, tenga o no el Anillo.",
            "Si ya es Malvado, Faramir no elimina su Corrupción y no lo devuelve al Bien.",
            "Faramir no recibe información sobre la alineación ni sobre cuánta Corrupción retiró.",
            "Un jugador invisible no puede ser elegido.",
            "Si Faramir está borracho o envenenado, no retira Corrupción."
          ],
          "examples": [
            "Faramir elige a un Bueno con 2 Corrupción: vuelve a 0.",
            "Elige a un jugador que ya se volvió Malvado por alcanzar 3: no ocurre nada."
          ],
          "night": "Otras noches: despierta a Faramir, obtén una elección válida y, si el objetivo es Bueno y Faramir tiene habilidad, retira todos sus marcadores de Corrupción.",
          "category": "ALDEANOS"
        },
        "iii": {
          "ability": "Cada noche*, elige 1 jugador: si es Bueno, pierde toda la Corrupción acumulada.",
          "ficha": "PURIFICA CORRUPCIÓN",
          "almanac": [
            "Cada noche excepto la primera, elige a un jugador válido.",
            "Si el elegido es Bueno, retira toda su Corrupción, tenga o no el Anillo.",
            "Si ya es Malvado, Faramir no elimina su Corrupción y no lo devuelve al Bien.",
            "Faramir no recibe información sobre la alineación ni sobre cuánta Corrupción retiró.",
            "Un jugador invisible no puede ser elegido.",
            "Si Faramir está borracho o envenenado, no retira Corrupción."
          ],
          "examples": [
            "Faramir elige a un Bueno con 2 Corrupción: vuelve a 0.",
            "Elige a un jugador que ya se volvió Malvado por alcanzar 3: no ocurre nada."
          ],
          "night": "Otras noches: despierta a Faramir, obtén una elección válida y, si el objetivo es Bueno y Faramir tiene habilidad, retira todos sus marcadores de Corrupción.",
          "category": "ALDEANOS"
        }
      },
      "lore": "Capitán de Gondor, hermano de Boromir e hijo de Denethor. A diferencia de otros, demuestra una notable resistencia moral frente a la tentación del Anillo.",
      "abilityGuide": "Cada noche excepto la primera eliges a un jugador. Si actualmente es Bueno, pierde toda la Corrupción que tenga; si no es Bueno, tu habilidad no elimina nada."
    },
    "hama": {
      "id": "hama",
      "name": "Háma",
      "category": "FORASTEROS",
      "image": "assets/characters/hama.png",
      "appearances": [
        "ii"
      ],
      "versions": {
        "ii": {
          "ability": "Si un jugador usa públicamente una habilidad durante el día, esta falla y podría ser ejecutado.",
          "ficha": "CASTIGA HABILIDADES PÚBLICAS",
          "almanac": [
            "Solo se aplica a una activación real y pública de una habilidad durante el día; una afirmación o farol sin habilidad real no activa Háma.",
            "La habilidad pública falla: no produce su efecto normal.",
            "Después, el Narrador puede decidir que ese jugador sea ejecutado inmediatamente.",
            "Si se produce la ejecución, consume la ejecución del día y el día termina normalmente.",
            "Si Háma está muerto, borracho o envenenado, no interfiere.",
            "Las habilidades pasivas o desencadenadas que no son usadas públicamente por el jugador no se consideran una activación pública."
          ],
          "examples": [
            "Un jugador intenta usar públicamente una habilidad diurna real: falla; el Narrador decide si además es ejecutado.",
            "Un jugador finge ser un personaje con habilidad pública: Háma no convierte el farol en una ejecución automática."
          ],
          "night": "No tiene fila nocturna. Durante el día, cuando un jugador declare una activación pública real, comprueba si Háma tiene habilidad; anula el efecto y decide si ejecutarlo.",
          "category": "FORASTEROS"
        }
      },
      "lore": "Oficial leal de Rohan al servicio de Théoden. Representa la disciplina y el deber dentro de una corte envenenada por influencias oscuras.",
      "abilityGuide": "Cuando un jugador intenta usar públicamente una habilidad real durante el día, esa habilidad falla. Después, el Narrador puede decidir ejecutarlo inmediatamente."
    },
    "haldir": {
      "id": "haldir",
      "name": "Haldir",
      "category": "FORASTEROS",
      "image": "assets/characters/haldir.png",
      "appearances": [
        "ii"
      ],
      "versions": {
        "ii": {
          "ability": "Cada noche, elige 1 jugador vivo: no puede nominar ni votar mañana y sabe que Haldir lo eligió.",
          "ficha": "BLOQUEA NOMINACIÓN Y VOTO",
          "almanac": [
            "Cada noche Haldir elige a un jugador vivo válido.",
            "El objetivo sabe esa misma noche que Haldir lo eligió.",
            "Durante el día siguiente no puede realizar nominaciones ni emitir votos.",
            "El efecto no gasta un voto fantasma porque el jugador simplemente no puede votar ese día.",
            "Un jugador invisible no puede ser elegido.",
            "Si Haldir está borracho o envenenado, el objetivo no queda restringido ni debe recibir la información verdadera de haber sido afectado."
          ],
          "examples": [
            "Haldir elige a un jugador vivo; esa noche el Narrador le informa de que Haldir lo eligió. Al día siguiente no puede nominar ni votar.",
            "Haldir está envenenado: hace una elección, pero el objetivo no queda restringido."
          ],
          "night": "Cada noche: despierta a Haldir, obtén una elección viva válida y marca NO NOMINA / NO VOTA para mañana. Despierta al objetivo y comunícale que Haldir lo eligió.",
          "category": "FORASTEROS"
        }
      },
      "lore": "Elfo de Lórien y guardián de las fronteras del bosque. Su papel está asociado a la vigilancia, la protección y la distancia prudente.",
      "abilityGuide": "Cada noche eliges a un jugador vivo. Durante el día siguiente no puede nominar ni votar, y esa misma noche sabe que Haldir lo eligió."
    },
    "palantir": {
      "id": "palantir",
      "name": "Palantír",
      "category": "FORASTEROS",
      "image": "assets/characters/palantir.png",
      "appearances": [
        "ii",
        "iii"
      ],
      "versions": {
        "ii": {
          "ability": "Cada noche, puedes elegir 1 jugador: sabes su personaje. Si lo haces, el Demonio sabe qué personaje has visto.",
          "ficha": "INFORMACIÓN PERFECTA · FILTRACIÓN AL DEMONIO",
          "almanac": [
            "Cada noche el Portador del Palantír puede decidir no usar su habilidad.",
            "Si la usa, elige a un jugador válido y aprende exactamente su personaje, sujeto a registros que puedan afectar a la información.",
            "El Demonio aprende únicamente qué personaje fue visto, no qué jugador fue observado.",
            "El Demonio recibe esa información incluso si no sabe quién es el Palantír.",
            "Un jugador invisible no puede ser elegido.",
            "Si el Palantír está borracho o envenenado, puede recibir información falsa; el Narrador puede también dar al Demonio una información coherente con el efecto fallido."
          ],
          "examples": [
            "El Palantír mira a Sam y aprende SAM; el Demonio aprende que el personaje visto fue SAM, pero no qué jugador era.",
            "Con pocos jugadores vivos, saber qué personaje fue visto puede permitir al Demonio deducir a quién observó el Palantír."
          ],
          "night": "Cada noche: despierta al Palantír y pregunta si desea usarlo. Si sí, obtén una elección válida, muéstrale el token/personaje correspondiente y después informa al Demonio del nombre del personaje visto, no del jugador.",
          "category": "FORASTEROS"
        },
        "iii": {
          "ability": "Cada noche, puedes elegir 1 jugador: sabes su personaje. Si lo haces, el Demonio sabe qué personaje has visto.",
          "ficha": "INFORMACIÓN PERFECTA · FILTRACIÓN AL DEMONIO",
          "almanac": [
            "Cada noche el Portador del Palantír puede decidir no usar su habilidad.",
            "Si la usa, elige a un jugador válido y aprende exactamente su personaje, sujeto a registros que puedan afectar a la información.",
            "El Demonio aprende únicamente qué personaje fue visto, no qué jugador fue observado.",
            "El Demonio recibe esa información incluso si no sabe quién es el Palantír.",
            "Un jugador invisible no puede ser elegido.",
            "Si el Palantír está borracho o envenenado, puede recibir información falsa; el Narrador puede también dar al Demonio una información coherente con el efecto fallido."
          ],
          "examples": [
            "El Palantír mira a Sam y aprende SAM; el Demonio aprende que el personaje visto fue SAM, pero no qué jugador era.",
            "Con pocos jugadores vivos, saber qué personaje fue visto puede permitir al Demonio deducir a quién observó el Palantír."
          ],
          "night": "Cada noche: despierta al Palantír y pregunta si desea usarlo. Si sí, obtén una elección válida, muéstrale el token/personaje correspondiente y después informa al Demonio del nombre del personaje visto, no del jugador.",
          "category": "FORASTEROS"
        }
      },
      "lore": "Una de las piedras videntes de Númenor. Su conocimiento es valioso, pero el contacto con ella también abre la puerta a la manipulación de Sauron.",
      "abilityGuide": "Cada noche puedes decidir usar o no tu habilidad. Si eliges a un jugador, sabes exactamente qué personaje registra ser; a cambio, el Demonio aprende qué personaje has visto, aunque no qué jugador observaste."
    },
    "grima": {
      "id": "grima",
      "name": "Gríma",
      "category": "ESBIRROS",
      "image": "assets/characters/grima.png",
      "appearances": [
        "ii"
      ],
      "versions": {
        "ii": {
          "ability": "Cada noche, elige 1 jugador vivo (diferente al de la noche anterior): está envenenado hasta el anochecer y gana 1 Corrupción.",
          "ficha": "VENENO · CORRUPCIÓN",
          "almanac": [
            "Cada noche Gríma elige un jugador vivo válido, diferente del que eligió la noche anterior.",
            "El objetivo queda envenenado inmediatamente hasta el anochecer siguiente.",
            "Si es Bueno, gana 1 Corrupción inmediatamente; si ya es Malvado, no gana Corrupción.",
            "La restricción solo compara con la noche inmediatamente anterior.",
            "Un jugador invisible no puede ser elegido.",
            "Si Gríma está borracho o envenenado, no envenena ni añade Corrupción."
          ],
          "examples": [
            "Gríma elige a un Bueno con 2 Corrupción: gana la tercera, se vuelve Malvado y permanece envenenado hasta el anochecer.",
            "La noche siguiente Gríma no puede elegir al mismo jugador, pero puede volver a hacerlo una noche más tarde."
          ],
          "night": "Cada noche: despierta a Gríma, recuerda el objetivo de anoche y exige una elección viva distinta. Marca ENVENENADO hasta el anochecer y añade Corrupción si el objetivo es Bueno.",
          "category": "ESBIRROS"
        }
      },
      "lore": "Consejero de Théoden, conocido como Lengua de Serpiente. Es la imagen perfecta de la intriga, el veneno político y la influencia corrosiva.",
      "abilityGuide": "Cada noche eliges a un jugador vivo distinto del elegido la noche anterior. Queda envenenado hasta el anochecer y además gana 1 Corrupción, combinando desinformación inmediata con presión a largo plazo."
    },
    "ella-larana": {
      "id": "ella-larana",
      "name": "Ella-laraña",
      "category": "DEMONIOS",
      "image": "assets/characters/ella-larana.png",
      "appearances": [
        "ii"
      ],
      "versions": {
        "ii": {
          "ability": "Cada noche, elige 2 jugadores: están envenenados hasta el anochecer. La noche siguiente, un jugador entre ambos podría morir.",
          "ficha": "VENENO · PRESA ENTRE DOS",
          "almanac": [
            "Ella-Laraña actúa también la primera noche. Cada noche elige dos jugadores válidos; ambos quedan envenenados hasta el anochecer siguiente.",
            "A partir de la segunda noche, antes de establecer una nueva pareja, el Narrador puede hacer morir a un jugador situado entre los dos elegidos la noche anterior.",
            "“Entre ambos” usa el camino con menor número de asientos alrededor del círculo y no incluye a los dos elegidos.",
            "Si ambas distancias son iguales, se usa el recorrido en sentido horario desde el primer elegido hasta el segundo.",
            "Si los dos elegidos son adyacentes, no existe ningún jugador entre ellos y nadie muere por esa pareja.",
            "El Narrador decide si alguien muere y cuál de los jugadores elegibles muere.",
            "Los jugadores invisibles no pueden ser elegidos como los dos objetivos, pero un jugador invisible situado entre ambos podría morir porque la muerte no lo elige mediante la habilidad de Ella-Laraña."
          ],
          "examples": [
            "Ella-Laraña elige A y B con X e Y en el camino más corto A–X–Y–B. La noche siguiente el Narrador puede hacer morir a X o Y.",
            "Elige a dos vecinos adyacentes: la noche siguiente no hay presa entre ellos y nadie muere por esa pareja.",
            "Los dos recorridos tienen la misma longitud: se usa el sentido horario desde el primer elegido."
          ],
          "night": "Primera noche: despierta a Ella-Laraña, obtén dos elecciones y envenénalas hasta el anochecer. Otras noches: resuelve primero, si procede, una muerte entre la pareja anterior; después despiértala para elegir la nueva pareja y aplica el veneno.",
          "category": "DEMONIOS"
        }
      },
      "lore": "Monstruosa araña de las Tierras Sombrías que acecha desde la oscuridad. Su fuerza está en el aislamiento de la presa, el veneno y el terror.",
      "abilityGuide": "Cada noche eliges a 2 jugadores y ambos quedan envenenados hasta el anochecer. La noche siguiente, el Narrador puede hacer morir a uno de esos dos jugadores, convirtiendo tu elección anterior en una amenaza diferida."
    },    "ugluk": {
      "id": "ugluk",
      "name": "Uglúk",
      "category": "DEMONIOS",
      "image": "assets/characters/ugluk.png",
      "appearances": [
        "ii"
      ],
      "versions": {
        "ii": {
          "ability": "Cada noche*, elige 1 jugador: muere. Si fueras a morir por ejecución durante el día, un Esbirro vivo muere en tu lugar.",
          "ficha": "MUERTE · SACRIFICA ESBIRRO",
          "almanac": [
            "Cada noche excepto la primera, Uglúk elige a un jugador válido para morir.",
            "Si Uglúk fuera a morir como consecuencia de una ejecución durante el día, el Narrador elige un Esbirro vivo que pueda morir y ese Esbirro muere en su lugar.",
            "Uglúk sigue siendo el jugador ejecutado; solo se sustituye la muerte.",
            "Si no existe ningún Esbirro vivo que pueda morir, Uglúk muere normalmente. Un único Esbirro vivo protegido de la muerte cuenta como no disponible.",
            "Si Uglúk está borracho o envenenado cuando fuera a morir, la sustitución no funciona.",
            "Un jugador invisible no puede ser elegido por su muerte nocturna."
          ],
          "examples": [
            "Uglúk es ejecutado y hay dos Esbirros vivos disponibles: el Narrador hace morir a uno de ellos y Uglúk vive.",
            "Solo queda un Esbirro vivo, pero no puede morir: Uglúk muere por la ejecución."
          ],
          "night": "Otras noches: despierta a Uglúk y obtén una elección válida para morir. Durante el día, si una ejecución fuera a matarlo, comprueba si existe un Esbirro vivo que pueda morir; si existe, elige uno y sustituye la muerte. Resumen de orden nocturno INICIO DE NOCHE — Portador Bueno vivo: USAR / PASAR / CONSERVAR. Resolver USAR inmediatamente. PRIMERA NOCHE — Informaciones iniciales y setup: Sam→Frodo; Gimli→Legolas; aplicar modificadores [+Personaje]. ELLA-LARAÑA — Actúa también en la primera noche: elige 2 y envenena. OTRAS NOCHES — Resolver presa pendiente de Ella-Laraña; luego habilidades de información/protección/veneno y muertes según el orden final del script. DEMONIO — Cuando llegue su muerte, puede sustituirla por TOMAR EL ANILLO. Sauron mantiene además su acción de Corrupción. AMANECER — Resolver PASAR si sigue pendiente; informar muertes nocturnas; retirar efectos que terminan al amanecer y conservar los que duran hasta el anochecer. ANOCHECER — Retirar INVISIBLE, venenos/borracheras “hasta el anochecer” y otros efectos con esa duración.",
          "category": "DEMONIOS"
        }
      },
      "lore": "Líder uruk-hai duro y pragmático. Encarna la violencia organizada y la presión marcial de Isengard sobre sus enemigos.",
      "abilityGuide": "Cada noche excepto la primera eliges a un jugador, que muere. Si fueras a morir por ejecución durante el día, un Esbirro vivo muere en tu lugar, sustituyendo tu muerte."
    },
    "beregond": {
      "id": "beregond",
      "name": "Beregond",
      "category": "ALDEANOS",
      "image": "assets/characters/beregond.png",
      "appearances": [
        "iii"
      ],
      "versions": {
        "iii": {
          "ability": "Una vez por partida, cuando un jugador fuera a morir por ejecución, puedes impedir su muerte. Después, no puedes nominar ni votar durante el resto de la partida.",
          "ficha": "SALVA DE EJECUCIÓN · PIERDE NOMINAR/VOTAR",
          "almanac": [
            "Beregond puede usar su habilidad una vez por partida cuando una ejecución fuera a causar la muerte de un jugador.",
            "La ejecución sí ocurre; solo se impide la muerte. Por tanto, consume la ejecución del día y el día termina normalmente.",
            "Después de usarla, Beregond no puede nominar ni votar durante el resto de la partida, incluso si posteriormente cambia de alineación.",
            "Puede salvarse a sí mismo si él es quien fuera a morir por ejecución.",
            "Si Beregond está borracho o envenenado al activar la habilidad, la oportunidad se gasta y la muerte no se impide."
          ],
          "examples": [
            "Un jugador es ejecutado y fuera a morir; Beregond usa su habilidad: el jugador vive, pero el día termina y Beregond ya no puede nominar ni votar.",
            "Beregond está envenenado cuando intenta salvar a alguien: la ejecución mata al jugador."
          ],
          "night": "No tiene fila nocturna. Cuando una ejecución fuera a matar a alguien, permite a Beregond declarar el uso si aún lo conserva. Si funciona, evita la muerte y marca SIN NOMINAR / SIN VOTAR.",
          "category": "ALDEANOS"
        }
      },
      "lore": "Guardia de la Ciudadela de Minas Tirith. Es una figura de lealtad personal y de valentía moral frente a órdenes injustas.",
      "abilityGuide": "Una vez por partida puedes intervenir cuando un jugador fuera a morir por ejecución y evitar esa muerte. La ejecución sigue habiendo ocurrido; a cambio, desde ese momento ya no puedes nominar ni votar."
    },
    "isildur": {
      "id": "isildur",
      "name": "Isildur",
      "category": "ALDEANOS",
      "image": "assets/characters/isildur.png",
      "appearances": [
        "iii"
      ],
      "versions": {
        "iii": {
          "ability": "Si uno de tus vecinos vivos fuera a recibir el Anillo, puedes recibirlo tú en su lugar. Si USAS el Anillo, puedes convertirte en el personaje del Demonio y volverte Malvado. Si lo haces, el Demonio original está borracho mientras estés vivo.",
          "ficha": "INTERCEPTA ANILLO · PUEDE CONVERTIRSE EN DEMONIO",
          "almanac": [
            "Cuando uno de los vecinos vivos de Isildur fuera a recibir físicamente el Anillo, Isildur puede interceptar ese movimiento y convertirse en el nuevo Portador en su lugar.",
            "La interceptación es opcional y ocurre justo antes de que el vecino reciba el Anillo. No permite robarlo simplemente porque un vecino ya lo posea.",
            "Si Isildur elige USAR el Anillo, después de aplicar la Corrupción e invisibilidad puede decidir convertirse en el mismo personaje que el Demonio actual y volverse Malvado.",
            "Al transformarse, sustituye su ficha de Isildur por una segunda ficha idéntica del personaje Demonio. Su Corrupción se reinicia por el cambio de personaje, pero permanece Malvado.",
            "El Demonio original sigue siendo el mismo personaje y alineación, pero está borracho mientras el nuevo Demonio-Isildur esté vivo. Coloca en el Demonio original un recordatorio BORRACHO POR ISILDUR.",
            "El Narrador sigue despertando al Demonio original y solicitando sus elecciones como si su habilidad funcionara; al estar borracho, esas elecciones no producen efectos.",
            "Si el Demonio-Isildur muere, el Demonio original deja de estar borracho inmediatamente y recupera su habilidad. La partida no termina mientras quede otro Demonio vivo.",
            "Si el Demonio original muere mientras Isildur-Demonio vive, la partida continúa porque aún hay un Demonio vivo."
          ],
          "examples": [
            "Un vecino vivo de Isildur va a recibir el Anillo al amanecer; Isildur decide interceptarlo y lo recibe él.",
            "Isildur USA el Anillo y decide caer: se vuelve, por ejemplo, Rey Brujo. El Rey Brujo original queda borracho y sigue siendo despertado con elecciones sin efecto.",
            "El nuevo Rey Brujo-Isildur muere; el Rey Brujo original se vuelve sobrio y vuelve a ser el Demonio funcional."
          ],
          "night": "Al resolver cualquier movimiento del Anillo hacia un vecino vivo de Isildur, despierta a Isildur para ofrecer la interceptación si tiene habilidad. Al principio de la noche, si Isildur USA el Anillo, después de resolver USAR pregúntale si se transforma. Si acepta, cambia su token por una copia del Demonio y marca al Demonio original BORRACHO POR ISILDUR.",
          "category": "ALDEANOS"
        }
      },
      "lore": "Rey de los Dúnedain que cortó el Anillo de la mano de Sauron, pero no logró destruirlo. Su sombra histórica planea sobre todo el conflicto.",
      "abilityGuide": "Si uno de tus vecinos vivos fuera a recibir el Anillo, puedes interceptarlo y recibirlo tú. Si USAS el Anillo, puedes convertirte en una copia del personaje del Demonio y volverte Malvado; mientras sigas vivo, el Demonio original queda borracho."
    },
    "rey-de-los-muertos": {
      "id": "rey-de-los-muertos",
      "name": "Rey de los Muertos",
      "category": "ALDEANOS",
      "image": "assets/characters/rey-de-los-muertos.png",
      "appearances": [
        "iii"
      ],
      "versions": {
        "iii": {
          "ability": "Cada noche*, elige 1 jugador Bueno muerto: recupera su habilidad hasta el anochecer. Después de usar esta habilidad 3 veces, pierdes tu habilidad.",
          "ficha": "DEVUELVE HABILIDADES A LOS MUERTOS · 3 USOS",
          "almanac": [
            "Cada noche excepto la primera, el Rey de los Muertos elige a un jugador que esté muerto y sea Bueno.",
            "El elegido recupera su habilidad desde ese momento hasta el anochecer siguiente, pero sigue muerto para nominaciones, votos, vecindad y demás reglas de muerte.",
            "Recuperar la habilidad no reinicia usos ya gastados. Una habilidad “una vez por partida” que ya se usó sigue gastada.",
            "Puede elegir al mismo muerto en noches distintas.",
            "Después de la tercera activación, el Rey de los Muertos pierde su propia habilidad.",
            "Si el Rey de los Muertos muere, pierde su habilidad como cualquier personaje muerto y deja de convocar a otros.",
            "Un jugador muerto invisible no es una situación normal; si una regla lo hiciera invisible, no podría ser elegido."
          ],
          "examples": [
            "Merry murió antes de usar su habilidad. El Rey de los Muertos lo elige: Merry recupera su habilidad hasta el anochecer, pero sigue estando muerto.",
            "El Rey elige tres noches seguidas al mismo Bueno muerto; tras la tercera selección pierde su habilidad."
          ],
          "night": "Otras noches: si conserva usos, despierta al Rey de los Muertos y obtén una elección de un Bueno muerto. Marca HABILIDAD RESTAURADA hasta el anochecer y lleva la cuenta de 1/2/3 usos; tras el tercero marca SIN HABILIDAD.",
          "category": "ALDEANOS"
        }
      },
      "lore": "Señor del Ejército de los Muertos, ligado por un juramento incumplido. Su intervención simboliza deuda, redención y auxilio desde la muerte.",
      "abilityGuide": "Cada noche excepto la primera eliges a un jugador Bueno muerto y le devuelves su habilidad hasta el anochecer, aunque sigue contando como muerto. Puedes hacer esto 3 veces en total; después pierdes tu propia habilidad."
    },
    "denethor": {
      "id": "denethor",
      "name": "Denethor",
      "category": "FORASTEROS",
      "image": "assets/characters/denethor.png",
      "appearances": [
        "iii"
      ],
      "versions": {
        "iii": {
          "ability": "Si hay más jugadores muertos que vivos, una vez por partida, durante el día, puedes elegir morir. Si lo haces, elige a otro jugador: muere.",
          "ficha": "SACRIFICIO FINAL",
          "almanac": [
            "Solo puede usarse durante el día y únicamente si en ese momento hay más jugadores muertos que vivos.",
            "Denethor declara públicamente que usa su habilidad y elige morir. Después elige a otro jugador para morir.",
            "No es una ejecución y no consume la ejecución diaria.",
            "La habilidad se usa una sola vez.",
            "Si Denethor está borracho o envenenado al usarla, la habilidad se gasta y no causa sus muertes.",
            "Un jugador invisible no puede ser elegido como segundo objetivo porque la habilidad lo elige."
          ],
          "examples": [
            "Hay 4 muertos y 3 vivos. Denethor usa su habilidad, muere y elige al jugador que cree que es el Demonio; ese jugador muere.",
            "Hay el mismo número de muertos y vivos: Denethor todavía no puede usar la habilidad."
          ],
          "night": "No tiene fila nocturna. Durante el día, si se cumple la condición y Denethor declara el uso, marca SIN HABILIDAD, resuelve su muerte y después la muerte del jugador elegido si la habilidad funciona.",
          "category": "FORASTEROS"
        }
      },
      "lore": "Senescal de Gondor, brillante pero quebrado por la desesperación. Su juicio se ve erosionado por la presión de la guerra y su relación con el Palantír.",
      "abilityGuide": "Mientras haya más muertos que vivos, una vez por partida puedes decidir morir durante el día. Si lo haces, eliges inmediatamente a otro jugador para que muera también."
    },
    "imrahil": {
      "id": "imrahil",
      "name": "Imrahil",
      "category": "FORASTEROS",
      "image": "assets/characters/imrahil.png",
      "appearances": [
        "iii"
      ],
      "versions": {
        "iii": {
          "ability": "Cuando votas, todos los jugadores que aún no hayan votado y no sean el jugador nominado deben votar.",
          "ficha": "ARRASTRA VOTOS",
          "almanac": [
            "Cuando el voto de Imrahil se emite en una nominación, su habilidad obliga a votar a todos los jugadores cuyo voto aún no haya sido contabilizado en esa votación, excepto al jugador nominado.",
            "Los jugadores muertos solo pueden ser obligados a votar si aún conservan su voto fantasma; al hacerlo lo gastan normalmente.",
            "Los jugadores que no pueden votar por otra habilidad no son obligados a realizar un voto ilegal.",
            "Imrahil puede evitar activar su habilidad simplemente no votando.",
            "Si Imrahil está borracho o envenenado en el momento de su voto, no obliga a nadie."
          ],
          "examples": [
            "Imrahil vota pronto en el recorrido del Narrador: todos los jugadores posteriores que aún puedan votar y no sean el nominado deben levantar la mano.",
            "Un muerto con su voto fantasma disponible es alcanzado por el efecto: vota y gasta su ficha."
          ],
          "night": "No tiene fila nocturna. Durante cada votación, cuando contabilices el voto de Imrahil, comprueba si tiene habilidad y obliga a votar a los jugadores pendientes que sean legalmente capaces, excepto al nominado.",
          "category": "FORASTEROS"
        }
      },
      "lore": "Príncipe de Dol Amroth, noble de gran prestigio y firme aliado de Gondor. Representa autoridad, caballerosidad y apoyo en la guerra final.",
      "abilityGuide": "Cuando emites tu voto, todos los jugadores que todavía no hayan votado y que no sean el nominado deben votar también. Tu decisión puede arrastrar de golpe a buena parte de la mesa a una misma votación."
    },
    "boca-de-sauron": {
      "id": "boca-de-sauron",
      "name": "Boca de Sauron",
      "category": "ESBIRROS",
      "image": "assets/characters/boca-de-sauron.png",
      "appearances": [
        "iii"
      ],
      "versions": {
        "iii": {
          "ability": "Una vez por partida, por la noche, elige 1 jugador vivo: está «loco» por estar muerto; de lo contrario, otro jugador podría morir. Sigue vivo y conserva su habilidad hasta que muera de verdad.",
          "ficha": "FALSA MUERTE · LOCURA",
          "almanac": [
            "Una vez por partida, Boca de Sauron elige a un jugador vivo válido durante la noche.",
            "Al amanecer, el Narrador anuncia y representa públicamente que ese jugador ha muerto: se coloca su sudario y se le trata socialmente como muerto.",
            "En secreto, el jugador sigue realmente vivo, conserva su habilidad y continúa despertando o generando efectos como un vivo hasta que muera de verdad.",
            "El jugador está “loco” por estar muerto: debe sostener públicamente que está muerto y comportarse de forma coherente con ello.",
            "Si rompe esa locura, el Narrador puede hacer morir inmediatamente a otro jugador. El Narrador decide si aplica el castigo y quién muere.",
            "La muerte falsa no cuenta como una muerte real para condiciones que dependan de que ese jugador haya muerto de verdad; sin embargo, públicamente sigue las restricciones sociales de un muerto.",
            "Si Boca de Sauron está borracho o envenenado al usar la habilidad, la oportunidad se gasta y no crea la falsa muerte."
          ],
          "examples": [
            "Boca de Sauron elige a Faramir. Al amanecer se anuncia su “muerte”, pero Faramir sigue despertando y usando su habilidad en secreto.",
            "El falso muerto declara abiertamente que sigue vivo y demuestra su habilidad; el Narrador decide que otro jugador muera inmediatamente."
          ],
          "night": "Una vez por partida, despierta a Boca de Sauron y obtén una elección viva válida. Marca FALSO MUERTO. Al amanecer anuncia la muerte aparente y coloca el sudario. Continúa incluyendo al jugador en sus despertares reales. Si rompe la locura, decide si otro jugador muere.",
          "category": "ESBIRROS"
        }
      },
      "lore": "Embajador y portavoz del Enemigo. Más que fuerza bruta, su arma es el desánimo, la manipulación y la exhibición del poder de Sauron.",
      "abilityGuide": "Una vez por partida, por la noche, eliges a un jugador vivo y el Narrador le exige estar «loco» por estar muerto. Si no mantiene esa afirmación, el Narrador puede matar a otro jugador; el objetivo sigue vivo y conserva su habilidad hasta que muera realmente."
    },
    "gothmog": {
      "id": "gothmog",
      "name": "Gothmog",
      "category": "ESBIRROS",
      "image": "assets/characters/gothmog.png",
      "appearances": [
        "iii"
      ],
      "versions": {
        "iii": {
          "ability": "Las nominaciones de jugadores Malvados necesitan 2 votos menos para ser válidas para ejecución.",
          "ficha": "REDUCE UMBRAL DE NOMINACIONES MALVADAS",
          "almanac": [
            "Cuando un jugador Malvado realiza una nominación, reduce en 2 el número mínimo de votos necesario para que esa nominación pueda ser válida para ejecución.",
            "La habilidad no añade votos ficticios: la nominación conserva exactamente el número de votos realmente emitidos.",
            "Todavía debe superar cualquier marca de ejecución previa del día según las reglas normales.",
            "El umbral no puede reducirse por debajo de 1 voto.",
            "Se usa la alineación real del nominator en el momento de la nominación; un Bueno convertido a Malvado por Corrupción se beneficia.",
            "Si Gothmog está muerto, borracho o envenenado, no reduce el umbral."
          ],
          "examples": [
            "Con 7 vivos, normalmente hacen falta 4 votos; una nominación de un Malvado necesita solo 2 para ser válida.",
            "Ya hay una nominación marcada con 5 votos. Un Malvado obtiene 2 votos y alcanza su umbral reducido, pero no supera los 5 y no reemplaza al candidato actual."
          ],
          "night": "No tiene fila nocturna. Al abrir cada nominación, determina la alineación del nominator y, si Gothmog tiene habilidad, reduce en 2 el umbral mínimo para esa nominación, con mínimo 1.",
          "category": "ESBIRROS"
        }
      },
      "lore": "Comandante de las huestes de Morgul en la guerra por Minas Tirith. Su función es mantener la presión militar y aprovechar el caos del combate.",
      "abilityGuide": "Las nominaciones contra jugadores Malvados necesitan 2 votos menos de lo normal para quedar marcadas para ejecución. Tu habilidad altera el umbral de voto, no la cantidad de votos que cada jugador puede emitir."
    },
    "gorbag": {
      "id": "gorbag",
      "name": "Gorbag",
      "category": "DEMONIOS",
      "image": "assets/characters/gorbag.png",
      "appearances": [
        "iii"
      ],
      "versions": {
        "iii": {
          "ability": "Cada noche*, elige 1 jugador: muere. Si hoy un jugador Bueno nominó a otro Bueno y este fue ejecutado, esta noche elige 2 jugadores en lugar de 1.",
          "ficha": "MUERTE · CASTIGA EJECUCIÓN BUENO→BUENO",
          "almanac": [
            "Cada noche excepto la primera, Gorbag elige normalmente a un jugador válido para morir o sustituye la muerte por TOMAR EL ANILLO.",
            "Si durante el día un jugador que era Bueno al nominar nominó a otro jugador Bueno y ese nominado fue ejecutado, Gorbag elige dos jugadores para morir esa noche en lugar de uno.",
            "El desencadenante requiere ejecución, no muerte: aunque el ejecutado sobreviva por protección, el error del Bien cuenta.",
            "Múltiples ejecuciones que cumplieran la condición no aumentan el número por encima de dos.",
            "Si Gorbag está borracho o envenenado, sus muertes fallan; TOMAR sigue disponible por el Fabled.",
            "Los jugadores invisibles no pueden ser elegidos por sus muertes."
          ],
          "examples": [
            "Un Bueno nomina a otro Bueno y este es ejecutado pero Beregond evita su muerte: esa noche Gorbag elige dos víctimas.",
            "Un Malvado nomina a un Bueno ejecutado: no activa el castigo adicional."
          ],
          "night": "Durante el día, marca CASTIGO si se cumple Bueno nomina a Bueno y este es ejecutado. Otras noches: si hay CASTIGO, despierta a Gorbag para elegir dos jugadores válidos; si no, uno. Retira el recordatorio después. Resumen de orden nocturno INICIO DE NOCHE — Portador Bueno vivo: USAR / PASAR / CONSERVAR. Resolver USAR inmediatamente. PRIMERA NOCHE — Informaciones iniciales y setup: Sam→Frodo; Gimli→Legolas; aplicar modificadores [+Personaje]. ELLA-LARAÑA — Actúa también en la primera noche: elige 2 y envenena. OTRAS NOCHES — Resolver presa pendiente de Ella-Laraña; luego habilidades de información/protección/veneno y muertes según el orden final del script. DEMONIO — Cuando llegue su muerte, puede sustituirla por TOMAR EL ANILLO. Sauron mantiene además su acción de Corrupción. AMANECER — Resolver PASAR si sigue pendiente; informar muertes nocturnas; retirar efectos que terminan al amanecer y conservar los que duran hasta el anochecer. ANOCHECER — Retirar INVISIBLE, venenos/borracheras “hasta el anochecer” y otros efectos con esa duración.",
          "category": "DEMONIOS"
        }
      },
      "lore": "Capitán orco de Cirith Ungol. Se mueve bien en la desconfianza, la rivalidad interna y la supervivencia oportunista.",
      "abilityGuide": "Cada noche excepto la primera eliges a un jugador, que muere. Si durante el día un jugador Bueno nominó a otro Bueno y ese segundo jugador fue ejecutado, esa noche eliges a 2 víctimas en lugar de 1."
    }
  },
  "almanac": {
    "anillo": {
      "id": "anillo",
      "title": "El Anillo Único",
      "eyebrow": "Regla de la saga",
      "icon": "assets/characters/anillo.png",
      "summary": "Un objeto físico que siempre tiene un Portador y cuya posición puede decidir la partida.",
      "body": [
        "El Anillo está representado por un token físico y siempre tiene un Portador. Poseerlo no es una habilidad de personaje.",
        "Al principio de cada noche, antes de las habilidades de personajes, si el Portador está vivo y es Bueno, elige USARLO, PASARLO o CONSERVARLO.",
        "USARLO: gana inmediatamente 1 Corrupción y queda invisible hasta el anochecer. Mientras sea invisible no puede ser elegido por habilidades, nominado ni votar. Ser invisible no impide morir por efectos que no lo elijan.",
        "PASARLO: elige a otro jugador. El Anillo permanece con el Portador durante la noche y se mueve al amanecer. Si deja de poseerlo antes, el pase se cancela.",
        "CONSERVARLO: no ocurre nada y el Portador mantiene el Anillo.",
        "Un Portador muerto o Malvado conserva el Anillo, pero no elige USARLO, PASARLO o CONSERVARLO.",
        "Cuando el Demonio normalmente pudiera realizar su muerte nocturna, puede intentar TOMAR EL ANILLO en su lugar. Si el jugador elegido posee físicamente el Anillo, el Mal gana inmediatamente; si no, el intento falla y no hay muerte demoníaca.",
        "TOMAR comprueba posesión física, no registro. Un Portador invisible no puede ser elegido para TOMAR.",
        "TOMAR pertenece al Fabled. Un Demonio borracho o envenenado puede intentarlo si esa noche normalmente dispondría de su muerte nocturna.",
        "Cada movimiento físico del Anillo cuenta como cambio de Portador y puede activar habilidades como la del Nazgûl."
      ],
      "examples": [
        "El Portador USA el Anillo, alcanza 3 Corrupción y se vuelve Malvado. Sigue invisible hasta el anochecer.",
        "El Portador declara PASAR, pero Frodo recupera el Anillo antes del amanecer: el pase pendiente se cancela.",
        "El Demonio intenta TOMAR a Bilbo, que solo registra como Portador: el intento falla porque no posee el token físico."
      ],
      "storyteller": "Al comenzar cada noche, antes del resto del orden nocturno, despierta al Portador si está vivo y es Bueno. Obtén USAR / PASAR / CONSERVAR. Resuelve USAR inmediatamente; marca PASAR para el amanecer. Resuelve TOMAR cuando llegue el turno en que el Demonio normalmente realizaría su muerte."
    },
    "corrupcion": {
      "id": "corrupcion",
      "title": "Corrupción",
      "eyebrow": "Regla de la saga",
      "icon": "assets/characters/corrupcion.png",
      "summary": "Los personajes Buenos pueden acumular Corrupción; llegar a 3 cambia inmediatamente su alineación.",
      "body": [
        "La Corrupción se aplica inmediatamente cuando una habilidad o el Anillo indica que un jugador la gana.",
        "Un personaje Bueno puede tener 0, 1, 2 o 3 de Corrupción. Al recibir la tercera se vuelve Malvado inmediatamente y conserva personaje y habilidad.",
        "Un jugador Malvado no puede ganar Corrupción, tanto si empezó Malvado como si se volvió Malvado durante la partida.",
        "La Corrupción no desaparece al cambiar de alineamiento. Perder Corrupción no devuelve automáticamente al Bien.",
        "La Corrupción pertenece al personaje. Si un jugador cambia de personaje, pierde la Corrupción del personaje anterior; su alineación no se reinicia por ello.",
        "Tener 1 o 2 de Corrupción no hace registrar como Malvado: el jugador sigue siendo Bueno."
      ],
      "examples": [
        "Boromir gana su tercera Corrupción: se vuelve Malvado inmediatamente.",
        "Galadriel elimina la Corrupción de un Malvado por Corrupción y su habilidad especifica que puede devolverlo a Bueno.",
        "Gandalf Gris cambia a Gandalf Blanco: su Corrupción se reinicia por el cambio de personaje, pero su alineación no cambia automáticamente."
      ],
      "storyteller": "Aplica cada ganancia o pérdida de Corrupción en el momento en que ocurre. Al colocar la tercera, cambia inmediatamente la alineación a Malvado y conserva un recordatorio de MALVADO POR CORRUPCIÓN cuando sea relevante para otras habilidades."
    },
    "invisible": {
      "id": "invisible",
      "title": "Invisible",
      "eyebrow": "Estado de la saga",
      "icon": "assets/characters/anillo.png",
      "summary": "Mientras un jugador es invisible no puede ser elegido por habilidades, nominado ni votar; seguir invisible no significa ser inmune a morir.",
      "body": [
        "INVISIBLE es un estado utilizado por las reglas del Anillo Único.",
        "Un jugador invisible no puede ser elegido por habilidades, nominado ni votar.",
        "La invisibilidad no impide morir por efectos que no lo elijan directamente.",
        "Un Portador invisible tampoco puede ser elegido por el Demonio para TOMAR EL ANILLO."
      ],
      "examples": [],
      "storyteller": "Usa un recordatorio visible en el Grimorio y retíralo cuando termine la duración indicada por el efecto."
    },
    "preparacion": {
      "id": "preparacion",
      "title": "Dependencias de preparación",
      "eyebrow": "Construcción de partida",
      "icon": "",
      "summary": "Las expresiones entre corchetes, como [+Frodo], obligan a incluir ese personaje durante la preparación.",
      "body": [
        "Los modificadores de preparación aparecen entre corchetes en la habilidad.",
        "Por ejemplo, Sam [+Frodo] garantiza que Frodo esté en juego cuando Sam lo está.",
        "Estas dependencias deben resolverse antes de repartir los personajes."
      ],
      "examples": [],
      "storyteller": "Comprueba todas las dependencias del Script antes de introducir los tokens en la bolsa."
    },
    "borracho-envenenado": {
      "id": "borracho-envenenado",
      "title": "Borracho y envenenado",
      "eyebrow": "Regla esencial BOTC",
      "icon": "",
      "summary": "Un personaje borracho o envenenado conserva su identidad, pero su habilidad puede dejar de funcionar y su información puede ser falsa.",
      "body": [
        "El personaje sigue siendo el mismo personaje y conserva su alineación salvo que otra regla diga lo contrario.",
        "Cuando su habilidad intenta producir un efecto, ese efecto puede no ocurrir.",
        "Si su habilidad obtiene información, el Narrador puede proporcionar información falsa cuando corresponda.",
        "Los recordatorios de BORRACHO y ENVENENADO ayudan al Narrador a seguir estos estados."
      ],
      "examples": [],
      "storyteller": "Comprueba el estado del personaje en el momento exacto en que su habilidad debería funcionar."
    },
    "nominaciones": {
      "id": "nominaciones",
      "title": "Nominaciones y votación",
      "eyebrow": "Regla esencial BOTC",
      "icon": "",
      "summary": "Las nominaciones estructuran el debate diurno y determinan qué jugador puede acabar ejecutado.",
      "body": [
        "El Narrador abre las nominaciones durante el día y acepta una nominación válida cada vez.",
        "Los efectos de los personajes pueden modificar quién puede nominar, votar o ser nominado.",
        "Los jugadores muertos conservan un voto fantasma de un solo uso según las reglas normales de Blood on the Clocktower."
      ],
      "examples": [],
      "storyteller": "Anuncia claramente cada nominación y el recuento de votos antes de pasar a la siguiente."
    },
    "ejecucion-muerte": {
      "id": "ejecucion-muerte",
      "title": "Ejecución y muerte",
      "eyebrow": "Regla esencial BOTC",
      "icon": "",
      "summary": "Ser ejecutado y morir no son exactamente lo mismo: una ejecución puede ocurrir aunque una habilidad impida la muerte.",
      "body": [
        "La ejecución es el resultado del proceso diurno; la muerte es una consecuencia que ciertas habilidades pueden impedir o sustituir.",
        "En este proyecto hay varias habilidades que interactúan específicamente con la ejecución o con el momento en que un jugador fuera a morir.",
        "Cuando una ejecución no mata a su objetivo, la ejecución sigue habiendo ocurrido salvo que la habilidad diga otra cosa."
      ],
      "examples": [],
      "storyteller": "Resuelve primero los efectos que impiden o sustituyen la muerte y conserva claro qué jugador fue realmente ejecutado."
    }
  },
  "categoryLabels": {
    "ALDEANOS": "Aldeanos",
    "FORASTEROS": "Forasteros",
    "ESBIRROS": "Esbirros",
    "DEMONIOS": "Demonios"
  }
};
