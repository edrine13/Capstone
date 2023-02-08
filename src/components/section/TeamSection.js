import React from "react";
import style from "./TeamSection.module.css";
import MemberCard from "../card/MemberCard";

const MEMBERS = [
  {
    name: "Reynaldo Delima",
    team: "Team WD31",
    id: 1,
  },
  { name: "Jeorge Santos", team: "Team WD31", id: 2 },
  { name: "Edrine Rubio", team: "Team WD31", id: 3 },
];

const TeamSection = () => {
  return (
    <section id="team" className={`team ${style["section-bg"]}`}>
      <div className="container" data-aos="fade-up">
        <div className={`${style["section-title"]} my-4 text-center`}>
          <h3>
            Our Hardworking <span>Team</span>
          </h3>
        </div>

        <div className="row ">
          {MEMBERS.map((mem) => (
            <MemberCard key={mem.id} name={mem.name} team={mem.team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
