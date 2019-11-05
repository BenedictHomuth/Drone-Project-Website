var ctx = document.getElementById('myChart').getContext('2d');
var arr = [];
var arrLabel = [];

createArr = function(){
    for(var i = 0; i < 6; i++){
        arr[i] = Math.random();
        //console.log(arr[i]);
    }
}
createArrLabel = function(){
    for(var i = 0; i < 6; i++){
        arrLabel[i] = '#' + (Math.random().toString(16) + "000000").substring(2,8);
        //console.log(arr[i]);
    }
}

createChart = function(){
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
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
            responsive: true
        }
    });
}

createArr();
createArrLabel();
createChart();
