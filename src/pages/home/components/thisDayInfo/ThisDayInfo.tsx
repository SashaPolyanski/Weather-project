import React from 'react';

import cloud from '../../../../assets/images/Cloud image.png';
import { WeatherType } from '../../../../store/types/types';

import s from './ThisDayInfo.module.scss';
import { ThisDayItem } from './ThisDayItem';

export const ThisDayInfo = ({ weather }: PropsType) => {
  const items = [
    {
      iconId: 'temp',
      name: 'Температура',
      value: `${Math.floor(weather.main.temp)}° - ощущается как ${Math.floor(
        weather.main.feels_like,
      )}°`,
    },
    {
      iconId: 'pressure',
      name: 'Давление',
      value: `${weather.main.pressure} мм ртутного столба - нормальное`,
    },
    {
      iconId: 'precipitation',
      name: 'Влажность',
      value: `${weather.main.humidity} %`,
    },
    {
      iconId: 'wind',
      name: 'Ветер',
      value: `${weather.wind.speed} м/с юго-запад - легкий ветер`,
    },
  ];

  return (
    <div className={s.thisDayInfo}>
      <div className={s.thisDayInfoItems}>
        {items.map((item: ItemType) => (
          <ThisDayItem item={item} key={item.iconId} weather={weather} />
        ))}
      </div>
      <img src={cloud} alt="облачко" className={s.cloudImage} />
    </div>
  );
};

export type ItemType = {
  iconId: string;
  name: string;
  value: string;
};
export type PropsType = {
  weather: WeatherType;
};
