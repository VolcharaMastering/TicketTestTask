import { observer } from "mobx-react-lite";
import "./TicketsBlock.scss";
import { useState } from "react";
import { tickets } from "../../content/tickets.json";
import Ticket from "../Ticket/Ticket";
import FilterStore from "../../stores/FilterStore";
import { useEffect } from "react";

const TicketsBlock = observer(() => {
  const [ticketsToRender, setTicketsToRender] = useState([]);

  useEffect(() => {
    if(FilterStore.usedFilters.length === 0) {
      setTicketsToRender(tickets);
      return;
    }
    setTicketsToRender([]);
    tickets.forEach((item) => {
      if (FilterStore.usedFilters.includes(item.stops)) {
        setTicketsToRender((ticketsToRender) => [...ticketsToRender, item]);
      }
    });
  }, [FilterStore.usedFilters]);
  return (
    <section className="tickets-block">
      {ticketsToRender.map((ticket) => (
        <Ticket ticketData={ticket} key={ticket.id} />
      ))}
    </section>
  );
});
export default TicketsBlock;
