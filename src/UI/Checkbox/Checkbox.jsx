import "./Checkbox.scss";
import {labelsRu} from "../../content/labels";

function Checkbox({ label }) {
  return (
    <div className="checkbox">
      <input className="checkbox__check" type="checkbox" id={label} />
      <label className="checkbox__label" htmlFor={label}>
        {label}
      </label>
      <button className="checkbox__only-button" type="button">{labelsRu.only}</button>
    </div>
  );
}
export default Checkbox;
