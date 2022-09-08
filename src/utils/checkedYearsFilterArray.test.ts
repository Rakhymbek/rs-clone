import { checkedYearsFilterArray } from './checkedYearsFilterArray';

it('should return an array corresponding to year checked items', () => {
  const checkedItems = ['1972', '1977'];

  const data = [
    {
      _id: '630b66de1fbf6ac07324fae8',
      album: "What's Going On",
      artist: 'Marvin Gaye',
      img: 'https://i.scdn.co/image/ab67616d0000b273b36949bee43217351961ffbc',
      rank: 4,
      title: "What's Going On",
      url: 'https://drive.google.com/uc?id=1ubmf-JxEZcKmMUtAj5dUtY75RXBM27J6&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1ubmf-JxEZcKmMUtAj5dUtY75RXBM27J6',
      year: '1971',
      duration: '3:58',
      genre: 'pop',
      lyrics:
        "[00:09.88]Mother, mother\n[00:13.38]There's too many of you crying\n[00:19.63]Brother, brother, brother\n[00:22.88]There's far too many of you dying\n[00:28.38]You know we've got to find a way\n[00:33.13]To bring some lovin' here today, eheh\n[00:38.38]Father, father\n[00:42.13]We don't need to escalate\n[00:47.63]You see, war is not the answer\n[00:51.38]For only love can conquer hate\n[00:56.63]You know we've got to find a way\n[01:01.38]To bring some lovin' here today, oh oh oh\n[01:06.88]Picket lines and picket signs\n[01:11.38]Don't punish me with brutality\n[01:16.38]Talk to me, so you can see\n[01:20.13]Oh, what's going on\n[01:23.13]What's going on\n[01:24.88]Yeah, what's going on\n[01:27.13]Ah, what's going on\n[01:33.63]In the mean time\n[01:38.38]Right on, baby\n[01:41.88]Right on brother\n[01:48.63]Right on babe\n[01:58.63]Mother, mother\n[02:02.13]Everybody thinks we're wrong\n[02:07.13]Oh, but who are they to judge us\n[02:11.63]Simply 'cause our hair is long\n[02:16.38]Oh, you know we've got to find a way\n[02:21.38]To bring some understanding here today\n[02:25.88]Oh oh oh\n[02:26.88]Picket lines and picket signs\n[02:31.38]Don't punish me with brutality\n[02:35.88]C'mon talk to me\n[02:38.38]So you can see\n[02:40.63]What's going on\n[02:42.63]Yeah, what's going on\n[02:44.63]Tell me what's going on\n[02:47.38]I'll tell you what's going on\n[02:50.13]Ooh ooo ooo ooo\n[02:58.13]Right on baby\n[03:07.63]Right on baby",
      minus:
        'https://docs.google.com/uc?export=open&id=1TosbkE3RW8Ew40fOW3kqv7SXYXd8dYzV',
    },
    {
      _id: '630b66f21fbf6ac073253d0d',
      album: 'I Never Loved a Man the Way I Love You',
      artist: 'Aretha Franklin',
      img: 'https://i.scdn.co/image/ab67616d0000b2736aa9314b7ddfbd8f036ba3ac',
      rank: 5,
      title: 'Respect',
      url: 'https://drive.google.com/uc?id=1w4Z0bUFP7xp7lAgCKMjUc0KODscQprq5&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1w4Z0bUFP7xp7lAgCKMjUc0KODscQprq5',
      year: '1967',
      duration: '2:29',
      genre: 'pop',
      lyrics:
        "[00:00.00]\n[00:08.81]Ooh!\n[00:09.92]What you want? (ooh)\n[00:11.80]Baby, I got! (ooh)\n[00:13.79]What you need? (ooh)\n[00:15.86]Do you know I got it? (ooh)\n[00:18.17]All I'm askin' (ooh)\n[00:20.17]Is for a little respect when you come home\n[00:22.28](Just a little bit)\n[00:23.20]Hey baby,\n[00:24.15](Just a little bit)\n[00:24.68]When you get home\n[00:26.01](Just a little bit)\n[00:27.36]Mister...\n[00:28.25](Just a little bit)\n[00:29.43]...\n[00:30.63]I ain't gonna do you wrong\n[00:32.90]While you're gone...\n[00:35.36]Ain't gonna do you wrong (ooh)\n[00:36.92]'Cause I don't wanna... (ooh)\n[00:39.49]All I'm askin' (ooh)\n[00:41.07]Is for a little respect when you come home\n[00:43.17](Just a little bit)\n[00:44.26]Baby, (just a little bit)\n[00:45.75]When you get home...\n[00:47.04](Just a little bit)\n[00:47.83]Yeah!\n[00:49.16](Just a little bit)\n[00:50.59]...\n[00:51.26]I'm about to give you all of my money\n[00:55.73]And all I'm askin' in return, honey\n[00:58.86]...\n[00:59.97]Is to give me my profits\n[01:02.79]When you get home\n[01:03.46](Just a, just a, just a, just a)\n[01:05.13]Yeah, baby! (just a, just a, just a, just a)\n[01:06.37]When you get home\n[01:07.99](Just a little bit)\n[01:08.92]Yeah!\n[01:10.04](Just a little bit)\n[01:11.27]...\n[01:27.87]Oooooh, your kisses... (ooh)\n[01:30.83]Sweeter than honey... (ooh)\n[01:33.30]And guess what? (ooh)\n[01:34.87]So is my money! (ooh)\n[01:37.27]...\n[01:37.66]All I want you to do (ooh) for me\n[01:39.96]Is give it to me when you get home (re, re, re ,re)\n[01:42.40]Yeah, baby! (re, re, re ,re)\n[01:43.96]Whip it to me (respect, just a little bit)\n[01:45.57]When you get home, now (just a little bit)\n[01:48.94]R-E-S-P-E-C-T\n[01:51.08]Find out what it means to me\n[01:53.14]R-E-S-P-E-C-T\n[01:55.20]Take care, TCB\n[01:57.22](Sock it to me, sock it to me...) Ooh!\n[01:58.62](...sock it to me, sock it to me)\n[01:58.94]A little respect (sock it to me, sock it to me...)\n[02:00.05](...sock it to me, sock it to me)\n[02:01.10]Whoa, babe (just a little bit)\n[02:03.16]A little respect (just a little bit)\n[02:05.17]I get tired (just a little bit)\n[02:07.13]Keep on tryin' (just a little bit)\n[02:09.15]You're runnin' out of foolin' (just a little bit)\n[02:11.34]And I ain't lyin' (just a little bit)\n[02:13.84](Re, re) 'spect! (re, re)\n[02:15.57]When you come home (re, re, re ,re)\n[02:17.56]Or you might walk in (respect, just a little bit)\n[02:18.74]And find out I'm gone (just a little bit)\n[02:21.55]I got to have, (just a little bit)\n[02:23.57]A little respect! (just a little bit)\n[02:25.19]",
      minus:
        'https://docs.google.com/uc?export=open&id=1vxNkOePokjXOiwMYDieXLyZ9yYl8zyFb',
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
      _id: '630b81f01fbf6ac0737abf30',
      album: 'Heroes',
      artist: 'David Bowie',
      img: 'https://i.scdn.co/image/ab67616d0000b273bc1c63a5b66ab9ac3ea21672',
      rank: 46,
      title: 'Heroes',
      url: 'https://drive.google.com/uc?id=1Q-N7m8e_W3W2gj_d0d23eOnhM0abQDGi&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1Q-N7m8e_W3W2gj_d0d23eOnhM0abQDGi',
      year: '1977',
      duration: '6:11',
      genre: 'pop',
      lyrics:
        "[00:16.51]I, I will be king\n[00:24.74]And you, you will be queen\n[00:33.58]Though nothing will drive them away\n[00:41.81]We can beat them, just for one day\n[00:49.87]We can be heroes, just for one day\n[00:59.22]And you, you can be mean\n[01:07.76]And I, I'll drink all the time\n[01:15.75]'Cause we're lovers, and that is a fact\n[01:24.20]Yes, we're lovers, and that is that\n[01:33.33]Though nothing will keep us together\n[01:41.10]We could steal time, just for one day\n[01:49.77]We can be heroes forever and ever\n[01:57.46]What'd you say?\n[02:16.63]I, I wish you could swim\n[02:24.68]Like the dolphins, like dolphins can swim\n[02:33.53]Though nothing, nothing will keep us together\n[02:41.89]We can beat them forever and ever\n[02:49.61]Oh, we can be heroes, just for one day\n[03:16.63]I, I will be king\n[03:24.92]And you, you will be queen\n[03:33.48]Though nothing will drive them away\n[03:41.29]We can be heroes, just for one day\n[03:50.44]We can be us, just for one day\n[03:59.49]I, I can remember (I remember)\n[04:08.00]Standing, by the wall (by the wall)\n[04:16.07]And the guns shot above our heads (over our heads)\n[04:24.49]And we kissed as though nothing could fall (nothing could fall)\n[04:33.01]And the shame was on the other side\n[04:41.47]Oh, we can beat them, forever and ever\n[04:49.57]Then we could be heroes, just for one day\n[05:02.60]We can be heroes\n[05:11.03]We can be heroes\n[05:19.59]We can be heroes\n[05:23.80]Just for one day\n[05:28.10]We can be heroes\n[05:32.84]We're nothing, and nothing will help us\n[05:40.91]Maybe we're lying, then you better not stay\n[05:49.10]But we could be safer, just for one day",
      minus:
        'https://docs.google.com/uc?export=open&id=1_5opyWd0VLjcKB_NMCUvxK3AmNOttoN5',
    },
    {
      _id: '630b67091fbf6ac073259585',
      album: 'Smiley Smile/Wild Honey',
      artist: 'The Beach Boys',
      img: 'https://i.scdn.co/image/ab67616d0000b2735478ee4e266859d6428905e1',
      rank: 6,
      title: 'Good Vibrations',
      url: 'https://drive.google.com/uc?id=1OsCDiVQmZF0lN87GFHokf_3RqzZbwGz3&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1OsCDiVQmZF0lN87GFHokf_3RqzZbwGz3',
      year: '1966',
      duration: '3:37',
      genre: 'dance',
      lyrics:
        "[00:01.32]I-I love the colorful clothes she wears\n[00:06.07]And the way the sunlight plays upon her hair\n[00:13.07]I hear the sound of a gentle word\n[00:18.81]On the wind that lifts her perfume through the air\n[00:25.56]I'm pickin' up good vibrations\n[00:29.32]She's giving me the excitations (oom bop bop)\n[00:33.82]I'm pickin' up good vibrations (good vibrations, oom bop bop)\n[00:36.57]She's giving me the excitations (excitations, oom bop bop)\n[00:38.81]I'm pickin' up good vibrations (oom bop bop)\n[00:41.56]She's giving me the excitations (excitations, oom bop bop)\n[00:45.07]I'm pickin' up good vibrations (oom bop bop)\n[00:48.06]She's giving me the excitations (excitations)\n[00:51.07]Close my eyes, she's somehow closer now\n[00:57.31]Softly smile, I know she must be kind\n[01:03.56]When I look in her eyes\n[01:09.06]She goes with me to a blossom world\n[01:16.06]I'm pickin' up good vibrations\n[01:19.31]She's giving me excitations (oom bop bop)\n[01:23.82]I'm pickin' up good vibrations (good vibrations, oom bop bop)\n[01:25.81]She's giving me excitations (excitations, oom bop bop)\n[01:29.31]Good, good, good, good vibrations (oom bop bop)\n[01:31.32]She's giving me excitations (excitations, oom bop bop)\n[01:35.07]Good, good, good, good vibrations (oom bop bop)\n[01:37.56]She's giving me excitations (excitations)\n[01:41.56]Ah, ah, my my, what elation\n[02:02.06]I don't know where but she sends me there\n[02:06.07]Oh, my my, what a sensation\n[02:09.32]Oh, my my, what elation\n[02:11.82]Oh, my my, what\n[02:21.81]Gotta keep those lovin' good vibrations a-happenin' with her\n[02:29.07]Gotta keep those lovin' good vibrations a-happenin' with her\n[02:36.31]Gotta keep those lovin' good vibrations a-happenin'\n[02:56.06]Good, good, good, good vibrations (oom bop bop)\n[03:00.56]She's giving me the excitations (excitations, oom bop bop)\n[03:03.56]I'm pickin' up good vibrations\n[03:08.81]Na na na na na, na na na\n[03:16.32]Na na na na na, na na na (bop bop-bop-bop-bop, bop)\n[03:20.07]Do do do do do, do do do (bop bop-bop-bop-bop, bop)\n[03:23.82]Do do do do do, do do do (bop bop-bop-bop-bop, bop)",
      minus:
        'https://docs.google.com/uc?export=open&id=1D8cDA8TRYIptNwPDneBDFVIL5OJVoUr_',
    },
    {
      _id: '630b673f1fbf6ac073262d6b',
      album: 'The Anthology',
      artist: 'Chuck Berry',
      img: 'https://i.scdn.co/image/ab67616d0000b273229ddcbf8aebb3248f51ac99',
      rank: 7,
      title: 'Johnny B. Goode',
      url: 'https://drive.google.com/uc?id=1wMtbDULdDRQ0Ozfo3X05hJbTDvFnzfGf&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1wMtbDULdDRQ0Ozfo3X05hJbTDvFnzfGf',
      year: '1958',
      duration: '3:05',
      lyrics:
        "[00:17.29]Deep down in Louisiana close to New Orleans\n[00:20.17]Way back up in the woods among the evergreens,\n[00:23.10]There stood a log cabin made of earth and wood\n[00:25.85]Where lived a country boy named Johnny B. Goode,\n[00:28.66]Who never ever learned to read or write so well\n[00:31.35]But he could play a guitar just like a ringin' a bell.\n[00:33.98][01:08.23][02:16.72]Go Go\n[00:35.67][00:38.60][00:41.48][00:44.29][01:09.98][01:12.85][01:15.79][01:18.73][02:18.10][02:20.10][02:22.79][02:25.72]Go Johnny Go Go\n[00:48.16][01:22.42]Johnny B. Goode\n[00:51.35]He used to carry his guitar in a gunny sack,\n[00:54.04]Oh sit beneath a tree by the railroad track\n[00:57.04]Oh the engineers would see him sittin in the shade,\n[00:59.66]Strummin with the rhythm that the drivers made,\n[01:02.67]Oh n' people passin' by they would stop and say\n[01:05.42]'Oh my but that little country boy could play'\n[01:26.04](solo)\n[02:17.00]His mother told him 'some day you will be a man,\n[02:20.22]And you will be the leader of a big ol' band\n[02:22.29]Many people comin' from miles around,\n[02:26.10]To hear you play your music when the sun go down,\n[02:29.98]Maybe some day your name will be in lights sayin\n[02:31.97]'Johnny B. Goode' tonight\n[02:33.53]Go Johnny B. Goode",
      minus:
        'https://drive.google.com/file/d/1pkvaVdYcuPGN7BPBL2C4L_E0JacugZOE/view?usp=sharing',
    },
    {
      _id: '630b675c1fbf6ac07326a404',
      album: 'Hey Jude',
      artist: 'The Beatles',
      img: 'https://i.scdn.co/image/ab67616d0000b2736e3d3c964df32136fb1cd594',
      rank: 8,
      title: 'Hey Jude',
      url: 'https://drive.google.com/uc?id=1QnvOVA0Ye1a6_4PK3PepAgY4GxeJIi8N&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1QnvOVA0Ye1a6_4PK3PepAgY4GxeJIi8N',
      year: '1968',
      duration: '7:09',
      genre: 'classic rock',
      lyrics:
        "[00:00.64]Hey Jude, don't make it bad.\n[00:05.64]Take a sad song and make it better.\n[00:12.39]Remember to let her into your heart,\n[00:17.39]Then you can start to make it better.\n[00:24.89]Hey Jude, don't be afraid.\n[00:31.14]You were made to go out and get her.\n[00:38.39]The minute you let her under your skin,\n[00:43.14]Then you begin to make it better.\n[00:51.64]And anytime you feel the pain, hey Jude, refrain,\n[00:58.64]Don't carry the world upon your shoulders.\n[01:07.39]For well you know that it's a fool who plays it cool\n[01:14.89]By making his world a little colder.\n[01:22.89]Music\n[01:23.39]4\n[01:26.15]3\n[01:26.65]2\n[01:30.90]1\n[01:31.40]Hey Jude, don't let me down.\n[01:37.39]You have found her, now go and get her.\n[01:44.65]Remember to let her into your heart,\n[01:49.39]Then you can start to make it better.\n[01:58.39]So let it out and let it in, hey Jude, begin,\n[02:05.14]You're waiting for someone to perform with.\n[02:14.39]And don't you know that it's just you, hey Jude, you'll do,\n[02:21.39]The movement you need is on your shoulder.\n[02:29.39]Music\n[02:34.12]4\n[02:36.62]3\n[02:37.12]2\n[02:37.62]1\n[02:38.37]Hey Jude, don't make it bad.\n[02:44.62]Take a sad song and make it better.\n[02:51.62]Remember to let her under your skin,\n[02:56.87]Then you'll begin to make it\n[03:01.62]Better better better better better better, oh.\n[03:07.90]Na na na nananana, nannana, hey Jude...\n[03:21.65]Na na na nananana, nannana, hey Jude...\n[03:34.90]Na na na nananana, nannana, hey Jude...\n[03:48.15]Na na na nananana, nannana, hey Jude...\n[04:01.65]Na na na nananana, nannana, hey Jude...\n[04:14.65]Na na na nananana, nannana, hey Jude...\n[04:27.65]Na na na nananana, nannana, hey Jude...\n[04:40.65]Na na na nananana, nannana, hey Jude...\n[04:53.40]Na na na nananana, nannana, hey Jude...\n[05:06.40]Na na na nananana, nannana, hey Jude...\n[05:19.40]Na na na nananana, nannana, hey Jude...\n[05:32.15]Na na na nananana, nannana, hey Jude...\n[05:44.90]Na na na nananana, nannana, hey Jude...\n[05:57.65]Na na na nananana, nannana, hey Jude...\n[06:10.65]Na na na nananana, nannana, hey Jude...\n[06:23.65]Na na na nananana, nannana, hey Jude...\n[06:36.15]Na na na nananana, nannana, hey Jude...\n[06:49.04]Na na na nananana, nannana, hey Jude...",
      minus:
        'https://docs.google.com/uc?export=open&id=1plTVjv27fIYKH-iAcCc5gZv-s1dqXOlm',
    },
  ];

  const expectedResult = [
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
      _id: '630b81f01fbf6ac0737abf30',
      album: 'Heroes',
      artist: 'David Bowie',
      img: 'https://i.scdn.co/image/ab67616d0000b273bc1c63a5b66ab9ac3ea21672',
      rank: 46,
      title: 'Heroes',
      url: 'https://drive.google.com/uc?id=1Q-N7m8e_W3W2gj_d0d23eOnhM0abQDGi&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1Q-N7m8e_W3W2gj_d0d23eOnhM0abQDGi',
      year: '1977',
      duration: '6:11',
      genre: 'pop',
      lyrics:
        "[00:16.51]I, I will be king\n[00:24.74]And you, you will be queen\n[00:33.58]Though nothing will drive them away\n[00:41.81]We can beat them, just for one day\n[00:49.87]We can be heroes, just for one day\n[00:59.22]And you, you can be mean\n[01:07.76]And I, I'll drink all the time\n[01:15.75]'Cause we're lovers, and that is a fact\n[01:24.20]Yes, we're lovers, and that is that\n[01:33.33]Though nothing will keep us together\n[01:41.10]We could steal time, just for one day\n[01:49.77]We can be heroes forever and ever\n[01:57.46]What'd you say?\n[02:16.63]I, I wish you could swim\n[02:24.68]Like the dolphins, like dolphins can swim\n[02:33.53]Though nothing, nothing will keep us together\n[02:41.89]We can beat them forever and ever\n[02:49.61]Oh, we can be heroes, just for one day\n[03:16.63]I, I will be king\n[03:24.92]And you, you will be queen\n[03:33.48]Though nothing will drive them away\n[03:41.29]We can be heroes, just for one day\n[03:50.44]We can be us, just for one day\n[03:59.49]I, I can remember (I remember)\n[04:08.00]Standing, by the wall (by the wall)\n[04:16.07]And the guns shot above our heads (over our heads)\n[04:24.49]And we kissed as though nothing could fall (nothing could fall)\n[04:33.01]And the shame was on the other side\n[04:41.47]Oh, we can beat them, forever and ever\n[04:49.57]Then we could be heroes, just for one day\n[05:02.60]We can be heroes\n[05:11.03]We can be heroes\n[05:19.59]We can be heroes\n[05:23.80]Just for one day\n[05:28.10]We can be heroes\n[05:32.84]We're nothing, and nothing will help us\n[05:40.91]Maybe we're lying, then you better not stay\n[05:49.10]But we could be safer, just for one day",
      minus:
        'https://docs.google.com/uc?export=open&id=1_5opyWd0VLjcKB_NMCUvxK3AmNOttoN5',
    },
  ];

  const result = checkedYearsFilterArray(checkedItems, data);

  expect(expectedResult).toEqual(result);
});
