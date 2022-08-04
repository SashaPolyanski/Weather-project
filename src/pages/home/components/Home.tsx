import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useCustomDispatch, useCustomSelector } from '../../../hooks/store';
import { fetchCurrentWeather } from '../../../store/thunks/fetchCurrentWeather';

import { Days } from './days/Days';
import s from './Home.module.scss';
import { ThisDay } from './thisDay/ThisDay';
import { ThisDayInfo } from './thisDayInfo/ThisDayInfo';

export const Home = () => {
  const dispatch = useCustomDispatch();
  const { lat, lon } = useCustomSelector(
    state => state.currentWeatherSliceReducer.cityInfo,
  );
  const {
    weather,
    cityInfo: { name },
  } = useCustomSelector(state => state.currentWeatherSliceReducer);
  useEffect(() => {
    dispatch(fetchCurrentWeather({ lat, lon, city: 'Бишкек' }));
  }, [lat, lon]);

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather} name={name} />
        <ThisDayInfo weather={weather} />
      </div>
      <Days />
    </div>
  );
};
