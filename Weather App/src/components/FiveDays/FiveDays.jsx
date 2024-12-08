import Day from "./Day/Day"

function FiveDays () {
    return (
        <div className="flex flex-row justify-around border-t-2 pt-12">
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
        </div>
    )
}

export default FiveDays;