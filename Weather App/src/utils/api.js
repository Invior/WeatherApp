const baseHost = "http://api.openweathermap.org/";

export async function getCurrentWeather(lat, lon) {
  try {
    const response = await fetch(
      baseHost +
        `data/2.5/weather?lat=${lat}&lon=${lon}&appid=98028faffe661408eaa966b05e94361d&lang=ru&units=metric`
    );
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Невозможно получить текущую погоду");
      } else {
        throw new Error(`Ошибка! Статус: ${response.status}`);
      }
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.warn(error);
    throw error;
  }
}

export async function getGeolocation(city) {
  try {
    const response = await fetch(
      baseHost +
        `geo/1.0/direct?q=${city}&appid=98028faffe661408eaa966b05e94361d`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при получении данных геолокации:", error);
    return [];
  }
}

export async function getForecast(latitude, longitude) {
  try {
    const response = await fetch(
      baseHost +
        `data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=98028faffe661408eaa966b05e94361d&lang=ru&units=metric`
    );
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Невозможно получить погоду");
      } else {
        throw new Error(`Ошибка! Статус: ${response.status}`);
      }
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.warn(error);
    throw error;
  }
}
