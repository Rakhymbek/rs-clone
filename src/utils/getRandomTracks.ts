import { SongType } from '../types';

export const getRandomTracks = (
  arrayLength: number,
  data: SongType[],
): SongType[] => {
  const itemsArray: SongType[] = [];

  while (itemsArray.length < arrayLength) {
    const randomTrack = getRandomTrack(data);

    if (!itemsArray.includes(randomTrack)) {
      itemsArray.push(randomTrack);
    }
  }

  return itemsArray;
};

const getRandomTrack = (data: SongType[]): SongType => {
  const item = data[Math.floor(Math.random() * data.length)];
  return item;
};

export default getRandomTracks;
