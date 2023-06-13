  // Function to check if it's currently day time
 export const isDayTime = () => {
    const currentHour = new Date().getHours();
    return currentHour >= 6 && currentHour < 18;
  };