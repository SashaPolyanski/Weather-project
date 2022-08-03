import React from 'react';

import { Day } from './Day';
import s from './Days.module.scss';
import { Tabs } from './Tabs';

export const Days = () => {
  const days: DayType[] = [
    {
      day: 'Сегодня',
      dayInfo: '28 авг',
      iconId: 'sun',
      tempDay: '+18',
      tempNight: '+15',
      info: 'Облачно',
    },
    {
      day: 'Завтра',
      dayInfo: '29 авг',
      iconId: 'smallRainSun',
      tempDay: '+18',
      tempNight: '+15',
      info: 'небольшой дождь и солнце',
    },
    {
      day: 'Ср',
      dayInfo: '30 авг',
      iconId: 'smallRain',
      tempDay: '+18',
      tempNight: '+15',
      info: 'небольшой дождь',
    },
    {
      day: 'Чт',
      dayInfo: '28 авг',
      iconId: 'mainlyCloudy',
      tempDay: '+18',
      tempNight: '+15',
      info: 'Облачно',
    },
    {
      day: 'Пт',
      dayInfo: '28 авг',
      iconId: 'rain',
      tempDay: '+18',
      tempNight: '+15',
      info: 'Облачно',
    },
    {
      day: 'Сб',
      dayInfo: '28 авг',
      iconId: 'sun',
      tempDay: '+18',
      tempNight: '+15',
      info: 'Облачно',
    },
    {
      day: 'Вс',
      dayInfo: '28 авг',
      iconId: 'sun',
      tempDay: '+18',
      tempNight: '+15',
      info: 'Облачно',
    },
  ];
  return (
    <>
      <Tabs />
      <div className={s.days}>
        {days.map((day: DayType) => (
          <Day day={day} key={Math.random()} />
        ))}
      </div>
    </>
  );
};

export type DayType = {
  day: string;
  dayInfo: string;
  iconId: string;
  tempDay: string;
  tempNight: string;
  info: string;
};
