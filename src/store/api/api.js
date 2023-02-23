//  Function to add and save "User" Data to data base
export const addUser = async (data) => {
  try {
    const response = await fetch(
      `https://capstone-b469c-default-rtdb.asia-southeast1.firebasedatabase.app/members.json`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error('Failed to send data');
    }

    const registerRes = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAhYUaQeJllfCXoqZTxuOhlaYzVhspN98I',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          password: data.password,
          email: data.email,

          returnSecureToken: true,
        }),
      }
    );

    if (!registerRes.ok) {
      throw new Error('Failed to register');
    }
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
};

export const getAllUser = async () => {
  try {
    const response = await fetch(
      `https://capstone-b469c-default-rtdb.asia-southeast1.firebasedatabase.app/members.json`
    );
    if (!response.ok) {
      throw new Error('Failed to send data');
    }

    const data = await response.json();

    let convertData = [];

    for (let user_id in data) {
      convertData.push({
        email: data[user_id].email,
        lastName: data[user_id].lastName,
        id: user_id,
        firstName: data[user_id].firstName,
        middleName: data[user_id].middleName,
        nameSuffix: data[user_id].nameSuffix,
        gender: data[user_id].gender,
        civilStatus: data[user_id].civilStatus,
        birthDate: data[user_id].birthDate,
        contactNumber: data[user_id].contactNumber,
        email: data[user_id].email,
        nationality: data[user_id].nationality,
        password: data[user_id].password,
        totalContribution: data[user_id].totalContribution,
        accountStatus: data[user_id].accountStatus,
        loanStatus: data[user_id].loanStatus,
        lastPaid: data[user_id].lastPaid ? data[user_id].lastPaid : 'N/A',
        contributionCount: data[user_id].contributionCount
          ? data[user_id].contributionCount
          : 1,
        monthlyContribution: data[user_id].monthlyContribution,
        monthlyLoanPayment: data[user_id].monthlyLoanPayment
          ? data[user_id].monthlyLoanPayment
          : 0,
        loans: data[user_id].loan,
      });
    }
    return convertData;
  } catch (err) {}
};

export const updatedData = async (data) => {
  try {
    const response = await fetch(
      `https://capstone-b469c-default-rtdb.asia-southeast1.firebasedatabase.app/members.json`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error('Failed to process the action');
    }
  } catch (err) {}
};

export const getAllUserPure = async () => {
  try {
    const response = await fetch(
      `https://capstone-b469c-default-rtdb.asia-southeast1.firebasedatabase.app/members.json`
    );
    if (!response.ok) {
      throw new Error('Failed to send data');
    }

    const data = await response.json();
    return data;
  } catch (err) {}
};

export const addLoanType = async (data) => {
  try {
    const response = await fetch(
      `https://capstone-b469c-default-rtdb.asia-southeast1.firebasedatabase.app/loanType.json`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error('Failed to send data');
    }
  } catch (err) {}
};

// ADD LOAN FOR A MEMBER

export const addLoan = async (data) => {
  try {
    const response = await fetch(
      `https://capstone-b469c-default-rtdb.asia-southeast1.firebasedatabase.app/members/${data.id}/loan.json`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error('Failed to send data');
    }
  } catch (err) {}
};

export const getAllLoan = async () => {
  try {
    const response = await fetch(
      `https://capstone-b469c-default-rtdb.asia-southeast1.firebasedatabase.app/members.json`
    );
    if (!response.ok) {
      throw new Error('Failed to send data');
    }

    const data = await response.json();

    let convertData = [];

    for (let user_id in data) {
      for (let loan_id in data[user_id].loan) {
        convertData.push({
          id: user_id,
          lastName: data[user_id].lastName,
          loanId: loan_id,
          firstName: data[user_id].firstName,
          email: data[user_id].email,
          middleName: data[user_id].middleName,
          nameSuffix: data[user_id].nameSuffix
            ? data[user_id].nameSuffix
            : 'N/A',
          loanType: data[user_id].loan[loan_id].loanType,
          loanAmount: data[user_id].loan[loan_id].loanAmount,
          payableIn: data[user_id].loan[loan_id].payableIn,
          monthlyLoanPayment: data[user_id].loan[loan_id].monthlyLoanPayment,
          date: data[user_id].loan[loan_id].date,
          balance: data[user_id].loan[loan_id].balance,
          loanStatus: data[user_id].loan[loan_id].loanStatus,
          paidAmount: data[user_id].loan[loan_id].paidAmount,
          civilStatus: data[user_id].civilStatus,
          gender: data[user_id].gender,
        });

        // CHECK IF THE USER STILL HAVE BALANCE IF NOT, TURN LPO STATUS TO INACTIVE OR PAID

        // if (data[user_id].loan[loan_id].balance < 0) {
        //   try {
        //     console.log(data[user_id].loan[loan_id].balance);
        //     const response = await fetch(
        //       `https://capstone-b469c-default-rtdb.asia-southeast1.firebasedatabase.app/members/${user_id}/loan.json`,
        //       {
        //         method: 'PATCH',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({
        //           [loan_id]: {
        //             ...data[user_id].loan[loan_id],
        //             paidAmount:
        //               +data[user_id].loan[loan_id].paidAmount +
        //               +data[user_id].loan[loan_id].monthlyLoanPayment,
        //             balance:
        //               +data[user_id].loan[loan_id].balance -
        //               +data[user_id].loan[loan_id].monthlyLoanPayment,
        //           },
        //         }),
        //       }
        //     );
        //     if (!response.ok) {
        //       throw new Error('Unable to patch data');
        //     }

        //     const data = await response.json();
        //   } catch (err) {
        //     console.log(data);
        //   }
        // }
      }
    }
    return convertData;
  } catch (err) {}
};
//  API TO GET ALL LOANS
// export const getAllLoanPure = async () => {
//   try {
//     const response = await fetch(
//       `https://capstone-b469c-default-rtdb.asia-southeast1.firebasedatabase.app/loans.json`
//     );
//     if (!response.ok) {
//       throw new Error('Failed to send data');
//     }

//     const data = await response.json();
//     return data;
//   } catch (err) {}
// };

// API TO UPDATE ALL LOANS

export const updatedLoans = async (data, id) => {
  try {
    const response = await fetch(
      `https://capstone-b469c-default-rtdb.asia-southeast1.firebasedatabase.app/members/${id}/loan.json`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error('Failed to process the action');
    }
  } catch (err) {}
};

export const addLoanTransaction = async (data, id) => {
  try {
    const response = await fetch(
      `https://capstone-b469c-default-rtdb.asia-southeast1.firebasedatabase.app/members/${id}/transactions/loan.json`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error('Failed to send data');
    }
  } catch (err) {}
};
export const addContributionTransaction = async (data, id) => {
  try {
    const response = await fetch(
      `https://capstone-b469c-default-rtdb.asia-southeast1.firebasedatabase.app/members/${id}/transactions/contribution.json`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error('Failed to send data');
    }
  } catch (err) {}
};

export const getAllContributionTransaction = async () => {
  try {
    const response = await fetch(
      `https://capstone-b469c-default-rtdb.asia-southeast1.firebasedatabase.app/members.json`
    );
    if (!response.ok) {
      throw new Error('Failed to send data');
    }

    const data = await response.json();

    let convertData = [];

    for (let user_id in data) {
      for (let loan_id in data[user_id].transactions.contribution) {
        convertData.push({
          id: user_id,
          lastName: data[user_id].lastName,
          loanId: loan_id,
          firstName: data[user_id].firstName,
          email: data[user_id].email,
          middleName: data[user_id].middleName,
          nameSuffix: data[user_id].nameSuffix
            ? data[user_id].nameSuffix
            : 'N/A',
          date: data[user_id].transactions.contribution[loan_id].date,
          tSeqNo: data[user_id].transactions.contribution[loan_id].tSeqNo,
          paidAmount:
            data[user_id].transactions.contribution[loan_id].paidAmount,
          monthCovered:
            data[user_id].transactions.contribution[loan_id].monthCovered,
          civilStatus: data[user_id].civilStatus,
          gender: data[user_id].gender,
          monthlyContribution: data[user_id].monthlyContribution,
        });
      }
    }
    return convertData;
  } catch (err) {}
};

export const getAllLoanTransaction = async () => {
  try {
    const response = await fetch(
      `https://capstone-b469c-default-rtdb.asia-southeast1.firebasedatabase.app/members.json`
    );
    if (!response.ok) {
      throw new Error('Failed to send data');
    }

    const data = await response.json();

    let convertData = [];

    for (let user_id in data) {
      for (let loan_id in data[user_id].transactions.loan) {
        convertData.push({
          id: user_id,
          lastName: data[user_id].lastName,
          loanId: loan_id,
          firstName: data[user_id].firstName,
          email: data[user_id].email,
          middleName: data[user_id].middleName,
          nameSuffix: data[user_id].nameSuffix
            ? data[user_id].nameSuffix
            : 'N/A',
          date: data[user_id].transactions.loan[loan_id].date,
          tSeqNo: data[user_id].transactions.loan[loan_id].tSeqNo,
          paidAmount: data[user_id].transactions.loan[loan_id].paidAmount,
          monthCovered: data[user_id].transactions.loan[loan_id].monthCovered,
          amount: data[user_id].transactions.loan[loan_id].amount,
          loanType: data[user_id].transactions.loan[loan_id].loanType,
          civilStatus: data[user_id].civilStatus,
          gender: data[user_id].gender,
          monthlyContribution: data[user_id].monthlyContribution,
        });
      }
    }
    return convertData;
  } catch (err) {}
};
