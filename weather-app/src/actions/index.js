import transformForecast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const SET_WEATHER = 'SET_WEATHER';

const setcity = (payload) => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

const apiKey = "0d397debf0a0ba538b12007efed4da21";
const url = "http://api.openweathermap.org/data/2.5/forecast";


/*
componentDidMount() {
    console.log("componentDidMount");
    this.handleUpdateClick();
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  handleUpdateClick = () => {
    console.log("handleUpdateClick");

    const apiWeather = getUrlWeatherByCity(this.state.city);
    fetch(apiWeather)
      .then(resolve => {
        return resolve.json();
      })
      .then(data => {
        const newWeather = transformWeather(data);
        console.log(newWeather);
        this.setState({
          data: newWeather
        });
      });
  };

*/

export const setSelectedCity = payload => {
    return dispatch => {
        const urlForecast = `${url}?q=${payload}&appid=${apiKey}`;
        
        //activar en el estado una busqueda de datos
        dispatch(setcity(payload));

        return fetch(urlForecast).then(
            data => (data.json())
        ).then(
            weatherData => {
                const forecastData = transformForecast(weatherData);
                console.log(forecastData);
            
                //modificar el estado con el resltado de la promise (fetch)
                dispatch(setForecastData({city:payload, forecastData}));
            }
        );
    }
};

export const setWeather = payload => {

};