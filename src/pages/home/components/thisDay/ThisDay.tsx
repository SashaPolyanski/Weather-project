import React from 'react';

import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { WeatherType } from '../../../../store/types/types';

import s from './ThisDay.module.scss';

export const ThisDay = ({ weather, name }: Props) => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return (
    <div className={s.thisDay}>
      <div className={s.topBlock}>
        <div className={s.topBlockWrapper}>
          <div className={s.currentTemp}>{Math.floor(weather.main.temp)}</div>
          <div className={s.currentDay}>Сегодня</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.bottomBlock}>
        <div className={s.currentTime}>
          Время:{' '}
          <span>
            {hours}:{minutes}
          </span>{' '}
        </div>
        <div className={s.currentCity}>
          Город: <span>{name}</span>{' '}
        </div>
      </div>
    </div>
  );
};
type Props = {
  weather: WeatherType;
  name: string;
};
