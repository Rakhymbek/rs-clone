import { checkedArtistsFilterArray } from './checkedArtistsFilterArray';

it('should return an array corresponding to artist checked items', () => {
  const checkedItems = ['Nirvana', 'The Beatles'];

  const data = [
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
      _id: '630b68a11fbf6ac0732ab878',
      album: 'Meet the Beatles!',
      artist: 'The Beatles',
      img: 'https://i.scdn.co/image/ab67616d0000b2735b7066580ee9c681712b0e48',
      rank: 16,
      title: 'I Want to Hold Your Hand',
      url: 'https://drive.google.com/uc?id=1UFpdQaiBHE5L79lr0Xdn7ogqfmhgXGRb&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1UFpdQaiBHE5L79lr0Xdn7ogqfmhgXGRb',
      year: '1963',
      duration: '2:26',
      genre: 'rock',
      lyrics:
        "[00:06.58]Oh yeah I tell you somethin'\n[00:11.24]I think you'll understand\n[00:14.22]When I say that somethin'\n[00:18.48]I want to hold your hand\n[00:22.04]I want to hold your hand\n[00:25.52]I want to hold your hand\n[00:28.49]Oh please say to me\n[00:32.97]You'll let me be your man\n[00:35.73]And please say to me\n[00:39.98]You'll let me hold your hand\n[00:43.69]Now, let me hold your hand\n[00:47.20]I want to hold your hand\n[00:51.16]And when I touch you\n[00:53.45]I feel happy inside\n[00:58.36]It's such a feelin' that my love\n[01:02.58]I can't hide\n[01:04.67]I can't hide\n[01:06.66]I can't hide\n[01:10.59]Yeah, you got that somethin'\n[01:14.84]I think you'll understand\n[01:17.72]When I say that somethin'\n[01:22.08]I want to hold your hand\n[01:25.77]I want to hold your hand\n[01:29.26]I want to hold your hand\n[01:33.24]And when I touch you\n[01:35.91]I feel happy inside\n[01:40.57]It's such a feelin' that my love\n[01:45.25]I can't hide\n[01:47.01]I can't hide\n[01:48.93]I can't hide\n[01:52.82]Yeah, you got that somethin'\n[01:57.06]I think you'll understand\n[02:00.13]When I feel that somethin'\n[02:04.45]I want to hold your hand\n[02:08.06]I want to hold your hand\n[02:11.68]I want to hold your hand\n[02:15.80]I want to hold your hand",
      minus:
        'https://docs.google.com/uc?export=open&id=1RquVPNdMmwKis_jM9Xv6Wp_3wtXM9q1E',
    },
  ];

  const expectedResult = [
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
      _id: '630b68a11fbf6ac0732ab878',
      album: 'Meet the Beatles!',
      artist: 'The Beatles',
      img: 'https://i.scdn.co/image/ab67616d0000b2735b7066580ee9c681712b0e48',
      rank: 16,
      title: 'I Want to Hold Your Hand',
      url: 'https://drive.google.com/uc?id=1UFpdQaiBHE5L79lr0Xdn7ogqfmhgXGRb&export=download',
      urlPlay:
        'https://docs.google.com/uc?export=open&id=1UFpdQaiBHE5L79lr0Xdn7ogqfmhgXGRb',
      year: '1963',
      duration: '2:26',
      genre: 'rock',
      lyrics:
        "[00:06.58]Oh yeah I tell you somethin'\n[00:11.24]I think you'll understand\n[00:14.22]When I say that somethin'\n[00:18.48]I want to hold your hand\n[00:22.04]I want to hold your hand\n[00:25.52]I want to hold your hand\n[00:28.49]Oh please say to me\n[00:32.97]You'll let me be your man\n[00:35.73]And please say to me\n[00:39.98]You'll let me hold your hand\n[00:43.69]Now, let me hold your hand\n[00:47.20]I want to hold your hand\n[00:51.16]And when I touch you\n[00:53.45]I feel happy inside\n[00:58.36]It's such a feelin' that my love\n[01:02.58]I can't hide\n[01:04.67]I can't hide\n[01:06.66]I can't hide\n[01:10.59]Yeah, you got that somethin'\n[01:14.84]I think you'll understand\n[01:17.72]When I say that somethin'\n[01:22.08]I want to hold your hand\n[01:25.77]I want to hold your hand\n[01:29.26]I want to hold your hand\n[01:33.24]And when I touch you\n[01:35.91]I feel happy inside\n[01:40.57]It's such a feelin' that my love\n[01:45.25]I can't hide\n[01:47.01]I can't hide\n[01:48.93]I can't hide\n[01:52.82]Yeah, you got that somethin'\n[01:57.06]I think you'll understand\n[02:00.13]When I feel that somethin'\n[02:04.45]I want to hold your hand\n[02:08.06]I want to hold your hand\n[02:11.68]I want to hold your hand\n[02:15.80]I want to hold your hand",
      minus:
        'https://docs.google.com/uc?export=open&id=1RquVPNdMmwKis_jM9Xv6Wp_3wtXM9q1E',
    },
  ];

  const result = checkedArtistsFilterArray(checkedItems, data);

  expect(expectedResult).toEqual(result);
});
