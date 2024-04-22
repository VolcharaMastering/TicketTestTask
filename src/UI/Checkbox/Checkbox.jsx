import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import FilterStore from "../../stores/FilterStore";
import "./Checkbox.scss";
import { labelsRu } from "../../content/labels";

const Checkbox = observer(({ label }) => {
  const [stops, setStops] = useState();
  useEffect(() => {
    if (label[0] === "Б") {
      setStops(0);
    } else if (!isNaN(Number(label[0]))) {
      setStops(Number(label[0]));
    } else {
      setStops([0, 1, 2, 3]);
    }
  }, [label]);
  const handleSelect = (e) => {
    if (e.target.checked) {
      FilterStore.addFilters(stops);
    } else {
      FilterStore.delFilters(stops);
    }
  };
  const handleOnlySelect = () => {
    FilterStore.setOnly(stops);
  };
  return (
    <div className="checkbox">
      <input
        className="checkbox__check"
        type="checkbox"
        id={label}
        onChange={handleSelect}
        checked={
          (FilterStore.usedFilters.includes(stops) ||
            [0, 1, 2, 3].every((item) =>
              FilterStore.usedFilters.includes(item)
            )) &&
          "checked"
        }
      />
      <label className="checkbox__label" htmlFor={label}>
        {label}
      </label>
      <button
        className="checkbox__only-button"
        type="button"
        onClick={handleOnlySelect}
      >
        {labelsRu.only}
      </button>
    </div>
  );
});
export default Checkbox;
