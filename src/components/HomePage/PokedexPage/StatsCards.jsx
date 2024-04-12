import React from "react";
import './style/StatCards.css'

const StatsCards = ({ stat }) => {
  return (
    <article className="stat__container">
      <div className="stat__cont-name">
        <h3 className="stat__name"> {stat.stat.name} </h3>
        <h3 className="stat__max"> {stat.base_stat}/225 </h3>
      </div>
      <div className="stat__const-progress">
        <progress className="stat__progress" value={stat.base_stat} max={225} />
      </div>
    </article>
  );
};

export default StatsCards;
