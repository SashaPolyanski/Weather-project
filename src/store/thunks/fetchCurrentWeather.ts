import { WeatherService } from '../../services/WeatherService';
import { currentWeatherSlice } from '../slices/currentWeatherSlice';
import { AppDispatch } from '../store';

export const fetchCurrentWeather =
  (param: { lat: number; lon: number; city: string }) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeather());
      const cityInfo = await WeatherService.getCurrentCityInfo(param.city);
      const res = await WeatherService.getCurrentWeather(param.lat, param.lon);
      if (res.status === 200) {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
        dispatch(currentWeatherSlice.actions.fetchCurrentCity({ cityInfo }));
      } else {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
        dispatch(currentWeatherSlice.actions.fetchCurrentCity({ cityInfo }));
      }
    } catch (error) {
      console.log(error);
    }
  };
