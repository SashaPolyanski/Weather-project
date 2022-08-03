import axios, { AxiosResponse } from 'axios';

import { instance } from '../axios';
import { WeatherType } from '../store/types/types';

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<WeatherType>> {
    return instance.get<WeatherType>(`direct?q=${city}&limit=1`);
  }
}
