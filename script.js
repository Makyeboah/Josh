function yesResponse() {
    const responseMessage = document.getElementById("response-message");
    const responseImage = document.getElementById("response-image");
  
    // Update the message and styles
    responseMessage.style.display = "block";
    responseMessage.innerText = "That’s why I love you!";
    document.body.style.backgroundColor = "#d4edda"; // Soft green background
  
    // Display the happy image
    responseImage.style.display = "block";
    responseImage.src = "happy.jpg"; // Path to your happy image
  
    // Add bounce animation
    responseMessage.classList.remove("shake");
    responseMessage.classList.add("bounce");
  }
  
  function noResponse() {
    const responseMessage = document.getElementById("response-message");
    const responseImage = document.getElementById("response-image");
  
    // Update the message and styles
    responseMessage.style.display = "block";
    responseMessage.innerText = "You better go back and choose Yes!";
    document.body.style.backgroundColor = "#f8d7da"; // Soft red background
  
    // Display the angry image
    responseImage.style.display = "block";
    responseImage.src = "angry.jpg"; // Path to your angry image
  
    // Add shake animation
    responseMessage.classList.remove("bounce");
    responseMessage.classList.add("shake");
  
    // Auto-switch to "Yes" after 3 seconds
    setTimeout(() => {
      responseMessage.innerText = "I’m switching your answer to Yes!";
      yesResponse();
    }, 3000);
  }