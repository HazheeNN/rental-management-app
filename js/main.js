// DOM Elements
const navLinks = document.querySelectorAll('.main-nav a');
const sections = document.querySelectorAll('.section');
const dashboardSection = document.getElementById('dashboard-section');
const pageTitle = document.getElementById('page-title');

// Navigation functionality
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Get the section to show
        const sectionToShow = link.getAttribute('data-section');
        
        // Update page title
        pageTitle.textContent = sectionToShow.charAt(0).toUpperCase() + sectionToShow.slice(1);
        
        // Hide all sections
        sections.forEach(section => {
            section.style.display = 'none';
        });
        dashboardSection.style.display = 'none';
        
        // Show the selected section
        if (sectionToShow === 'dashboard') {
            dashboardSection.style.display = 'block';
        } else {
            document.getElementById(`${sectionToShow}-section`).style.display = 'block';
        }
    });
});

// Sample data for demonstration
const sampleData = {
    totalProperties: 5,
    occupiedProperties: 3,
    rentDue: 2500,
    unpaidBills: 1200,
    recentActivity: [
        { description: "Payment received from John Doe", date: "2023-05-15", amount: 500 },
        { description: "Electricity bill paid for House #2", date: "2023-05-14", amount: 120 },
        { description: "New tenant added to House #5", date: "2023-05-10" },
        { description: "Maintenance request for House #3", date: "2023-05-08" }
    ]
};

// Function to populate dashboard with sample data
function populateDashboard() {
    document.getElementById('total-properties').textContent = sampleData.totalProperties;
    document.getElementById('occupied-properties').textContent = sampleData.occupiedProperties;
    document.getElementById('rent-due').textContent = `$${sampleData.rentDue}`;
    document.getElementById('unpaid-bills').textContent = `$${sampleData.unpaidBills}`;
    
    const activityList = document.getElementById('activity-list');
    activityList.innerHTML = '';
    
    sampleData.recentActivity.forEach(activity => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${activity.description}</span>
            <span>${activity.date}</span>
            ${activity.amount ? `<span class="amount">$${activity.amount}</span>` : ''}
        `;
        activityList.appendChild(li);
    });
}

// Initialize the dashboard
populateDashboard();