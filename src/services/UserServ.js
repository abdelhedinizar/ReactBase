const getStaff = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACK_API_URL}/users?role=Staff`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching dish list:", error);
    throw error;
  }
};

const AddStaffServ = async (name, email, password, confirmPassword) => {
  try {
    const staffBody = {
      name,
      email,
      password,
      confirmPassword,
      role: "Staff",
    };
    const response = await fetch(
      `${process.env.REACT_APP_BACK_API_URL}/users`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(staffBody),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (err) {}
};

export { getStaff, AddStaffServ };
