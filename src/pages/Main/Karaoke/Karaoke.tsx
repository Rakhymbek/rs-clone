import { Box, styled, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useTimer } from "use-timer";
import { fetchTracks } from "../../../fetchers/fetchTracks";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { uploadAllTracks } from "../../../store/trackSlice";
import { SongType } from "../../../types";
import { TrackList } from "../TrackList/TrackList";
import Line from "./Line";
import "./Karaoke.css";
import { NavMenu } from "../NavMenu/NavMenu";
import AudioPlayer from "react-h5-audio-player";

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
  const audioRef = useRef<AudioPlayer>();
  const [audio, setAudio] = useState("");
  const [message, setMessage] = useState("Выберите песню и запустите плеер");
  const tracks = useAppSelector((state) => state.tracks.allTracks);
  const currentTrack = useAppSelector((state) => state.tracks.currentTrack);

  const { time, start, pause, reset } = useTimer();
  const [line, setLine] = useState("");

  const removeMS = (timing: string) => {
    let clean = timing.substring(1);
    clean = clean.substring(0, clean.length - 4);
    return clean;
  };

  useEffect(() => {
    setAudio(currentTrack.urlPlay as string);
    const ctx = audioRef.current as AudioPlayer;
    if (!(ctx.audio.current as HTMLMediaElement).paused) {
      setMessage("Запустите плеер");
    }
  }, [currentTrack.lyrics, currentTrack.urlPlay]);

  useEffect(() => {
    fetchTracks().then((data) => {
      dispatch(uploadAllTracks(data));
    });
  }, []);

  const txt = currentTrack.lyrics;

  useEffect(() => {
    if (lyrics) {
      lyrics[
        (timers as string[]).indexOf(
          new Date(time * 1000).toISOString().substr(14, 5)
        )
      ] &&
        setLine(
          lyrics![
            (timers as string[]).indexOf(
              new Date(time * 1000).toISOString().substr(14, 5)
            )
          ]
        );
    } else {
      setLine("");
      reset();
    }
  }, [time]);

  const timers = txt?.match(/\[(.*)\]/g)?.map((t) => removeMS(t));
  const lyrics = txt?.replace(/\[(.*)\]/g, "").split(/\n/);

  const handleOnPlay = () => {
    start();
    setMessage("Начинается...");
  };

  const handleOnPause = () => {
    pause();
    setMessage("Запустите плеер");
  };

  return (
    <div className='Karaoke'>
      <NavMenu />
      <div className='Karaoke-Content'>
        <Typography
          variant='h2'
          fontSize={40}
          marginBottom={1}
          textAlign={"center"}
        >
          Lyrics
        </Typography>
        <div className='Karaoke-Line'>
          {line && currentTrack.lyrics ? (
            <Line text={line} />
          ) : (
            <Typography variant='h2' fontSize={"2vw"}>
              {message}
            </Typography>
          )}
        </div>

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
          <div className='Karaoke-Player'>
            <AudioPlayer
              ref={audioRef as unknown as null}
              showSkipControls={true}
              showJumpControls={false}
              onPlay={handleOnPlay}
              onPause={handleOnPause}
              src={audio}
              autoPlayAfterSrcChange={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Karaoke;
