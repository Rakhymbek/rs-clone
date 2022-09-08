import { getSortedByGenresArray } from './getSortedByGenresArray';

it('should sort an array by genre in the ascending order', () => {
  const dataArray = [
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
    {
      _id: '630b68ee1fbf6ac0732bb864',
      album: ' Elvis 30 #1 Hits',
      artist: 'Elvis Presley',
      img: 'https://i.scdn.co/image/ab67616d0000b273dec09ec14280fcffb7eacadb',
      rank: 19,
      title: 'Hound Dog',
      url: 'https://drive.google.com/uc?id=1sQdr1peuIBWcSawNj52iQhzLfu1tR--i&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1sQdr1peuIBWcSawNj52iQhzLfu1tR--i',
      year: '1956',
      duration: '2:14',
      genre: 'dance',
      lyrics:
        "[00:00.16]You ain't nothin' but a hound dog\n[00:03.24]Cryin' all the time\n[00:05.62]You ain't nothin' but a hound dog\n[00:08.93]Cryin' all the time\n[00:11.45]Well, you ain't never caught a rabbit\n[00:13.44]And you ain't no friend of mine\n[00:16.78]When they said you was high classed\n[00:19.58]Well, that was just a lie\n[00:22.38]Yeah, they said you was high classed\n[00:25.02]Well, that was just a lie\n[00:27.85]Yeah, you ain't never caught a rabbit\n[00:29.97]And you ain't no friend of mine\n[00:33.07]You ain't nothin' but a hound dog\n[00:36.15]Cryin' all the time\n[00:38.53]You ain't nothin' but a hound dog\n[00:41.73]Cryin' all the time\n[00:44.17]Well, you ain't never caught a rabbit\n[00:46.30]And you ain't no friend of mine\n[00:50.70]Ahh, ahh\n[00:56.02]Ahh, ahh\n[01:05.76]When they said you was high classed\n[01:08.45]Well, that was just a lie\n[01:11.10]Yeah, they said you was high classed\n[01:13.75]Well, that was just a lie\n[01:16.85]Well, you ain't never caught a rabbit\n[01:18.82]And you ain't no friend of mine\n[01:23.21]Ahh, ahh\n[01:28.52]Ahh, ahh\n[01:38.31]When they said you was high classed\n[01:40.96]Well, that was just a lie\n[01:43.63]You know, they said you was high classed\n[01:46.27]Well, that was just a lie\n[01:49.21]Yeah, you ain't never caught a rabbit\n[01:51.09]And you ain't no friend of mine\n[01:54.29]You ain't nothin' but a hound dog\n[01:57.26]Cryin' all the time\n[01:59.55]You ain't nothin' but a hound dog\n[02:02.74]Cryin' all the time\n[02:05.33]Well, you ain't never caught a rabbit\n[02:07.49]You ain't no friend of mine",
      minus:
        'https://docs.google.com/uc?export=open&id=17WKHnO991U7DquF1VLjZDeOBpsrZX5gb',
    },
    {
      _id: '630b69b71fbf6ac0732e0df8',
      album: 'Born to Run',
      artist: 'Bruce Springsteen',
      img: 'https://i.scdn.co/image/ab67616d0000b273503143a281a3f30268dcd9f9',
      rank: 21,
      title: 'Born to Run',
      url: 'https://drive.google.com/uc?id=1Dj2mde7-TKaJDTdiYjFUXQ1tLnRx0EIn&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1Dj2mde7-TKaJDTdiYjFUXQ1tLnRx0EIn',
      year: '1975',
      duration: '5:56',
      genre: 'pop',
      lyrics:
        "[00:10.45]Title: Born to Run\n[00:18.60]Lyrics:\n[00:18.90]In the day we sweat it out on the streets of a runaway American dream\n[00:25.48]At night we ride through mansions of glory in suicide machines\n[00:32.34]Sprung from cages out on highway 9,\n[00:36.39]Chrome wheeled, fuel injected and steppin' out over the line\n[00:41.04]Baby this town rips the bones from your back\n[00:46.28]It's a death trap, it's a suicide rap\n[00:49.51]We gotta get out while we're young\n[00:52.98]'Cause tramps like us, baby we were born to run\n[01:10.31]Wendy let me in I wanna be your friend\n[01:13.54]I want to guard your dreams and visions\n[01:17.02]Just wrap your legs round these velvet rims\n[01:20.31]And strap your hands across my engines\n[01:23.98]Together we could break this trap\n[01:27.45]We'll run till we drop, baby we'll never go back\n[01:32.79]Will you walk with me out on the wire\n[01:37.50]'Cause baby I'm just a scared and lonely rider\n[01:41.42]But I gotta find out it feels\n[01:44.65]I want to know if love is wild, baby I want to know if love is real\n[01:59.64]\n[02:00.76]\n[02:22.84]Beyond the palace hemi-powered drones scream down the boulevard\n[02:29.18]The girls comb their hair in rearview mirrors\n[02:32.60]And the boys try to look so hard\n[02:36.01]The amusement park rises bold and stark\n[02:39.29]Kids are huddled on the beach in a mist\n[02:42.97]I wanna die with you Wendy on the streets tonight\n[02:46.50]In an everlasting kiss\n[02:50.23]\n[02:56.62]\n[03:45.61]The highway's jammed with broken heroes on a last chance power drive\n[03:51.39]Everybody's out on the run tonight but there's no place left to hide\n[03:57.91]Together Wendy we can live with the sadness\n[04:01.21]I'll love you with all the madness in my soul\n[04:06.23]Someday girl I don't know when we're gonna get to that place\n[04:13.00]Where we really want to go and we'll walk in the sun\n[04:17.85]But till then tramps like us, baby we were born to run\n[04:25.42]Oh honey tramps like us,\n[04:26.67]Baby we were born to run\n[04:31.27]tramps like us,\n[04:33.25]Baby we were born to run\n[04:47.38]Oh........ !\n[04:48.99]Wow.........!",
      minus:
        'https://docs.google.com/uc?export=open&id=1RHpiK3IMcN7cX56Ssvm0Rp3mhGat9nZ_',
    },
  ];

  const expectedResult = [
    {
      _id: '630b68ee1fbf6ac0732bb864',
      album: ' Elvis 30 #1 Hits',
      artist: 'Elvis Presley',
      img: 'https://i.scdn.co/image/ab67616d0000b273dec09ec14280fcffb7eacadb',
      rank: 19,
      title: 'Hound Dog',
      url: 'https://drive.google.com/uc?id=1sQdr1peuIBWcSawNj52iQhzLfu1tR--i&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1sQdr1peuIBWcSawNj52iQhzLfu1tR--i',
      year: '1956',
      duration: '2:14',
      genre: 'dance',
      lyrics:
        "[00:00.16]You ain't nothin' but a hound dog\n[00:03.24]Cryin' all the time\n[00:05.62]You ain't nothin' but a hound dog\n[00:08.93]Cryin' all the time\n[00:11.45]Well, you ain't never caught a rabbit\n[00:13.44]And you ain't no friend of mine\n[00:16.78]When they said you was high classed\n[00:19.58]Well, that was just a lie\n[00:22.38]Yeah, they said you was high classed\n[00:25.02]Well, that was just a lie\n[00:27.85]Yeah, you ain't never caught a rabbit\n[00:29.97]And you ain't no friend of mine\n[00:33.07]You ain't nothin' but a hound dog\n[00:36.15]Cryin' all the time\n[00:38.53]You ain't nothin' but a hound dog\n[00:41.73]Cryin' all the time\n[00:44.17]Well, you ain't never caught a rabbit\n[00:46.30]And you ain't no friend of mine\n[00:50.70]Ahh, ahh\n[00:56.02]Ahh, ahh\n[01:05.76]When they said you was high classed\n[01:08.45]Well, that was just a lie\n[01:11.10]Yeah, they said you was high classed\n[01:13.75]Well, that was just a lie\n[01:16.85]Well, you ain't never caught a rabbit\n[01:18.82]And you ain't no friend of mine\n[01:23.21]Ahh, ahh\n[01:28.52]Ahh, ahh\n[01:38.31]When they said you was high classed\n[01:40.96]Well, that was just a lie\n[01:43.63]You know, they said you was high classed\n[01:46.27]Well, that was just a lie\n[01:49.21]Yeah, you ain't never caught a rabbit\n[01:51.09]And you ain't no friend of mine\n[01:54.29]You ain't nothin' but a hound dog\n[01:57.26]Cryin' all the time\n[01:59.55]You ain't nothin' but a hound dog\n[02:02.74]Cryin' all the time\n[02:05.33]Well, you ain't never caught a rabbit\n[02:07.49]You ain't no friend of mine",
      minus:
        'https://docs.google.com/uc?export=open&id=17WKHnO991U7DquF1VLjZDeOBpsrZX5gb',
    },
    {
      _id: '630b69b71fbf6ac0732e0df8',
      album: 'Born to Run',
      artist: 'Bruce Springsteen',
      img: 'https://i.scdn.co/image/ab67616d0000b273503143a281a3f30268dcd9f9',
      rank: 21,
      title: 'Born to Run',
      url: 'https://drive.google.com/uc?id=1Dj2mde7-TKaJDTdiYjFUXQ1tLnRx0EIn&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1Dj2mde7-TKaJDTdiYjFUXQ1tLnRx0EIn',
      year: '1975',
      duration: '5:56',
      genre: 'pop',
      lyrics:
        "[00:10.45]Title: Born to Run\n[00:18.60]Lyrics:\n[00:18.90]In the day we sweat it out on the streets of a runaway American dream\n[00:25.48]At night we ride through mansions of glory in suicide machines\n[00:32.34]Sprung from cages out on highway 9,\n[00:36.39]Chrome wheeled, fuel injected and steppin' out over the line\n[00:41.04]Baby this town rips the bones from your back\n[00:46.28]It's a death trap, it's a suicide rap\n[00:49.51]We gotta get out while we're young\n[00:52.98]'Cause tramps like us, baby we were born to run\n[01:10.31]Wendy let me in I wanna be your friend\n[01:13.54]I want to guard your dreams and visions\n[01:17.02]Just wrap your legs round these velvet rims\n[01:20.31]And strap your hands across my engines\n[01:23.98]Together we could break this trap\n[01:27.45]We'll run till we drop, baby we'll never go back\n[01:32.79]Will you walk with me out on the wire\n[01:37.50]'Cause baby I'm just a scared and lonely rider\n[01:41.42]But I gotta find out it feels\n[01:44.65]I want to know if love is wild, baby I want to know if love is real\n[01:59.64]\n[02:00.76]\n[02:22.84]Beyond the palace hemi-powered drones scream down the boulevard\n[02:29.18]The girls comb their hair in rearview mirrors\n[02:32.60]And the boys try to look so hard\n[02:36.01]The amusement park rises bold and stark\n[02:39.29]Kids are huddled on the beach in a mist\n[02:42.97]I wanna die with you Wendy on the streets tonight\n[02:46.50]In an everlasting kiss\n[02:50.23]\n[02:56.62]\n[03:45.61]The highway's jammed with broken heroes on a last chance power drive\n[03:51.39]Everybody's out on the run tonight but there's no place left to hide\n[03:57.91]Together Wendy we can live with the sadness\n[04:01.21]I'll love you with all the madness in my soul\n[04:06.23]Someday girl I don't know when we're gonna get to that place\n[04:13.00]Where we really want to go and we'll walk in the sun\n[04:17.85]But till then tramps like us, baby we were born to run\n[04:25.42]Oh honey tramps like us,\n[04:26.67]Baby we were born to run\n[04:31.27]tramps like us,\n[04:33.25]Baby we were born to run\n[04:47.38]Oh........ !\n[04:48.99]Wow.........!",
      minus:
        'https://docs.google.com/uc?export=open&id=1RHpiK3IMcN7cX56Ssvm0Rp3mhGat9nZ_',
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

  const result = getSortedByGenresArray(dataArray);

  expect(expectedResult).toEqual(result);
});
