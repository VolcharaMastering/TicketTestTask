import convertDate from "../../utils/convertDate";
import "./FlightPoints.scss";

function FlightPoints({ airport, city, dateToshow }) {
  const formatedDate = convertDate(dateToshow); //here I use custom function from utils directly to convert date
  return (
    <figcaption className="flight-points">
      <p className="flight-points__city">{`${airport}, ${city}`}</p>
      <p className="flight-points__date">{formatedDate}</p>
    </figcaption>
  );
}
export default FlightPoints;
