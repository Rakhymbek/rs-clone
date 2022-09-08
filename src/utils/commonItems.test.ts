import { commonItems } from './commonItems';

it('should return an array of common items of two arrays', () => {
  const arr1 = [
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
  ];
  const arr2 = [
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
  ];

  const expectedResult = [
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
  ];

  const result = commonItems(arr1, arr2);

  expect(expectedResult).toEqual(result);
});
