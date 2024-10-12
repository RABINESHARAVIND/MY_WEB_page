// Function to dynamically load page content
function loadPage(page) {
    return fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById('main-content').innerHTML = '<p>Error loading page. Please try again.</p>';
        });
}

// Update the navigation to load the contact page
document.querySelector('a[href*="contact.html"]').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    loadPage('contact.html');
});

// Load the default page when the site loads
window.onload = function () {
    loadPage('home.html');  // Default to the Home section
};
