import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import { useAppDispatch, useAppSelector } from '../../hook';

import './Popup.css';
import { bgColorToBgColorLight } from '../../utils/colorUtils';
import {
  updateCheckedArtists,
  updateCheckedGenres,
  updateCheckedYears,
} from '../../store/checkedItemsSlice';

const cnPopup = cn('Popup');

export type PopupProps = {
  items: string[];
  buttonName: string;
  rows: 1 | 2 | 3;
};

export const Popup: FC<PopupProps> = ({ items, rows, buttonName }) => {
  const bgColor = useAppSelector((state) => state.colorTheme.bgColor);
  const bgColorLight = bgColorToBgColorLight(bgColor);

  let display;
  let height;

  if (rows === 1) {
    height = '92px';
  }
  if (rows === 2) {
    height = '138px';
  }
  if (rows === 3) {
    height = '184px';
  }
  const dispatch = useAppDispatch();

  const isChecked = (item: string, buttonName: string) => {
    const localCheckedItemsArray = JSON.parse(
      localStorage.getItem(`${buttonName}`) || '[]',
    );
    return localCheckedItemsArray.includes(item);
  };

  const handleChange = (item: string, buttonName: string) => {
    const localCheckedItemsArray: string[] = JSON.parse(
      localStorage.getItem(`${buttonName}`) || '[]',
    );

    localCheckedItemsArray.includes(item)
      ? localCheckedItemsArray.splice(localCheckedItemsArray.indexOf(item), 1)
      : localCheckedItemsArray.push(item);

    localStorage.setItem(
      `${buttonName}`,
      JSON.stringify(localCheckedItemsArray),
    );

    dispatch(updateCheckedArtists(localCheckedItemsArray));
    dispatch(updateCheckedYears(localCheckedItemsArray));
    dispatch(updateCheckedGenres(localCheckedItemsArray));

    console.log(localCheckedItemsArray);
  };

  return (
    <div
      className={cnPopup()}
      style={{
        height: height,
        display: display,
        backgroundColor: bgColorLight,
      }}
    >
      <div className={cnPopup('Content-Wrapper')}>
        {items.map((item) => (
          <span key={item}>
            <input
              className={cnPopup('Checkbox')}
              type="checkbox"
              id={item}
              checked={isChecked(item, buttonName)}
              onChange={() => handleChange(item, buttonName)}
            ></input>
            <label htmlFor={item} className={cnPopup('Label')} key={item}>
              {item}
            </label>
          </span>
        ))}
      </div>
    </div>
  );
};
