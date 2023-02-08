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
    <section id="team" class={`team ${style["section-bg"]}`}>
      <div class="container" data-aos="fade-up">
        <div class="section-title text-center mb-4 ">
          <h3>
            Our Hardworking <span>Team</span>
          </h3>
        </div>

        <div class="row ">
          {MEMBERS.map((mem) => (
            <MemberCard key={mem.id} name={mem.name} team={mem.team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
