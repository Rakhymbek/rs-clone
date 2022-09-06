export type SongType = {
  _id?: string;
  album?: string;
  artist?: string;
  img?: string;
  rank?: number;
  title?: string;
  url?: string;
  urlPlay?: string;
  year?: string;
  duration?: string;
  genre?: string;
  lyrics?: string;
  minus?: string;
};

export type USER = { name: string; login: string; avatar: string };

export type TLanguages = 'ru' | 'en' | 'bel';

export type TOrder = 'notSelected' | 'ASC' | 'DESC';

export type TFilterButtonName =
  | 'checkedArtists'
  | 'checkedYears'
  | 'checkedGenres';

export type TCheckedItems = {
  checkedArtists: string[];
  checkedYears: string[];
  checkedGenres: string[];
};
