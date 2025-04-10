const getPostTypeColor = (type) => {
    const postTypeColors = {
      news: "#3498db",
      memo: "#f39c12",
      story: "#9b59b6", 
      event: "#2ecc71",
    };
  
    return postTypeColors[type] ; 
  };

  export default getPostTypeColor;