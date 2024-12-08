import { useState } from "react";
import { getGeolocation } from "../../utils/api";
import { useGeolocation } from "../../contexts/GeolocationContext";

function Header() {
  const [inputValue, setInputValue] = useState("");
  const { geolocation, updateGeolocation } = useGeolocation();

  const handleSearch = () => {
    if (!inputValue.trim()) return;
    getGeolocation(inputValue)
      .then((data) => {
        const { lat, lon, local_names } = data[0];
        updateGeolocation(lat, lon, local_names.ru);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className="flex flex-row gap-[10px] md:gap-[30px] lg:gap-[100px] m-8">
      <div className="hidden md:flex lg:flex">
        <h1 className="logo text-white font-extrabold md:text-[25px] lg:text-[30px]">
          Weather App
        </h1>
      </div>
      <div className="flex gap-[30px]">
        <input
          className="w-[200px] md:w-[400px] lg:w-[600px] 2xl:w-[900px] outline-none bg-inherit text-white text-lg font-normal justify-center items-center p-1 border-b border-white"
          type="text"
          placeholder="Введите город"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSearch}
          className="text-white rounded-md text-lg font-normal justify-center items-center py-[5px] px-[15px] border border-white hover:bg-[#E9ECED] active:bg-[#000000] active:text-[#FFFFFF]">
          Поиск
        </button>
      </div>
    </header>
  );
}

export default Header;