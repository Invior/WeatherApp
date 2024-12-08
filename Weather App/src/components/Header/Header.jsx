import { useEffect, useState } from "react";
import { getGeolocation } from "../../utils/api";
import { useGeolocation } from "../../contexts/GeolocationContext";

function Header() {
  const [inputValue, setInputValue] = useState("");
  const { geolocation, updateGeolocation } = useGeolocation();

  const handleSearch = () => {
    getGeolocation(inputValue)
      .then((data) => {
        const { lat, lon, local_names } = data[0];
        updateGeolocation(lat, lon, local_names.ru);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = () => {
    setInputValue(event.target.value);
  };

  return (
    <header className="flex flex-row gap-[300px] m-8">
      <div>
        <h1 className="logo text-white font-extrabold text-3xl">Weather App</h1>
      </div>
      <div className="flex gap-5">
        <input
          className="w-[900px] outline-none bg-inherit text-white text-lg font-normal justify-center items-center p-1 border-b border-white"
          type="text"
          placeholder="Введите город"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          onClick={handleSearch}
          className="text-white rounded-md text-lg font-normal justify-center items-center p-1 border border-white hover:bg-[#E9ECED] active:bg-[#000000] active:text-[#FFFFFF]">
          Поиск
        </button>
      </div>
    </header>
  );
}

export default Header;
