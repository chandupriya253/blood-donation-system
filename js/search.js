// Sample donor data (this should come from localStorage or database in future)
const donors = [
    { name: 'John Doe', bloodGroup: 'A+', location: 'Hyderabad', contact: '1234567890' },
    { name: 'Jane Smith', bloodGroup: 'B-', location: 'Chennai', contact: '9876543210' },
    { name: 'Arun Kumar', bloodGroup: 'O+', location: 'Hyderabad', contact: '9988776655' },
  ];
  
  document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const bloodGroup = document.getElementById('bloodGroup').value;
    const location = document.getElementById('location').value.trim().toLowerCase();
  
    const filteredDonors = donors.filter(donor => {
      const matchBlood = donor.bloodGroup === bloodGroup;
      const matchLocation = location ? donor.location.toLowerCase().includes(location) : true;
      return matchBlood && matchLocation;
    });
  
    displayResults(filteredDonors);
  });
  
  function displayResults(donors) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
  
    if (donors.length === 0) {
      resultsDiv.innerHTML = "<p>No donors found. Please try again!</p>";
      return;
    }
  
    donors.forEach(donor => {
      const card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML = `
        <h3>${donor.name}</h3>
        <p><strong>Blood Group:</strong> ${donor.bloodGroup}</p>
        <p><strong>Location:</strong> ${donor.location}</p>
        <p><strong>Contact:</strong> ${donor.contact}</p>
      `;
      resultsDiv.appendChild(card);
    });
  }
  