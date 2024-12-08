import CurrentWeather from "../CurrentWeather/CurrentWeather";
import FiveDays from "../FiveDays/FiveDays";

function Main({ value }) {
  console.log(value);

  return (
    <main className="m-8">
      <CurrentWeather />
      <FiveDays />
    </main>
  );
}

export default Main;
