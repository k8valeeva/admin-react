export default {
    data: {
        labels: [
            'JAN',
            'FEB',
            'MAR',
            'APR',
            'MAY',
            'JUN',
            'JUL',
            'AUG',
            'SEP',
            'OCT'
        ],
        datasets: [
            {
                data: [500, 211, 450, 300, 750, 400, 460, 200, 311, 100],
                borderColor: '#3e95cd',
                fill: false
            }
        ]
    },
    options: {
        legend: {
            display: false
        },
        elements: { point: { radius: 0 } },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        color: '#e1e2e5'
                    },
                    ticks: {
                        display: false
                    }
                }
            ],
            yAxes: [
                {
                    gridLines: {
                        color: '#e1e2e5'
                    },

                    ticks: {
                        maxTicksLimit: 6,
                        fontColor: '#7d889e'
                    }
                }
            ]
        }
    }
};