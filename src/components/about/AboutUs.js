import React from "react";
import style from "./About.module.css";
import LoanImage from "../../images/about1.png";

function AboutUs() {
  return (
    <section id="about">
      <div className="bg"></div>
      <div className="container d-flex justify-content-center">
        <div className="col-md-8 pt-5">
          <h1 className="text-center pb-3">
            About <span>Us</span>
          </h1>
          <p>
            Our aim is to build a people centered cooperative enterprise for
            sustainable developement and resilient life. Our business model
            embraces the concept of solidarity: we are a cooperative which
            involves every member in hundreds of tasks and activities in order
            to generate sustainable income, thus making co-operation an engine
            of local development.
          </p>
          <hr />
          <div className="row b1">
            <div class="col-lg-6">
              <h3>
                Why <span>WE</span> need an Alternative to Conventional Credits
              </h3>
              <p className="p1">
                The conventional credit system has been broken for years. It is
                not a good way to lend money to people who cannot pay it back.
                The traditional credit system is based on the assumption that
                there is only one borrower and one lender. The alternative is to
                create a community of lenders and borrowers who can take
                advantage of each other’s strengths and support each other’s
                weaknesses.
              </p>
            </div>
            <div className="col-lg-6">
              <h3>
                Building a <span>BETTER</span> Cooperative
              </h3>
              <p class="p1">
                Cooperatives are an important part of our economy, but many
                people don’t realize how much they already do in their
                communities. In some cases, cooperatives are delivering services
                that would otherwise go unfulfilled due to lack of access or
                financial incentives.
              </p>
            </div>
          </div>

          <div className="row b1">
            <div className="col-lg-6">
              <img src={LoanImage} alt="" width="300" />
            </div>
            <div className="col-lg-6 align-self-center">
              <h3>
                <span>LOANS</span> for the Unbanked
              </h3>
              <p className="p1">
                The loans for the unbanked are not about just helping those who
                cannot afford to borrow money. They are about creating a more
                inclusive financial service delivery model where the people who
                can afford to pay can use the service.
              </p>
            </div>
          </div>

          <h3>
            Inclusive <span>FINANCIAL</span> Service Delivery
          </h3>
          <p>
            The loans for the unbanked will be available through a variety of
            channels, including mobile, SMS and bank branch. The service will
            provide information on how to apply and how much it will cost. It
            will also provide information on other options, such as lending
            institutions and microfinance institutions, which may be available
            in your area.
          </p>
          <p className="fs-4 fst-italic pt-5 ms-5">
            We need an alternative to the way things have always been done.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
