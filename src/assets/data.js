const labels = ["January", "February", "March", "April", "May", "June", "July"];
export const data = {
    labels: labels,
    datasets: [{
        label: 'Time Spendings',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
            'rgba(188, 217, 231, 1)',
            'rgba(188, 217, 231, 1)',
            'rgba(188, 217, 231, 1)',
            'rgba(188, 217, 231, 1)',
            'rgba(188, 217, 231, 1)',
            'rgba(188, 217, 231, 1)',
            'rgba(188, 217, 231, 1)'
           
        ],
        borderColor: [
            'rgb(238, 238, 238)',
            'rgb(238, 238, 238)',
            'rgb(238, 238, 238)',
            'rgb(238, 238, 238)',
            'rgb(238, 238, 238)',
            'rgb(238, 238, 238)',
            'rgb(238, 238, 238)'
        ],
        borderWidth: 1,
        borderRadius: 4,
        hoverBackgroundColor: '#3D85C6'
    }]
}
export const options = {
    responsive: true,
    maintainAspectRatio: false,
    animations: {
        tension: {
            duration: 1000,
            easing: 'easeInOutBounce',
            from: 1,
            to: 0,
            loop: true
        }
    },
    omaintainAspectRatio: false,
    plugins: {
        tooltip: {
            enabled: true,
        },
        legend: {
            display: false,
            labels: {
                font: {
                    size: 14,
                    family: 'Roboto Slab',
                },
                textAlign: 'right',
                color: '#000000'
            },
            title: {
                display: 'false'
            }
        },
    },
    scales: {
        alignToPixels: true,
        min: 200,
        max: 300,
        yAxes: [{
            display: true,
            ticks: {
                min:0,
                max:100
            }
        }],
        y: {
            beginAtZero: true,
            grid: {
                drawOnChartArea: true,
                drawBorder: false,
            },
            ticks: {
                color: "#444444",
                font: {
                    size: 14,
                    family: 'Roboto Slab',
                },
            },
        },
        x: {
            grid: {
                drawOnChartArea: false,
                drawBorder: false,
            },
            ticks: {
                color: "#444444",
                font: {
                    size: 14,
                    family: 'Roboto Slab',
                },
            },
        },
    }
}

export const data_doughnut = {
    labels: [
        'Completed',
        'Progress',
        'To start'
      ],
      datasets: [{
        label: '',
        data: [60, 10, 30],
        borderColor:[
            'rgb(152, 195, 139)',
          'rgb(162, 201, 150)',
          'rgb(171, 206, 160)'
        ],
        backgroundColor: [
            'rgb(152, 195, 139)',
            'rgb(162, 201, 150)',
            'rgb(171, 206, 160)'
          ],
        borderWidth: 1,

       
        hoverOffset: 4
      }]
}
export const options_doughnut = {
    responsive: true,
    borderRadius: 30,
    cutout: "80%",
    plugins:{
        legend: {
            display: false,
            labels: {
                font: {
                    size: 14,
                    family: 'Roboto Slab',
                },
                textAlign: 'right',
                color: '#000000'
            },
            title: {
                display: 'false'
            }
        },
    }
}
export const data_line = {
    labels: labels,
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor:"rgb(243,118,88)",
      fill: false,
      borderColor: 'rgb(243,118,88)',
      tension: 0.1
    }]
}
export const options_line = {
    animations: {
        tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
        }
    },
    omaintainAspectRatio: false,
    plugins: {
        tooltip: {
            enabled: true,
        },
        legend: {
            display:false,
            labels: {
                font: {
                    size: 14,
                    family: 'Roboto Slab',
                },
                color: '#000000'
            },

        },
    },
    scales: {
        alignToPixels: true,
        min: 200,
        max: 300,
        y: {
            display: true,
            beginAtZero: true,
            grid: {
                drawOnChartArea: false,
                drawBorder: false,
            },
            ticks: {
                color: "#ffffff",
                font: {
                    size: 14,
                    family: 'Roboto Slab',
                },
            },
        },
        x: {
            display: true,
            grid: {
                drawOnChartArea: false,
                drawBorder: false,
            },
            ticks: {
                color: "#ffffff",
                font: {
                    size: 14,
                    family: 'Roboto Slab',
                },
            },
        },
    }
}