import React from 'react';
import style from './Overview.module.css';

const overview = () => {
  return (
    <section id="overview" className={`${style.side} mt-5`}>
      <div className="container">
        <h1>Reynaldo Delima</h1>
        <div className="card">
          <div className="card-body">
            "Welcome to Link Cooperative! We're glad you're here. As a member,
            you have access to a range of features and resources that will help
            you connect with other members and make the most of your membership.
            If you have any questions or need help, please don't hesitate to
            contact us. We're here to support you. Thank you for choosing Link
            Cooperative!"
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mt-5">
            <div className={`${style.box} card text-center`}>
              <div className="card-body">
                <h5 className="card-title">
                  <br />
                  Contributions
                </h5>

                <p className="card-text">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  No existing contribution
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5">
            <div className={`${style.box} card text-center`}>
              <div className="card-body">
                <h5 className="card-title">
                  <br />
                  Loans
                </h5>

                <p className="card-text">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  No existing loan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default overview;
