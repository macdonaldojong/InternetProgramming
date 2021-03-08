var element = document.getElementById('myChart').getContext('2d');

var chartType = 'line'; // The type of chart we want to create

// The data for our dataset
var chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45]
    }]
};

// Configuration options go here
var chartOptions = {
        layout: {
            padding: {
                left: 100,
                right: 150,
                top: 60,
                bottom: 60
            }
        }
    }

// new Chart(x, y) creates a new chart object where:
// x is the object for the html element.
// y is JSON object of type {type,data,options} see below. //type:chartType // data: chartData // options: chartOptions// 

var chart = new Chart(element, {type:chartType, data: chartData, options: chartOptions});