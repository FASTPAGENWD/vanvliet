export interface Review {
  name: string
  location: string
  rating: number
  text: string
  pest: string
  date: string
}

export const reviews: Review[] = [
  {
    name: 'Henk Janssen',
    location: 'Utrecht',
    rating: 5,
    text: 'Uitstekende service! Binnen een paar uur waren ze ter plaatse en het rattenprobleem was snel opgelost. Zeer professioneel team.',
    pest: 'Ratten',
    date: '2 weken geleden',
  },
  {
    name: 'Annemieke van Dijk',
    location: 'Helmond',
    rating: 5,
    text: 'We hadden al weken last van bedwantsen. Na één behandeling was het probleem volledig verholpen. Heel blij met het resultaat!',
    pest: 'Bedwantsen',
    date: '1 maand geleden',
  },
  {
    name: 'Rob Willems',
    location: 'Veldhoven',
    rating: 5,
    text: 'Snel, discreet en effectief. Het wespennest werd dezelfde dag nog verwijderd. Aanrader!',
    pest: 'Wespen',
    date: '3 weken geleden',
  },
  {
    name: 'Fatima El Amrani',
    location: 'Best',
    rating: 5,
    text: 'Na maanden muizenoverlast hebben zij het probleem in één keer opgelost. Ook het huis muisdicht gemaakt. Top service.',
    pest: 'Muizen',
    date: '1 maand geleden',
  },
  {
    name: 'Marco de Groot',
    location: 'Nuenen',
    rating: 4,
    text: 'Goede communicatie en snelle afhandeling van het mierenprobleem. De mieren zijn volledig verdwenen.',
    pest: 'Mieren',
    date: '2 maanden geleden',
  },
  {
    name: 'Saskia Kuijpers',
    location: 'Son en Breugel',
    rating: 5,
    text: 'Kakkerlakken in de keuken, een nachtmerrie. Het team van Jansen heeft alles vakkundig opgelost. Zeer tevreden!',
    pest: 'Kakkerlakken',
    date: '3 weken geleden',
  },
]
