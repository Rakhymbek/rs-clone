import { getSortedByYearsArray } from './getSortedByYearsArray';

it('should sort an array by year in the ascending order', () => {
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
    {
      _id: '630b68bc1fbf6ac0732b0bb2',
      album: 'Are You Experienced?',
      artist: 'The Jimi Hendrix Experience',
      img: 'https://i.scdn.co/image/ab67616d0000b273c9adfbd773852e286faed040',
      rank: 17,
      title: 'Purple Haze',
      url: 'https://drive.google.com/uc?id=1YiVWWWDXsUZqYHpidKirH1pI2PzPKAr9&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1YiVWWWDXsUZqYHpidKirH1pI2PzPKAr9',
      year: '1967',
      duration: '2:55',
      lyrics:
        "[00:32.46]Purple Haze all in my brain\n[00:36.90]Lately things don't seem the same\n[00:41.30]Actin' funny but I don't know why\n[00:45.46]Excuse me while I kiss the sky\n[00:48.61]--\n[00:52.55]Purple Haze all around\n[00:56.28]Don't know if I'm coming up or down\n[01:01.35]Am I happy or in misery?\n[01:05.04]Whatever it is, that girl put a spell on me\n[01:08.68]--\n[01:12.63]Help me\n[01:14.56]Help me\n[01:16.90]Oh no, oh\n[01:18.97]--\n[01:53.61]Purple Haze all in my eyes\n[01:57.71]Don't know if it's day or night\n[02:01.97]You've got me blowing, blowing my mind\n[02:05.45]Is it tomorrow or just the end of time?\n[02:09.71]--",
      minus:
        'https://docs.google.com/uc?export=open&id=1IGyLJ6QmrTTzwrvqCz-UrD5yhHY8I1Q9',
    },
    {
      _id: '630b68d71fbf6ac0732b7010',
      album: 'The Anthology',
      artist: 'Chuck Berry',
      img: 'https://i.scdn.co/image/ab67616d0000b273110946b830bcf8e22808f433',
      rank: 18,
      title: 'Maybellene',
      url: 'https://drive.google.com/uc?id=1apBsCHmnxqa92BjmgSOPJh7NezFRbwPa&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1apBsCHmnxqa92BjmgSOPJh7NezFRbwPa',
      year: '1955',
      duration: '2:22',
      lyrics:
        "[00:00.21]Artist: Chuck Berry\n[00:02.65]Album: Miscellaneous\n[00:03.84]Title: Maybellene\n[00:04.59]Maybellene, why can't you be true?\n[00:08.34]Oh maybellene, why can't you be true?\n[00:12.65]You've started back doing the things you used to do.\n[00:17.03]As i was motivatin' over the hill\n[00:18.97]I saw maybellene in a coup de ville.\n[00:21.22]A cadillac a-rollin' on the open road,\n[00:22.97]Nothin' will outrun my v8 ford.\n[00:25.28]The cadillac doin' 'bout ninety-five,\n[00:27.03]She's bumper to bumber rollin' side by side.\n[00:28.88]Maybellene, why can't you be true?\n[00:32.50]Oh maybellene, why can't you be true?\n[00:36.97]You've started back doing the things you used to do.\n[00:41.44]The Cadillac pulled up ahead of the Ford\n[00:43.38]The Ford got hot and wouldn't do no more\n[00:45.43]It then got cloudy and started to rain\n[00:47.44]I tooted my horn for a passin' lane\n[00:49.62]The rainwater blowin' all under my hood\n[00:51.48]I know that I was doin' my motor good\n[00:53.35]Maybellene, why can't you be true?\n[00:56.66]Oh maybellene, why can't you be true?\n[01:01.66]You've started back doing the things you used to do.\n[01:05.85]Solo guitar\n[01:29.51]Maybellene, why can't you be true?\n[01:33.45]Oh maybellene, why can't you be true?\n[01:37.69]You've started back doing the things you used to do.\n[01:42.51]The motor cooled down the heat went down\n[01:44.60]And that's when I heard that highway sound\n[01:46.78]The Cadillac asittin' like a ton of lead\n[01:48.66]A hundred and ten half a mile aheadv The Cadillac lookin' like it's sittin' still\n[01:52.66]And I caught Mabellene at the top of the hill\n[01:54.71]Maybellene, why can't you be true?\n[01:58.28]Oh maybellene, why can't you be true?\n[02:06.90]You've started back doing the things you used to do.",
      minus:
        'https://docs.google.com/uc?export=open&id=1y0mh0jhLcXF2ek1Rtq2xQsfmxF875gsG',
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
  ];

  const expectedResult = [
    {
      _id: '630b68d71fbf6ac0732b7010',
      album: 'The Anthology',
      artist: 'Chuck Berry',
      img: 'https://i.scdn.co/image/ab67616d0000b273110946b830bcf8e22808f433',
      rank: 18,
      title: 'Maybellene',
      url: 'https://drive.google.com/uc?id=1apBsCHmnxqa92BjmgSOPJh7NezFRbwPa&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1apBsCHmnxqa92BjmgSOPJh7NezFRbwPa',
      year: '1955',
      duration: '2:22',
      lyrics:
        "[00:00.21]Artist: Chuck Berry\n[00:02.65]Album: Miscellaneous\n[00:03.84]Title: Maybellene\n[00:04.59]Maybellene, why can't you be true?\n[00:08.34]Oh maybellene, why can't you be true?\n[00:12.65]You've started back doing the things you used to do.\n[00:17.03]As i was motivatin' over the hill\n[00:18.97]I saw maybellene in a coup de ville.\n[00:21.22]A cadillac a-rollin' on the open road,\n[00:22.97]Nothin' will outrun my v8 ford.\n[00:25.28]The cadillac doin' 'bout ninety-five,\n[00:27.03]She's bumper to bumber rollin' side by side.\n[00:28.88]Maybellene, why can't you be true?\n[00:32.50]Oh maybellene, why can't you be true?\n[00:36.97]You've started back doing the things you used to do.\n[00:41.44]The Cadillac pulled up ahead of the Ford\n[00:43.38]The Ford got hot and wouldn't do no more\n[00:45.43]It then got cloudy and started to rain\n[00:47.44]I tooted my horn for a passin' lane\n[00:49.62]The rainwater blowin' all under my hood\n[00:51.48]I know that I was doin' my motor good\n[00:53.35]Maybellene, why can't you be true?\n[00:56.66]Oh maybellene, why can't you be true?\n[01:01.66]You've started back doing the things you used to do.\n[01:05.85]Solo guitar\n[01:29.51]Maybellene, why can't you be true?\n[01:33.45]Oh maybellene, why can't you be true?\n[01:37.69]You've started back doing the things you used to do.\n[01:42.51]The motor cooled down the heat went down\n[01:44.60]And that's when I heard that highway sound\n[01:46.78]The Cadillac asittin' like a ton of lead\n[01:48.66]A hundred and ten half a mile aheadv The Cadillac lookin' like it's sittin' still\n[01:52.66]And I caught Mabellene at the top of the hill\n[01:54.71]Maybellene, why can't you be true?\n[01:58.28]Oh maybellene, why can't you be true?\n[02:06.90]You've started back doing the things you used to do.",
      minus:
        'https://docs.google.com/uc?export=open&id=1y0mh0jhLcXF2ek1Rtq2xQsfmxF875gsG',
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
      _id: '630b68bc1fbf6ac0732b0bb2',
      album: 'Are You Experienced?',
      artist: 'The Jimi Hendrix Experience',
      img: 'https://i.scdn.co/image/ab67616d0000b273c9adfbd773852e286faed040',
      rank: 17,
      title: 'Purple Haze',
      url: 'https://drive.google.com/uc?id=1YiVWWWDXsUZqYHpidKirH1pI2PzPKAr9&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1YiVWWWDXsUZqYHpidKirH1pI2PzPKAr9',
      year: '1967',
      duration: '2:55',
      lyrics:
        "[00:32.46]Purple Haze all in my brain\n[00:36.90]Lately things don't seem the same\n[00:41.30]Actin' funny but I don't know why\n[00:45.46]Excuse me while I kiss the sky\n[00:48.61]--\n[00:52.55]Purple Haze all around\n[00:56.28]Don't know if I'm coming up or down\n[01:01.35]Am I happy or in misery?\n[01:05.04]Whatever it is, that girl put a spell on me\n[01:08.68]--\n[01:12.63]Help me\n[01:14.56]Help me\n[01:16.90]Oh no, oh\n[01:18.97]--\n[01:53.61]Purple Haze all in my eyes\n[01:57.71]Don't know if it's day or night\n[02:01.97]You've got me blowing, blowing my mind\n[02:05.45]Is it tomorrow or just the end of time?\n[02:09.71]--",
      minus:
        'https://docs.google.com/uc?export=open&id=1IGyLJ6QmrTTzwrvqCz-UrD5yhHY8I1Q9',
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

  const result = getSortedByYearsArray(dataArray);

  expect(expectedResult).toEqual(result);
});
