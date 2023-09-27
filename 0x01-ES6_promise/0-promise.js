// Create a constructor function or an object
function APIHandler() {}

// Define the prototype function getResponseFromAPI
APIHandler.prototype.getResponseFromAPI = function () {
  // Simulate an asynchronous API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomValue = Math.random();

      // Simulate success (resolve) or failure (reject)
      if (randomValue < 0.5) {
        resolve({ data: "API response data" });
      } else {
        reject(new Error("API request failed"));
      }
    }, 1000); // Simulate a 1-second delay
  });
};

// Create an instance of the APIHandler
const apiHandler = new APIHandler();

// Call the getResponseFromAPI function and handle the Promise
apiHandler.getResponseFromAPI()
  .then(response => {
    console.log("API call successful:", response);
  })
  .catch(error => {
    console.error("API call failed:", error);
  });
