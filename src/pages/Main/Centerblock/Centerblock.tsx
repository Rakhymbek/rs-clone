import React from "react";
import { FC } from "react";
import { cn } from "@bem-react/classname";

import "./Centerblock.css";
import { FilterButton } from "../../../components/FilterButton/FilterButton";
import { THeader } from "../../../types";
import { TTrack } from "../../../types";
import { secondsToHms } from "../../../utils/utils";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const cnCenterblock = cn("Centerblock");
const cnContent = cn("Content");

export type PlayerProps = {
  tracks: TTrack[];
  header: THeader;
};

export const Centerblock: FC<PlayerProps> = ({ header, tracks }) => {
  return (
    <div className={cnCenterblock()}>
      <form className={cnCenterblock("Input-Wrapper")}>
        <TextField
          InputLabelProps={{ }}
          placeholder="Поиск"
          fullWidth
          autoComplete="off"
          variant="standard"
          type={"search"}
          sx={{
            mt: "5px",
            input: { color: "white" },
            label: { color: "white", pl: "30px" },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment  sx={{ color: "white" }} position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </form>
      <h2 className={cnCenterblock("Title")}>{header}</h2>
      <div className={cnCenterblock("Filters")}>
        <span className={cnCenterblock("Filters-Text")}>Искать по:</span>
        <FilterButton buttonText="исполнителю"></FilterButton>
        <FilterButton buttonText="году выпуска"></FilterButton>
        <FilterButton buttonText="жанру"></FilterButton>
      </div>
      <div className={cnCenterblock("Content")}>
        <div className={cnContent("Header")}>
          <span className={cnContent("Track")}>ТРЕК</span>
          <span className={cnContent("Singer")}>ИСПОЛНИТЕЛЬ</span>
          <span className={cnContent("Album")}>АЛЬБОМ</span>
          <span className={cnContent("Time")}>
            <img src="./icons/watch.svg" alt="duration" />
          </span>
        </div>

        {tracks.map((track) => (
          <div className={cnContent("Track-Info")} key={crypto.randomUUID()}>
            <img
              className={cnContent("Track-Icon")}
              src="./icons/note.svg"
              alt="note"
            ></img>
            <span className={cnContent("Track-Name")}> {track.name}</span>
            <span className={cnContent("Track-Author")}>{track.author}</span>
            <span className={cnContent("Track-Album")}>{track.album}</span>
            <span className={cnContent("Track-Like")}>
              <svg
                className={cnContent("Track-Like-Icon")}
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.34372 2.25572H8.36529C9.29718 1.44175 11.7563 0.165765 13.9565 1.76734C17.3111 4.20921 14.2458 9.5 8.36529 13H8.34372M8.34378 2.25572H8.32221C7.39032 1.44175 4.93121 0.165765 2.73102 1.76734C-0.623552 4.20921 2.44172 9.5 8.32221 13H8.34378"
                  stroke="currentColor"
                />
              </svg>
            </span>
            <span className={cnContent("Track-Duration")}>
              {secondsToHms(track.duration_in_seconds)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
