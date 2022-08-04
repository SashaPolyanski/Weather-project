export type WeatherType = {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
};
export type CityType = {
  lat: number;
  lon: number;
  local_names: {
    ru: string;
  };
};
