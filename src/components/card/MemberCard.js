import React from "react";
import style from "./MemberCard.module.css";
import reyn from "../../images/team/1.png";

const MemberCard = (props) => {
  return (
    <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
      <div class={`${style.member}`}>
        <div class="member-img">
          <img src={reyn} class="img-fluid" alt="" />
        </div>
        <div class={`${style["member-info"]}`}>
          <h4>{props.name}</h4>
          <span> {props.team}</span>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
