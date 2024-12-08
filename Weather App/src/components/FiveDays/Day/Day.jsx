function Day({ icon, date, dayTemp, nightTemp }) {

    return (
        <div className="flex flex-row gap-[10px] items-center">
            <img className="w-[80px] h-[80px]" src={`https://www.weatherbit.io/static/img/icons/${icon}.png`} alt="иконка" />
            <div className="flex flex-col gap-[10px]">
                <p className="text-white text-3xl">{date}</p>
                <p className="text-white text-3xl">Днем: {dayTemp}<sup>o</sup>C</p>
                <p className="text-white text-3xl">Ночью: {nightTemp}<sup>o</sup>C</p>
            </div>
        </div>
    );
}

export default Day;