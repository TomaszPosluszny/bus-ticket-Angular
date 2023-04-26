export interface City {
    id: number;
    name: string;
    country: string;
    coord: {
      lon: number;
      lat: number;
    };
  }
  
  export interface WeatherInfos {
    base: string;
    clouds: { all: number };
    cod: number;
    coord: { lon: number; lat: number };
    dt: number;
    id: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
      grnd_level: number;
      sea_level: number;
    };
    name: string;
    sys: { country: string; sunrise: 1603673445; sunset: 1603714855 };
    timezone: 19800;
    visibility: 10000;
    weather: {
      description: string;
      icon: string;
      id: number;
      main: string;
    }[];
    wind: { speed: number; deg: number };
  }
  