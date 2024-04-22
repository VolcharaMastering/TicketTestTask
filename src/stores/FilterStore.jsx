import { makeAutoObservable } from "mobx";

class FilterStore {
  usedFilters = [];

  constructor() {
    makeAutoObservable(this);
  }

  addFilters(stops) {
    const newStops = stops instanceof Array ? stops : [stops];
    const uniqueStops = new Set(this.usedFilters.concat(newStops));
    this.usedFilters = Array.from(uniqueStops);
  }

  setOnly(stops) {
    this.usedFilters = [stops];
  }
  delFilters(stops) {
    const newStopsSet = new Set(stops instanceof Array ? stops : [stops]);
    this.usedFilters = this.usedFilters.filter(
      (item) => !newStopsSet.has(item)
    );
  }
}

export default new FilterStore();
