import { useEffect, useState } from "react";
import { getGeolocation } from "../../utils/api";

function CurrentWeather() {

  return (
    <div className="flex flex-row gap-[160px] mb-[200px]">
      <div>
        <h1 className="cityName text-white text-9xl font-bold">Тольятти</h1>
        <p className="currentDate text-white text-5xl">Вторник, 03.12</p>
        <div className="flex flex-row text-white text-6xl mt-4 items-center">
          <img src="https://openweathermap.org/img/wn/03n@2x.png" alt="иконка"/>
          <p>+12<sup>o</sup>C</p>
        </div>
      </div>
      <div className="flex flex-col text-white text-4xl mt-4">
        <p>Влажность: 60%</p>
        <p>Ветер: 10 м/с</p>
        <p>Ощущается как: 11<sup>o</sup>C</p>
      </div>
    </div>
  );
}

export default CurrentWeather;
