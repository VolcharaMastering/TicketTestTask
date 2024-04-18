import "./TransfersBlock.scss";
import {labelsRu} from "../../content/labels";
import Checkbox from "../../UI/Checkbox/Checkbox";

function TransfersBlock() {
    return (
        <div className="transfers-block">
            <label className="filter-block__label">{labelsRu.transfersRu}</label>
            <Checkbox 
                label = {labelsRu.transfersAll.allRu}
            />
            <Checkbox 
                label = {labelsRu.transfersAll.Ru0}
            />
            <Checkbox 
                label = {labelsRu.transfersAll.Ru1}
            />
            <Checkbox 
                label = {labelsRu.transfersAll.Ru2}
            />
            <Checkbox 
                label = {labelsRu.transfersAll.Ru3}
            />
        </div>
    )
}
export default TransfersBlock;