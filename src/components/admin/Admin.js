import React, { useContext } from 'react';
import style from './Admin.module.css';
import TotalMembers from './Cards/TotalMembers';
import userContext from '../../store/context/users-context';

const Admin = () => {
  const activeMembers = 8012;
  const totalActiveLoans = 812;
  const totalMembers = 64233;
  const userCtx = useContext(userContext).userData;
  return (
    <section id={style.side} className="mt-5">
      <div className="container">
        <h2 className="text-center">
          Welcome back {`${userCtx.firstName} ${userCtx.lastName}`}
        </h2>
        {/* card */}
        <div className="row">
          <div className="col-lg-4 mt-5">
            <div className="card text-center border-0">
              {/* card */}{' '}
              <TotalMembers value={totalMembers} buttonTitle={'View Members'}>
                totalMembers
              </TotalMembers>
            </div>
          </div>
          <div className="col-lg-4 mt-5">
            <div className="card text-cente border-0">
              <TotalMembers
                className="bg-success"
                value={activeMembers}
                buttonTitle={'View Active Members'}
              >
                Active Members
              </TotalMembers>
            </div>
          </div>
          <div className="col-lg-4 mt-5">
            <div className="card text-center border-0">
              <TotalMembers
                className="bg-info"
                value={totalActiveLoans}
                buttonTitle={'View Active Loans'}
              >
                Active Loans
              </TotalMembers>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
