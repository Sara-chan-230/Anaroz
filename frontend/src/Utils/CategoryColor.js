export default getCategoryColor = (category) => {
    const categoryColors = {
      education: "#3498db", 
      health: "#e74c3c", 
      disaster: "#f39c12", 
      environment: "#2ecc71", 
      food: "#9b59b6", 
      housing: "#1abc9c", 
      animals: "#f1c40f",
      human_rights: "#e67e22", 
      community: "#16a085", 
      arts: "#8e44ad", 
    };
  
    return categoryColors[category] || "#bdc3c7"; 
  };
  
  