import { useEffect, useState } from "react";
import { useGeolocation } from "../../contexts/GeolocationContext";
import { getCurrentWeather } from "../../utils/api";

function CurrentWeather() {
  const { geolocation } = useGeolocation();
  const [currentWeather, setCurrentWeather] = useState();
  const [weatherIcon, setWeatherIcon] = useState();

  useEffect(() => {
    if (geolocation) {
      getCurrentWeather(geolocation.lat, geolocation.lon)
        .then((data) => {
          setCurrentWeather(data);
          setWeatherIcon(data.weather[0]);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [geolocation]);

  function formatUnixDate(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }

  if (!currentWeather) {
    return <p>Получение локации...</p>;
  } else {
    return (
      <div className="flex flex-row gap-[160px] mb-[200px]">
        <div>
          <h1 className="cityName text-white text-9xl font-bold">
            {geolocation.local_names}
          </h1>
          <p className="currentDate text-white text-5xl">
            {formatUnixDate(currentWeather.dt)}
          </p>
          <div className="flex flex-row text-white text-6xl mt-4 items-center">
            <img
              src={`https://openweathermap.org/img/wn/${weatherIcon.icon}@2x.png`}
              alt="иконка"
            />
            <p>
              {Math.round(currentWeather.main.temp)}
              <sup>o</sup>C
            </p>
          </div>
        </div>
        <div className="flex flex-col text-white text-4xl mt-4">
          <p>Влажность: {currentWeather.main.humidity}%</p>
          <p>Ветер: {Math.round(currentWeather.wind.speed)} м/с</p>
          <p>
            Ощущается как: {Math.round(currentWeather.main.feels_like)}
            <sup>o</sup>C
          </p>
        </div>
      </div>
    );
  }
}

export default CurrentWeather;
