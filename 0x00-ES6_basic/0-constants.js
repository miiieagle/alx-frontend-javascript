// Function to instantiate variables using const
function taskFirst() {
  // Using const to declare variables
  const firstName = "John";
  const lastName = "Doe";
  
  // Attempting to reassign const variables will result in an error
  // firstName = "Jane"; // This would throw an error
  
  // Output the values of const variables
  console.log("First Name (const):", firstName);
  console.log("Last Name (const):", lastName);
}

// Function to instantiate variables using let
function taskNext() {
  // Using let to declare variables
  let age = 30;
  let city = "New York";
  
  // Variables declared with let can be reassigned
  age = 35;
  city = "Los Angeles";
  
  // Output the values of let variables
  console.log("Age (let):", age);
  console.log("City (let):", city);
}

// Call the functions to demonstrate variable instantiation
taskFirst();
taskNext();
