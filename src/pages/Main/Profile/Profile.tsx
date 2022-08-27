import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import './Profile.css';
import { Typography } from '@mui/material';
import {
  BGCOLOR,
  COLOR,
  COLOR_EXTRADARK,
  COLOR_SECONDARY,
  lang,
  text,
  USER,
} from '../../../constants';

const cnProfile = cn('Profile');

export const Profile: FC = () => {
  const [language, setLanguage] = React.useState(lang);
  const [bgColor, setBgColor] = React.useState(BGCOLOR);
  const [textColor, setTextColor] = React.useState(COLOR);
  const [decorativeColor, setDecorativeColor] = React.useState(COLOR_EXTRADARK);

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  const handleChangeBgColor = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setBgColor(event.target.value);
  };

  const handleChangeTextColor = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDecorativeColor(event.target.value);
  };

  const handleChangeDecorativeColor = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTextColor(event.target.value);
  };

  return (
    <div className={cnProfile()}>
      <Typography
        variant="h2"
        marginTop={11}
        marginBottom={6}
        style={{ color: COLOR }}
      >
        {text.menu.profile[lang]}
      </Typography>
      <div className={cnProfile('Data')} style={{ color: COLOR }}>
        <h4 className={cnProfile('Header')} style={{ color: COLOR_SECONDARY }}>
          {text.profile.userData[lang]}
        </h4>
        <div className={cnProfile('UserData')}>
          {text.profile.userName[lang]} {USER.name}
        </div>
        <div className={cnProfile('UserData')}>
          {text.profile.login[lang]} {USER.login}
        </div>

        <h4 className={cnProfile('Header')} style={{ color: COLOR_SECONDARY }}>
          {text.profile.custom[lang]}
        </h4>
        <div className={cnProfile('Custom')}>
          <div className={cnProfile('CustomBgColor')}>
            <div>{text.profile.bgcolor[lang]}</div>
            <input
              className={cnProfile('InputBgColor')}
              type="color"
              value={bgColor}
              onChange={handleChangeBgColor}
            ></input>
          </div>
          <div className={cnProfile('CustomTextColor')}>
            <div>{text.profile.textColor[lang]}</div>
            <input
              className={cnProfile('InputTextColor')}
              type="color"
              value={textColor}
              onChange={handleChangeTextColor}
            ></input>
          </div>
          <div className={cnProfile('CustomDecorativeColor')}>
            <div>{text.profile.designColor[lang]}</div>
            <input
              className={cnProfile('InputDecorativeColor')}
              type="color"
              value={decorativeColor}
              onChange={handleChangeDecorativeColor}
            ></input>
          </div>
        </div>

        <FormControl
          variant="standard"
          sx={{ m: 1, width: 110, margin: 0, marginTop: 3 }}
        >
          <InputLabel
            id="demo-simple-select-standard-label"
            style={{
              color: COLOR_SECONDARY,
              fontWeight: 'bold',
              fontSize: '20px',
              fontFamily: 'inherit',
            }}
          >
            {text.profile.language[lang]}
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={language}
            onChange={handleChange}
            label="Language"
            style={{ color: COLOR }}
          >
            <MenuItem value={'rus'}>Русский</MenuItem>
            <MenuItem value={'en'}>English</MenuItem>
            <MenuItem value={'bel'}>Беларускі</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};
