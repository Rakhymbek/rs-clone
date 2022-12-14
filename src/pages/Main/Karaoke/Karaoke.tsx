import { Box, styled, Typography } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { fetchTracks } from "../../../fetchers/fetchTracks";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { changeCurrentSong, uploadAllTracks } from "../../../store/trackSlice";
import { SongType } from "../../../types";
import "./Karaoke.css";
import { NavMenu } from "../NavMenu/NavMenu";
import { DivChangeColor } from "../../../components/changeColor/DivChangeColor";
import { cn } from "@bem-react/classname";
import {
  colorToSecondary,
  extradarkToDark,
  extradarkToHover,
} from "../../../utils/colorUtils";
import { TEXT } from "../../../constants";
const { MuseDOM } = require("muse-player");

const KaraokeWrapper = styled(Box)`
  max-height: 250px;
  overflow-y: scroll;
  padding: 20px 20px;
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
  @media (max-width: 568px) {
    & {
      padding: 8px;
    }
  }
`;
const cnTrackItem = cn("TrackItem");

const Karaoke = () => {
  const dispatch = useAppDispatch();
  const tracks = useAppSelector((state) => state.tracks.allTracks);
  const currentTrack = useAppSelector<SongType>(
    (state) => state.tracks.currentTrack
  );
  const txt = currentTrack.lyrics;
  const textColor = useAppSelector((state) => state.colorTheme.textColor);
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor
  );
  const textColorSecondary = colorToSecondary(textColor);
  const colorHover = extradarkToHover(decorativeColor);
  const colorDark = extradarkToDark(decorativeColor);
  const bgColor = useAppSelector((state) => state.colorTheme.bgColor);
  const lang = useAppSelector((state) => state.language.lang);

  const defineCurrentTrack = useCallback(
    (track: SongType) => {
      return currentTrack._id === track._id;
    },
    [currentTrack._id]
  );

  const handleChooseSong = useCallback(
    (track: SongType) => {
      dispatch(changeCurrentSong(track));
    },
    [dispatch]
  );

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
      if (firstLine.innerHTML.includes("?????????????????????~")) {
        firstLyricsContainer.innerHTML = "";
       
      }
    }
    const player = document.querySelector(
      ".muse-controller audio"
    ) as HTMLAudioElement;
    if (player) {
      player.src = currentTrack.minus as string;
      player.pause();
    }
    console.log(
      "?????????? ???????????? ??????????, ????????????????????,\n ???????????????????? ????????????????!\n?????? ?????????? ?????? ???????????????????? ???????????? ????????????"
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Karaoke" style={{ backgroundColor: bgColor }}>
      <NavMenu />
      <div className="Karaoke-Content">
        <Typography
          variant="h2"
          sx={{ fontSize: { md: 60, sm: 45 }, color: textColor }}
          marginBottom={1}
          textAlign={"center"}
        >
          {TEXT.menu.karaoke[lang]}
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign={"center"}
          sx={{ color: textColorSecondary }}
        >
          {TEXT.karaoke_message[lang]}
        </Typography>
        <div id="player" className="Karaoke-Line"></div>
        <div className="Karaoke-Controls">
          <Typography
            variant="h2"
            fontSize={40}
            marginBottom={2}
            marginTop={3}
            marginLeft={3}
            sx={{ color: textColor }}
          >
            {TEXT.header.tracks[lang]}
          </Typography>
          <KaraokeWrapper className="Karaoke-Wrapper">
            {tracks.map((track) => (
              <DivChangeColor
                color={defineCurrentTrack(track) ? colorHover : textColor}
                colorHover={colorHover}
                colorActive={colorDark}
                className={cnTrackItem("Info")}
                key={track._id}
                onClick={() => handleChooseSong(track)}
              >
                <img
                  className={cnTrackItem("Icon")}
                  src={track.img ? track.img : "./icons/note.svg"}
                  alt="Album_image"
                ></img>

                <span className={cnTrackItem("Name")}>{track.title}</span>
                <span className={cnTrackItem("Author")}>{track.artist}</span>
                <span
                  className={cnTrackItem("Album")}
                  style={{ color: textColorSecondary }}
                >
                  {track.album}, {track.year}
                </span>
                <span
                  className={cnTrackItem("Duration")}
                  style={{ color: textColorSecondary }}
                >
                  {track?.duration}
                </span>
              </DivChangeColor>
            ))}
          </KaraokeWrapper>
          <div className="Karaoke-Player"></div>
        </div>
      </div>
    </div>
  );
};

export default Karaoke;
if (document.getElementById("player")) {
}
