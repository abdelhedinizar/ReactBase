const signin = async (loginData) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACK_API_URL}/users/signin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error("Error fetching dish list:", error);
    throw error;
  }
};

const signup = async (signupData) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACK_API_URL}/users/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data; // Return response data if needed
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};

const getUser = async (token) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACK_API_URL}/users/me`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.data.user;
  } catch (error) {
    console.error("Failed to fetch user data:", error);
    throw error;
  }
};

export { signin, signup, getUser };
