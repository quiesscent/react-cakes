const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'Sales',
        data: [12, 19, 9, 5, 6, 3, 8, 4, 8, 2, 4, 6],
        borderWidth: 1,
        backgroundColor: [
          'rgba(17, 133, 33)',
        ],
      },
      {
        label: 'Purchase',
        data: [10, 4, 3, 5, 1, 1, 3, 8, 7, 1, 2, 9],
        borderWidth: 1,
        backgroundColor: [
          'rgba(250, 5, 5)',
        ],
      }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });