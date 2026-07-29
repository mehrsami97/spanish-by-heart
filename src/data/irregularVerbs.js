/**
 * Present-indicative irregular verbs, grouped by irregularity type.
 *
 * Study content: Spanish forms with English glosses — deliberately not routed
 * through i18n (only the surrounding page chrome is translated).
 *
 * `form` marks the irregular letters with asterisks: "c*ie*rro" → the "ie" is
 * the change. Render with the helpers in src/utils/richText.jsx.
 * `rule`, `mnemonic` and `note` may contain <b>/<i>/<u> inline markup.
 * `boot` lists the indexes of the forms that change (null = no boot diagram).
 */
export const PRONOUNS = [
  "yo",
  "tú",
  "él / ella / usted",
  "nosotros / nosotras",
  "vosotros / vosotras",
  "ellos / ellas / ustedes"
];

export const GROUPS = [
  {
    id: 'g0',
    num: "1",
    label: "e → ie",
    pattern: "e > ie",
    rule: "The last <b>e</b> of the stem becomes <b>ie</b> — but only when the stress falls on it.",
    mnemonic: "<b>c-e-rrar → c-ie-rro</b>. The stress lands on the stem in the four boot forms, so the <b>e</b> breaks into <b>ie</b>. In <b>nosotros</b> and <b>vosotros</b> the stress moves onto the ending instead — that is why they sit outside the boot and keep the plain <b>e</b>.",
    boot: [0,1,2,5],
    verbs: [
    {
      verb: "cerrar",
      meaning: "to close",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "c*ie*rro",
        examples: [
          { es: "Cierro la puerta.", en: "I close the door." },
          { es: "Cierro los ojos.", en: "I close my eyes." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "c*ie*rras",
        examples: [
          { es: "¿Cierras la ventana?", en: "Do you close the window?" },
          { es: "Cierras el libro.", en: "You close the book." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "c*ie*rra",
        examples: [
          { es: "Ana cierra la tienda.", en: "Ana closes the shop." },
          { es: "El bar cierra a las diez.", en: "The bar closes at ten." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "cerramos",
        examples: [
          { es: "Cerramos la oficina hoy.", en: "We close the office today." },
          { es: "Cerramos los ojos y contamos.", en: "We close our eyes and count." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "cerráis",
        examples: [
          { es: "Cerráis la puerta, por favor.", en: "You close the door, please." },
          { es: "Cerráis las ventanas de noche.", en: "You close the windows at night." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "c*ie*rran",
        examples: [
          { es: "Los niños cierran los libros.", en: "The kids close the books." },
          { es: "Las tiendas cierran el domingo.", en: "The shops close on Sunday." },
        ],
      },
      ],
    },
    {
      verb: "empezar",
      meaning: "to start, to begin",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "emp*ie*zo",
        examples: [
          { es: "Empiezo a las nueve.", en: "I start at nine." },
          { es: "Empiezo mi clase de español.", en: "I start my Spanish class." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "emp*ie*zas",
        examples: [
          { es: "¿Empiezas hoy?", en: "Do you start today?" },
          { es: "Empiezas el libro nuevo.", en: "You start the new book." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "emp*ie*za",
        examples: [
          { es: "La película empieza ahora.", en: "The movie starts now." },
          { es: "Luis empieza el trabajo.", en: "Luis starts the job." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "empezamos",
        examples: [
          { es: "Empezamos a estudiar.", en: "We start studying." },
          { es: "Empezamos el lunes.", en: "We start on Monday." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "empezáis",
        examples: [
          { es: "Empezáis muy temprano.", en: "You start very early." },
          { es: "¿Empezáis la comida?", en: "Are you starting the meal?" },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "emp*ie*zan",
        examples: [
          { es: "Los niños empiezan la escuela.", en: "The kids start school." },
          { es: "Las clases empiezan en enero.", en: "Classes start in January." },
        ],
      },
      ],
    },
    {
      verb: "comenzar",
      meaning: "to begin (= empezar)",
      note: "Same meaning and same pattern as <b>empezar</b> — learn them as one pair.",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "com*ie*nzo",
        examples: [
          { es: "Comienzo el día con café.", en: "I begin the day with coffee." },
          { es: "Comienzo a correr.", en: "I begin to run." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "com*ie*nzas",
        examples: [
          { es: "Comienzas bien la semana.", en: "You begin the week well." },
          { es: "¿Comienzas ahora?", en: "Do you begin now?" },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "com*ie*nza",
        examples: [
          { es: "El curso comienza mañana.", en: "The course begins tomorrow." },
          { es: "Ana comienza su libro.", en: "Ana begins her book." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "comenzamos",
        examples: [
          { es: "Comenzamos con una pregunta.", en: "We begin with a question." },
          { es: "Comenzamos a las ocho.", en: "We begin at eight." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "comenzáis",
        examples: [
          { es: "Comenzáis el examen.", en: "You begin the exam." },
          { es: "¿Comenzáis sin mí?", en: "Are you beginning without me?" },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "com*ie*nzan",
        examples: [
          { es: "Ellos comienzan la fiesta.", en: "They begin the party." },
          { es: "Los partidos comienzan tarde.", en: "The matches begin late." },
        ],
      },
      ],
    },
    {
      verb: "querer",
      meaning: "to want, to love",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "qu*ie*ro",
        examples: [
          { es: "Quiero un café.", en: "I want a coffee." },
          { es: "Te quiero mucho.", en: "I love you very much." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "qu*ie*res",
        examples: [
          { es: "¿Quieres agua?", en: "Do you want water?" },
          { es: "Quieres aprender español.", en: "You want to learn Spanish." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "qu*ie*re",
        examples: [
          { es: "Ana quiere bailar.", en: "Ana wants to dance." },
          { es: "Mi perro quiere comer.", en: "My dog wants to eat." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "queremos",
        examples: [
          { es: "Queremos ir a la playa.", en: "We want to go to the beach." },
          { es: "No queremos esperar.", en: "We don't want to wait." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "queréis",
        examples: [
          { es: "¿Queréis pizza?", en: "Do you want pizza?" },
          { es: "Queréis viajar a España.", en: "You want to travel to Spain." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "qu*ie*ren",
        examples: [
          { es: "Los niños quieren jugar.", en: "The kids want to play." },
          { es: "Ellos quieren la verdad.", en: "They want the truth." },
        ],
      },
      ],
    },
    {
      verb: "preferir",
      meaning: "to prefer",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "pref*ie*ro",
        examples: [
          { es: "Prefiero el té.", en: "I prefer tea." },
          { es: "Prefiero caminar.", en: "I prefer to walk." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "pref*ie*res",
        examples: [
          { es: "¿Prefieres carne o pescado?", en: "Do you prefer meat or fish?" },
          { es: "Prefieres la noche.", en: "You prefer the night." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "pref*ie*re",
        examples: [
          { es: "Luis prefiere el cine.", en: "Luis prefers the cinema." },
          { es: "Ella prefiere estudiar sola.", en: "She prefers to study alone." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "preferimos",
        examples: [
          { es: "Preferimos el tren.", en: "We prefer the train." },
          { es: "Preferimos comer en casa.", en: "We prefer to eat at home." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "preferís",
        examples: [
          { es: "¿Preferís café o té?", en: "Do you prefer coffee or tea?" },
          { es: "Preferís el verano.", en: "You prefer summer." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "pref*ie*ren",
        examples: [
          { es: "Ellos prefieren el metro.", en: "They prefer the subway." },
          { es: "Mis amigos prefieren la playa.", en: "My friends prefer the beach." },
        ],
      },
      ],
    },
    {
      verb: "mentir",
      meaning: "to lie (tell a lie)",
      note: "A liar is <b>un mentiroso</b> — same family as <b>mentir</b>.",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "m*ie*nto",
        examples: [
          { es: "Nunca miento.", en: "I never lie." },
          { es: "No miento a mi madre.", en: "I don't lie to my mother." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "m*ie*ntes",
        examples: [
          { es: "¡Mientes!", en: "You're lying!" },
          { es: "¿Mientes otra vez?", en: "Are you lying again?" },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "m*ie*nte",
        examples: [
          { es: "Luis miente un poco.", en: "Luis lies a little." },
          { es: "El mentiroso miente siempre.", en: "The liar always lies." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "mentimos",
        examples: [
          { es: "No mentimos nunca.", en: "We never lie." },
          { es: "Mentimos por miedo.", en: "We lie out of fear." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "mentís",
        examples: [
          { es: "¿Mentís a la profesora?", en: "Do you lie to the teacher?" },
          { es: "Mentís muy mal.", en: "You lie very badly." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "m*ie*nten",
        examples: [
          { es: "Los políticos mienten.", en: "Politicians lie." },
          { es: "Ellos mienten sobre la hora.", en: "They lie about the time." },
        ],
      },
      ],
    },
    {
      verb: "sentir",
      meaning: "to feel",
      note: "<b>Lo siento</b> = \"I'm sorry\" (literally: I feel it). You already know the yo form!",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "s*ie*nto",
        examples: [
          { es: "Lo siento mucho.", en: "I'm very sorry." },
          { es: "Siento frío.", en: "I feel cold." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "s*ie*ntes",
        examples: [
          { es: "¿Sientes el sol?", en: "Do you feel the sun?" },
          { es: "Sientes miedo.", en: "You feel afraid." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "s*ie*nte",
        examples: [
          { es: "Ana siente calor.", en: "Ana feels hot." },
          { es: "Él siente dolor.", en: "He feels pain." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "sentimos",
        examples: [
          { es: "Nos sentimos bien hoy.", en: "We feel good today." },
          { es: "Sentimos el viento.", en: "We feel the wind." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "sentís",
        examples: [
          { es: "¿Sentís el frío?", en: "Do you feel the cold?" },
          { es: "Sentís la música.", en: "You feel the music." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "s*ie*nten",
        examples: [
          { es: "Ellos sienten el cambio.", en: "They feel the change." },
          { es: "Los niños sienten miedo.", en: "The kids feel afraid." },
        ],
      },
      ],
    },
    {
      verb: "tender",
      meaning: "to hang out (laundry), to tend to",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "t*ie*ndo",
        examples: [
          { es: "Tiendo la ropa al sol.", en: "I hang the laundry in the sun." },
          { es: "Tiendo a llegar tarde.", en: "I tend to arrive late." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "t*ie*ndes",
        examples: [
          { es: "¿Tiendes la ropa hoy?", en: "Are you hanging the laundry today?" },
          { es: "Tiendes a dormir mucho.", en: "You tend to sleep a lot." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "t*ie*nde",
        examples: [
          { es: "Mamá tiende las camisas.", en: "Mom hangs the shirts." },
          { es: "Él tiende a olvidar.", en: "He tends to forget." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "tendemos",
        examples: [
          { es: "Tendemos la ropa juntos.", en: "We hang the laundry together." },
          { es: "Tendemos a comer tarde.", en: "We tend to eat late." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "tendéis",
        examples: [
          { es: "Tendéis la ropa en el balcón.", en: "You hang the laundry on the balcony." },
          { es: "Tendéis a hablar rápido.", en: "You tend to speak fast." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "t*ie*nden",
        examples: [
          { es: "Ellos tienden las toallas.", en: "They hang the towels." },
          { es: "Los gatos tienden a dormir.", en: "Cats tend to sleep." },
        ],
      },
      ],
    },
    {
      verb: "despertarse",
      meaning: "to wake up (reflexive)",
      note: "Reflexive: the pronoun (<b>me, te, se…</b>) goes <i>before</i> the verb. The stem change is the same.",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "me desp*ie*rto",
        examples: [
          { es: "Me despierto a las siete.", en: "I wake up at seven." },
          { es: "Me despierto con música.", en: "I wake up with music." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "te desp*ie*rtas",
        examples: [
          { es: "¿Te despiertas temprano?", en: "Do you wake up early?" },
          { es: "Te despiertas con el sol.", en: "You wake up with the sun." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "se desp*ie*rta",
        examples: [
          { es: "Ana se despierta tarde.", en: "Ana wakes up late." },
          { es: "El bebé se despierta y llora.", en: "The baby wakes up and cries." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "nos despertamos",
        examples: [
          { es: "Nos despertamos a las ocho.", en: "We wake up at eight." },
          { es: "Nos despertamos juntos.", en: "We wake up together." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "os despertáis",
        examples: [
          { es: "¿Os despertáis muy tarde?", en: "Do you wake up very late?" },
          { es: "Os despertáis el sábado a las diez.", en: "You wake up at ten on Saturday." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "se desp*ie*rtan",
        examples: [
          { es: "Los niños se despiertan pronto.", en: "The kids wake up early." },
          { es: "Ellos se despiertan con el ruido.", en: "They wake up with the noise." },
        ],
      },
      ],
    },
    ],
  },
  {
    id: 'g1',
    num: "2",
    label: "i → ie",
    pattern: "i > ie",
    rule: "Rare cousin of group 1: the stem <b>i</b> becomes <b>ie</b>, same boot shape.",
    mnemonic: "Only two verbs matter: <b>adquirir</b> and <b>inquirir</b>. Think <b>adqu-i-rir → adqu-ie-ro</b>: same boot as <i>cerrar</i>, different vowel.",
    boot: [0,1,2,5],
    verbs: [
    {
      verb: "adquirir",
      meaning: "to acquire, to get",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "adqu*ie*ro",
        examples: [
          { es: "Adquiero un coche nuevo.", en: "I acquire a new car." },
          { es: "Adquiero buenos hábitos.", en: "I acquire good habits." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "adqu*ie*res",
        examples: [
          { es: "¿Adquieres la casa?", en: "Are you acquiring the house?" },
          { es: "Adquieres experiencia.", en: "You acquire experience." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "adqu*ie*re",
        examples: [
          { es: "La empresa adquiere un hotel.", en: "The company acquires a hotel." },
          { es: "Él adquiere un piso.", en: "He acquires a flat." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "adquirimos",
        examples: [
          { es: "Adquirimos dos libros.", en: "We acquire two books." },
          { es: "Adquirimos práctica cada día.", en: "We acquire practice every day." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "adquirís",
        examples: [
          { es: "Adquirís mucha información.", en: "You acquire a lot of information." },
          { es: "¿Adquirís el terreno?", en: "Are you acquiring the land?" },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "adqu*ie*ren",
        examples: [
          { es: "Ellos adquieren una tienda.", en: "They acquire a shop." },
          { es: "Los niños adquieren vocabulario.", en: "The kids acquire vocabulary." },
        ],
      },
      ],
    },
    ],
  },
  {
    id: 'g2',
    num: "3",
    label: "o → ue",
    pattern: "o > ue",
    rule: "The stem <b>o</b> becomes <b>ue</b> in the four stressed forms. Same boot as group 1.",
    mnemonic: "<b>p-o-der → p-ue-do</b>. Trick: the <b>o</b> \"opens its mouth\" when it is stressed and shouts <b>ue</b>. Nosotros/vosotros are unstressed, so the mouth stays shut.",
    boot: [0,1,2,5],
    verbs: [
    {
      verb: "poder",
      meaning: "can, to be able to",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "p*ue*do",
        examples: [
          { es: "Puedo hablar español.", en: "I can speak Spanish." },
          { es: "No puedo dormir.", en: "I can't sleep." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "p*ue*des",
        examples: [
          { es: "¿Puedes ayudarme?", en: "Can you help me?" },
          { es: "Puedes entrar.", en: "You can come in." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "p*ue*de",
        examples: [
          { es: "Ana puede venir hoy.", en: "Ana can come today." },
          { es: "El niño no puede correr.", en: "The boy can't run." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "podemos",
        examples: [
          { es: "Podemos empezar ya.", en: "We can start now." },
          { es: "No podemos esperar más.", en: "We can't wait any longer." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "podéis",
        examples: [
          { es: "¿Podéis venir mañana?", en: "Can you come tomorrow?" },
          { es: "Podéis usar mi mesa.", en: "You can use my table." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "p*ue*den",
        examples: [
          { es: "Ellos pueden nadar.", en: "They can swim." },
          { es: "Los niños no pueden salir.", en: "The kids can't go out." },
        ],
      },
      ],
    },
    {
      verb: "encontrar",
      meaning: "to find, to meet",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "enc*ue*ntro",
        examples: [
          { es: "No encuentro mis llaves.", en: "I can't find my keys." },
          { es: "Encuentro la calle fácil.", en: "I find the street easily." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "enc*ue*ntras",
        examples: [
          { es: "¿Encuentras el error?", en: "Do you find the mistake?" },
          { es: "Encuentras trabajo rápido.", en: "You find work fast." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "enc*ue*ntra",
        examples: [
          { es: "Luis encuentra su móvil.", en: "Luis finds his phone." },
          { es: "Ella encuentra la solución.", en: "She finds the solution." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "encontramos",
        examples: [
          { es: "Nos encontramos a las cinco.", en: "We meet at five." },
          { es: "Encontramos una mesa libre.", en: "We find a free table." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "encontráis",
        examples: [
          { es: "¿Encontráis la casa?", en: "Do you find the house?" },
          { es: "Encontráis buenos precios.", en: "You find good prices." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "enc*ue*ntran",
        examples: [
          { es: "Ellos encuentran el camino.", en: "They find the way." },
          { es: "Los niños encuentran el gato.", en: "The kids find the cat." },
        ],
      },
      ],
    },
    {
      verb: "soñar",
      meaning: "to dream",
      note: "<b>soñar con</b> = to dream <i>about</i> something.",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "s*ue*ño",
        examples: [
          { es: "Sueño con España.", en: "I dream about Spain." },
          { es: "Sueño cada noche.", en: "I dream every night." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "s*ue*ñas",
        examples: [
          { es: "¿Sueñas mucho?", en: "Do you dream a lot?" },
          { es: "Sueñas con el mar.", en: "You dream about the sea." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "s*ue*ña",
        examples: [
          { es: "Ana sueña con viajar.", en: "Ana dreams of traveling." },
          { es: "El perro sueña y mueve las patas.", en: "The dog dreams and moves its paws." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "soñamos",
        examples: [
          { es: "Soñamos con una casa grande.", en: "We dream of a big house." },
          { es: "Soñamos en color.", en: "We dream in color." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "soñáis",
        examples: [
          { es: "¿Soñáis con el futuro?", en: "Do you dream about the future?" },
          { es: "Soñáis demasiado.", en: "You dream too much." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "s*ue*ñan",
        examples: [
          { es: "Los niños sueñan con volar.", en: "The kids dream of flying." },
          { es: "Ellos sueñan en español.", en: "They dream in Spanish." },
        ],
      },
      ],
    },
    {
      verb: "volar",
      meaning: "to fly",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "v*ue*lo",
        examples: [
          { es: "Vuelo a Madrid mañana.", en: "I fly to Madrid tomorrow." },
          { es: "Nunca vuelo de noche.", en: "I never fly at night." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "v*ue*las",
        examples: [
          { es: "¿Vuelas hoy?", en: "Do you fly today?" },
          { es: "Vuelas muy tranquilo.", en: "You fly very calmly." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "v*ue*la",
        examples: [
          { es: "El avión vuela alto.", en: "The plane flies high." },
          { es: "El pájaro vuela al árbol.", en: "The bird flies to the tree." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "volamos",
        examples: [
          { es: "Volamos el viernes.", en: "We fly on Friday." },
          { es: "Volamos a Roma juntos.", en: "We fly to Rome together." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "voláis",
        examples: [
          { es: "¿Voláis en verano?", en: "Do you fly in summer?" },
          { es: "Voláis con poco equipaje.", en: "You fly with little luggage." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "v*ue*lan",
        examples: [
          { es: "Los pájaros vuelan al sur.", en: "The birds fly south." },
          { es: "Ellos vuelan cada semana.", en: "They fly every week." },
        ],
      },
      ],
    },
    {
      verb: "costar",
      meaning: "to cost",
      note: "Used mostly in <b>cuesta</b> / <b>cuestan</b> — things cost, people usually don't.",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "c*ue*sto",
        examples: [
          { es: "Yo cuesto poco, trabajo gratis.", en: "I cost little, I work for free." },
          { es: "No cuesto nada al equipo.", en: "I cost the team nothing." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "c*ue*stas",
        examples: [
          { es: "Tú cuestas mucho dinero.", en: "You cost a lot of money." },
          { es: "¿Cuánto cuestas por hora?", en: "How much do you cost per hour?" },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "c*ue*sta",
        examples: [
          { es: "El café cuesta dos euros.", en: "The coffee costs two euros." },
          { es: "¿Cuánto cuesta el billete?", en: "How much does the ticket cost?" },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "costamos",
        examples: [
          { es: "Costamos menos que ellos.", en: "We cost less than them." },
          { es: "Costamos poco a la empresa.", en: "We cost the company little." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "costáis",
        examples: [
          { es: "Vosotros costáis mucho.", en: "You cost a lot." },
          { es: "¿Cuánto costáis los dos?", en: "How much do you two cost?" },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "c*ue*stan",
        examples: [
          { es: "Los zapatos cuestan cien euros.", en: "The shoes cost a hundred euros." },
          { es: "Las clases cuestan poco.", en: "The classes cost little." },
        ],
      },
      ],
    },
    {
      verb: "volver",
      meaning: "to come back, to return",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "v*ue*lvo",
        examples: [
          { es: "Vuelvo a casa a las seis.", en: "I come back home at six." },
          { es: "Vuelvo mañana.", en: "I'll be back tomorrow." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "v*ue*lves",
        examples: [
          { es: "¿Vuelves pronto?", en: "Are you coming back soon?" },
          { es: "Vuelves con tu hermano.", en: "You come back with your brother." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "v*ue*lve",
        examples: [
          { es: "Ana vuelve del trabajo.", en: "Ana comes back from work." },
          { es: "El autobús vuelve a las ocho.", en: "The bus comes back at eight." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "volvemos",
        examples: [
          { es: "Volvemos el domingo.", en: "We come back on Sunday." },
          { es: "Volvemos en tren.", en: "We come back by train." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "volvéis",
        examples: [
          { es: "¿Volvéis esta noche?", en: "Are you coming back tonight?" },
          { es: "Volvéis muy tarde.", en: "You come back very late." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "v*ue*lven",
        examples: [
          { es: "Ellos vuelven de España.", en: "They come back from Spain." },
          { es: "Los niños vuelven del parque.", en: "The kids come back from the park." },
        ],
      },
      ],
    },
    {
      verb: "dormir",
      meaning: "to sleep",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "d*ue*rmo",
        examples: [
          { es: "Duermo ocho horas.", en: "I sleep eight hours." },
          { es: "Duermo con la ventana abierta.", en: "I sleep with the window open." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "d*ue*rmes",
        examples: [
          { es: "¿Duermes bien?", en: "Do you sleep well?" },
          { es: "Duermes poco.", en: "You sleep little." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "d*ue*rme",
        examples: [
          { es: "El bebé duerme ahora.", en: "The baby is sleeping now." },
          { es: "Mi gato duerme todo el día.", en: "My cat sleeps all day." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "dormimos",
        examples: [
          { es: "Dormimos en el hotel.", en: "We sleep at the hotel." },
          { es: "Dormimos hasta las nueve.", en: "We sleep until nine." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "dormís",
        examples: [
          { es: "¿Dormís en el sofá?", en: "Do you sleep on the sofa?" },
          { es: "Dormís muy tranquilos.", en: "You sleep very peacefully." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "d*ue*rmen",
        examples: [
          { es: "Los niños duermen ya.", en: "The kids are already asleep." },
          { es: "Ellos duermen en el tren.", en: "They sleep on the train." },
        ],
      },
      ],
    },
    {
      verb: "mover",
      meaning: "to move (something)",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "m*ue*vo",
        examples: [
          { es: "Muevo la mesa.", en: "I move the table." },
          { es: "Muevo la cabeza.", en: "I move my head." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "m*ue*ves",
        examples: [
          { es: "¿Mueves la silla?", en: "Are you moving the chair?" },
          { es: "Mueves las manos al hablar.", en: "You move your hands when speaking." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "m*ue*ve",
        examples: [
          { es: "El viento mueve el árbol.", en: "The wind moves the tree." },
          { es: "Luis mueve el coche.", en: "Luis moves the car." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "movemos",
        examples: [
          { es: "Movemos el sofá hoy.", en: "We move the sofa today." },
          { es: "Nos movemos rápido.", en: "We move fast." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "movéis",
        examples: [
          { es: "¿Movéis las cajas?", en: "Are you moving the boxes?" },
          { es: "Movéis todo con cuidado.", en: "You move everything carefully." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "m*ue*ven",
        examples: [
          { es: "Ellos mueven los muebles.", en: "They move the furniture." },
          { es: "Los perros mueven la cola.", en: "Dogs move their tails." },
        ],
      },
      ],
    },
    {
      verb: "almorzar",
      meaning: "to have lunch",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "alm*ue*rzo",
        examples: [
          { es: "Almuerzo a la una.", en: "I have lunch at one." },
          { es: "Almuerzo en casa.", en: "I have lunch at home." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "alm*ue*rzas",
        examples: [
          { es: "¿Almuerzas conmigo?", en: "Will you have lunch with me?" },
          { es: "Almuerzas muy tarde.", en: "You have lunch very late." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "alm*ue*rza",
        examples: [
          { es: "Ana almuerza sola.", en: "Ana has lunch alone." },
          { es: "Él almuerza en la oficina.", en: "He has lunch at the office." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "almorzamos",
        examples: [
          { es: "Almorzamos arroz y pollo.", en: "We have rice and chicken for lunch." },
          { es: "Almorzamos a las dos.", en: "We have lunch at two." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "almorzáis",
        examples: [
          { es: "¿Almorzáis en el bar?", en: "Do you have lunch at the bar?" },
          { es: "Almorzáis muy rápido.", en: "You have lunch very fast." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "alm*ue*rzan",
        examples: [
          { es: "Ellos almuerzan juntos.", en: "They have lunch together." },
          { es: "Los niños almuerzan en la escuela.", en: "The kids have lunch at school." },
        ],
      },
      ],
    },
    {
      verb: "acordarse",
      meaning: "to remember (reflexive)",
      note: "<b>acordarse de</b> algo = to remember something.",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "me ac*ue*rdo",
        examples: [
          { es: "Me acuerdo de tu nombre.", en: "I remember your name." },
          { es: "No me acuerdo de nada.", en: "I don't remember anything." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "te ac*ue*rdas",
        examples: [
          { es: "¿Te acuerdas de mí?", en: "Do you remember me?" },
          { es: "Te acuerdas de la canción.", en: "You remember the song." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "se ac*ue*rda",
        examples: [
          { es: "Ana se acuerda del hotel.", en: "Ana remembers the hotel." },
          { es: "Él no se acuerda de la hora.", en: "He doesn't remember the time." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "nos acordamos",
        examples: [
          { es: "Nos acordamos de ese día.", en: "We remember that day." },
          { es: "No nos acordamos del precio.", en: "We don't remember the price." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "os acordáis",
        examples: [
          { es: "¿Os acordáis de la fiesta?", en: "Do you remember the party?" },
          { es: "Os acordáis de todo.", en: "You remember everything." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "se ac*ue*rdan",
        examples: [
          { es: "Ellos se acuerdan de la calle.", en: "They remember the street." },
          { es: "Los niños se acuerdan del perro.", en: "The kids remember the dog." },
        ],
      },
      ],
    },
    {
      verb: "acostarse",
      meaning: "to go to bed (reflexive)",
      note: "Pair it with <b>despertarse</b>: <i>me acuesto</i> at night, <i>me despierto</i> in the morning.",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "me ac*ue*sto",
        examples: [
          { es: "Me acuesto a las once.", en: "I go to bed at eleven." },
          { es: "Me acuesto muy cansado.", en: "I go to bed very tired." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "te ac*ue*stas",
        examples: [
          { es: "¿Te acuestas ya?", en: "Are you going to bed now?" },
          { es: "Te acuestas muy tarde.", en: "You go to bed very late." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "se ac*ue*sta",
        examples: [
          { es: "El bebé se acuesta a las ocho.", en: "The baby goes to bed at eight." },
          { es: "Ana se acuesta temprano.", en: "Ana goes to bed early." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "nos acostamos",
        examples: [
          { es: "Nos acostamos a medianoche.", en: "We go to bed at midnight." },
          { es: "Nos acostamos después de cenar.", en: "We go to bed after dinner." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "os acostáis",
        examples: [
          { es: "¿Os acostáis pronto?", en: "Do you go to bed early?" },
          { es: "Os acostáis con el móvil.", en: "You go to bed with your phone." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "se ac*ue*stan",
        examples: [
          { es: "Los niños se acuestan a las nueve.", en: "The kids go to bed at nine." },
          { es: "Ellos se acuestan tarde el sábado.", en: "They go to bed late on Saturday." },
        ],
      },
      ],
    },
    ],
  },
  {
    id: 'g3',
    num: "4",
    label: "u → ue",
    pattern: "u > ue",
    rule: "Exactly one verb in Spanish does this: <b>jugar</b>.",
    mnemonic: "<b>jugar</b> is the lonely champion of <b>u → ue</b>: <b>j-u-gar → j-ue-go</b>. One verb, one rule, remember it as a fun fact.",
    boot: [0,1,2,5],
    verbs: [
    {
      verb: "jugar",
      meaning: "to play (a game/sport)",
      note: "<b>jugar a</b> + sport: <i>juego al fútbol</i>. For instruments use <b>tocar</b>.",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "j*ue*go",
        examples: [
          { es: "Juego al fútbol los sábados.", en: "I play football on Saturdays." },
          { es: "Juego con mi perro.", en: "I play with my dog." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "j*ue*gas",
        examples: [
          { es: "¿Juegas al tenis?", en: "Do you play tennis?" },
          { es: "Juegas muy bien.", en: "You play very well." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "j*ue*ga",
        examples: [
          { es: "Luis juega al baloncesto.", en: "Luis plays basketball." },
          { es: "El niño juega en el parque.", en: "The boy plays in the park." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "jugamos",
        examples: [
          { es: "Jugamos a las cartas.", en: "We play cards." },
          { es: "Jugamos cada domingo.", en: "We play every Sunday." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "jugáis",
        examples: [
          { es: "¿Jugáis al fútbol hoy?", en: "Are you playing football today?" },
          { es: "Jugáis en el jardín.", en: "You play in the garden." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "j*ue*gan",
        examples: [
          { es: "Ellos juegan al ajedrez.", en: "They play chess." },
          { es: "Los niños juegan juntos.", en: "The kids play together." },
        ],
      },
      ],
    },
    ],
  },
  {
    id: 'g4',
    num: "5",
    label: "e → i",
    pattern: "e > i (cierre vocálico)",
    rule: "The stem <b>e</b> closes into <b>i</b> — only in <b>-ir</b> verbs, and only inside the boot.",
    mnemonic: "Only <b>-ir</b> verbs do this: <b>p-e-dir → p-i-do</b>, <b>s-e-rvir → s-i-rvo</b>, <b>s-e-guir → s-i-go</b>. Memory hook: the <b>i</b> of the <b>-ir</b> ending \"infects\" the stem.",
    boot: [0,1,2,5],
    verbs: [
    {
      verb: "pedir",
      meaning: "to ask for, to order",
      note: "<b>pedir</b> = ask <i>for</i> a thing. <b>preguntar</b> = ask a question. Don't mix them.",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "p*i*do",
        examples: [
          { es: "Pido un café, por favor.", en: "I order a coffee, please." },
          { es: "Pido ayuda.", en: "I ask for help." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "p*i*des",
        examples: [
          { es: "¿Qué pides?", en: "What are you ordering?" },
          { es: "Pides pizza otra vez.", en: "You order pizza again." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "p*i*de",
        examples: [
          { es: "Ana pide agua.", en: "Ana asks for water." },
          { es: "El niño pide más pan.", en: "The boy asks for more bread." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "pedimos",
        examples: [
          { es: "Pedimos la cuenta.", en: "We ask for the bill." },
          { es: "Pedimos dos cervezas.", en: "We order two beers." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "pedís",
        examples: [
          { es: "¿Pedís postre?", en: "Are you ordering dessert?" },
          { es: "Pedís siempre lo mismo.", en: "You always order the same thing." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "p*i*den",
        examples: [
          { es: "Ellos piden el menú.", en: "They ask for the menu." },
          { es: "Los niños piden helado.", en: "The kids ask for ice cream." },
        ],
      },
      ],
    },
    {
      verb: "servir",
      meaning: "to serve, to be useful",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "s*i*rvo",
        examples: [
          { es: "Sirvo la comida.", en: "I serve the food." },
          { es: "Sirvo el vino ahora.", en: "I serve the wine now." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "s*i*rves",
        examples: [
          { es: "¿Sirves el café?", en: "Are you serving the coffee?" },
          { es: "Sirves muy rápido.", en: "You serve very fast." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "s*i*rve",
        examples: [
          { es: "El camarero sirve la mesa.", en: "The waiter serves the table." },
          { es: "Esto no sirve.", en: "This is useless." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "servimos",
        examples: [
          { es: "Servimos a las ocho.", en: "We serve at eight." },
          { es: "Nos servimos agua.", en: "We serve ourselves water." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "servís",
        examples: [
          { es: "¿Servís desayuno?", en: "Do you serve breakfast?" },
          { es: "Servís muy bien.", en: "You serve very well." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "s*i*rven",
        examples: [
          { es: "Ellos sirven pescado hoy.", en: "They serve fish today." },
          { es: "Estos zapatos no sirven.", en: "These shoes are no good." },
        ],
      },
      ],
    },
    {
      verb: "seguir",
      meaning: "to follow, to continue",
      note: "Double trick: <b>e → i</b> <i>and</i> the <b>gu</b> loses its <b>u</b> in yo (<b>sigo</b>, not \"siguo\").",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "s*i*go",
        examples: [
          { es: "Sigo estudiando español.", en: "I keep studying Spanish." },
          { es: "Te sigo en Instagram.", en: "I follow you on Instagram." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "s*i*gues",
        examples: [
          { es: "Tú sigues la calle.", en: "You follow the street." },
          { es: "¿Sigues trabajando?", en: "Are you still working?" },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "s*i*gue",
        examples: [
          { es: "Ana sigue en casa.", en: "Ana is still at home." },
          { es: "El perro sigue a Luis.", en: "The dog follows Luis." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "seguimos",
        examples: [
          { es: "Nosotros seguimos aquí.", en: "We are still here." },
          { es: "Seguimos el mapa.", en: "We follow the map." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "seguís",
        examples: [
          { es: "¿Seguís el partido?", en: "Are you following the match?" },
          { es: "Seguís mis consejos.", en: "You follow my advice." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "s*i*guen",
        examples: [
          { es: "Ellos siguen hablando.", en: "They keep talking." },
          { es: "Los niños siguen a la profesora.", en: "The kids follow the teacher." },
        ],
      },
      ],
    },
    {
      verb: "reír",
      meaning: "to laugh",
      note: "<b>e → i</b> plus a written accent on the <b>í</b>: <i>río, ríes, ríe…</i>",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "r*í*o",
        examples: [
          { es: "Río con mis amigos.", en: "I laugh with my friends." },
          { es: "Río mucho contigo.", en: "I laugh a lot with you." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "r*í*es",
        examples: [
          { es: "¿Por qué ríes?", en: "Why are you laughing?" },
          { es: "Ríes como un niño.", en: "You laugh like a child." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "r*í*e",
        examples: [
          { es: "Ana ríe todo el día.", en: "Ana laughs all day." },
          { es: "El bebé ríe con la música.", en: "The baby laughs with the music." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "reímos",
        examples: [
          { es: "Nos reímos mucho.", en: "We laugh a lot." },
          { es: "Reímos con la película.", en: "We laugh at the movie." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "reís",
        examples: [
          { es: "¿Os reís de mí?", en: "Are you laughing at me?" },
          { es: "Reís muy fuerte.", en: "You laugh very loudly." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "r*í*en",
        examples: [
          { es: "Ellos ríen en clase.", en: "They laugh in class." },
          { es: "Los niños ríen y juegan.", en: "The kids laugh and play." },
        ],
      },
      ],
    },
    ],
  },
  {
    id: 'g5',
    num: "6",
    label: "yo → -go",
    pattern: "yo …go",
    rule: "Only the <b>yo</b> form adds a <b>g</b>. Everything else follows the normal endings (or a stem change from group 1 / 5).",
    mnemonic: "The <b>\"yo-go\" gang\"</b>: <i>salgo, traigo, pongo, hago, valgo, caigo, oigo, tengo, vengo, digo</i>. Say them out loud as a chant — the <b>-go</b> is the only thing you must remember for <i>yo</i>.",
    boot: [0],
    verbs: [
    {
      verb: "salir",
      meaning: "to go out, to leave",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "sal*g*o",
        examples: [
          { es: "Salgo de casa a las ocho.", en: "I leave home at eight." },
          { es: "Salgo con mis amigos.", en: "I go out with my friends." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "sales",
        examples: [
          { es: "¿Sales esta noche?", en: "Are you going out tonight?" },
          { es: "Sales muy temprano.", en: "You leave very early." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "sale",
        examples: [
          { es: "El tren sale a las diez.", en: "The train leaves at ten." },
          { es: "Ana sale del trabajo.", en: "Ana leaves work." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "salimos",
        examples: [
          { es: "Salimos a cenar.", en: "We go out for dinner." },
          { es: "Salimos del cine.", en: "We leave the cinema." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "salís",
        examples: [
          { es: "¿Salís el viernes?", en: "Are you going out on Friday?" },
          { es: "Salís sin paraguas.", en: "You go out without an umbrella." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "salen",
        examples: [
          { es: "Ellos salen a correr.", en: "They go out running." },
          { es: "Los niños salen al patio.", en: "The kids go out to the yard." },
        ],
      },
      ],
    },
    {
      verb: "traer",
      meaning: "to bring",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "trai*g*o",
        examples: [
          { es: "Traigo el pan.", en: "I bring the bread." },
          { es: "Traigo buenas noticias.", en: "I bring good news." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "traes",
        examples: [
          { es: "¿Traes tu libro?", en: "Are you bringing your book?" },
          { es: "Traes mucha comida.", en: "You bring a lot of food." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "trae",
        examples: [
          { es: "Ana trae el café.", en: "Ana brings the coffee." },
          { es: "El camarero trae la cuenta.", en: "The waiter brings the bill." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "traemos",
        examples: [
          { es: "Traemos el postre.", en: "We bring the dessert." },
          { es: "Traemos sillas para todos.", en: "We bring chairs for everyone." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "traéis",
        examples: [
          { es: "¿Traéis la música?", en: "Are you bringing the music?" },
          { es: "Traéis regalos.", en: "You bring gifts." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "traen",
        examples: [
          { es: "Ellos traen la mesa.", en: "They bring the table." },
          { es: "Los niños traen sus juguetes.", en: "The kids bring their toys." },
        ],
      },
      ],
    },
    {
      verb: "poner",
      meaning: "to put, to place",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "pon*g*o",
        examples: [
          { es: "Pongo la mesa.", en: "I set the table." },
          { es: "Pongo música.", en: "I put on music." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "pones",
        examples: [
          { es: "¿Dónde pones las llaves?", en: "Where do you put the keys?" },
          { es: "Pones azúcar en el café.", en: "You put sugar in the coffee." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "pone",
        examples: [
          { es: "Ana pone el plato aquí.", en: "Ana puts the plate here." },
          { es: "Él pone la tele.", en: "He turns on the TV." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "ponemos",
        examples: [
          { es: "Ponemos el pan en la mesa.", en: "We put the bread on the table." },
          { es: "Nos ponemos el abrigo.", en: "We put on our coats." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "ponéis",
        examples: [
          { es: "¿Ponéis la mesa?", en: "Are you setting the table?" },
          { es: "Ponéis mucha sal.", en: "You put in a lot of salt." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "ponen",
        examples: [
          { es: "Ellos ponen las flores aquí.", en: "They put the flowers here." },
          { es: "Los niños ponen los zapatos.", en: "The kids put on their shoes." },
        ],
      },
      ],
    },
    {
      verb: "hacer",
      meaning: "to do, to make",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "ha*g*o",
        examples: [
          { es: "Hago la cena.", en: "I make dinner." },
          { es: "Hago mis deberes.", en: "I do my homework." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "haces",
        examples: [
          { es: "¿Qué haces?", en: "What are you doing?" },
          { es: "Haces café muy bueno.", en: "You make very good coffee." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "hace",
        examples: [
          { es: "Ana hace un pastel.", en: "Ana makes a cake." },
          { es: "Hace frío hoy.", en: "It's cold today." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "hacemos",
        examples: [
          { es: "Hacemos las tareas juntos.", en: "We do the tasks together." },
          { es: "Hacemos deporte los lunes.", en: "We do sport on Mondays." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "hacéis",
        examples: [
          { es: "¿Hacéis la comida?", en: "Are you making the food?" },
          { es: "Hacéis mucho ruido.", en: "You make a lot of noise." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "hacen",
        examples: [
          { es: "Ellos hacen pan en casa.", en: "They make bread at home." },
          { es: "Los niños hacen dibujos.", en: "The kids make drawings." },
        ],
      },
      ],
    },
    {
      verb: "valer",
      meaning: "to be worth, to cost",
      note: "<b>¿Cuánto vale?</b> = How much is it? Very common in shops.",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "val*g*o",
        examples: [
          { es: "Yo valgo mucho.", en: "I'm worth a lot." },
          { es: "No valgo para cantar.", en: "I'm no good at singing." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "vales",
        examples: [
          { es: "Tú vales oro.", en: "You're worth gold." },
          { es: "Vales para este trabajo.", en: "You're right for this job." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "vale",
        examples: [
          { es: "El libro vale diez euros.", en: "The book costs ten euros." },
          { es: "¿Cuánto vale el café?", en: "How much is the coffee?" },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "valemos",
        examples: [
          { es: "Valemos más juntos.", en: "We're worth more together." },
          { es: "Nos valemos solos.", en: "We manage on our own." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "valéis",
        examples: [
          { es: "Vosotros valéis mucho.", en: "You are worth a lot." },
          { es: "Valéis para el equipo.", en: "You're right for the team." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "valen",
        examples: [
          { es: "Los zapatos valen cincuenta euros.", en: "The shoes cost fifty euros." },
          { es: "Estas ideas valen oro.", en: "These ideas are worth gold." },
        ],
      },
      ],
    },
    {
      verb: "caer",
      meaning: "to fall",
      note: "Often reflexive: <b>caerse</b> = to fall down (<i>me caigo</i>).",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "cai*g*o",
        examples: [
          { es: "Me caigo en el hielo.", en: "I fall on the ice." },
          { es: "Caigo en el mismo error.", en: "I fall into the same mistake." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "caes",
        examples: [
          { es: "¿Te caes mucho?", en: "Do you fall a lot?" },
          { es: "Caes bien a todos.", en: "Everybody likes you." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "cae",
        examples: [
          { es: "La hoja cae del árbol.", en: "The leaf falls from the tree." },
          { es: "El vaso cae al suelo.", en: "The glass falls to the floor." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "caemos",
        examples: [
          { es: "Nos caemos de la bici.", en: "We fall off the bike." },
          { es: "Caemos siempre en la trampa.", en: "We always fall into the trap." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "caéis",
        examples: [
          { es: "¿Os caéis de la silla?", en: "Are you falling off the chair?" },
          { es: "Caéis bien a mi madre.", en: "My mother likes you." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "caen",
        examples: [
          { es: "Las hojas caen en otoño.", en: "The leaves fall in autumn." },
          { es: "Los libros caen de la mesa.", en: "The books fall off the table." },
        ],
      },
      ],
    },
    {
      verb: "oír",
      meaning: "to hear",
      note: "Two tricks: <b>-go</b> in yo, and <b>y</b> appears in oyes / oye / oyen.",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "oi*g*o",
        examples: [
          { es: "Oigo música.", en: "I hear music." },
          { es: "No oigo nada.", en: "I hear nothing." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "o*y*es",
        examples: [
          { es: "¿Oyes el teléfono?", en: "Do you hear the phone?" },
          { es: "Oyes muy bien.", en: "You hear very well." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "o*y*e",
        examples: [
          { es: "Ana oye un ruido.", en: "Ana hears a noise." },
          { es: "Mi abuelo no oye bien.", en: "My grandfather doesn't hear well." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "oímos",
        examples: [
          { es: "Oímos la lluvia.", en: "We hear the rain." },
          { es: "No oímos la alarma.", en: "We don't hear the alarm." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "oís",
        examples: [
          { es: "¿Oís la canción?", en: "Do you hear the song?" },
          { es: "Oís el mar desde aquí.", en: "You hear the sea from here." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "o*y*en",
        examples: [
          { es: "Ellos oyen el tren.", en: "They hear the train." },
          { es: "Los niños oyen a su madre.", en: "The kids hear their mother." },
        ],
      },
      ],
    },
    {
      verb: "tener",
      meaning: "to have",
      note: "Double irregular: <b>-go</b> in yo <i>and</i> <b>e → ie</b> in the boot.",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "ten*g*o",
        examples: [
          { es: "Tengo un perro.", en: "I have a dog." },
          { es: "Tengo treinta años.", en: "I am thirty years old." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "t*ie*nes",
        examples: [
          { es: "¿Tienes tiempo?", en: "Do you have time?" },
          { es: "Tienes razón.", en: "You are right." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "t*ie*ne",
        examples: [
          { es: "Ana tiene dos hermanos.", en: "Ana has two brothers." },
          { es: "La casa tiene tres puertas.", en: "The house has three doors." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "tenemos",
        examples: [
          { es: "Tenemos clase hoy.", en: "We have class today." },
          { es: "Tenemos hambre.", en: "We are hungry." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "tenéis",
        examples: [
          { es: "¿Tenéis las llaves?", en: "Do you have the keys?" },
          { es: "Tenéis mucha suerte.", en: "You are very lucky." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "t*ie*nen",
        examples: [
          { es: "Ellos tienen un coche.", en: "They have a car." },
          { es: "Los niños tienen sed.", en: "The kids are thirsty." },
        ],
      },
      ],
    },
    {
      verb: "venir",
      meaning: "to come",
      note: "Double irregular, same shape as <b>tener</b>: <i>vengo / vienes</i>.",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "ven*g*o",
        examples: [
          { es: "Vengo de la oficina.", en: "I come from the office." },
          { es: "Vengo mañana.", en: "I'm coming tomorrow." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "v*ie*nes",
        examples: [
          { es: "¿Vienes conmigo?", en: "Are you coming with me?" },
          { es: "Vienes muy tarde.", en: "You come very late." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "v*ie*ne",
        examples: [
          { es: "Ana viene en tren.", en: "Ana comes by train." },
          { es: "El autobús viene ya.", en: "The bus is coming now." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "venimos",
        examples: [
          { es: "Venimos de la playa.", en: "We come from the beach." },
          { es: "Venimos a las siete.", en: "We come at seven." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "venís",
        examples: [
          { es: "¿Venís a la fiesta?", en: "Are you coming to the party?" },
          { es: "Venís con vuestros amigos.", en: "You come with your friends." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "v*ie*nen",
        examples: [
          { es: "Ellos vienen en coche.", en: "They come by car." },
          { es: "Los niños vienen del parque.", en: "The kids come from the park." },
        ],
      },
      ],
    },
    {
      verb: "decir",
      meaning: "to say, to tell",
      note: "Double irregular: <b>-go</b> in yo <i>and</i> <b>e → i</b> in the boot.",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "di*g*o",
        examples: [
          { es: "Digo la verdad.", en: "I tell the truth." },
          { es: "Siempre digo \"buenos días\".", en: "I always say \"good morning\"." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "d*i*ces",
        examples: [
          { es: "¿Qué dices?", en: "What are you saying?" },
          { es: "Dices cosas graciosas.", en: "You say funny things." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "d*i*ce",
        examples: [
          { es: "Ana dice que sí.", en: "Ana says yes." },
          { es: "El profesor dice la respuesta.", en: "The teacher says the answer." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "decimos",
        examples: [
          { es: "Decimos \"gracias\" siempre.", en: "We always say \"thank you\"." },
          { es: "No decimos mentiras.", en: "We don't tell lies." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "decís",
        examples: [
          { es: "¿Qué decís vosotros?", en: "What do you say?" },
          { es: "Decís la verdad.", en: "You tell the truth." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "d*i*cen",
        examples: [
          { es: "Ellos dicen que llueve.", en: "They say it's raining." },
          { es: "Los niños dicen \"hola\".", en: "The kids say \"hello\"." },
        ],
      },
      ],
    },
    ],
  },
  {
    id: 'g6',
    num: "7",
    label: "yo → -zco",
    pattern: "-acer / -ecer / -ocer / -ucir → …zco",
    rule: "Verbs ending in <b>-acer, -ecer, -ocer, -ucir</b> insert a <b>z</b> before the <b>c</b> — <b>only in yo</b>.",
    mnemonic: "See a vowel + <b>c</b> in the infinitive? The <b>yo</b> form grows a <b>z</b>: <b>cono<u>c</u>er → cono<u>zc</u>o</b>, <b>condu<u>c</u>ir → condu<u>zc</u>o</b>. Everything else is perfectly regular.",
    boot: [0],
    verbs: [
    {
      verb: "conocer",
      meaning: "to know (people/places), to meet",
      note: "<b>conocer</b> = know a person or place. <b>saber</b> = know a fact.",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "cono*zc*o",
        examples: [
          { es: "Conozco a Ana.", en: "I know Ana." },
          { es: "Conozco Madrid muy bien.", en: "I know Madrid very well." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "conoces",
        examples: [
          { es: "¿Conoces a mi hermano?", en: "Do you know my brother?" },
          { es: "Conoces bien la ciudad.", en: "You know the city well." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "conoce",
        examples: [
          { es: "Luis conoce el camino.", en: "Luis knows the way." },
          { es: "Ella conoce a mi familia.", en: "She knows my family." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "conocemos",
        examples: [
          { es: "Nos conocemos de la escuela.", en: "We know each other from school." },
          { es: "Conocemos un buen bar.", en: "We know a good bar." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "conocéis",
        examples: [
          { es: "¿Conocéis este restaurante?", en: "Do you know this restaurant?" },
          { es: "Conocéis a mis padres.", en: "You know my parents." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "conocen",
        examples: [
          { es: "Ellos conocen la verdad.", en: "They know the truth." },
          { es: "Los niños conocen a la profesora.", en: "The kids know the teacher." },
        ],
      },
      ],
    },
    {
      verb: "conducir",
      meaning: "to drive",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "condu*zc*o",
        examples: [
          { es: "Conduzco al trabajo.", en: "I drive to work." },
          { es: "No conduzco de noche.", en: "I don't drive at night." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "conduces",
        examples: [
          { es: "¿Conduces tú hoy?", en: "Are you driving today?" },
          { es: "Conduces muy rápido.", en: "You drive very fast." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "conduce",
        examples: [
          { es: "Ana conduce un coche rojo.", en: "Ana drives a red car." },
          { es: "Mi padre conduce despacio.", en: "My father drives slowly." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "conducimos",
        examples: [
          { es: "Conducimos a la playa.", en: "We drive to the beach." },
          { es: "Conducimos por turnos.", en: "We drive in turns." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "conducís",
        examples: [
          { es: "¿Conducís hasta Madrid?", en: "Are you driving to Madrid?" },
          { es: "Conducís con cuidado.", en: "You drive carefully." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "conducen",
        examples: [
          { es: "Ellos conducen un autobús.", en: "They drive a bus." },
          { es: "Mis amigos conducen bien.", en: "My friends drive well." },
        ],
      },
      ],
    },
    {
      verb: "traducir",
      meaning: "to translate",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "tradu*zc*o",
        examples: [
          { es: "Traduzco la carta.", en: "I translate the letter." },
          { es: "Traduzco del español al inglés.", en: "I translate from Spanish to English." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "traduces",
        examples: [
          { es: "¿Traduces esta palabra?", en: "Do you translate this word?" },
          { es: "Traduces muy bien.", en: "You translate very well." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "traduce",
        examples: [
          { es: "Ana traduce el menú.", en: "Ana translates the menu." },
          { es: "El móvil traduce todo.", en: "The phone translates everything." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "traducimos",
        examples: [
          { es: "Traducimos el texto juntos.", en: "We translate the text together." },
          { es: "Traducimos dos páginas al día.", en: "We translate two pages a day." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "traducís",
        examples: [
          { es: "¿Traducís la canción?", en: "Are you translating the song?" },
          { es: "Traducís sin diccionario.", en: "You translate without a dictionary." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "traducen",
        examples: [
          { es: "Ellos traducen libros.", en: "They translate books." },
          { es: "Los estudiantes traducen frases.", en: "The students translate sentences." },
        ],
      },
      ],
    },
    {
      verb: "producir",
      meaning: "to produce",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "produ*zc*o",
        examples: [
          { es: "Produzco vídeos.", en: "I produce videos." },
          { es: "Produzco mucho café en casa.", en: "I produce a lot of coffee at home." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "produces",
        examples: [
          { es: "¿Produces música?", en: "Do you produce music?" },
          { es: "Produces buenas ideas.", en: "You produce good ideas." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "produce",
        examples: [
          { es: "España produce aceite.", en: "Spain produces oil." },
          { es: "La fábrica produce coches.", en: "The factory produces cars." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "producimos",
        examples: [
          { es: "Producimos pan cada día.", en: "We produce bread every day." },
          { es: "Producimos nuestra energía.", en: "We produce our own energy." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "producís",
        examples: [
          { es: "¿Producís vino?", en: "Do you produce wine?" },
          { es: "Producís mucho trabajo.", en: "You produce a lot of work." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "producen",
        examples: [
          { es: "Ellos producen queso.", en: "They produce cheese." },
          { es: "Las abejas producen miel.", en: "Bees produce honey." },
        ],
      },
      ],
    },
    ],
  },
  {
    id: 'g7',
    num: "8",
    label: "Spelling change in yo",
    pattern: "g→j · gu→g · c→z",
    rule: "These are not really \"irregular\" — the spelling changes so the <b>sound</b> stays the same before the <b>-o</b> of yo.",
    mnemonic: "Sound first, spelling second: <b>co<u>g</u>er → co<u>j</u>o</b>, <b>diri<u>g</u>ir → diri<u>j</u>o</b>, <b>distin<u>gu</u>ir → distin<u>g</u>o</b>, <b>ven<u>c</u>er → ven<u>z</u>o</b>. Only <b>yo</b> is affected.",
    boot: [0],
    verbs: [
    {
      verb: "coger",
      meaning: "to take, to catch, to grab",
      note: "Very common in Spain (<i>coger el metro</i>). In parts of Latin America it is rude — use <b>tomar</b> there.",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "co*j*o",
        examples: [
          { es: "Cojo el metro cada día.", en: "I take the subway every day." },
          { es: "Cojo mi abrigo.", en: "I grab my coat." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "coges",
        examples: [
          { es: "¿Coges el autobús?", en: "Do you take the bus?" },
          { es: "Coges la pelota.", en: "You catch the ball." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "coge",
        examples: [
          { es: "Ana coge un taxi.", en: "Ana takes a taxi." },
          { es: "El niño coge la mano de su madre.", en: "The boy takes his mother's hand." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "cogemos",
        examples: [
          { es: "Cogemos el tren de las nueve.", en: "We take the nine o'clock train." },
          { es: "Cogemos las maletas.", en: "We grab the suitcases." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "cogéis",
        examples: [
          { es: "¿Cogéis el ascensor?", en: "Are you taking the lift?" },
          { es: "Cogéis vuestras cosas.", en: "You grab your things." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "cogen",
        examples: [
          { es: "Ellos cogen el avión hoy.", en: "They take the plane today." },
          { es: "Los niños cogen sus mochilas.", en: "The kids grab their backpacks." },
        ],
      },
      ],
    },
    {
      verb: "dirigir",
      meaning: "to direct, to manage, to lead",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "diri*j*o",
        examples: [
          { es: "Dirijo un equipo pequeño.", en: "I lead a small team." },
          { es: "Dirijo la reunión.", en: "I run the meeting." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "diriges",
        examples: [
          { es: "¿Diriges la empresa?", en: "Do you manage the company?" },
          { es: "Diriges muy bien.", en: "You lead very well." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "dirige",
        examples: [
          { es: "Ana dirige la orquesta.", en: "Ana conducts the orchestra." },
          { es: "Él dirige el proyecto.", en: "He directs the project." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "dirigimos",
        examples: [
          { es: "Dirigimos el grupo juntos.", en: "We lead the group together." },
          { es: "Nos dirigimos a la salida.", en: "We head for the exit." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "dirigís",
        examples: [
          { es: "¿Dirigís la clase hoy?", en: "Are you leading the class today?" },
          { es: "Dirigís el trabajo.", en: "You direct the work." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "dirigen",
        examples: [
          { es: "Ellos dirigen la escuela.", en: "They run the school." },
          { es: "Los jefes dirigen la oficina.", en: "The bosses run the office." },
        ],
      },
      ],
    },
    {
      verb: "distinguir",
      meaning: "to distinguish, to tell apart",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "distin*g*o",
        examples: [
          { es: "Distingo los colores.", en: "I tell the colors apart." },
          { es: "No distingo a los gemelos.", en: "I can't tell the twins apart." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "distingues",
        examples: [
          { es: "¿Distingues la diferencia?", en: "Do you see the difference?" },
          { es: "Distingues bien las voces.", en: "You tell the voices apart well." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "distingue",
        examples: [
          { es: "Ana distingue el vino bueno.", en: "Ana can tell good wine." },
          { es: "Él no distingue los sabores.", en: "He can't tell the flavors apart." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "distinguimos",
        examples: [
          { es: "Distinguimos las dos casas.", en: "We tell the two houses apart." },
          { es: "Distinguimos bien los acentos.", en: "We tell the accents apart well." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "distinguís",
        examples: [
          { es: "¿Distinguís los sonidos?", en: "Do you tell the sounds apart?" },
          { es: "Distinguís lo importante.", en: "You spot what's important." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "distinguen",
        examples: [
          { es: "Ellos distinguen los pájaros.", en: "They tell the birds apart." },
          { es: "Los niños distinguen las formas.", en: "The kids tell the shapes apart." },
        ],
      },
      ],
    },
    {
      verb: "vencer",
      meaning: "to defeat, to win, to expire",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "ven*z*o",
        examples: [
          { es: "Venzo mi miedo.", en: "I defeat my fear." },
          { es: "Siempre venzo al ajedrez.", en: "I always win at chess." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "vences",
        examples: [
          { es: "¿Vences a tu hermano?", en: "Do you beat your brother?" },
          { es: "Vences con facilidad.", en: "You win easily." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "vence",
        examples: [
          { es: "Ana vence en la carrera.", en: "Ana wins the race." },
          { es: "El contrato vence en junio.", en: "The contract expires in June." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "vencemos",
        examples: [
          { es: "Vencemos al otro equipo.", en: "We beat the other team." },
          { es: "Vencemos las dificultades.", en: "We overcome the difficulties." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "vencéis",
        examples: [
          { es: "¿Vencéis siempre?", en: "Do you always win?" },
          { es: "Vencéis sin problema.", en: "You win without a problem." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "vencen",
        examples: [
          { es: "Ellos vencen dos a cero.", en: "They win two to nil." },
          { es: "Los billetes vencen mañana.", en: "The tickets expire tomorrow." },
        ],
      },
      ],
    },
    ],
  },
  {
    id: 'g8',
    num: "9",
    label: "-uir → -uy-",
    pattern: "u > uy",
    rule: "Verbs ending in <b>-uir</b> add a <b>y</b> inside the boot.",
    mnemonic: "<b>incl<u>u</u>ir → incl<u>uy</u>o</b>. The <b>y</b> is a bridge between two vowels so they don't crash. Nosotros/vosotros keep plain <b>u</b>: <i>incluimos, incluís</i>. Same family: <i>construir, destruir, huir</i>.",
    boot: [0,1,2,5],
    verbs: [
    {
      verb: "incluir",
      meaning: "to include",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "incl*uy*o",
        examples: [
          { es: "Incluyo el postre.", en: "I include the dessert." },
          { es: "Te incluyo en la lista.", en: "I include you on the list." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "incl*uy*es",
        examples: [
          { es: "¿Incluyes el IVA?", en: "Do you include VAT?" },
          { es: "Incluyes a todos.", en: "You include everyone." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "incl*uy*e",
        examples: [
          { es: "El precio incluye el desayuno.", en: "The price includes breakfast." },
          { es: "El libro incluye fotos.", en: "The book includes photos." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "incluimos",
        examples: [
          { es: "Incluimos dos ejemplos.", en: "We include two examples." },
          { es: "Nos incluimos en el grupo.", en: "We include ourselves in the group." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "incluís",
        examples: [
          { es: "¿Incluís la bebida?", en: "Do you include the drink?" },
          { es: "Incluís mucha información.", en: "You include a lot of information." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "incl*uy*en",
        examples: [
          { es: "Ellos incluyen el transporte.", en: "They include transport." },
          { es: "Los hoteles incluyen el wifi.", en: "The hotels include wifi." },
        ],
      },
      ],
    },
    ],
  },
  {
    id: 'g9',
    num: "10",
    label: "Accent on the stem",
    pattern: "í / ú (hiato)",
    rule: "No new letters — the stem vowel just takes a <b>written accent</b> inside the boot, so it is pronounced separately.",
    mnemonic: "Boot shape again, but the change is an <b>accent</b>: <b>act<u>ú</u>o</b>, <b>env<u>í</u>o</b>, <b>re<u>ú</u>no</b>. Nosotros/vosotros lose the accent: <i>actuamos, enviamos, reunimos</i>.",
    boot: [0,1,2,5],
    verbs: [
    {
      verb: "actuar",
      meaning: "to act, to perform",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "act*ú*o",
        examples: [
          { es: "Actúo en una obra.", en: "I act in a play." },
          { es: "Actúo con calma.", en: "I act calmly." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "act*ú*as",
        examples: [
          { es: "¿Actúas en el teatro?", en: "Do you act in the theater?" },
          { es: "Actúas muy rápido.", en: "You act very fast." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "act*ú*a",
        examples: [
          { es: "Ana actúa en la película.", en: "Ana acts in the movie." },
          { es: "Él actúa como un niño.", en: "He acts like a child." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "actuamos",
        examples: [
          { es: "Actuamos esta noche.", en: "We perform tonight." },
          { es: "Actuamos juntos siempre.", en: "We always act together." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "actuáis",
        examples: [
          { es: "¿Actuáis en la fiesta?", en: "Are you performing at the party?" },
          { es: "Actuáis muy bien.", en: "You act very well." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "act*ú*an",
        examples: [
          { es: "Ellos actúan en la tele.", en: "They act on TV." },
          { es: "Los niños actúan sin miedo.", en: "The kids act without fear." },
        ],
      },
      ],
    },
    {
      verb: "enviar",
      meaning: "to send",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "env*í*o",
        examples: [
          { es: "Envío un correo.", en: "I send an email." },
          { es: "Te envío las fotos.", en: "I send you the photos." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "env*í*as",
        examples: [
          { es: "¿Envías el paquete hoy?", en: "Are you sending the package today?" },
          { es: "Envías muchos mensajes.", en: "You send a lot of messages." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "env*í*a",
        examples: [
          { es: "Ana envía una carta.", en: "Ana sends a letter." },
          { es: "La empresa envía la factura.", en: "The company sends the invoice." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "enviamos",
        examples: [
          { es: "Enviamos el informe mañana.", en: "We send the report tomorrow." },
          { es: "Enviamos flores a mamá.", en: "We send flowers to mom." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "enviáis",
        examples: [
          { es: "¿Enviáis los libros?", en: "Are you sending the books?" },
          { es: "Enviáis todo por email.", en: "You send everything by email." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "env*í*an",
        examples: [
          { es: "Ellos envían regalos.", en: "They send gifts." },
          { es: "Los profesores envían las notas.", en: "The teachers send the grades." },
        ],
      },
      ],
    },
    {
      verb: "reunir",
      meaning: "to gather, to bring together",
      note: "Usually reflexive: <b>reunirse</b> = to meet up (<i>me reúno con Ana</i>).",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "re*ú*no",
        examples: [
          { es: "Reúno a mis amigos.", en: "I gather my friends." },
          { es: "Me reúno con Ana a las cinco.", en: "I meet with Ana at five." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "re*ú*nes",
        examples: [
          { es: "¿Reúnes al equipo?", en: "Are you gathering the team?" },
          { es: "Te reúnes con el jefe.", en: "You meet with the boss." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "re*ú*ne",
        examples: [
          { es: "Ana reúne a la familia.", en: "Ana brings the family together." },
          { es: "Él reúne mucho dinero.", en: "He gathers a lot of money." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "reunimos",
        examples: [
          { es: "Nos reunimos los lunes.", en: "We meet on Mondays." },
          { es: "Reunimos todo el material.", en: "We gather all the material." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "reunís",
        examples: [
          { es: "¿Os reunís hoy?", en: "Are you meeting today?" },
          { es: "Reunís a mucha gente.", en: "You bring a lot of people together." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "re*ú*nen",
        examples: [
          { es: "Ellos reúnen a los niños.", en: "They gather the kids." },
          { es: "Se reúnen cada semana.", en: "They meet every week." },
        ],
      },
      ],
    },
    ],
  },
  {
    id: 'g10',
    num: "11",
    label: "Totally irregular",
    pattern: "no pattern — memorize",
    rule: "No boot, no rule. These four change everywhere and must be learned as songs.",
    mnemonic: "Chant them: <b>soy-eres-es-somos-sois-son</b> · <b>estoy-estás-está-estamos-estáis-están</b> · <b>voy-vas-va-vamos-vais-van</b> · <b>he-has-ha-hemos-habéis-han</b>. Notice <b>ser / ir / dar / estar</b> all start yo with <b>-oy</b>: <i>soy, voy, doy, estoy</i>.",
    boot: [0,1,2,3,4,5],
    verbs: [
    {
      verb: "ser",
      meaning: "to be (permanent: identity, origin)",
      note: "<b>ser</b> = what you ARE. <b>estar</b> = how/where you are right now.",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "*soy*",
        examples: [
          { es: "Soy de Irán.", en: "I am from Iran." },
          { es: "Soy programador.", en: "I am a programmer." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "*eres*",
        examples: [
          { es: "¿Eres estudiante?", en: "Are you a student?" },
          { es: "Eres muy amable.", en: "You are very kind." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "*es*",
        examples: [
          { es: "Ana es profesora.", en: "Ana is a teacher." },
          { es: "Hoy es martes.", en: "Today is Tuesday." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "*somos*",
        examples: [
          { es: "Somos amigos.", en: "We are friends." },
          { es: "Somos cuatro en casa.", en: "We are four at home." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "*sois*",
        examples: [
          { es: "¿Sois hermanos?", en: "Are you brothers?" },
          { es: "Sois muy simpáticos.", en: "You are very nice." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "*son*",
        examples: [
          { es: "Ellos son de España.", en: "They are from Spain." },
          { es: "Los niños son pequeños.", en: "The kids are small." },
        ],
      },
      ],
    },
    {
      verb: "estar",
      meaning: "to be (state, location)",
      note: "Accents on every form except <b>estoy</b> and <b>estamos</b>.",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "*estoy*",
        examples: [
          { es: "Estoy en casa.", en: "I am at home." },
          { es: "Estoy cansado.", en: "I am tired." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "*estás*",
        examples: [
          { es: "¿Cómo estás?", en: "How are you?" },
          { es: "Estás en la oficina.", en: "You are at the office." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "*está*",
        examples: [
          { es: "Ana está en el parque.", en: "Ana is in the park." },
          { es: "El café está caliente.", en: "The coffee is hot." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "*estamos*",
        examples: [
          { es: "Estamos aquí.", en: "We are here." },
          { es: "Estamos muy contentos.", en: "We are very happy." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "*estáis*",
        examples: [
          { es: "¿Dónde estáis?", en: "Where are you?" },
          { es: "Estáis en clase.", en: "You are in class." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "*están*",
        examples: [
          { es: "Ellos están en el bar.", en: "They are at the bar." },
          { es: "Las llaves están en la mesa.", en: "The keys are on the table." },
        ],
      },
      ],
    },
    {
      verb: "ir",
      meaning: "to go",
      note: "<b>ir a</b> + infinitive = the easy future: <i>voy a comer</i> = I'm going to eat.",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "*voy*",
        examples: [
          { es: "Voy al trabajo.", en: "I go to work." },
          { es: "Voy a comer ahora.", en: "I'm going to eat now." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "*vas*",
        examples: [
          { es: "¿Vas al cine?", en: "Are you going to the cinema?" },
          { es: "Vas muy rápido.", en: "You go very fast." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "*va*",
        examples: [
          { es: "Ana va a la escuela.", en: "Ana goes to school." },
          { es: "El autobús va al centro.", en: "The bus goes downtown." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "*vamos*",
        examples: [
          { es: "Vamos a la playa.", en: "We go to the beach." },
          { es: "¡Vamos!", en: "Let's go!" },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "*vais*",
        examples: [
          { es: "¿Vais a la fiesta?", en: "Are you going to the party?" },
          { es: "Vais en tren.", en: "You go by train." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "*van*",
        examples: [
          { es: "Ellos van al gimnasio.", en: "They go to the gym." },
          { es: "Los niños van al parque.", en: "The kids go to the park." },
        ],
      },
      ],
    },
    {
      verb: "haber",
      meaning: "to have (auxiliary) / there is, there are",
      note: "Not used alone: <b>he + participio</b> (<i>he comido</i>). The special form <b>hay</b> = \"there is / there are\".",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "*he*",
        examples: [
          { es: "He comido ya.", en: "I have already eaten." },
          { es: "He estado en Madrid.", en: "I have been to Madrid." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "*has*",
        examples: [
          { es: "¿Has dormido bien?", en: "Have you slept well?" },
          { es: "Has hecho los deberes.", en: "You have done the homework." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "*ha* / *hay*",
        examples: [
          { es: "Ana ha llegado.", en: "Ana has arrived." },
          { es: "Hay un café en la esquina.", en: "There is a café on the corner." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "*hemos*",
        examples: [
          { es: "Hemos visto la película.", en: "We have seen the movie." },
          { es: "Hemos trabajado mucho.", en: "We have worked a lot." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "*habéis*",
        examples: [
          { es: "¿Habéis comido?", en: "Have you eaten?" },
          { es: "Habéis venido pronto.", en: "You have come early." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "*han*",
        examples: [
          { es: "Ellos han salido.", en: "They have gone out." },
          { es: "Los niños han jugado mucho.", en: "The kids have played a lot." },
        ],
      },
      ],
    },
    ],
  },
  {
    id: 'g11',
    num: "12",
    label: "Strange yo, regular rest",
    pattern: "yo only",
    rule: "Only the <b>yo</b> form is odd; the other five are completely regular.",
    mnemonic: "Three quick ones: <b>dar → doy</b>, <b>ver → veo</b>, <b>saber → sé</b>. Learn just the yo form and you own the verb. (<b>sé</b> carries an accent so it isn't confused with <i>se</i>.)",
    boot: [0],
    verbs: [
    {
      verb: "dar",
      meaning: "to give",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "*doy*",
        examples: [
          { es: "Doy un regalo a Ana.", en: "I give Ana a gift." },
          { es: "Doy clases de inglés.", en: "I give English lessons." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "das",
        examples: [
          { es: "¿Me das agua?", en: "Will you give me water?" },
          { es: "Das buenos consejos.", en: "You give good advice." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "da",
        examples: [
          { es: "Ana da un beso a su madre.", en: "Ana gives her mother a kiss." },
          { es: "El profesor da la tarea.", en: "The teacher gives the homework." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "damos",
        examples: [
          { es: "Damos las gracias.", en: "We give thanks." },
          { es: "Damos un paseo.", en: "We take a walk." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "dais",
        examples: [
          { es: "¿Dais dinero?", en: "Do you give money?" },
          { es: "Dais mucha ayuda.", en: "You give a lot of help." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "dan",
        examples: [
          { es: "Ellos dan una fiesta.", en: "They throw a party." },
          { es: "Los niños dan las flores.", en: "The kids give the flowers." },
        ],
      },
      ],
    },
    {
      verb: "ver",
      meaning: "to see, to watch",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "*veo*",
        examples: [
          { es: "Veo la tele por la noche.", en: "I watch TV at night." },
          { es: "No veo nada.", en: "I see nothing." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "ves",
        examples: [
          { es: "¿Ves la luna?", en: "Do you see the moon?" },
          { es: "Ves muchas series.", en: "You watch a lot of series." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "ve",
        examples: [
          { es: "Ana ve una película.", en: "Ana watches a movie." },
          { es: "Él ve el problema.", en: "He sees the problem." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "vemos",
        examples: [
          { es: "Nos vemos mañana.", en: "See you tomorrow." },
          { es: "Vemos el partido juntos.", en: "We watch the match together." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "veis",
        examples: [
          { es: "¿Veis el mar?", en: "Do you see the sea?" },
          { es: "Veis la tele mucho.", en: "You watch TV a lot." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "ven",
        examples: [
          { es: "Ellos ven las fotos.", en: "They look at the photos." },
          { es: "Los niños ven dibujos.", en: "The kids watch cartoons." },
        ],
      },
      ],
    },
    {
      verb: "saber",
      meaning: "to know (facts), to know how to",
      note: "<b>saber</b> + info/skill. <b>conocer</b> + person/place.",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "*sé*",
        examples: [
          { es: "Sé la respuesta.", en: "I know the answer." },
          { es: "Sé hablar un poco de español.", en: "I know how to speak a little Spanish." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "sabes",
        examples: [
          { es: "¿Sabes dónde está?", en: "Do you know where it is?" },
          { es: "Sabes cocinar muy bien.", en: "You know how to cook very well." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "sabe",
        examples: [
          { es: "Ana sabe mi nombre.", en: "Ana knows my name." },
          { es: "Él sabe conducir.", en: "He knows how to drive." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "sabemos",
        examples: [
          { es: "Sabemos la verdad.", en: "We know the truth." },
          { es: "No sabemos la hora.", en: "We don't know the time." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "sabéis",
        examples: [
          { es: "¿Sabéis la dirección?", en: "Do you know the address?" },
          { es: "Sabéis mucho de música.", en: "You know a lot about music." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "saben",
        examples: [
          { es: "Ellos saben mi secreto.", en: "They know my secret." },
          { es: "Los niños saben contar.", en: "The kids know how to count." },
        ],
      },
      ],
    },
    ],
  },
  {
    id: 'g12',
    num: "13",
    label: "Careful: regular in present",
    pattern: "present regular · participle irregular",
    rule: "<b>leer</b> appears in the irregular list of the book, but in the <b>present</b> it is completely regular. The irregular part is its participle: <b>leído</b>.",
    mnemonic: "Don't waste memory on <b>leer</b> in the present: <i>leo, lees, lee, leemos, leéis, leen</i> — normal <b>-er</b> endings. Only remember <b>he le<u>í</u>do</b> (accent on the í).",
    boot: null,
    verbs: [
    {
      verb: "leer",
      meaning: "to read",
      note: "Participio: <b>leído</b> → <i>he leído el libro</i>.",
      forms: [
      {
        person: "yo",
        pronoun: "yo",
        form: "leo",
        examples: [
          { es: "Leo un libro cada mes.", en: "I read a book every month." },
          { es: "Leo antes de dormir.", en: "I read before sleeping." },
        ],
      },
      {
        person: "tu",
        pronoun: "tú",
        form: "lees",
        examples: [
          { es: "¿Lees en español?", en: "Do you read in Spanish?" },
          { es: "Lees muy rápido.", en: "You read very fast." },
        ],
      },
      {
        person: "el",
        pronoun: "él / ella / usted",
        form: "lee",
        examples: [
          { es: "Ana lee el periódico.", en: "Ana reads the newspaper." },
          { es: "El niño lee en voz alta.", en: "The boy reads out loud." },
        ],
      },
      {
        person: "nos",
        pronoun: "nosotros / nosotras",
        form: "leemos",
        examples: [
          { es: "Leemos juntos por la noche.", en: "We read together at night." },
          { es: "Leemos las noticias.", en: "We read the news." },
        ],
      },
      {
        person: "vos",
        pronoun: "vosotros / vosotras",
        form: "leéis",
        examples: [
          { es: "¿Leéis mucho?", en: "Do you read a lot?" },
          { es: "Leéis el mismo libro.", en: "You read the same book." },
        ],
      },
      {
        person: "ellos",
        pronoun: "ellos / ellas / ustedes",
        form: "leen",
        examples: [
          { es: "Ellos leen en el tren.", en: "They read on the train." },
          { es: "Los niños leen cuentos.", en: "The kids read stories." },
        ],
      },
      ],
    },
    ],
  },
];

export const VERB_COUNT = 56;
export const GROUP_COUNT = 13;
