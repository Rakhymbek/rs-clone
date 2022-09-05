import { SongType } from '../../types';

export type TData = {
  createdAt: string;
  email: string;
  fullName: string;
  token?: string;
  updatedAt: string;
  __v: number;
  _id: string;
  textColor: string;
  backgroundColor: string;
  designColor: string;
  favorites: SongType[];
  language: string;
};

export interface Login {
  email: string;
  password: string;
  fullName?: string;
}

export interface DataState {
  data: null | TData;
  status: 'loading' | 'succeeded' | 'failed';
}
