import React, { ChangeEvent, useState } from 'react';

import Select from 'react-select';

import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { Theme } from '../../context/ThemeContext';
import { useCustomDispatch } from '../../hooks/store';
import { useTheme } from '../../hooks/useTheme';
import { setCurrentCityName } from '../../store/slices/currentWeatherSlice';

import s from './Header.module.scss';

type OptionsType = {
  value: string;
  label: string;
};
export const Header = () => {
  const theme = useTheme();
  const dispatch = useCustomDispatch();
  const options: Array<OptionsType> = [
    { value: 'city-1', label: 'Нур-Султан' },
    { value: 'city-2', label: 'Минск' },
    { value: 'city-3', label: 'Санкт-Петербург' },
  ];
  const [option, setOption] = useState(options);

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme.theme === Theme.DARK ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? '#fff' : '#000',
    }),
  };

  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="headerLogo" />
        </div>
        <div className={s.title}>React Weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.changeTheme} onClick={changeTheme} role="presentation">
          <GlobalSvgSelector id="changeThemeLogo" />
        </div>
        <GlobalSvgSelector id="header-logo" />
        <Select
          styles={colorStyles}
          options={options}
          onChange={(e: any) => {
            dispatch(setCurrentCityName({ name: e.label }));
          }}
          defaultValue={options[0]}
        />
      </div>
    </header>
  );
};
