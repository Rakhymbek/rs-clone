import React from "react";
import { FC } from "react";
import { cn } from "@bem-react/classname";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./Player.css";
import { TTrack } from "../../types";
import { DONE } from "../../constants";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { styled } from "@mui/system";
const cnPlayer = cn("Player");

export type PlayerProps = {
  track: TTrack;
};

const PlayerControlsWrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: 33px;
`;

export const Player: FC<PlayerProps> = ({ track }) => {
  return (
    <div className={cnPlayer()}>
      <AudioPlayer
        src={'https://docs.google.com/uc?export=open&id=1r4N5SBd-6C-zECrMge8UKlknBh9p1d4g'}
        defaultDuration={false}
        defaultCurrentTime={false}
        customIcons={{
          play: <PlayArrowIcon  className={cnPlayer("ControlsIcon")}/>,
          pause: <PauseIcon  className={cnPlayer("ControlsIcon")}/>,
          volume: <VolumeUpIcon className={cnPlayer("ControlsIcon")}/>,
          volumeMute: <VolumeOffIcon className={cnPlayer("ControlsIcon")}/>,
        }}
        customControlsSection={[
          RHAP_UI.MAIN_CONTROLS,
          <PlayerControlsWrapper></PlayerControlsWrapper>,
          RHAP_UI.VOLUME_CONTROLS,
        ]}
        showSkipControls={true}
        showJumpControls={false}
      />
      {/* <div className={cnPlayer("Track")}>
        <div
          className={cnPlayer("Track", { type: "done" })}
          style={{ width: DONE }}
        ></div>
        <div></div>
      </div>
      <div className={cnPlayer("Bar")}>
        <div className={cnPlayer("Controls")}>
          <svg
            className={cnPlayer("Control", { type: "arrow" })}
            width='16'
            height='14'
            viewBox='0 0 16 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M1 2V12.5' stroke='white' />
            <path
              d='M3 7L12.75 0.937823L12.75 13.0622L3 7Z'
              fill='currentColor'
            />
          </svg>
          <svg
            className={cnPlayer("Control", { type: "arrow" })}
            width='15'
            height='20'
            viewBox='0 0 15 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M15 10L-1.01012e-06 0.47372L-1.84293e-06 19.5263L15 10Z'
              fill='currentColor'
            />
          </svg>
          <svg
            className={cnPlayer("Control", { type: "arrow" })}
            width='16'
            height='14'
            viewBox='0 0 16 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M15 2V12.5' stroke='white' />
            <path
              d='M13 7L3.25 0.937823L3.25 13.0622L13 7Z'
              fill='currentColor'
            />
          </svg>
          <svg
            className={cnPlayer("Control")}
            width='20'
            height='18'
            viewBox='0 0 20 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10 3L5 0.113249V5.88675L10 3ZM7 14.5C3.96243 14.5 1.5 12.0376 1.5 9H0.5C0.5 12.5899 3.41015 15.5 7 15.5V14.5ZM1.5 9C1.5 5.96243 3.96243 3.5 7 3.5V2.5C3.41015 2.5 0.5 5.41015 0.5 9H1.5Z'
              fill='currentColor'
            />
            <path
              d='M10 15L15 17.8868V12.1132L10 15ZM13 3.5C16.0376 3.5 18.5 5.96243 18.5 9H19.5C19.5 5.41015 16.5899 2.5 13 2.5V3.5ZM18.5 9C18.5 12.0376 16.0376 14.5 13 14.5V15.5C16.5899 15.5 19.5 12.5899 19.5 9H18.5Z'
              fill='currentColor'
            />
          </svg>
          <svg
            className={cnPlayer("Control")}
            width='20'
            height='18'
            viewBox='0 0 20 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M19.5 15L14.5 12.1132V17.8868L19.5 15ZM10.1632 12.0833L9.70863 12.2916L10.1632 12.0833ZM7.33683 5.91673L6.8823 6.12505L7.33683 5.91673ZM0.5 3.5H2.79151V2.5H0.5V3.5ZM6.8823 6.12505L9.70863 12.2916L10.6177 11.8749L7.79137 5.7084L6.8823 6.12505ZM14.7085 15.5H15V14.5H14.7085V15.5ZM9.70863 12.2916C10.6047 14.2466 12.5579 15.5 14.7085 15.5V14.5C12.949 14.5 11.3508 13.4745 10.6177 11.8749L9.70863 12.2916ZM2.79151 3.5C4.55105 3.5 6.14918 4.52552 6.8823 6.12505L7.79137 5.7084C6.89533 3.75341 4.94205 2.5 2.79151 2.5V3.5Z'
              fill='currentColor'
            />
            <path
              d='M19.5 3L14.5 5.88675V0.113249L19.5 3ZM10.1632 5.91673L9.70863 5.7084L10.1632 5.91673ZM7.33683 12.0833L6.8823 11.8749L7.33683 12.0833ZM0.5 14.5H2.79151V15.5H0.5V14.5ZM6.8823 11.8749L9.70863 5.7084L10.6177 6.12505L7.79137 12.2916L6.8823 11.8749ZM14.7085 2.5H15V3.5H14.7085V2.5ZM9.70863 5.7084C10.6047 3.75341 12.5579 2.5 14.7085 2.5V3.5C12.949 3.5 11.3508 4.52552 10.6177 6.12505L9.70863 5.7084ZM2.79151 14.5C4.55105 14.5 6.14918 13.4745 6.8823 11.8749L7.79137 12.2916C6.89533 14.2466 4.94205 15.5 2.79151 15.5V14.5Z'
              fill='currentColor'
            />
          </svg>

          <div className={cnPlayer("TrackInfo")}>
            <img src='./icons/note.svg' alt='note'></img>
            <div>
              <p>{track.name}</p>
              <p>{track.author}</p>
            </div>
          </div>

          <svg
            className={cnPlayer("Control")}
            width='16'
            height='14'
            viewBox='0 0 16 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8.34372 2.25572H8.36529C9.29718 1.44175 11.7563 0.165765 13.9565 1.76734C17.3111 4.20921 14.2458 9.5 8.36529 13H8.34372M8.34378 2.25572H8.32221C7.39032 1.44175 4.93121 0.165765 2.73102 1.76734C-0.623552 4.20921 2.44172 9.5 8.32221 13H8.34378'
              stroke='currentColor'
            />
          </svg>
          <svg
            className={cnPlayer("Control")}
            width='16'
            height='15'
            viewBox='0 0 16 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M1 1L15 13.5' stroke='currentColor' />
            <path
              d='M8.34372 3.25572H8.36529C9.29718 2.44175 11.7563 1.16576 13.9565 2.76734C17.3111 5.20921 14.2458 10.5 8.36529 14H8.34372M8.34378 3.25572H8.32221C7.39032 2.44175 4.93121 1.16576 2.73102 2.76734C-0.623552 5.20921 2.44172 10.5 8.32221 14H8.34378'
              stroke='currentColor'
            />
          </svg>
        </div>
        <div className={cnPlayer("Volume")}>
          <button>
            <svg
              className={cnPlayer("Control", { type: "volume" })}
              width='14'
              height='18'
              viewBox='0 0 14 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <mask id='path-1-inside-1_2985_507' fill='white'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M8 0L3 5H0V13H3L8 18V0Z'
                />
              </mask>
              <path
                d='M3 5V6H3.41421L3.70711 5.70711L3 5ZM8 0H9V-2.41421L7.29289 -0.707107L8 0ZM0 5V4H-1V5H0ZM0 13H-1V14H0V13ZM3 13L3.70711 12.2929L3.41421 12H3V13ZM8 18L7.29289 18.7071L9 20.4142V18H8ZM3.70711 5.70711L8.70711 0.707107L7.29289 -0.707107L2.29289 4.29289L3.70711 5.70711ZM0 6H3V4H0V6ZM1 13V5H-1V13H1ZM3 12H0V14H3V12ZM8.70711 17.2929L3.70711 12.2929L2.29289 13.7071L7.29289 18.7071L8.70711 17.2929ZM7 0V18H9V0H7Z'
                fill='currentColor'
                mask='url(#path-1-inside-1_2985_507)'
              />
              <path
                d='M11 13C12.1046 13 13 11.2091 13 9C13 6.79086 12.1046 5 11 5'
                stroke='currentColor'
              />
            </svg>
          </button>
          <input type='range' className={cnPlayer("Volume-Range")}></input>
        </div>
      </div> */}
    </div>
  );
};
