const startChatWithBot = async (messages) => {
  try {
    console.log(`${process.env.REACT_APP_BACK_API_URL}/assistances`);
    const response = await fetch(
      `${process.env.REACT_APP_BACK_API_URL}/assistances`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messages),
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching dish list:", error);
    throw error;
  }
};

export default startChatWithBot;
