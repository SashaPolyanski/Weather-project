import React, { useEffect } from 'react';

import { useCustomDispatch } from '../../../hooks/store';
import { fetchCurrentWeather } from '../../../store/thunks/fetchCurrentWeather';

import { Days } from './days/Days';
import s from './Home.module.scss';
import { ThisDay } from './thisDay/ThisDay';
import { ThisDayInfo } from './thisDayInfo/ThisDayInfo';

export const Home = () => {
  const dispatch = useCustomDispatch();

  useEffect(() => {
    dispatch(fetchCurrentWeather('london'));
  }, []);

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
};
