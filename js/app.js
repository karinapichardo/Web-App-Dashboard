const alertIcon = document.querySelector('#bell');
const alertBanner = document.querySelector('.alert');
const notification1 = document.getElementById('alert2');
const notification2 = document.getElementById('alert3');
const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-chart');
const listItem = document.querySelectorAll('.traffic-nav-link');
const sendBtn = document.querySelector('#send');

const userField = document.querySelector('#userField');
const messageField = document.querySelector('#messageField');


alertIcon.addEventListener('click', e => {
    notification1.innerHTML =
        `
    <div class="alert-banner">
     <p><strong>Karina Pichardo</strong> sent you a friend request</p>
     <p class="alert-banner-close">x</p>
    </div>
    `
    notification2.innerHTML =
        `
    <div class="alert-banner">
     <p><strong>Dan Oliver</strong> sent you an invitation to Boston's yearly tech conference</p>
     <p class="alert-banner-close">x</p>
    </div>
    `
})

notification1.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains('alert-banner-close')) {
        notification1.style.display = 'none';
    }
})

notification2.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains('alert-banner-close')) {
        notification2.style.display = 'none';
    }
})
alertBanner.innerHTML =
    `
    <div class="alert-banner">
     <p><strong>Alert:</strong> You have <strong>unread</strong> messages</p>
     <p class="alert-banner-close">x</p>
    </div>
    `

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains('alert-banner-close')) {
        alertBanner.style.display = 'none';
    }
})

const updateChart = (chart, newData) => {
    chart.data.labels = newData.labels;
    chart.data.datasets[0].data = newData.datasets[0].data;
    chart.update({
        tension: 0.3,
        aspectRatio: 2.5,
        animation: {
            duration: 0
        },
    });
}

listItem.forEach(item => {
    item.addEventListener('click', function () {
        listItem.forEach(navItem => navItem.classList.remove('active'));
        this.classList.add('active');

        if (item.textContent === 'Hourly') {
            trafficChart.data.datasets[0].data = [5, 10, 14, 4, 5, 2, 0, 12, 4, 10, 19];
            trafficChart.update();
        } else if (item.textContent === 'Daily') {
            trafficChart.data.datasets[0].data = [100, 50, 70, 120, 85, 65, 70, 35, 80, 110, 90];
            trafficChart.update();
        } else if (item.textContent === 'Weekly') {
            trafficChart.data.datasets[0].data = [700, 1200, 1000, 200, 1500, 1650, 1350, 1800, 2250, 1100, 2500, 2000];
            trafficChart.update();
        } else if (item.textContent === 'Monthly') {
            trafficChart.data.datasets[0].data = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500];
            trafficChart.update();
        }
    })
})

let trafficData = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficOptions = {
    backgroundColor: 'rgba(112, 104, 201,.5)',
    fill: true,
    tension: 0.3,
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});


const dailyData = {
    labels: ['S', 'M', 'T', 'F', 'S'],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

const mobileData = {
    labels: ['Desktop', 'Tablet', 'Phones'],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

sendBtn.addEventListener('click', e => {
    if (messageField.value.length === 0) {
        alert('Message field is empty, please enter a message to submit.');
        event.preventDefault();
    } else if (userField.value.length === 0) {
        alert('User field is empty, please enter a name.');
        event.preventDefault();
    } else {
        alert('Message has been sent, thank you! ✅ ');
    }
});
