import transformForecast from './../services/transformForecast';
import getUrlWeatherByCity from './../services/getUrlWeatherByCity';
import transformWeather from './../services/transformWeather';
import getUrlForecast from './../services/getUrlForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const SET_WEATHER = 'SET_WEATHER';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';


const setcity = (payload) => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });
const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload });

const url = "http://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {
  return dispatch => {
    const urlForecast =  getUrlForecast(payload);

    //activar en el estado una busqueda de datos
    dispatch(setcity(payload));

    return fetch(urlForecast).then(
      data => (data.json())
    ).then(
      weatherData => {
        const forecastData = transformForecast(weatherData);
        console.log(forecastData);

        //modificar el estado con el resltado de la promise (fetch)
        dispatch(setForecastData({ city: payload, forecastData }));
      }
    );
  }
};

export const setWeather = payload => {
  return dispatch => {
    payload.forEach(city => {

      dispatch(getWeatherCity(city));

      const apiWeather = getUrlWeatherByCity(city);
      fetch(apiWeather)
        .then(resolve => {
          return resolve.json();
        })
        .then(data => {
          const weather = transformWeather(data);
          console.log(weather);
          dispatch(setWeatherCity(city, weather));
        });
    });
  }
};