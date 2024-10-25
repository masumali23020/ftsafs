

function convertDateFormat(dateString) {
    // Create a new Date object from the input string
    const date = new Date(dateString);
    
    // Options for formatting the date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    
    // Format the date to a more readable format
    return date.toLocaleDateString('en-US', options);
  }
  
  // Example usage
//   const dateStr = "2024-10-24";
//   const formattedDate = convertDate(dateStr);
//   console.log(formattedDate); // Output: October 24, 2024
  
  export { convertDateFormat };

