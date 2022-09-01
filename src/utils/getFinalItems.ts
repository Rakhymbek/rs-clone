/**
 * Генерация окончательного массива, соответствующего всем и фильтрам
 */

import { SongType } from '../types';
import { checkedArtistsFilterArray } from './checkedArtistsFilterArray';
import { checkedGenresFilterArray } from './checkedGenresFilterArray';
import { checkedYearsFilterArray } from './checkedYearsFilterArray';
import { commonItems } from './commonItems';

export const getFinalItems: () => SongType[] = () => {
  const allTracks = JSON.parse(localStorage.getItem('allTracks') || '[]');

  const checkedArtistsArray = checkedArtistsFilterArray(allTracks).length
    ? checkedArtistsFilterArray(allTracks)
    : allTracks;
  const checkedYearsArray = checkedYearsFilterArray(allTracks).length
    ? checkedYearsFilterArray(allTracks)
    : allTracks;
  const checkedGenresArray = checkedGenresFilterArray(allTracks).length
    ? checkedGenresFilterArray(allTracks)
    : allTracks;

  const commonArtistsYearsGenres = commonItems(
    commonItems(
      commonItems(checkedArtistsArray, checkedYearsArray),
      checkedGenresArray,
    ),
    allTracks,
  );

  return commonArtistsYearsGenres;
};
