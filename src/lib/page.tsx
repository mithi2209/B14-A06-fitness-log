

const getAllLibraryData = async () => {
     try{
          const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
          const data = await res.json();
          return(data);
     }
     catch (error) {
          console.log("Error fetching workout data:", error);
          
      }
    
    
}

export default getAllLibraryData;

