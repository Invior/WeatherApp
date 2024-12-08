import { useEffect, useState } from "react";
import { useGeolocation } from "../../contexts/GeolocationContext";
import Day from "./Day/Day";
import { getForecast } from "../../utils/api";

function FiveDays() {
  const { geolocation } = useGeolocation();
  const [forecast, setDataForecast] = useState();

  useEffect(() => {
    if (geolocation) {
      getForecast(geolocation.local_names)
        .then((data) => {
          setDataForecast(data.data);
        })
        .catch((error) => {
          console.error("Ошибка получения прогноза:", error);
        });
    }
  }, [geolocation]);

  if (forecast) {
    return (
      <div className="flex flex-col gap-[40px] lg:flex-row justify-around border-t-2 pt-12">
        {forecast.slice(1).map((item) => (
          <Day
            key={item.datetime}
            icon={item.weather.icon}
            date={new Date(item.datetime).toLocaleDateString()}
            nightTemp={Math.round(item.low_temp)}
            dayTemp={Math.round(item.high_temp)}
          />
        ))}
      </div>
    );
  }
}

export default FiveDays;
