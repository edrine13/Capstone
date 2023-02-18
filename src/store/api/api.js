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
