// Sample data for demonstration
const donors = [
    { name: 'John Doe', bloodGroup: 'A+', email: 'john@example.com', location: 'Hyderabad' },
    { name: 'Jane Smith', bloodGroup: 'B-', email: 'jane@example.com', location: 'Chennai' }
];

const requests = [
    { requester: 'Apollo Hospital', bloodGroup: 'O+', location: 'Bangalore', message: 'Urgent need for surgery' },
    { requester: 'City Care Clinic', bloodGroup: 'AB-', location: 'Delhi', message: 'Blood needed for emergency' }
];

function loadDonors() {
    const donorTableBody = document.querySelector("#donorTable tbody");
    donorTableBody.innerHTML = "";
    donors.forEach((donor, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${donor.name}</td>
            <td>${donor.bloodGroup}</td>
            <td>${donor.email}</td>
            <td>${donor.location}</td>
            <td><button onclick="deleteDonor(${index})">Delete</button></td>
        `;
        donorTableBody.appendChild(row);
    });
}

function loadRequests() {
    const requestTableBody = document.querySelector("#requestTable tbody");
    requestTableBody.innerHTML = "";
    requests.forEach((req, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${req.requester}</td>
            <td>${req.bloodGroup}</td>
            <td>${req.location}</td>
            <td>${req.message}</td>
            <td>
                <button onclick="approveRequest(${index})">Approve</button>
                <button onclick="rejectRequest(${index})">Reject</button>
            </td>
        `;
        requestTableBody.appendChild(row);
    });
}

function deleteDonor(index) {
    donors.splice(index, 1);
    loadDonors();
}

function approveRequest(index) {
    alert("Request Approved!");
    requests.splice(index, 1);
    loadRequests();
}

function rejectRequest(index) {
    alert("Request Rejected!");
    requests.splice(index, 1);
    loadRequests();
}

function logout() {
    alert("Logged out successfully!");
    window.location.href = "login.html"; // Redirect to login
}

// Load data initially
loadDonors();
loadRequests();
