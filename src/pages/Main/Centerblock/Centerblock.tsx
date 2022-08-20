import React from "react";
import { FC } from "react";
import { cn } from "@bem-react/classname";

import "./Centerblock.css";
import { FilterButton } from "../../../components/FilterButton/FilterButton";
import { THeader } from "../../../types";
import { TTrack } from "../../../types";
import { secondsToHms } from "../../../utils/utils";
import {
  Box,
  IconButton,
  InputAdornment,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

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
          InputLabelProps={{}}
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
              <InputAdornment sx={{ color: "white" }} position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </form>
      <Typography variant="h2" marginBottom={6}>
        {header}
      </Typography>
      <Box className={cnCenterblock("Filters")}>
        <span className={cnCenterblock("Filters-Text")}>Искать по:</span>
        <FilterButton buttonText="исполнителю"></FilterButton>
        <FilterButton buttonText="году выпуска"></FilterButton>
        <FilterButton buttonText="жанру"></FilterButton>
      </Box>
      <Box className={cnCenterblock("Content")}>
        <div className={cnContent("Header")}>
          <span className={cnContent("Track")}>ТРЕК</span>
          <span className={cnContent("Singer")}>ИСПОЛНИТЕЛЬ</span>
          <span className={cnContent("Album")}>АЛЬБОМ</span>
          <SvgIcon fontSize="small" sx={{ my: "auto", ml: "auto" }}>
            <AccessTimeIcon />
          </SvgIcon>
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
            <IconButton sx={{ width: "5%" }} color="inherit">
              <FavoriteBorderIcon fontSize="small" />
            </IconButton>
            <span className={cnContent("Track-Duration")}>
              {secondsToHms(track.duration_in_seconds)}
            </span>
          </div>
        ))}
      </Box>
    </div>
  );
};
