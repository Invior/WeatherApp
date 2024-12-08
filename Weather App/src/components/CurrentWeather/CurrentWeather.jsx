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
    return <p className="text-white text-center font-bold text-xl">Укажите город для поиска</p>;
  } else {
    return (
      <div className="flex flex-col md:flex-row md:gap-[50px] lg:flex-row mb-[100px] lg:mb-[200px]">
        <div className="">
          <h1 className="cityName text-white text-[40px] lg:text-[60px] font-bold">
            {geolocation.local_names}
          </h1>
          <p className="currentDate text-white text-[25px] lg:text-[40px]">
            {formatUnixDate(currentWeather.dt)}
          </p>
          <div className="flex flex-row text-white mt-4 items-center">
            <img className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]"
              src={`https://openweathermap.org/img/wn/${weatherIcon.icon}@2x.png`}
              alt="иконка"
            />
            <p className="text-[35px] lg:text-6xl">
              {Math.round(currentWeather.main.temp)}
              <sup>o</sup>C
            </p>
          </div>
        </div>
        <div className="flex flex-col text-white justify-end mt-4">
          <p className="text-[20px] lg:text-4xl">Влажность: {currentWeather.main.humidity}%</p>
          <p className="text-[20px] lg:text-4xl">Ветер: {Math.round(currentWeather.wind.speed)} м/с</p>
          <p className="text-[20px] lg:text-4xl">
            Ощущается как: {Math.round(currentWeather.main.feels_like)}
            <sup>o</sup>C
          </p>
        </div>
      </div>
    );
  }
}

export default CurrentWeather;
