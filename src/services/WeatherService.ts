import { instance } from '../axios';
import { CityType, WeatherType } from '../store/types/types';

export class WeatherService {
  static getCurrentCityInfo(city: string) {
    return instance.get<CityType[]>(`direct?q=${city}&limit=1`).then(res => res.data[0]);
  }
  static getCurrentWeather(lat: number, lon: number) {
    return instance.get<WeatherType>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=minutely`,
    );
  }
}
