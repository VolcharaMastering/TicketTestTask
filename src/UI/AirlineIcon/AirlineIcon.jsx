import { useEffect, useState } from "react";
import "./AirlineIcon.scss";
import BA from "../../assets/airLogos/BA.jpg";
import S7 from "../../assets/airLogos/S7.jpg";
import SU from "../../assets/airLogos/SU.jpg";
import TK from "../../assets/airLogos/TK.jpg";

function AirlineIcon({ iconName }) {
  const [icon, setIcon] = useState();
  useEffect(() => {
    switch (iconName) {
      case "BA":
        setIcon(BA);
        break;
      case "S7":
        setIcon(S7);
        break;
      case "SU":
        setIcon(TK);
        break;
      default:
        setIcon(SU);
        break;
    }
  }, [iconName]);
  return <img className="airline-icon" src={icon} alt="airline icon" />;
}
export default AirlineIcon;
