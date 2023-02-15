//  Function to add and save "User" Data to data base
export const addUser = async (data) => {
  try {
    const response = await fetch(
      `https://capstone-b469c-default-rtdb.asia-southeast1.firebasedatabase.app/members.json`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to send data");
    }

    const registerRes = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAhYUaQeJllfCXoqZTxuOhlaYzVhspN98I",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password: data.password,
          email: data.email,

          returnSecureToken: true,
        }),
      }
    );

    if (!registerRes.ok) {
      throw new Error("Failed to register");
    }
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
};
