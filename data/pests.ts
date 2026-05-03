export interface Pest {
  slug: string
  name: string
  pluralName: string
  icon: string
  shortDescription: string
  heroTitle: string
  heroSubtitle: string
  problemDescription: string
  dangers: string[]
  whyActFast: string
  solutionDescription: string
  benefits: string[]
  faqs: { question: string; answer: string }[]
  metaTitle: string
  metaDescription: string
}

export const pests: Pest[] = [
  {
    slug: 'bedwantsen',
    name: 'Bedwantsen',
    pluralName: 'bedwantsen',
    icon: '🛏️',
    shortDescription: 'Bedwantsen verspreiden zich snel en veroorzaken jeukende beten. Professionele bestrijding is essentieel.',
    heroTitle: 'Last van bedwantsen?',
    heroSubtitle: 'Wij verwijderen bedwantsen snel, effectief en discreet. Vandaag nog geholpen!',
    problemDescription: 'Bedwantsen zijn kleine, platte insecten die zich voeden met menselijk bloed. Ze verstoppen zich in matrassen, bedframes en meubilair. Een bedwantsenplaag kan zich razendsnel verspreiden en is zonder professionele hulp bijna onmogelijk te bestrijden.',
    dangers: [
      'Jeukende, rode beten op de huid',
      'Slaapproblemen en psychische stress',
      'Snelle verspreiding door het hele huis',
      'Allergische reacties bij gevoelige personen',
    ],
    whyActFast: 'Bedwantsen vermenigvuldigen zich razendsnel. Eén vrouwtje legt tot 500 eieren. Hoe langer u wacht, hoe groter en duurder het probleem wordt. Direct handelen bespaart u tijd, geld en stress.',
    solutionDescription: 'Onze gecertificeerde specialisten gebruiken een combinatie van warmtebehandeling en gerichte bestrijdingsmiddelen om bedwantsen in alle levensstadia te elimineren. We inspecteren grondig, behandelen effectief en geven garantie op het resultaat.',
    benefits: [
      'Volledige eliminatie van alle bedwantsen',
      'Warmtebehandeling zonder schadelijke chemicaliën',
      'Discrete service – onopvallende voertuigen',
      'Garantie op resultaat',
    ],
    faqs: [
      { question: 'Hoe herken ik bedwantsen?', answer: 'Bedwantsen zijn platte, ovale insecten van 4-7mm. U herkent ze aan kleine bloedvlekjes op uw lakens, donkere uitwerpselen op de matras, en jeukende beten in rijen op uw huid.' },
      { question: 'Hoe lang duurt een bedwantsenbehandeling?', answer: 'Een professionele behandeling duurt gemiddeld 2-4 uur, afhankelijk van de ernst van de plaag. In de meeste gevallen is één behandeling voldoende.' },
      { question: 'Kan ik bedwantsen zelf bestrijden?', answer: 'Bedwantsen zijn extreem moeilijk zelf te bestrijden. Producten uit de winkel doden vaak alleen volwassen exemplaren, niet de eieren. Professionele bestrijding is de enige effectieve oplossing.' },
      { question: 'Wat kost bedwantsenbestrijding?', answer: 'De kosten hangen af van de grootte van de ruimte en de ernst van de plaag. Neem contact op voor een vrijblijvende offerte.' },
    ],
    metaTitle: 'Bedwantsen Bestrijding | Snel & Effectief | Jansen Ongediertebestrijding',
    metaDescription: 'Last van bedwantsen? Onze specialisten helpen u vandaag nog. Professionele bestrijding met garantie. Bel nu: 085 060 4269.',
  },
  {
    slug: 'ratten',
    name: 'Ratten',
    pluralName: 'ratten',
    icon: '🐀',
    shortDescription: 'Ratten vormen een ernstig gezondheidsrisico en veroorzaken schade aan uw woning. Snel handelen is cruciaal.',
    heroTitle: 'Last van ratten?',
    heroSubtitle: 'Professionele rattenbestrijding met garantie. Binnen 24 uur ter plaatse!',
    problemDescription: 'Ratten zijn intelligente knaagdieren die ernstige schade kunnen aanrichten aan uw woning, bedrading en leidingen. Ze verspreiden ziektes en vermenigvuldigen zich razendsnel. Een rattenplaag vereist directe, professionele actie.',
    dangers: [
      'Verspreiding van ernstige ziektes (Leptospirose, Salmonella)',
      'Schade aan bedrading, leidingen en isolatie',
      'Brandgevaar door aangevreten kabels',
      'Verontreiniging van voedsel en oppervlakken',
    ],
    whyActFast: 'Ratten kunnen tot 12 jongen per worp krijgen en worden al na 3 maanden geslachtsrijp. Een enkel stel ratten kan binnen een jaar uitgroeien tot een kolonie van honderden dieren.',
    solutionDescription: 'Wij starten met een grondige inspectie om de omvang van het probleem vast te stellen. Vervolgens plaatsen we professionele bestrijdingsmiddelen en sluiten we toegangspunten af. We monitoren het resultaat en geven garantie.',
    benefits: [
      'Grondige inspectie en probleemanalyse',
      'Afsluiten van toegangspunten',
      'Veilige en effectieve bestrijdingsmethoden',
      'Monitoring en garantie op resultaat',
    ],
    faqs: [
      { question: 'Hoe weet ik of ik ratten heb?', answer: 'Tekenen van ratten zijn: keutels (donker, 1-2cm), knaagsporen, geluid in muren of plafonds (vooral \'s nachts), vette strepen langs muren, en een muffe geur.' },
      { question: 'Hoe snel kunnen jullie komen voor ratten?', answer: 'Wij bieden spoedservice en kunnen in de meeste gevallen binnen 24 uur bij u ter plaatse zijn.' },
      { question: 'Is rattenbestrijding veilig voor huisdieren?', answer: 'Ja, wij gebruiken methoden die veilig zijn voor uw huisdieren. We adviseren u over de juiste voorzorgsmaatregelen.' },
      { question: 'Hoe voorkom ik ratten in huis?', answer: 'Zorg dat voedsel onbereikbaar is, dicht gaten en kieren af (ratten passen door openingen van 2cm), en houd uw tuin en omgeving schoon.' },
    ],
    metaTitle: 'Rattenbestrijding | Professioneel & Snel | Jansen Ongediertebestrijding',
    metaDescription: 'Ratten in huis? Onze experts zijn binnen 24 uur ter plaatse. Veilige, effectieve bestrijding met garantie. Bel: 085 060 4269.',
  },
  {
    slug: 'muizen',
    name: 'Muizen',
    pluralName: 'muizen',
    icon: '🐭',
    shortDescription: 'Muizen veroorzaken overlast, schade en gezondheidsrisico\'s. Professionele aanpak voor blijvend resultaat.',
    heroTitle: 'Last van muizen?',
    heroSubtitle: 'Effectieve muizenbestrijding met blijvend resultaat. Direct geholpen!',
    problemDescription: 'Muizen zijn een van de meest voorkomende ongedierte in Nederlandse huizen. Ze knagen aan alles, verontreinigen voedsel en kunnen ziektes overdragen. Door hun kleine formaat kunnen ze door de kleinste openingen binnenkomen.',
    dangers: [
      'Verspreiding van ziektes via uitwerpselen en urine',
      'Schade aan bedrading en isolatiemateriaal',
      'Verontreiniging van voedselvoorraden',
      'Snelle voortplanting (tot 10 worpen per jaar)',
    ],
    whyActFast: 'Eén muizenpaar kan in een jaar tijd uitgroeien tot meer dan 2.000 nakomelingen. Hoe langer u wacht, hoe groter het probleem wordt. Professioneel ingrijpen voorkomt een onbeheersbare situatie.',
    solutionDescription: 'We voeren een uitgebreide inspectie uit, bepalen de beste aanpak en gebruiken professionele vallen en bestrijdingsmiddelen. Daarnaast adviseren we u over het muisdicht maken van uw woning.',
    benefits: [
      'Snelle en effectieve bestrijding',
      'Advies over muisdicht maken',
      'Kindvriendelijke en huisdierveilige methoden',
      'Nazorg en garantie',
    ],
    faqs: [
      { question: 'Hoe komen muizen mijn huis binnen?', answer: 'Muizen passen door openingen van slechts 6-7 millimeter. Ze komen binnen via scheuren in de gevel, openingen rond leidingen, onder deuren en via het riool.' },
      { question: 'Zijn muizen gevaarlijk?', answer: 'Ja, muizen kunnen ziektes overdragen via hun uitwerpselen, urine en speeksel. Daarnaast veroorzaken ze schade door te knagen aan bedrading en isolatie.' },
      { question: 'Hoe snel zijn muizen weg na behandeling?', answer: 'Na professionele behandeling zijn de meeste muizen binnen 1-2 weken volledig verdwenen. We monitoren het resultaat en komen terug indien nodig.' },
      { question: 'Wat kost muizenbestrijding?', answer: 'De kosten variëren afhankelijk van de omvang van het probleem. Neem contact op voor een vrijblijvende prijsopgave.' },
    ],
    metaTitle: 'Muizenbestrijding | Snel & Vakkundig | Jansen Ongediertebestrijding',
    metaDescription: 'Muizen in huis? Wij helpen u snel en effectief. Professionele bestrijding met garantie op resultaat. Bel: 085 060 4269.',
  },
  {
    slug: 'wespen',
    name: 'Wespen',
    pluralName: 'wespen',
    icon: '🐝',
    shortDescription: 'Wespennesten vormen een direct gevaar. Laat ze veilig en professioneel verwijderen.',
    heroTitle: 'Last van wespen?',
    heroSubtitle: 'Veilige verwijdering van wespennesten. Dezelfde dag nog geholpen!',
    problemDescription: 'Wespen kunnen agressief zijn, vooral in de zomer en het najaar. Een wespennest in of rond uw woning vormt een direct gevaar voor u en uw gezin. Zelf verwijderen is levensgevaarlijk en sterk af te raden.',
    dangers: [
      'Pijnlijke steken met risico op allergische reacties',
      'Gevaar voor kinderen en huisdieren',
      'Anafylactische shock bij allergische personen',
      'Agressief gedrag bij verstoring van het nest',
    ],
    whyActFast: 'Een wespennest kan in de piek tot 10.000 wespen bevatten. Naarmate het seizoen vordert, wordt het nest groter en de wespen agressiever. Vroegtijdig verwijderen is veiliger en eenvoudiger.',
    solutionDescription: 'Onze specialisten verwijderen wespennesten veilig en snel, met professionele beschermingsmiddelen en technieken. We zorgen ervoor dat alle wespen worden geëlimineerd en het nest volledig wordt verwijderd.',
    benefits: [
      'Veilige verwijdering door specialisten',
      'Dezelfde dag nog geholpen',
      'Geen gevaar voor u of uw gezin',
      'Preventief advies tegen nieuwe nesten',
    ],
    faqs: [
      { question: 'Kan ik een wespennest zelf verwijderen?', answer: 'Dit raden wij sterk af. Wespen worden agressief wanneer hun nest wordt verstoord. Professionele verwijdering met beschermende kleding en juist gereedschap is de veiligste optie.' },
      { question: 'Hoe snel kunnen jullie een wespennest verwijderen?', answer: 'In de meeste gevallen kunnen wij dezelfde dag nog langskomen om het wespennest te verwijderen.' },
      { question: 'Wat moet ik doen als ik gestoken word?', answer: 'Verwijder de angel indien aanwezig, koel de plek en neem een antihistamine. Bij hevige reacties (ademhalingsproblemen, zwelling in gezicht/keel) bel direct 112.' },
      { question: 'Komen wespen terug na verwijdering?', answer: 'Na professionele verwijdering van het nest komen de wespen niet terug op dezelfde plek. We geven advies om nieuwe nesten te voorkomen.' },
    ],
    metaTitle: 'Wespenbestrijding & Nestverwijdering | Jansen Ongediertebestrijding',
    metaDescription: 'Wespennest verwijderen? Onze specialisten helpen dezelfde dag nog. Veilig en professioneel. Bel: 085 060 4269.',
  },
  {
    slug: 'mieren',
    name: 'Mieren',
    pluralName: 'mieren',
    icon: '🐜',
    shortDescription: 'Mierenplaag in huis? Wij bestrijden de hele kolonie voor een blijvend resultaat.',
    heroTitle: 'Last van mieren?',
    heroSubtitle: 'Professionele mierenbestrijding die de hele kolonie aanpakt. Snel en effectief!',
    problemDescription: 'Mieren leven in grote kolonies en kunnen snel een plaag vormen in uw woning. Ze komen af op voedsel en vocht, en leggen geursporen aan waardoor steeds meer mieren de weg naar binnen vinden. Supermarktmiddelen bestrijden vaak alleen de zichtbare mieren, niet de kolonie.',
    dangers: [
      'Verontreiniging van voedsel',
      'Schade aan houtwerk (houtvretende mieren)',
      'Overlast door grote aantallen',
      'Moeilijk zelf te bestrijden door verborgen nesten',
    ],
    whyActFast: 'Een mierenkolonie kan duizenden tot miljoenen individuen bevatten. Zolang de koningin leeft, blijft de kolonie groeien. Alleen professionele bestrijding pakt het probleem bij de bron aan.',
    solutionDescription: 'We identificeren de mierensoort en lokaliseren het nest. Met professionele lokmiddelen bestrijden we de gehele kolonie, inclusief de koningin. Zo voorkomen we dat de plaag terugkeert.',
    benefits: [
      'Bestrijding van de hele kolonie',
      'Identificatie van de mierensoort',
      'Veilig voor kinderen en huisdieren',
      'Preventief advies',
    ],
    faqs: [
      { question: 'Waarom werken supermarktmiddelen niet tegen mieren?', answer: 'Middelen uit de supermarkt doden vaak alleen de mieren die u ziet. De kolonie en koningin blijven intact, waardoor het probleem steeds terugkeert. Professionele middelen bereiken de hele kolonie.' },
      { question: 'Hoe lang duurt mierenbestrijding?', answer: 'Het plaatsen van de bestrijdingsmiddelen duurt ongeveer 30-60 minuten. Het volledige effect is binnen 1-2 weken zichtbaar wanneer de gehele kolonie is geëlimineerd.' },
      { question: 'Zijn er mieren die schade veroorzaken aan mijn huis?', answer: 'Ja, met name de houtmier (Camponotus) kan ernstige schade veroorzaken aan houten constructies. Als u houtmieren vermoedt, is snelle actie belangrijk.' },
      { question: 'Hoe voorkom ik mieren in huis?', answer: 'Houd uw keuken schoon, bewaar voedsel in afgesloten bakken, dicht kieren en naden af, en verwijder overhangende takken die contact maken met uw gevel.' },
    ],
    metaTitle: 'Mierenbestrijding | Hele Kolonie Aanpakken | Jansen Ongediertebestrijding',
    metaDescription: 'Mieren in huis? Wij bestrijden de hele kolonie, inclusief de koningin. Blijvend resultaat gegarandeerd. Bel: 085 060 4269.',
  },
  {
    slug: 'kakkerlakken',
    name: 'Kakkerlakken',
    pluralName: 'kakkerlakken',
    icon: '🪳',
    shortDescription: 'Kakkerlakken zijn een ernstig hygieënerisico. Snelle professionele bestrijding is essentieel.',
    heroTitle: 'Last van kakkerlakken?',
    heroSubtitle: 'Professionele kakkerlakenbestrijding met gegarandeerd resultaat. Direct actie!',
    problemDescription: 'Kakkerlakken zijn een van de meest gehate ongedierte, en met reden. Ze verspreiden bacteriën en ziektes, verontreinigen voedsel en vermenigvuldigen zich razendsnel. Een kakkerlakenplaag is een ernstig hygiëneprobleem dat professionele aanpak vereist.',
    dangers: [
      'Verspreiding van Salmonella, E. coli en andere bacteriën',
      'Allergieën en astma door uitwerpselen',
      'Verontreiniging van voedsel en keukengerei',
      'Snelle vermenigvuldiging in warme, vochtige ruimtes',
    ],
    whyActFast: 'Eén kakkerlak kan tot 400 nakomelingen produceren. Ze zijn nachtactief, dus als u er overdag één ziet, is de kans groot dat er veel meer zijn. Hoe sneller u handelt, hoe kleiner de bestrijding.',
    solutionDescription: 'We gebruiken professionele gelmiddelen, spuitbehandelingen en monitoring om kakkerlakken in alle levensstadia te elimineren. Onze aanpak is grondig en effectief, met garantie op resultaat.',
    benefits: [
      'Volledige eliminatie in alle levensstadia',
      'Professionele gelmethode',
      'Discrete behandeling',
      'Garantie en nazorg',
    ],
    faqs: [
      { question: 'Hoe herken ik kakkerlakken?', answer: 'Kakkerlakken zijn platte, ovale insecten van 1-4cm, bruin tot donkerbruin. U herkent een plaag aan een muffe geur, kleine donkere keutels, eikapsel en het zien van levende exemplaren (vooral \'s nachts).' },
      { question: 'Zijn kakkerlakken gevaarlijk voor mijn gezondheid?', answer: 'Ja, kakkerlakken verspreiden bacteriën als Salmonella en E. coli. Hun uitwerpselen en huidresten kunnen allergieën en astma veroorzaken, vooral bij kinderen.' },
      { question: 'Kan ik kakkerlakken zelf bestrijden?', answer: 'Kakkerlakken zijn extreem veerkrachtig en moeilijk zelf te bestrijden. Professionele middelen en technieken zijn nodig voor volledige eliminatie.' },
      { question: 'Hoe lang duurt het voordat kakkerlakken weg zijn?', answer: 'Na professionele behandeling ziet u binnen enkele dagen een sterke afname. Volledige eliminatie duurt gemiddeld 2-4 weken.' },
    ],
    metaTitle: 'Kakkerlakenbestrijding | Snel & Grondig | Jansen Ongediertebestrijding',
    metaDescription: 'Kakkerlakken in huis? Wij elimineren ze snel en grondig met garantie op resultaat. Bel nu: 085 060 4269.',
  },
  {
    slug: 'zilvervisjes',
    name: 'Zilvervisjes',
    pluralName: 'zilvervisjes',
    icon: '🐛',
    shortDescription: 'Zilvervisjes veroorzaken schade aan boeken, behang en kleding. Effectieve bestrijding mogelijk.',
    heroTitle: 'Last van zilvervisjes?',
    heroSubtitle: 'Professionele bestrijding van zilvervisjes. Snel en effectief resultaat!',
    problemDescription: 'Zilvervisjes zijn kleine, zilverkleurige insecten die van vocht en zetmeel houden. Ze komen veel voor in badkamers, keukens en kelders. Hoewel ze geen ziektes verspreiden, kunnen ze schade aanrichten aan boeken, behang, foto\'s en kleding.',
    dangers: [
      'Schade aan boeken, documenten en foto\'s',
      'Aantasting van behang en lijm',
      'Schade aan kleding en textiel',
      'Indicatie van vochtproblemen in huis',
    ],
    whyActFast: 'Zilvervisjes kunnen tot 8 jaar oud worden en zich continu voortplanten. Een kleine plaag kan snel uitgroeien tot een groot probleem, vooral in vochtige omgevingen.',
    solutionDescription: 'We pakken zilvervisjes aan met gerichte bestrijdingsmiddelen en adviseren u over het aanpakken van de oorzaak: vochtproblemen. Een gecombineerde aanpak geeft het beste resultaat.',
    benefits: [
      'Gerichte professionele bestrijding',
      'Advies over vochtbestrijding',
      'Veilige methoden',
      'Langdurig resultaat',
    ],
    faqs: [
      { question: 'Zijn zilvervisjes schadelijk?', answer: 'Zilvervisjes verspreiden geen ziektes, maar ze kunnen wel schade aanrichten aan papier, boeken, behang, foto\'s en kleding. Een grote plaag kan vervelend zijn.' },
      { question: 'Waarom heb ik zilvervisjes?', answer: 'Zilvervisjes houden van vochtige, warme omgevingen. Ze komen veel voor in badkamers, keukens en kelders. Vochtproblemen in huis zijn vaak de hoofdoorzaak.' },
      { question: 'Kan ik zilvervisjes zelf bestrijden?', answer: 'Bij een kleine plaag kunt u proberen het vochtprobleem aan te pakken en lokdozen te plaatsen. Bij een grotere plaag is professionele bestrijding effectiever.' },
      { question: 'Hoe lang duurt zilvervisjesbestrijding?', answer: 'Een professionele behandeling duurt ongeveer 1-2 uur. Het volledige resultaat is binnen 2-3 weken zichtbaar.' },
    ],
    metaTitle: 'Zilvervisjes Bestrijding | Effectief & Snel | Jansen Ongediertebestrijding',
    metaDescription: 'Zilvervisjes in huis? Wij bestrijden ze effectief en adviseren over vochtpreventie. Bel: 085 060 4269.',
  },
]

export function getPestBySlug(slug: string): Pest | undefined {
  return pests.find((p) => p.slug === slug)
}

export function getAllPestSlugs(): string[] {
  return pests.map((p) => p.slug)
}
