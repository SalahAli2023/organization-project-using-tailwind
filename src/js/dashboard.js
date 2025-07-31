console.log("Dashboard initialized");

// DOM Elements
const openSidebarBtn = document.getElementById('open-sidebar');
const closeSidebarBtn = document.getElementById('close-sidebar');
const mobileSidebar = document.getElementById('mobile-sidebar');
const sidebarBackdrop = document.getElementById('sidebar-backdrop');
const userMenuButton = document.getElementById('user-menu-button');
const userMenu = document.getElementById('user-menu');

// Initialize functions when page loads
window.addEventListener('DOMContentLoaded', () => {
    // Mobile sidebar toggle
    openSidebarBtn.addEventListener('click', () => {
        mobileSidebar.style.display = 'block';
        setTimeout(() => {
            mobileSidebar.classList.add('opacity-100');
            sidebarBackdrop.classList.add('opacity-100');
        }, 10);
    });

    closeSidebarBtn.addEventListener('click', closeMobileSidebar);
    sidebarBackdrop.addEventListener('click', closeMobileSidebar);

    // User menu toggle
    userMenuButton.addEventListener('click', () => {
        const expanded = userMenuButton.getAttribute('aria-expanded') === 'true';
        userMenuButton.setAttribute('aria-expanded', !expanded);
        userMenu.classList.toggle('hidden');
    });

    // Close user menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!userMenuButton.contains(e.target)) {
            userMenuButton.setAttribute('aria-expanded', 'false');
            userMenu.classList.add('hidden');
        };
    });
});

function closeMobileSidebar() {
    mobileSidebar.classList.remove('opacity-100');
    sidebarBackdrop.classList.remove('opacity-100');
    setTimeout(() => {
        mobileSidebar.style.display = 'none';
    }, 300);
}

// Sample data for charts (would be replaced with real data in production)
const donationData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: 'Donations ($)',
        data: [12000, 19000, 15000, 28000, 22000, 30000],
        backgroundColor: '#007DBC',
        borderColor: '#003A5D',
        borderWidth: 1
    }]
};

const beneficiaryData = {
    labels: ['Food', 'Education', 'Health', 'Shelter'],
    datasets: [{
        data: [45, 25, 20, 10],
        backgroundColor: [
            '#E84E10',
            '#007DBC',
            '#FFC72C',
            '#003A5D'
        ]
    }]
};

// Initialize charts when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // This would be replaced with actual chart initialization code
    // using a library like Chart.js in a real implementation
    console.log('Charts would be initialized here with data:', {
        donationData,
        beneficiaryData
    });
});

