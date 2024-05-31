// Define your story parts
const storyParts = [
    "You are a scientist named …...... you are working on a revolutionary time machine project.",
    "While you are making the last part you accidentally trip and fall into the machine. Sending you back all the way to the prehistoric era, your time machine falls over and you have no other option but to start the car and drive to the nearest city and search for any signs of civilization.",
  ];
  
  // Set up variables
  let currentPart = 0;
  
  // Function to update the story text
  function updateStory() {
    const storyText = document.getElementById('story-text');
    storyText.textContent = storyParts[currentPart];
  }
  
  // Function to hide the story text
  function hideStory() {
    document.getElementById('story-text').style.display = 'none';
  }
  
  // Event listener for the space bar
  function spaceBarHandler(event) {
    // Check if the pressed key is the space bar (keyCode 32)
    if (event.keyCode === 32) {
      // Move to the next part of the story
      currentPart++;
  
      // Check if there are more parts
      if (currentPart < storyParts.length) {
        // Update the story text
        updateStory();
      } else {
        // Hide the story text
        hideStory();
  
        // Display an ending message or reset the story
        alert("Now search for a way to start the car. Good luck!");
  
        // Reset and show the story text
        currentPart = 0;
        updateStory();
  
        // Remove the event listener after the story is complete
        document.body.removeEventListener('keyup', spaceBarHandler);
      }
    }
    
  }
  
  // Initial story update
  updateStory();
  
  // Add the event listener for the space bar
  document.body.addEventListener('keyup', spaceBarHandler);


 
  let spaceCount = 0;

  document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      spaceCount++;

      if (spaceCount >= 2) {
        document.querySelector('.animated-text').style.display = 'none';
      }
    }
  });