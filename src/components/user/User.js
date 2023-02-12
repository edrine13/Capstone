import React from "react";
import UserContributionCard from "./UserContributionCard";
import UserLoansCard from "./UserLoansCard";
import UserWelcomeCard from "./UserWelcomeCard";
import style from "./User.module.css";

const User = () => {
  return (
    <section id={style.side} className="mt-5">
      <div className="container">
        <h2 className="text-center"> Welcome back Reynaldo Delima</h2>
        <UserWelcomeCard />
        <div className="row">
          <div className="col-lg-6 mt-5">
            <div className="card text-center">
              <UserContributionCard />
            </div>
          </div>
          <div className="col-lg-6 mt-5">
            <div className="card text-center">
              <UserLoansCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;
