document.addEventListener('DOMContentLoaded', function() {
  const partyForm = document.getElementById('partyForm');
  const partyList = document.getElementById('partyList');

  // Array to store party data (initially empty)
  let parties = [];

  // Function to display parties in the list
  function displayParties() {
    partyList.innerHTML = ''; // Clear the list

    parties.forEach((party, index) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <strong>${party.name}</strong> - ${party.date} ${party.time} - ${party.location} - ${party.description}
        <button onclick="deleteParty(${index})">Delete</button>
      `;
      partyList.appendChild(listItem);
    });
  }

  // Function to delete a party
  window.deleteParty = function(index) {
    parties.splice(index, 1);
    displayParties();
  };

  // Event listener for form submission
  partyForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('partyName').value;
    const date = document.getElementById('partyDate').value;
    const time = document.getElementById('partyTime').value;
    const location = document.getElementById('partyLocation').value;
    const description = document.getElementById('partyDescription').value;

    // Create party object
    const newParty = {
      name,
      date,
      time,
      location,
      description
    };

    // Add the new party to the parties array
    parties.push(newParty);

    // Clear the form fields
    partyForm.reset();

    // Display the updated list of parties
    displayParties();
  });
});
