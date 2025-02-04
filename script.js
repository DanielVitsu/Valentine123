// script.js

// Function to handle button click events
function selectOption(option) {
    var videoElement = document.getElementById('current-image');
    var audioElement = document.getElementById('background-music'); 
    var yayImage = document.getElementById('yay-image');
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow ccars
        if (audioElement) {
            audioElement.pause();  // Stop the music
            audioElement.currentTime = 0; // Reset the audio to the beginning
        }
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        });

        var gifElement = document.getElementById('current-image');
        if (gifElement) {
            gifElement.src = 'yay.gif'; // Set a new image for "Yes"
            gifElement.style.display = 'block'; 
            gifElement.style.width = '200px';  // Resize as needed
            gifElement.style.height = 'auto';  // Maintain aspect ratio
        }
        document.getElementById('yes-button').style.display = 'none';
        document.getElementById('no-button').style.display = 'none';
        document.getElementById('question').innerHTML = 'yaaayyy!!!<br>now lets glue each other';
        

        
        

        setTimeout(function() {
            var videoElement = document.getElementById('current-video');
            
            if (videoElement) {
                // Create a new source element to avoid caching issues
                var newSource = document.createElement('source');
                newSource.src = 'valentine.mp4'; // Use MP4 for better compatibility
                newSource.type = 'video/mp4';
        
                // Remove old sources and add the new one
                videoElement.innerHTML = ''; 
                videoElement.appendChild(newSource);
        
                // Reload and play the new video
                videoElement.load(); 
                videoElement.style.display = 'block'; // Show video
                videoElement.muted = false; // Ensure sound is enabled
                videoElement.volume = 1.0; // Set max volume
                videoElement.play(); // Play video
            }
        }, 2000); // Delay by 2 seconds
        
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
        var gifElement = document.getElementById('current-image');
        if (gifElement) {
            gifElement.src = 'nono.gif'; // Replace with your new image path
            gifElement.style.display = 'block'; 
            gifElement.style.width = '200px';  // Set the new width
            gifElement.style.height = 'auto';  // Maintain aspect ratio
        }
        document.getElementById('question').innerText = 'clickkk yeess';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}
// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = [];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 100); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'cat.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHeartImage.src = 'cat-heart.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    // Set alternative text for the image (for accessibility)
    catHeartImage.alt = 'Cat Heart';
    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the cat.gif initially
displayCat();