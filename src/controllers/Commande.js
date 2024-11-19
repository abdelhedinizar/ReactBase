function addCommande([commande, setCommande], commandeDishs) {
  setCommande([...commande, commandeDishs]);
  sessionStorage.setItem(
    "commandeDish",
    JSON.stringify([...commande, commandeDishs])
  );
}

function removeLastCommande([commande, setCommande], dishId) {
  const index = commande
    .slice() // Create a shallow copy of the array to avoid mutation
    .reverse() // Reverse the array to find the last occurrence
    .findIndex((commandeElement) => commandeElement.dish._id === dishId);

  if (index !== -1) {
    // Remove the last matching dish
    const updatedCommande = commande.slice();
    updatedCommande.splice(commande.length - 1 - index, 1); // Adjust the index after reversing
    setCommande(updatedCommande);
    sessionStorage.setItem("commandeDish", JSON.stringify(updatedCommande));
  }
}
const CommandeContr = { addCommande, removeLastCommande };
export default CommandeContr;
