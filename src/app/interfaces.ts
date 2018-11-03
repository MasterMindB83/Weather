export interface IWeather {
    coord: {lon: number, lat: number};
      weather: {id: number, main: string, description: string, icon: string};
      base: string;
      main: {temp: number, pressure: number, humidity: number, temp_min: number, temp_max: number};
      visibility: number;
      wind: {speed: number};
      clouds: {all: number};
      dt: number;
      sys: {type: number, id: number, message: number, country: '', sunrise: number, sunset: number};
      id: number;
      name: string;
      cod: number;
}
export interface IForecast {
  cod: number;
  message: number;
  cnt: number;
  list: {
    dt: number;
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
    }
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
    clouds: {
      all: number;
    }
    wind: {
      speed: number;
      deg: number;
    }
    rain: {
      zh: number;
    }
    sys: {
      pod: string;
    }
    dt_text: string;
  };

}
