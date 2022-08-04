import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { WeatherType } from '../types/types';

export const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState: {
    cityInfo: {
      lat: 0,
      lon: 0,
      name: '',
    },
    weather: {
      main: {
        temp: 0,
        pressure: 0,
        feels_like: 0,
      },
      wind: {
        speed: 0,
      },
    },
    isLoading: false,
    response: {
      status: 0,
      message: '',
    },
  } as InitialStateType,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(state, action: PayloadAction<AxiosResponse<WeatherType>>) {
      state.isLoading = false;
      state.weather = action.payload.data;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchCurrentWeatherError(state, action: PayloadAction<AxiosResponse<WeatherType>>) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchCurrentCity(
      state,
      action: PayloadAction<{
        cityInfo: { lat: number; lon: number; local_names: { ru: string } };
      }>,
    ) {
      state.cityInfo.lon = action.payload.cityInfo.lon;
      state.cityInfo.lat = action.payload.cityInfo.lat;
      state.cityInfo.name = action.payload.cityInfo.local_names.ru;
    },
  },
});

type InitialStateType = {
  weather: WeatherType;
  isLoading: boolean;
  cityInfo: { lat: number; lon: number; name: string };
  response: { status: number; message: string };
};
export const { fetchCurrentCity } = currentWeatherSlice.actions;
export default currentWeatherSlice.reducer;
