import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import TicketCard from "../components/TicketCard";
import Categoriescontext from "../context";

const Dashboard = () => {
  const [tickets, setTickets] = useState(null);
  const { categories, setCategories } = useContext(Categoriescontext);

  useEffect(() => {
    const getAllTickets = async () => {
      const response = await axios.get("http://localhost:8000/tickets");

      const dataObj = response.data.data;
      const arrayOfKeys = Object.keys(dataObj);
      const arrayOfData = Object.keys(dataObj).map((key) => dataObj[key]);
      const formattedArray = [];
      arrayOfKeys.forEach((key, index) => {
        const formattedData = { ...arrayOfData[index] };
        formattedData["documentID"] = key;
        formattedArray.push(formattedData);
      });
      setTickets(formattedArray);
    };

    getAllTickets();
  }, []);

  useEffect(() => {
    if (tickets) {
      console.log("first : ", tickets);
      setCategories([...new Set(tickets.map(({ category }) => category))])
    }
  }, [tickets]);

  const colors = [
    "rgb(255,179,186)",
    "rgb(255,223,186)",
    "rgb(255,255,186)",
    "rgb(186,255,201)",
    "rgb(186,225,255)",
  ];

  if (tickets) {
    var uniqueCategories = [
      ...new Set(tickets.map(({ category }) => category)),
    ];
  }

  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories &&
          uniqueCategories.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    key={_index}
                    id={_index}
                    color={colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
