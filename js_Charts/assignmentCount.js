var ctx = document.getElementById('assignmentCount').getContext('2d');
var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, "#80b6f4");
gradientStroke.addColorStop(1, "#f49080");

var cinematicCount = [3,2,1,4,5,2];
var maintenanceFlights = [7,9,8,10,4,5];
var labalArr = ['cinematic Flight', 'maintanance flight'];


createChart = function(){
    var flightHours = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'cinematic flight',
                borderColor: "rgba(65,105,225,0.4)",
                data: cinematicCount,
                backgroundColor: [       
                    'rgba(153, 102, 255, 0.3)',
                ],
                borderWidth: 2.75
            }]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            tooltips:{
                enabled: true
            }
        }
    });
}

createArr();
createChart();
