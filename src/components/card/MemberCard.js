import React from "react";
import style from "./MemberCard.module.css";
import reyn from "../../images/team/1.png";

const MemberCard = (props) => {
  return (
    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
      <div className={`${style.member}`}>
        <div className="member-img">
          <img src={reyn} className="img-fluid" alt="" />
        </div>
        <div className={`${style["member-info"]}`}>
          <h4>{props.name}</h4>
          <span> {props.team}</span>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
