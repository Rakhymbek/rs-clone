import { Box, styled, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchTracks } from "../../../fetchers/fetchTracks";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { uploadAllTracks } from "../../../store/trackSlice";
import { SongType } from "../../../types";
import { TrackList } from "../TrackList/TrackList";
import "./Karaoke.css";
import { NavMenu } from "../NavMenu/NavMenu";
const { MuseDOM } = require("muse-player");

const KaraokeWrapper = styled(Box)`
  max-height: 300px;
  overflow-y: scroll;
  padding: 20px 60px;
  margin-top: 20px;
  &::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 3px;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
  .css-apylqv-MuiButtonBase-root-MuiIconButton-root {
    display: none !important;
  }
  .css-apylqv-MuiButtonBase-root-MuiIconButton-root {
    display: none !important;
  }
`;

const Karaoke = () => {
  const dispatch = useAppDispatch();
  const tracks = useAppSelector((state) => state.tracks.allTracks);
  const currentTrack = useAppSelector<SongType>((state) => state.tracks.currentTrack);
  const txt = currentTrack.lyrics;
  const [msg, setMsg] = useState("");

  const data = {
   
    src: currentTrack.minus,
    lyric: txt,
  };

  function changeLyrics(lyrics: string[]) {
    return lyrics
      .map(
        (text, i) => `
              <li class="muse-lyric__item" data-lyric-item-id="${i}">
                <span class="muse-lyric__text">${text}</span>
              </li>`
      )
      .join("");
  }

  useEffect(() => {
    setMsg("Karaoke");
    const player = document.querySelector(
      ".muse-controller audio"
    ) as HTMLAudioElement;
    if (player) {
      const lyricsContainer = document.querySelector(
        ".muse-drawer__lyric-container"
      ) as HTMLElement;
      const lyrics = txt?.replace(/\[(.*)\]/g, "").split(/\n/) as string[];

      lyricsContainer.innerHTML = "";
      if (lyrics) {
        lyricsContainer.innerHTML = `
        ${changeLyrics(lyrics)}
        `;
      }
      player.src = currentTrack.minus as string;
      player.pause();
    }
  }, [currentTrack.lyrics, currentTrack.minus, txt]);

  useEffect(() => {
    MuseDOM.render([data, {}], document.getElementById("player"));
    fetchTracks().then((data) => {
      dispatch(uploadAllTracks(data));
    });
    const firstLyricsContainer = document.querySelector(
      ".muse-drawer__lyric-container"
    ) as HTMLElement;
    const firstLine = document.querySelector(
      ".muse-lyric__text"
    ) as HTMLElement;
    if (firstLine) {
      if (firstLine.innerHTML.includes("这首歌没有歌词~")) {
        firstLyricsContainer.innerHTML = "";
        setMsg(
          "После выбора песни, пожалуйста\n обновляйте страницу!\nЭто нужно для корректной работы плеера"
        );
      }
    }
    console.log("После выбора песни, пожалуйста\n обновляйте страницу!\nЭто нужно для корректной работы плеера")
  }, []);

  return (
    <div className='Karaoke'>
      <NavMenu />
      <div className='Karaoke-Content'>
        <Typography
          variant='h2'
          sx={{fontSize: {md: 25, sm: 16}}}
          marginBottom={1}
          textAlign={"center"}
        >
          {msg}
        </Typography>
        <div id='player' className='Karaoke-Line'></div>
        <div className='Karaoke-Controls'>
          <Typography
            variant='h2'
            fontSize={40}
            marginBottom={2}
            marginTop={3}
            marginLeft={3}
          >
            Список песен
          </Typography>
          <KaraokeWrapper className='Karaoke-Wrapper'>
            <TrackList tracks={tracks as SongType[]}></TrackList>
          </KaraokeWrapper>
          <div className='Karaoke-Player'></div>
        </div>
      </div>
    </div>
  );
};

export default Karaoke;
if (document.getElementById("player")) {
}
