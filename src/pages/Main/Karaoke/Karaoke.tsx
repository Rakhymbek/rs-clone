import React from "react";
import { useState } from "react";

const {getLyrics} = require('genius-lyrics-api');
const {getSong} = require('genius-lyrics-api');

type Options = {
	title: string;
	artist: string;
	apiKey: string; // Genius developer access token
	optimizeQuery?: boolean; // Setting this to true will optimize the query for best results
	authHeader?: boolean; // Whether to include auth header in the search request. 'false' by default.
}


const Karaoke = () => {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");

  function searchLyrics() {
    if (artist === "" || song === "") {
      return;
    }
    const options: Options = {
      apiKey:
        "NQGauInGqhK3-_yddrGWeKPm9wRLaNSvEDxd51TemEDOtQx7nc74IvOlQor7NeQT",
      title: "Blinding Lights",
      artist: "The Weeknd",
      optimizeQuery: true,
    };
    // getLyrics(options).then((data: any) => setLyrics(data));
    getSong(options).then((song: any) =>
      console.log(`
	${song.id}
	${song.title}
	${song.url}
	${song.albumArt}
	${song.lyrics}`)
    );
  }

  return (
    <div className='App'>
      <h1>Lyrics Finder</h1>

      <input
        className='inp'
        type='text'
        placeholder='Artist name'
        onChange={(e) => {
          setArtist(e.target.value);
        }}
      />
      <input
        className='inp'
        type='text'
        placeholder='Song name'
        onChange={(e) => {
          setSong(e.target.value);
        }}
      />
      <button className='btn' onClick={() => searchLyrics()}>
        Search
      </button>
      <hr />
      <pre>{lyrics}</pre>
    </div>
  );
};

export default Karaoke;
