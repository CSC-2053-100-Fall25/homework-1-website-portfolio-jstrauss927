const button = document.getElementById('hide-photo');
const photo = document.getElementById('photo-container');

button.addEventListener('click', function() {

    if (button.textContent === 'Hide Photo') {
        photo.style.display = 'none';
        button.textContent = 'Show Photo';
    }
    else {
        photo.style.display = 'block';
        button.textContent = 'Hide Photo';
    }
    
});

// Task 4: Dynamic artist List (following Lab 3 pattern)
 const addArtistButton = document.getElementById('add-artist');

 addArtistButton.addEventListener('click', function() {

    const interest = prompt("Enter one of your artists:");
    const artistElement = document.createElement('p');
    artistElement.textContent = "Artist: " + interest;
    document.body.appendChild(artistElement);

 });