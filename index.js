// Add your code here
function submitData(name, email) {
    const userData = {
      name: name,
      email: email
    };
  
    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    };
  
    return fetch("http://localhost:3000/users", configObject)
      .then(response => response.json())
      .then(data => {
        // Access the new id and append it to the DOM
        document.body.innerHTML += data.id;
      })
      .catch(error => {
        // Append error message to the DOM
        document.body.innerHTML += error.message;
      });
  }
  
  // Return the fetch chain for other functions to use
  return submitData();
  