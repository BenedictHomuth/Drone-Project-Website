var ctx = document.getElementById('flightHours').getContext('2d');
var arr = [];

createArr = function(){
    for(var i = 0; i < 6; i++){
        arr[i] = Math.random() *5;
    }
}


createChart = function(){
    var flightHours = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'flight hours per month',
                //data: [12, 19, 3, 5, 2, 3],
                data: arr,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    
                ],
                borderWidth: 2.75
            }]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
        }
    });
}

createArr();
createChart();
