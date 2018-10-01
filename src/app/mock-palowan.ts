import {Palowan} from './palowan'

export const PALOWANS: Palowan[]= [
  {
    ID: 2,
    firstname: 'Jason',
    lastname: '',
    role: 'Tech-Lead',
    hive: 'DH',
    info: 'Like his subordinate',
    subordinate: [{
      ID: 1,
      firstname: 'Odan',
      lastname: 'Double-Dab',
      role: 'Intern',
      hive: 'DH',
      info: 'Love K-Pop',
      subordinate:[]
    },
    {
      ID: 3,
      firstname: 'Johan',
      lastname: 'Jamais',
      role: 'Intern',
      hive: 'DH',
      info: 'Like an ant-eater',
      subordinate:[]
    }]
  },
  {
    ID: 4,
    firstname: 'Valentin',
    lastname: 'Piou',
    role: 'Intern',
    hive: 'DH',
    info: 'Being social',
    subordinate:[]
  }
]