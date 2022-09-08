import { getSearchQueryArray } from './getSearchQueryArray';

it('should return an array corresponding to the query string', () => {
  const dataArray = [
    {
      _id: '630b9ce21fbf6ac073d10092',
      album: 'The Joshua Tree',
      artist: 'U2',
      img: 'https://i.scdn.co/image/ab67616d0000b273b7bea3d01f04e6d0408d2afe',
      rank: 93,
      title: "I Still Haven't Found What I'm Looking For",
      url: 'https://drive.google.com/uc?id=13YqiiFcFG7N6oeOWhh_JBaRFlkdJkQ8K&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=13YqiiFcFG7N6oeOWhh_JBaRFlkdJkQ8K',
      year: '1987',
      duration: '4:38',
      genre: 'rock',
    },
    {
      _id: '630b9cf01fbf6ac073d12375',
      album: 'The Georgia Peach',
      artist: 'Little Richard',
      img: 'https://i.scdn.co/image/ab67616d0000b2738d1b7ebdebe8d2125183e2d3',
      rank: 94,
      title: 'Good Golly',
      url: 'https://drive.google.com/uc?id=1x8M9vamhCN_692tJK9qRKYNzkLhSfzbF&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1x8M9vamhCN_692tJK9qRKYNzkLhSfzbF',
      year: '1958',
      duration: '2:07',
    },
    {
      _id: '630b9d011fbf6ac073d14ed0',
      album: 'Original Sun Greatest Hits',
      artist: 'Carl Perkins',
      img: 'https://i.scdn.co/image/ab67616d0000b2738e0825fae71054051d11f1cf',
      rank: 95,
      title: 'Blue Suede Shoes',
      url: 'https://drive.google.com/uc?id=1c7xUjseTIw_mMELNt_C4A9GQEViLldMW&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1c7xUjseTIw_mMELNt_C4A9GQEViLldMW',
      year: '1956',
      duration: '2:13',
    },
    {
      _id: '630b9d271fbf6ac073d1e698',
      album: 'Original Sun Greatest Hits',
      artist: 'Jerry Lee Lewis',
      img: 'https://i.scdn.co/image/ab67616d0000b2732f5ef5aa5d498bb577d62529',
      rank: 96,
      title: 'Great Balls of Fire',
      url: 'https://drive.google.com/uc?id=1Fjh2MiO1y8iMJy2vjV3973PbnOf5ybDw&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1Fjh2MiO1y8iMJy2vjV3973PbnOf5ybDw',
      year: '1957',
      duration: '1:52',
    },
    {
      _id: '630b9d371fbf6ac073d20fc9',
      album: 'The Anthology',
      artist: 'Chuck Berry',
      img: 'https://i.scdn.co/image/ab67616d0000b2734d46a5195bc862525bab76c1',
      rank: 97,
      title: 'Roll Over Beethoven',
      url: 'https://drive.google.com/uc?id=1v_JpsVMorfND6QKehpHBvPO-09Bss4Jb&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1v_JpsVMorfND6QKehpHBvPO-09Bss4Jb',
      year: '1956',
      duration: '2:24',
    },
    {
      _id: '630b9d4d1fbf6ac073d24866',
      album: "I'm Still in Love With You",
      artist: 'Al Green',
      img: 'https://i.scdn.co/image/ab67616d0000b2732d2fc2acfa7214fcd1f8385b',
      rank: 98,
      title: 'Love And Happiness',
      url: 'https://drive.google.com/uc?id=1d7XwTaRDwwJwubOdel1AjCCBmXGScDUl&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1d7XwTaRDwwJwubOdel1AjCCBmXGScDUl',
      year: '1972',
      duration: '5:03',
    },
    {
      _id: '630b9d601fbf6ac073d278fe',
      album: 'Willy And The Poor Boys',
      artist: 'Creedence Clearwater Revival',
      img: 'https://i.scdn.co/image/ab67616d0000b2739f39192f9f8ca1c90847b3e5',
      rank: 99,
      title: 'Fortunate Son',
      url: 'https://drive.google.com/uc?id=1VVHhmzsqR0Yvhl_Rm3fCj6aroWHe1hVY&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1VVHhmzsqR0Yvhl_Rm3fCj6aroWHe1hVY',
      year: '1970',
      duration: '3:33',
    },
    {
      _id: '630b9d6f1fbf6ac073d2b1b6',
      album: 'St. Elsewhere',
      artist: 'Gnarls Barkley',
      img: 'https://i.scdn.co/image/ab67616d0000b273670f4666a378de834285eb33',
      rank: 100,
      title: 'Crazy',
      url: 'https://drive.google.com/uc?id=1ZoNVRTdrM7-6QgfVde5pMyv1IjoN-kuX&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1ZoNVRTdrM7-6QgfVde5pMyv1IjoN-kuX',
      year: '2006',
      duration: '3:00',
      genre: 'dance',
    },
  ];

  const expectedResult = [
    {
      _id: '630b9ce21fbf6ac073d10092',
      album: 'The Joshua Tree',
      artist: 'U2',
      img: 'https://i.scdn.co/image/ab67616d0000b273b7bea3d01f04e6d0408d2afe',
      rank: 93,
      title: "I Still Haven't Found What I'm Looking For",
      url: 'https://drive.google.com/uc?id=13YqiiFcFG7N6oeOWhh_JBaRFlkdJkQ8K&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=13YqiiFcFG7N6oeOWhh_JBaRFlkdJkQ8K',
      year: '1987',
      duration: '4:38',
      genre: 'rock',
    },
    {
      _id: '630b9d4d1fbf6ac073d24866',
      album: "I'm Still in Love With You",
      artist: 'Al Green',
      img: 'https://i.scdn.co/image/ab67616d0000b2732d2fc2acfa7214fcd1f8385b',
      rank: 98,
      title: 'Love And Happiness',
      url: 'https://drive.google.com/uc?id=1d7XwTaRDwwJwubOdel1AjCCBmXGScDUl&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1d7XwTaRDwwJwubOdel1AjCCBmXGScDUl',
      year: '1972',
      duration: '5:03',
    },
  ];

  const result = getSearchQueryArray('lo', dataArray);

  expect(expectedResult).toEqual(result);
});
