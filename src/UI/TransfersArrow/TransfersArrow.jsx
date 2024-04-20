import "./TransfersArrow.scss";
import {labelsRu} from "../../content/labels.json";
import planeArrow from "../../assets/airplane-arrow.svg"

function TransfersArrow({stops}) {
    const transfers = labelsRu.transfersAll[`Ru${stops}`];
    return (
        <div className="transfers-arrow">
            <p className="transfers-arrow__text">{transfers}</p>
            <img className="transfers-arrow__img" src={planeArrow} alt="plane icon with arrow" />
        </div>
    )
}
export default TransfersArrow;