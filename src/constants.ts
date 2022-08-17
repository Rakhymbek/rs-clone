import { TData, THeader } from './types';

export const NumberOfCheckedItems = 3;

export const checkedItems = ['2022', '2021', '2020', '2019', '2018'];
export const checkedItems2 = [
  'Alexander Nakarada',
  'Tim Kulig',
  'Kevin Macleodburn',
  'Winniethemoog',
  'Mixkit',
];

export const DATA: TData = {
  count: 29,
  next: null,
  previous: 'http://84.201.139.95:8000/catalog/track/all/?page=2',
  results: [
    {
      id: 28,
      name: 'Carol Of The Bells',
      author: 'Alexander Nakarada',
      release_date: '2022-04-16',
      genre: 'Рок музыка',
      duration_in_seconds: 205,
      album: 'Carol Of The Bells',
      logo: null,
      track_file:
        'http://84.201.139.95:8000/django_media/music_files/Alexander_Nakarada_-_Carol_Of_The_Bells.mp3',
      stared_user: [],
    },
    {
      id: 29,
      name: 'Feel Good Rock',
      author: 'Audionautix',
      release_date: '2020-02-12',
      genre: 'Рок музыка',
      duration_in_seconds: 312,
      album: 'FAST',
      logo: null,
      track_file:
        'http://84.201.139.95:8000/django_media/music_files/Audionautix_-_Feel_Good_Rock.mp3',
      stared_user: [],
    },
    {
      id: 30,
      name: 'The World Waltz',
      author: 'Kevin Macleodburn',
      release_date: null,
      genre: 'Рок музыка',
      duration_in_seconds: 305,
      album: 'The Waltzer',
      logo: null,
      track_file:
        'http://84.201.139.95:8000/django_media/music_files/Kevin_Macleodburn_-_The_World_Waltz.mp3',
      stared_user: [],
    },
    // {
    //   id: 31,
    //   name: '5 cents back',
    //   author: 'MED',
    //   release_date: '2005-03-03',
    //   genre: 'Рок музыка',
    //   duration_in_seconds: 345,
    //   album: '5 cents back',
    //   logo: null,
    //   track_file:
    //     'http://84.201.139.95:8000/django_media/music_files/MED_-_5_Cents_Back.mp3',
    //   stared_user: [],
    // },
    // {
    //   id: 32,
    //   name: 'Essence2',
    //   author: 'MED',
    //   release_date: '1920-05-03',
    //   genre: 'Электронная музыка',
    //   duration_in_seconds: 205,
    //   album: 'Essence2',
    //   logo: null,
    //   track_file:
    //     'http://84.201.139.95:8000/django_media/music_files/MED_-_Essence2.mp3',
    //   stared_user: [],
    // },
    // {
    //   id: 33,
    //   name: 'Classical Metal Workout',
    //   author: '-',
    //   release_date: '1991-09-06',
    //   genre: 'Рок музыка',
    //   duration_in_seconds: 246,
    //   album: 'Workout',
    //   logo: null,
    //   track_file:
    //     'http://84.201.139.95:8000/django_media/music_files/Musiclfiles_-_Classical_Metal_Workout.mp3',
    //   stared_user: [],
    // },
    {
      id: 34,
      name: 'Adrenelynne',
      author: 'Tim Kulig',
      release_date: '2007-05-14',
      genre: 'Рок музыка',
      duration_in_seconds: 285,
      album: 'Adrenelynne',
      logo: null,
      track_file:
        'http://84.201.139.95:8000/django_media/music_files/Tim_Kulig_-_Adrenelynne.mp3',
      stared_user: [],
    },
    {
      id: 35,
      name: 'Hard Metal Intro',
      author: 'Winniethemoog',
      release_date: '1991-09-06',
      genre: 'Рок музыка',
      duration_in_seconds: 255,
      album: 'Hard Metal',
      logo: null,
      track_file:
        'http://84.201.139.95:8000/django_media/music_files/Winniethemoog__-_Hard_Metal_Intro.mp3',
      stared_user: [],
    },
    {
      id: 36,
      name: 'Action Sport Breakbeat',
      author: 'Winniethemoog',
      release_date: '1991-09-07',
      genre: 'Рок музыка',
      duration_in_seconds: 234,
      album: 'Workout',
      logo: null,
      track_file:
        'http://84.201.139.95:8000/django_media/music_files/Winniethemoog_-_Action_Sport_Breakbeat.mp3',
      stared_user: [],
    },
  ],
};

// export const DATA: TData = {
//   count: 29,
//   next: 'http://84.201.139.95:8000/catalog/track/all/?page=2',
//   previous: null,
//   results: [
//     {
//       id: 8,
//       name: 'Chase',
//       author: 'Alexander Nakarada',
//       release_date: '2005-06-11',
//       genre: 'Классическая музыка',
//       duration_in_seconds: 205,
//       album: 'Chase',
//       logo: null,
//       track_file:
//         'http://84.201.139.95:8000/django_media/music_files/Alexander_Nakarada_-_Chase.mp3',
//       stared_user: [],
//     },
//     {
//       id: 9,
//       name: 'Open Sea epic',
//       author: 'Frank Schroter',
//       release_date: '2019-06-12',
//       genre: 'Классическая музыка',
//       duration_in_seconds: 165,
//       album: 'Open Sea epic',
//       logo: null,
//       track_file:
//         'http://84.201.139.95:8000/django_media/music_files/Frank_Schroter_-_Open_Sea_epic.mp3',
//       stared_user: [],
//     },
//     {
//       id: 10,
//       name: 'Sneaky Snitch',
//       author: 'Kevin Macleod',
//       release_date: '2022-04-16',
//       genre: 'Классическая музыка',
//       duration_in_seconds: 305,
//       album: 'Sneaky Snitch',
//       logo: null,
//       track_file:
//         'http://84.201.139.95:8000/django_media/music_files/Kevin_Macleod_-_Sneaky_Snitch.mp3',
//       stared_user: [],
//     },
//     {
//       id: 11,
//       name: 'Secret Garden',
//       author: 'Mixkit',
//       release_date: '1972-06-06',
//       genre: 'Классическая музыка',
//       duration_in_seconds: 324,
//       album: 'Secret Garden',
//       logo: null,
//       track_file:
//         'http://84.201.139.95:8000/django_media/music_files/Mixkit_-_Secret_Garden.mp3',
//       stared_user: [],
//     },
//     {
//       id: 12,
//       name: 'A journey of successfull winners',
//       author: '-',
//       release_date: '1985-02-02',
//       genre: 'Классическая музыка',
//       duration_in_seconds: 255,
//       album: '-',
//       logo: null,
//       track_file:
//         'http://84.201.139.95:8000/django_media/music_files/Musiclfiles_-_A_Journey_For_Successful_Winners.mp3',
//       stared_user: [],
//     },
//     {
//       id: 13,
//       name: 'Epic Heroic Conquest',
//       author: '-',
//       release_date: '1962-01-15',
//       genre: 'Классическая музыка',
//       duration_in_seconds: 200,
//       album: 'Epic Heroic Conquest',
//       logo: null,
//       track_file:
//         'http://84.201.139.95:8000/django_media/music_files/Musiclfiles_-_Epic_Heroic_Conquest.mp3',
//       stared_user: [],
//     },
//     {
//       id: 14,
//       name: 'The March OF The Final Battle',
//       author: '-',
//       release_date: '2011-11-02',
//       genre: 'Классическая музыка',
//       duration_in_seconds: 206,
//       album: 'The March OF The Final Battle',
//       logo: null,
//       track_file:
//         'http://84.201.139.95:8000/django_media/music_files/musiclfiles_-_The_March_Of_The_Final_Battle.mp3',
//       stared_user: [],
//     },
//     {
//       id: 15,
//       name: 'True Summer',
//       author: '-',
//       release_date: '2012-06-01',
//       genre: 'Классическая музыка',
//       duration_in_seconds: 253,
//       album: 'True Summer',
//       logo: null,
//       track_file:
//         'http://84.201.139.95:8000/django_media/music_files/Musiclfiles_-_True_Summer.mp3',
//       stared_user: [],
//     },
//     {
//       id: 16,
//       name: 'Background Sensible',
//       author: 'Waltz Piano',
//       release_date: '2003-05-12',
//       genre: 'Классическая музыка',
//       duration_in_seconds: 135,
//       album: 'Background Sensible',
//       logo: null,
//       track_file:
//         'http://84.201.139.95:8000/django_media/music_files/Waltz_Piano_-_Background_Sensible.mp3',
//       stared_user: [],
//     },
//     {
//       id: 17,
//       name: 'Cinematic',
//       author: 'Winniethemoog',
//       release_date: '2004-10-01',
//       genre: 'Классическая музыка',
//       duration_in_seconds: 206,
//       album: 'Cinematic',
//       logo: null,
//       track_file:
//         'http://84.201.139.95:8000/django_media/music_files/Winniethemoog_-_Cinematic.mp3',
//       stared_user: [],
//     },
//   ],
// };

export const USER = { name: 'Evgenia Leleo', avatar: '' };

export const TRACKS = DATA.results;

export const TRACK = DATA.results[0];

export const DONE = '33%';

export const HEADER: THeader = 'Треки';
// export const HEADER: THeader = 'Плейлист дня';
// export const HEADER: THeader = '100 танцевальных хитов';
// export const HEADER: THeader = 'Инди заряд';
// export const HEADER: THeader = 'Мои треки';

// const items2 = [
//   'Раз',
//   'Два',
//   'Три',
//   'Четыре',
//   '2022',
//   '2021',
//   '2020',
//   '2019',
//   '2018',
//   'raegargts',
//   'aergerstg',
//   'qweqe',
//   'wefawgr',
//   'EFAWFWR',
//   'Пять',
//   'Раз',
//   'Два',
//   'Три',
//   'Четыре',
//   'Пять',
// ];

// "dependencies": {
//   "nouislider": "^15.6.0"
// }
