import { getFinalItems } from './getFinalItems';

it('should render an array of items corresponding to checked items object, searched items and order', () => {
  const dataArray = [
    {
      _id: '630b66201fbf6ac07322c952',
      album: 'Highway 61 Revisited',
      artist: 'Bob Dylan',
      img: 'https://i.scdn.co/image/ab67616d0000b27341720ef0ae31e10d39e43ca2',
      rank: 1,
      title: 'Like a Rolling Stone',
      url: 'https://drive.google.com/uc?id=1JBVMklPFvwJldKEA8O8SipDuVX6wxIWO&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1JBVMklPFvwJldKEA8O8SipDuVX6wxIWO',
      year: '1965',
      duration: '6:10',
      genre: 'reggae',
      lyrics:
        "[00:10.83]Once upon a time you dressed so fine\n[00:13.36]Threw the bums a dime in your prime, didn't you?\n[00:21.06]People call say \"Beware doll, you're bound to fall\n[00:23.96]You thought they were all kidding you\n[00:31.72]You used to laugh about\n[00:36.82]Everybody that was hanging out\n[00:41.06]Now you don't talk so loud\n[00:45.97]Now you don't seem so proud\n[00:50.41]About having to be scrounging your next meal\n[00:59.22]How does it feel, how does it feel?\n[01:08.84]To be without a home\n[01:13.89]Like a complete unknown, like a rolling stone\n[01:32.21]Oh you've gone to the finest schools, alright Miss Lonely\n[01:36.61]But you know you only used to get juiced in it\n[01:43.03]Nobody's ever taught you how to live out on the street\n[01:46.42]And now you're gonna have to get used to it\n[01:55.17]You say you never compromise\n[01:58.78]With the mystery tramp, but now you realize\n[02:03.84]He's not selling any alibis\n[02:08.42]As you stare into the vacuum of his eyes\n[02:13.28]And say do you want to make a deal?\n[02:22.51]How does it feel, how does it feel?\n[02:32.24]To be on your own, with no direction home\n[02:41.94]A complete unknown, like a rolling stone\n[03:00.38]Oh, you never turned around to see the frowns\n[03:04.18]On the jugglers and the clowns when they all did tricks for you\n[03:11.47]You never understood that it ain't no good\n[03:13.75]You shouldn't let other people get your kicks for you\n[03:21.87]You used to ride on a chrome horse with your diplomat\n[03:27.08]Who carried on his shoulder a Siamese cat\n[03:32.10]Ain't it hard when you discovered that\n[03:37.11]He really wasn't where it's at\n[03:41.92]After he took from you everything he could steal\n[03:50.67]How does it feel, how does it feel?\n[04:00.38]To have you on your own, with no direction home\n[04:09.85]Like a complete unknown, like a rolling stone\n[04:28.33]Oh, princess on a steeple and all the pretty people\n[04:32.97]They're all drinking, thinking that they've got it made\n[04:39.90]Exchanging all precious gifts\n[04:42.37]But you better take your diamond ring, you better pawn it babe\n[04:50.34]You used to be so amused\n[04:55.09]At Napoleon in rags and the language that he used\n[05:00.11]Go to him now, he calls you, you can't refuse\n[05:04.96]When you ain't got nothing, you got nothing to lose\n[05:10.28]You're invisible now, you've got no secrets to conceal\n[05:18.46]How does it feel, oh how does it feel?\n[05:28.17]To be on your own, with no direction home\n[05:38.00]Like a complete unknown, like a rolling stone",
      minus:
        'https://docs.google.com/uc?export=open&id=1rK0wr_EVJ-lEzqeFvpoIawocOOZsBsdn',
    },
    {
      _id: '630b66871fbf6ac07323f99e',
      album: 'Out of Our Heads',
      artist: 'The Rolling Stones',
      img: 'https://i.scdn.co/image/ab67616d0000b27305c5be85b64eaff732f7cb0b',
      rank: 2,
      title: "(I Can't Get No) Satisfaction",
      url: 'https://drive.google.com/uc?id=1M5QfxXmrf29-uLR590PpLJrfwxy5dxmN&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1M5QfxXmrf29-uLR590PpLJrfwxy5dxmN',
      year: '1965',
      duration: '3:44',
      genre: 'classic rock',
      lyrics:
        "[00:14.13]I can't get no satisfaction, I can't get no satisfaction\n[00:27.17]And I try and I try and I try and I try\n[00:33.74]I can't get no, I can't get no\n[00:41.06]When I'm drivin' in my car, and the man come on the radio\n[00:48.71]He's tellin' me more and more about some useless information\n[00:55.21]Supposed to fire my imagination\n[00:58.90]I can't get no, oh, no, no, no, hey\n[01:09.05]That's what I say\n[01:13.83]I can't get no satisfaction, I can't get no satisfaction\n[01:27.25]And I try and I try and I try and I try\n[01:33.67]I can't get no, I can't get no\n[01:40.92]When I'm watchin' my TV and a man comes on and tells me\n[01:47.82]How white my shirts can be\n[01:51.75]But, he can't be a man 'cause he doesn't smoke\n[01:55.53]The same cigarettes as me\n[01:58.46]I can't get no, oh, no, no, no, ah, hey, hey, hey\n[02:08.63]That's what I say\n[02:13.30]I can't get no satisfaction, I can't get no girl reaction\n[02:27.26]And I try and I try and I try and I try\n[02:33.68]I can't get no, I can't get no\n[02:40.82]When I'm ridin' 'round the world\n[02:44.24]And I'm doin' this and I'm signin' that\n[02:48.25]And I'm tryin' to make some girl, who tells me\n[02:52.18]Baby, better come back maybe next week\n[02:55.47]Can't you see I'm on a losing streak?\n[02:58.91]I can't get no, oh, no, no, no, hey, hey, hey\n[03:08.56]That's what I say, I can't get no, I can't get no\n[03:19.74]I can't get no satisfaction, no satisfaction\n[03:29.96]No satisfaction, no satisfaction, no satisfaction\n[03:37.10]I can't get no\n[03:41.05]I can't",
      minus:
        'https://docs.google.com/uc?export=open&id=1gKuaiZ4xZSEJENOr4y_TsUqmHDfhVexJ',
    },
    {
      _id: '630b66b31fbf6ac0732484c5',
      album: 'Imagine',
      artist: 'John Lennon',
      img: 'https://i.scdn.co/image/ab67616d0000b27399581550ef9746ca582bb3cc',
      rank: 3,
      title: 'Imagine',
      url: 'https://drive.google.com/uc?id=1KGRAk5rV5-fwz2xJo6LTanRIfnh3oeSl&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1KGRAk5rV5-fwz2xJo6LTanRIfnh3oeSl',
      year: '1971',
      duration: '3:03',
      genre: 'indie',
      lyrics:
        "[00:13.09]Imagine there's no heaven\n[00:20.62]It's easy if you try\n[00:26.80]No hell below us\n[00:33.05]Above us only sky\n[00:39.56]Imagine all the people\n[00:46.07]Living for today, ah ah\n[00:53.33]Imagine there's no countries\n[00:58.83]It isn't hard to do\n[01:05.07]Nothing to kill or die for\n[01:11.81]And no religion too\n[01:18.29]Imagine all the people\n[01:23.81]Living life in peace, yoo hoh\n[01:31.31]You may say I'm a dreamer\n[01:37.63]But I'm not the only one\n[01:43.38]I hope someday you'll join us\n[01:50.40]And the world will be as one\n[01:56.40]Imagine no possessions\n[02:02.15]I wonder if you can\n[02:08.64]No need for greed or hunger\n[02:14.87]A brotherhood of man\n[02:21.65]Imagine all the people\n[02:27.39]Sharing all the world, yoo hoh\n[02:33.64]You may say I'm a dreamer\n[02:40.62]But I'm not the only one\n[02:46.61]I hope someday you'll join us\n[02:52.89]And the world will live as one",
      minus:
        'https://docs.google.com/uc?export=open&id=15lnARp36I2Hiig9sKscm2kLbcJJ_GHvO',
    },
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
    {
      _id: '630b67761fbf6ac07326f068',
      album: 'Nevermind',
      artist: 'Nirvana',
      img: 'https://i.scdn.co/image/ab67616d0000b273e175a19e530c898d167d39bf',
      rank: 9,
      title: 'Smells Like Teen Spirit',
      url: 'https://drive.google.com/uc?id=1FplQAaJXj4VJSAZwPY71STxl286FRYTI&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1FplQAaJXj4VJSAZwPY71STxl286FRYTI',
      year: '1991',
      duration: '5:01',
      lyrics:
        "[00:00.97]\"Smells Like Teen Spirit\"\n[00:34.72]Load up on guns, bring your friends\n[00:38.96]It's fun to lose and to pretend\n[00:42.96]She's over-bored and self-assured\n[00:47.15]Oh no, I know a dirty word\n[00:51.31]Hello, hello, hello, how low\n[00:55.25]Hello, hello, hello, how low\n[00:59.49]Hello, hello, hello, how low\n[01:03.49]Hello, hello, hello\n[01:06.49]With the lights out, it's less dangerous\n[01:10.31]Here we are now, entertain us\n[01:14.49]I feel stupid and contagious\n[01:18.62]Here we are now, entertain us\n[01:22.86]A mulatto, an albino, a mosquito, my libido\n[01:30.98]Yeah, hey\n[01:37.32]Yeah\n[01:48.57]I'm worse at what I do best\n[01:52.82]And for this gift I feel blessed\n[01:56.82]Our little group has always been\n[02:01.07]And always will until the end\n[02:05.07]Hello, hello, hello, how low\n[02:09.20]Hello, hello, hello, how low\n[02:13.44]Hello, hello, hello, how low\n[02:17.44]Hello, hello, hello\n[02:20.20]With the lights out, it's less dangerous\n[02:24.20]Here we are now, entertain us\n[02:28.44]I feel stupid and contagious\n[02:32.45]Here we are now, entertain us\n[02:36.45]A mulatto, an albino, a mosquito, my libido\n[02:44.69]Yeah, hey\n[02:50.95]Yeah\n[03:34.70]And I forget just why I taste\n[03:38.80]Oh yeah, I guess it makes me smile\n[03:42.87]I found it hard, it's hard to find\n[03:47.00]Oh well, whatever, never mind\n[03:51.01]Hello, hello, hello, how low\n[03:55.25]Hello, hello, hello, how low\n[03:59.25]Hello, hello, hello, how low\n[04:03.08]Hello, hello, hello\n[04:06.08]With the lights out, it's less dangerous\n[04:09.95]Here we are now, entertain us\n[04:14.08]I feel stupid and contagious\n[04:18.15]Here we are now, entertain us\n[04:22.15]A mulatto, an albino, a mosquito, my libido\n[04:30.15]A denial, a denial, a denial, a denial, a denial, a denial, a denial, a denial, a denial",
      minus:
        'https://docs.google.com/uc?export=open&id=1pyn_vGkqdYlmapmjwnNJym5kZ2aZTW9I',
    },
    {
      _id: '630b67941fbf6ac073275282',
      album: "What'd I Say",
      artist: 'Ray Charles',
      img: 'https://i.scdn.co/image/ab67616d0000b2731990f67950270de15b709d99',
      rank: 10,
      title: "What'd I Say",
      url: 'https://drive.google.com/uc?id=1EkERW7DPj4gqdgacg8JC7_NLT4UPfrfg&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1EkERW7DPj4gqdgacg8JC7_NLT4UPfrfg',
      year: '1959',
      duration: '6:26',
      genre: 'pop',
      lyrics:
        "[00:00.00]What'd I Say (Parts 1 & 2) - Ray Charles\n[01:39.67]Hey\n[01:40.07]Mama don't you treat me wrong\n[01:41.68]\n[01:42.48]Come and love your daddy all night long\n[01:44.45]All right now hey hey all right\n[01:50.42]\n[01:55.91]See the girl with the diamond ring\n[01:57.48]\n[01:58.61]She knows how to shake that thing\n[02:00.90]All right now now now hey hey hey hey\n[02:06.71]\n[02:12.26]Tell your mama tell your pa\n[02:14.37]\n[02:15.05]I'm gonna send you back to Arkansas\n[02:16.72]Oh yes man you don't do right don't do right\n[02:22.89]\n[02:28.58]When you see me in misery\n[02:29.99]\n[02:31.38]Come on baby see about me\n[02:33.00]Now yeah all right all right aw play it boy\n[02:42.51]\n[03:16.96]When you see me in misery\n[03:18.26]\n[03:19.74]Come on baby see about me\n[03:21.41]Now yeah hey hey all right\n[03:27.70]\n[03:33.26]See the girl with the red dress on\n[03:34.96]\n[03:35.97]She can do the Birdland all night long\n[03:37.91]\n[03:38.72]Yeah yeah what'd I say all right\n[03:43.89]\n[03:47.35]Well tell me what'd I say yeah\n[03:49.70]\n[03:50.91]Tell me what'd I say right now\n[03:52.49]\n[03:53.59]Tell me what'd I say\n[03:54.61]\n[03:56.24]Tell me what'd I say right now\n[03:57.62]\n[03:58.99]Tell me what'd I say\n[03:59.92]\n[04:01.73]Tell me what'd I say yeah\n[04:03.09]\n[04:03.94]And I wanna know\n[04:05.43]\n[04:07.22]Baby I wanna know right now\n[04:08.54]\n[04:09.89]And I wanna know\n[04:10.75]\n[04:12.58]And I wanna know right now yeah\n[04:14.08]\n[04:15.22]And I wanna know\n[04:16.28]\n[04:18.00]Said I wanna know yeah\n[04:19.07]\n[04:33.52]Uhh (uhh) oh (oh) uhh (uhh)\n[04:40.41]Oh (oh) uhh (uhh) oh (oh)\n[04:43.91]Ah one more time\n[04:45.13](just one more time)\n[04:46.36]Say it one more time right now\n[04:48.01](just one more time)\n[04:49.21]Say it one more time now\n[04:50.69](just one more time)\n[04:51.51]Say it one more time yeah\n[04:53.21](just one more time)\n[04:54.15]Say it one more time\n[04:55.39](just one more time)\n[04:56.46]Say it one more time yeah\n[04:58.50](just one more time)\n[04:59.52]\n[05:00.81]Uhh (uhh) oh (oh) uhh (uhh)\n[05:07.21]Oh (oh) uhh (uhh) oh (oh)\n[05:10.67]Ah make me feel so good\n[05:12.08](make me feel so good)\n[05:13.18]Make me feel so good now yeah\n[05:14.85](make me feel so good)\n[05:15.92]Woah Baby\n[05:17.23](make me feel so good)\n[05:18.65]Make me feel so good yeah\n[05:20.12](make me feel so good)\n[05:21.53]Make me feel so good\n[05:22.70](make me feel so good)\n[05:24.38]Make me feel so good yeah\n[05:25.77](make me feel so good)\n[05:27.11]\n[05:28.23]Huh (huh) ho (ho) huh (huh)\n[05:34.69]Ho (ho) huh (huh) ho (ho)\n[05:38.34]Ah it's all right\n[05:39.44](baby it's all right)\n[05:40.73]Said that it's all right\n[05:41.77]Right now\n[05:42.13](baby it's all right)\n[05:43.54]Said that it's all right\n[05:44.58](baby it's all right)\n[05:45.80]Said that it's all right yeah\n[05:47.43](baby it's all right)\n[05:48.64]Said that it's all right\n[05:49.85](baby it's all right)\n[05:50.93]\n[05:51.56]Said that it's all right\n[05:52.78](baby it's all right)\n[05:53.75]Woah shake that thing now\n[05:55.35]\n[05:56.09](baby shake that thing)\n[05:57.22]Baby shake that thing now now\n[05:58.63](baby shake that thing)\n[05:59.80]Baby shake that thing\n[06:01.17](baby shake that thing)\n[06:02.44]Baby shake that thing right now\n[06:04.07](baby shake that thing)\n[06:05.26]Baby shake that thing\n[06:06.68](baby shake that thing)\n[06:08.01]Baby shake that thing\n[06:09.22](baby shake that thing)\n[06:10.46]Woah I feel all right now yeah\n[06:12.40](make me feel all right)\n[06:13.64]Said I feel all right now\n[06:14.77](make me feel all right)\n[06:16.12]Woooah (make me feel all right)\n[06:19.21]Tell you I feel all right\n[06:20.39](make me feel all right)\n[06:21.80]Said I feel all right\n[06:22.91](make me feel all right)\n[06:24.24]Baby I feel all right\n[06:25.47](make me feel all right)",
      minus:
        'https://docs.google.com/uc?export=open&id=1EemfvM3UVckdKVsheRhYGlCMQBsFjrUR',
    },
    {
      _id: '630b67b01fbf6ac07327aeee',
      album: 'My Generation',
      artist: 'The Who',
      img: 'https://i.scdn.co/image/ab67616d0000b27334658b1827b64a1d4d5a5ca9',
      rank: 11,
      title: 'My Generation',
      url: 'https://drive.google.com/uc?id=1f39V-LWSibNZ3WDe1Zw7fN_T1lMXDWpT&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1f39V-LWSibNZ3WDe1Zw7fN_T1lMXDWpT',
      year: '1965',
      duration: '3:16',
      genre: 'indie',
      lyrics:
        "[00:04.50]People try to put us d-down (Talkin' 'bout my generation)\n[00:09.51]Just because we g-get around (Talkin' 'bout my generation)\n[00:14.51]Things they do look awful c-c-c-cold (Talkin' 'bout my generation)\n[00:19.50]I hope I die before I get old (Talkin' 'bout my generation)\n[00:23.51]This is my generation\n[00:26.27]This is my generation, baby\n[00:30.01]Why don't you all fade away (Talkin' 'bout my generation)\n[00:34.50]And don't try to dig what we all s-s-say (Talkin' 'bout my generation)\n[00:39.25]I'm not trying to cause a big s-sensation (Talkin' 'bout my generation)\n[00:44.51]I'm just talkin' 'bout my g-g-g-generation (Talkin' 'bout my generation)\n[00:48.28]This is my generation\n[00:50.76]This is my generation, baby\n[01:20.26]Why don't you all fade away (Talkin' 'bout my generation)\n[01:24.01]And don't try to dig what we all s-s-s-say (Talkin' 'bout my generation)\n[01:28.76]I'm not trying to cause a big sensation (Talkin' 'bout my generation)\n[01:33.26]I'm just talkin' 'bout my g-g-g-generation (Talkin' 'bout my generation)\n[01:37.75]This is my generation\n[01:40.01]This is my generation, baby\n[01:43.76]My, my generation\n[01:47.31]My, my, my, my generation\n[01:53.25]People try to put us d-down (Talkin' 'bout my generation)\n[01:58.05]Just because we g-g-get around (Talkin' 'bout my generation)\n[02:03.26]Things they do look awful c-c-cold (Talkin' 'bout my generation)\n[02:08.03]Yeah, I hope I die before I get old (Talkin' 'bout my generation)\n[02:12.26]This is my generation\n[02:14.51]This is my generation, baby\n[02:18.01]My, my, my, my g-g-gen-generation\n[02:50.00]Talkin' about my generation\n[02:52.75]My generation\n[02:54.01]This is my generation, baby\n[02:55.77]My generation\n[02:57.50]This is my generation\n[02:59.26]This is my generation\n[03:01.51]This is my generation",
      minus:
        'https://docs.google.com/uc?export=open&id=1b713vmECvLCj_He1grqi6YVf0v5HiNhT',
    },
    {
      _id: '630b67de1fbf6ac073283278',
      album: 'Portrait of a Legend 1951-1964',
      artist: 'Sam Cooke',
      img: 'https://i.scdn.co/image/ab67616d0000b2737329db55d8ec4e851b694aa1',
      rank: 12,
      title: 'A Change Is Gonna Come',
      url: 'https://drive.google.com/uc?id=1-ufyCRQ8C6kpj1UXKEd0tcZADDPCKsCP&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1-ufyCRQ8C6kpj1UXKEd0tcZADDPCKsCP',
      year: '1964',
      duration: '3:13',
      genre: 'pop',
      lyrics:
        '[00:00.00]\n[00:19.58]I was born by the river in a little tent\n[00:27.62]Oh and just like the river I’ve been running ever since\n[00:36.18]It’s been a long, a long time coming\n[00:42.36]But I know a change gonna come, oh yes it will\n[00:51.06]\n[00:52.43]It’s been too hard living but I’m afraid to die\n[01:02.23]Cause I don’t know what’s up there beyond the sky\n[01:08.71]It’s been a long, a long time coming\n[01:18.17]But I know a change gonna come, oh yes it will\n[01:27.10]\n[01:30.98]I go down to the movie and I go downtown\n[01:40.03]Somebody keep telling me don’t hang around\n[01:46.77]It’s been a long, a long time coming\n[01:53.76]But I know a change gonna come, oh yes it will\n[02:02.55]\n[02:05.89]Then I go to my brother\n[02:15.35]And I say brother wont you help me please\n[02:23.41]But he winds up knocking me\n[02:31.59]Knocking me back down on my knees\n\n[02:34.78]Ohhhhhh…..\n\n[02:38.02]There been times that I thought I couldn’t last for long\n[02:47.57]But now I think I’m able to carry on\n[02:54.06]It’s been a long, a long time coming\n[03:00.42]But I know a change gonna come, yes it will, oh I know\n\n[03:12.80]A change gonna come\n[03:14.71]I said I know\n[03:22.96]\n[03:23.77]A change gonna come',
      minus:
        'https://docs.google.com/uc?export=open&id=1XZm51OeCiPGVGw1tzMxJgxosAj62S1-X',
    },
    {
      _id: '630b684e1fbf6ac07329ab5a',
      album: 'Help!',
      artist: 'The Beatles',
      img: 'https://i.scdn.co/image/ab67616d0000b273e3e3b64cea45265469d4cafa',
      rank: 13,
      title: 'Yesterday',
      url: 'https://drive.google.com/uc?id=1hnp_BJiDhdXq87e_keyRqe6ChPDrbgd9&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1hnp_BJiDhdXq87e_keyRqe6ChPDrbgd9',
      year: '1965',
      duration: '2:10',
      genre: 'classic rock',
      lyrics:
        "[00:05.41]Yesterday, all my troubles seemed so far away\n[00:18.29]Now it looks as though they're here to stay\n[00:22.23]Oh, I believe in yesterday\n[00:27.87]Suddenly, I'm not half the man I used to be\n[00:35.76]There's a shadow hanging over me\n[00:39.71]Oh, yesterday came suddenly\n[00:45.07]Why she had to go I don't know she wouldn't say\n[00:54.37]I said something wrong, now I long for yesterday\n[01:04.81]Yesterday, love was such an easy game to play\n[01:12.13]Now I need a place to hide away\n[01:16.07]Oh, I believe in yesterday\n[01:21.99]Why she had to go I don't know she wouldn't say\n[01:31.28]I said something wrong, now I long for yesterday\n[01:41.14]Yesterday, love was such an easy game to play\n[01:49.05]Now I need a place to hide away\n[01:52.70]Oh, I believe in yesterday",
      minus:
        'https://docs.google.com/uc?export=open&id=1_1xA9RJKtsqbJwTP6VUquf55M49CKoKY',
    },
    {
      _id: '630b68751fbf6ac0732a23dc',
      album: "The Freewheelin' Bob Dylan",
      artist: 'Bob Dylan',
      img: 'https://i.scdn.co/image/ab67616d0000b2737d214af8499aa95ad220f573',
      rank: 14,
      title: "Blowin' in the Wind",
      url: 'https://drive.google.com/uc?id=1hfPsPYQoDw180f4k1HUL6HhoD42Ziqq-&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1hfPsPYQoDw180f4k1HUL6HhoD42Ziqq-',
      year: '1963',
      duration: '2:55',
      genre: 'reggae',
      lyrics:
        "[00:08.41]How many roads must a man walk down\n[00:13.15]Before you call him a man?\n[00:19.16]How many seas must a white dove sail\n[00:24.40]Before she sleeps in the sand?\n[00:30.40]Yes, 'n' how many times must the cannon balls fly\n[00:36.41]Before they're forever banned?\n[00:42.41]The answer, my friend, is blowin' in the wind\n[00:47.91]The answer is blowin' in the wind\n[00:53.66]Yes, 'n' how many years can a mountain exist\n[00:59.40]Before it is washed to the sea?\n[01:05.15]Yes, 'n' how many years can some people exist\n[01:10.91]Before they're allowed to be free?\n[01:16.90]Yes, 'n' how many times can a man turn his head\n[01:22.15]And pretend that he just doesn't see?\n[01:28.15]The answer, my friend, is blowin' in the wind\n[01:33.54]The answer is blowin' in the wind\n[01:40.04]Yes, 'n' how many times must a man look up\n[01:44.29]Before he can see the sky?\n[01:50.54]Yes, 'n' how many ears must one man have\n[01:56.44]Before he can hear people cry?\n[02:02.08]Yes, 'n' how many deaths will it take 'til he knows\n[02:07.33]That too many people have died?\n[02:13.59]The answer, my friend, is blowin' in the wind\n[02:18.82]The answer is blowin' in the wind",
      minus:
        'https://docs.google.com/uc?export=open&id=1WaZitZKVqv3uyAdclHO-cic9tctP70kU',
    },
  ];

  const checkedItemsObj = {
    checkedArtists: ['The Beatles'],
    checkedYears: ['1968'],
    checkedGenres: [],
  };

  const searchedItems = [
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
    {
      _id: '630b688c1fbf6ac0732a7cdc',
      album: 'London Calling',
      artist: 'The Clash',
      img: 'https://i.scdn.co/image/ab67616d0000b2738421202a8ca7c72401f5d3a4',
      rank: 15,
      title: 'London Calling',
      url: 'https://drive.google.com/uc?id=1T6Xmu_rT35MXKHgcgosIUD24DKuDWTDc&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1T6Xmu_rT35MXKHgcgosIUD24DKuDWTDc',
      year: '1980',
      duration: '3:19',
      lyrics:
        "[00:00.00]The Clash\n[00:21.00]London calling to the faraway towns\n[00:25.00]Now war is declared - and battle come down\n[00:29.00]London calling to the underworld\n[00:32.00]Come out of the cupboard,you boys and girls\n[00:36.00]London calling, now don't look to us\n[00:39.00]Phoney Beatlemania has bitten the dust\n[00:43.00]London calling, see we ain't got no swing\n[00:46.00]'Cept for the reign of that truncheon thing\n[00:50.00]The ice age is coming, the sun is zooming in\n[00:54.00]Meltdown expected, the wheat is growing thin\n[00:57.00]Engines stop running, but I have no fear\n[01:01.00]Cause London is burning - I live by the river\n[01:07.00]London calling to the imitation zone\n[01:10.00]Forget it, brother, you can go at it alone\n[01:14.00]London calling to the zombies of death\n[01:17.00]Quit holding out - and draw another breath\n[01:21.00]London calling - and I don't wanna shout\n[01:25.00]But while we were talking I saw you nodding out\n[01:28.00]London calling, see we ain't got no high\n[01:32.00]Except for that one with the yellowy eyes\n[01:36.00]The ice age is coming, the sun is zooming in\n[01:39.00]Engines stop running, the wheat is growing thin\n[01:43.00]A nuclear error, but I have no fear\n[01:46.00]Cause London is drowning - I, I live by the river\n[02:21.00]The ice age is coming, the sun is zooming in\n[02:24.00]Engines stop running, the wheat is growing thin\n[02:28.00]A nuclear error, but I have no fear\n[02:31.00]Cause London is drowning - I, I live by the river\n[02:50.00]Now get this\n[02:51.00]London calling, yes, I was there, too\n[02:55.00]An' you know what they said? Well, some of it was true!\n[02:59.00]London calling at the top of the dial\n[03:02.00]And after all this, won't you give me a smile?\n[03:06.00]London Calling\n[03:14.00]I never felt so much alike, like-a, like-a...\n[03:19.00]",
      minus:
        'https://docs.google.com/uc?export=open&id=1hEmw_GhbgWQcSiVi4ngMzNsBT3IAN2gK',
    },
  ];

  const order = 'ASC';

  const expectedResult = [
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

  const result = getFinalItems(
    dataArray,
    checkedItemsObj,
    searchedItems,
    order,
  );

  expect(expectedResult).toEqual(result);
});
