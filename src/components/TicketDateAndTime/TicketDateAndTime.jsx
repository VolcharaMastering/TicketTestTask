import FlightPoints from "../../UI/FlightPoints/FlightPoints";
import FlightTime from "../../UI/FlightTime/FlightTime";
import "./TicketDateAndTime.scss";

function TicketDateAndTime() {
    return (
        <div className="ticket-date-and-time">
            <FlightPoints/>
            <FlightTime />
        </div>
    )
}
export default TicketDateAndTime;