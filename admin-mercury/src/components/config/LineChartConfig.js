export default {
    lastYear: {
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
                data: [320, 200, 600, 150, 600, 800, 320, 211, 260, 430],
                borderColor: '#3e95cd',
                fill: false
            }
        ]
    },
    thisYear: {
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
                data: [850, 300, 400, 280, 211, 400, 500, 150, 660, 450],
                borderColor: '#3e95cd',
                fill: false
            }
        ]
    },

    options: {
        scaleShowLabels: false,
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