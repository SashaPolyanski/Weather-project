import React from 'react';

import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';

import { DayType } from './Days';
import s from './Days.module.scss';

export const Day = ({ day }: DayPropsType) => (
  <div className={s.dayBlock}>
    <div className={s.day}>{day.day}</div>
    <div className={s.dayInfo}>{day.info}</div>
    <div className={s.img}>
      <GlobalSvgSelector id={day.iconId} />
    </div>
    <div className={s.dayTemp}>{day.tempDay}</div>
    <div className={s.nightTemp}>{day.tempNight}</div>
    <div className={s.info}>{day.info}</div>
  </div>
);

type DayPropsType = {
  day: DayType;
};
