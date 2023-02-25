import React, { useContext, useEffect, useState } from 'react';
import style from './Admin.module.css';
import TotalMembers from './Cards/TotalMembers';
import userContext from '../../store/context/users-context';
import { getAllUser, getAllLoan } from '../../store/api/api';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [activeUsers, setActiveUsers] = useState([]);
  const [loans, setLoans] = useState([]);

  const userCtx = useContext(userContext).userData;

  useEffect(() => {
    const response = async () => {
      const data = await getAllUser();
      const loanData = await getAllLoan();

      const active = data.filter((user) => user.accountStatus === 'active');
      const activeLoans = loanData.filter(
        (loans) => loans.loanStatus === 'active'
      );
      console.log(active);
      setUsers(data);
      setActiveUsers(active);
      setLoans(activeLoans);
    };
    response();
  }, [setUsers, setActiveUsers]);

  console.log(activeUsers);

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
              {/* card */}
              <TotalMembers
                value={users.length}
                buttonTitle={'View Members'}
                to={'/admin/user-management'}
              >
                total Members
              </TotalMembers>
            </div>
          </div>
          <div className="col-lg-4 mt-5">
            <div className="card text-center border-0">
              <TotalMembers
                className="bg-success"
                value={activeUsers.length}
                buttonTitle={'View Active Members'}
                to={'/admin/user-management'}
              >
                Active Members
              </TotalMembers>
            </div>
          </div>
          <div className="col-lg-4 mt-5">
            <div className="card text-center border-0">
              <TotalMembers
                className="bg-info"
                value={loans.length}
                buttonTitle={'View Active Loans'}
                to={'/admin/loan-management'}
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
