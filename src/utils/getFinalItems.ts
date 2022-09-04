/**
 * Генерация окончательного массива, соответствующего всем и фильтрам
 */

import { EMPTY_RESULTS } from '../constants';
import { SongType, TCheckedItems } from '../types';
import { checkedArtistsFilterArray } from './checkedArtistsFilterArray';
import { checkedGenresFilterArray } from './checkedGenresFilterArray';
import { checkedYearsFilterArray } from './checkedYearsFilterArray';
import { commonItems } from './commonItems';

export const getFinalItems: (
  allTracks: SongType[],
  checkedItemsObj: TCheckedItems,
) => SongType[] = (allTracks, checkedItemsObj) => {
  // console.log('--> checkedItems', checkedItemsObj);
  // console.log('--> allTracks', allTracks);

  const checkedArtistsArray = checkedItemsObj.checkedArtists.length
    ? checkedArtistsFilterArray(checkedItemsObj.checkedArtists, allTracks)
    : allTracks;
  // console.log('--> checkedArtistsArray', checkedArtistsArray);

  const checkedYearsArray = checkedItemsObj.checkedYears.length
    ? checkedYearsFilterArray(checkedItemsObj.checkedYears, allTracks)
    : allTracks;
  // console.log('--> checkedYearsArray', checkedYearsArray);

  const checkedGenresArray = checkedItemsObj.checkedGenres.length
    ? checkedGenresFilterArray(checkedItemsObj.checkedGenres, allTracks)
    : allTracks;
  // console.log('--> checkedGenresArray', checkedGenresArray);

  const commonArtistsYearsGenres = commonItems(
    commonItems(checkedArtistsArray, checkedYearsArray),
    checkedGenresArray,
  );

  const empty_result: SongType[] = EMPTY_RESULTS;

  // console.log('--> commonArtistsYearsGenres', commonArtistsYearsGenres);

  return commonArtistsYearsGenres.length
    ? commonArtistsYearsGenres
    : empty_result;
};
