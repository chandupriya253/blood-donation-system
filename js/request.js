document.getElementById('requestForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const bloodGroup = document.getElementById("bloodGroup").value;
    const location = document.getElementById("location").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !bloodGroup || !location) {
      alert("Please fill all required fields.");
      return;
    }
  
    const requestData = {
      name,
      email,
      bloodGroup,
      location,
      message
    };
  
    // Here you can store to localStorage or send to backend
    console.log("Blood Request Submitted:", requestData);
    alert("Blood request submitted successfully!");
  
    // Optionally reset form
    document.getElementById("requestForm").reset();
  });
  