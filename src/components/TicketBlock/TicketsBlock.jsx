import { observer } from "mobx-react-lite";
import "./TicketsBlock.scss";
import { useState } from "react";
import { tickets } from "../../content/tickets.json";
import Ticket from "../Ticket/Ticket";

const TicketsBlock = observer(() => {
  const [ticketsToRender, setTicketsToRender] = useState(tickets);
  return (
    <section className="tickets-block">
      {ticketsToRender.map((ticket) => (
        <Ticket ticketData={ticket} key={ticket.id} />
      ))}
    </section>
  );
});
export default TicketsBlock;
