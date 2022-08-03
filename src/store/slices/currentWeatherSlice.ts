import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { WeatherType } from '../types/types';

export const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState: {
    weather: {},
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
  },
});

type InitialStateType = {
  weather: WeatherType;
  isLoading: boolean;
  response: { status: number; message: string };
};

export default currentWeatherSlice.reducer;
