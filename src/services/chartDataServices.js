export const userChartData = {
    type: 'line',
    data: {
      labels: ['january', 'febuary', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
      datasets: [
        { // one line graph
          label: 'Boosted ads',
          data: [0, 0, 1, 2, 12, 7, 15, 14, 11, 12, 2, 4],
          backgroundColor: [
            '#4CAF50'
          ],
          borderColor: [
        
            '#4CAF50'
          ],
          borderWidth: 3
        },
        // { another line graph
        //   label: 'Active',
        //   data: [3, 9, 40, 27, 68, 3, 50, 49, 1, 12.4, 11, 1],
        //   backgroundColor: [
        //     '#45AAF1', Green
        //   ],
        //   borderColor: [
        //     '#45AAF1',
        //   ],
        //   borderWidth: 3
        // },
        // {  another line graph
        //   label: 'Expired',
        //   data: [4, 12, 1, 6.7, 46.8, 31.4, 50.7, 49.2, 13.0, 12.4, 11.0, 12.0],
        //   backgroundColor: [
        //     '#F5365C', // Green
        //   ],
        //   borderColor: [
        //     '#F5365C',
        //   ],
        //   borderWidth: 3
        // },
        { // another line graph
          label: 'Sold',
          data: [1, 10, 19.7, 36.7, 36.8, 32.4, 5.7, 4.2, 13.0, 12.4, 11.0, 12.0],
          backgroundColor: [
            '#ECB402', // Green
          ],
          borderColor: [
            '#ECB402',
          ],
          borderWidth: 3
        },
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            padding: 25,
          }
        }]
      }
    }
  }
  export default userChartData;