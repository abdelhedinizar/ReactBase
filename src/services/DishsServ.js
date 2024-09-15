const fetchDishList = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACK_API_URL}/dishs`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data.Dishs;
  } catch (error) {
    console.error("Error fetching dish list:", error);
    throw error;
  }
};

export { fetchDishList };
