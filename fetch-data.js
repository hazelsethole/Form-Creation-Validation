async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create a list to display user names
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the text to the user's name
            userList.appendChild(listItem); // Append the list item to the user list
        });

        dataContainer.appendChild(userList); // Append the user list to the data container
    } catch (error) {
        dataContainer.innerHTML = 'Failed to load user data.'; // Handle errors
    }
}

// Invoke the fetchUserData function on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);