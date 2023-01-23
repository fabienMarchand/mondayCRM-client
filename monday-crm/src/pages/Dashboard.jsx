import React from "react";

import TicketCard from "../components/TicketCard";

const Dashboard = () => {
  const tickets = [
    {
      category: "Q1 2023",
      color: "red",
      title: "NFT safety 101 video",
      owner: "Fab Marcha",
      avatar:
        "https://robohash.org/6a5fddeba4a7ece387230b3d563ceb69?set=set4&bgset=&size=400x400",
      status: "done",
      priority: 5,
      progress: 100,
      description: "Make a video with NFT safety",
      timestamp: "2022-02-11T07:36:17+0000",
    },
    {
      category: "Q1 2023",
      color: "Green",
      title: "NFT safety 102 video",
      owner: "Fab Marcha",
      avatar:
        "https://robohash.org/6a5fddeba4a7ece387230b3d563ceb69?set=set4&bgset=&size=400x400",
      status: "working on it",
      priority: 2,
      progress: 70,
      description: "Make a video with NFT safety",
      timestamp: "2022-02-13T07:36:17+0000",
    },
    {
      category: "Q2 2023",
      color: "blue",
      title: "NFT safety 103 video",
      owner: "Fab Marcha",
      avatar:
        "https://robohash.org/6a5fddeba4a7ece387230b3d563ceb69?set=set4&bgset=&size=400x400",
      status: "work on it",
      priority: 3,
      progress: 10,
      description: "Make a video with NFT safety",
      timestamp: "2022-02-15T07:36:17+0000",
    },
  ];

  const colors = [
    "rgb(255,179,186)",
    "rgb(255,223,186)",
    "rgb(255,255,186)",
    "rgb(186,255,201)",
    "rgb(186,225,255)",
  ];

  const uniqueCategories = [
    ...new Set(tickets.map(({ category }) => category)),
  ];

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
