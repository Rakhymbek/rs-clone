/**
 * Формирует массив треков, фильтруя исходные данные по фильтру checkedArtists
 */

import { SongType } from '../types';

export const checkedArtistsFilterArray: (data: SongType[]) => SongType[] = (
  data,
) => {
  const checkedArtistsFilteredData: SongType[] = [];

  const checkedArtistsLocal = JSON.parse(
    localStorage['checkedArtists'] || '[]',
  );

  checkedArtistsLocal.forEach((artist: string) =>
    data.forEach((item) => {
      if (item.artist === artist) {
        checkedArtistsFilteredData.push(item);
      }
    }),
  );

  return checkedArtistsFilteredData;
};
