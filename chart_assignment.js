let canvas = document.querySelector('#bridges-chart')
let context = canvas.getContext('2d')



// I copies this from the other chart. makes a new  bar chart
let chart = new Chart(context, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'span',
            data:[],
            backgroundColor: []
        }]
    }, options: {
        scales: {
            yAxes: [{
                ticks:{
                    beginAtZero: true
                }
            }]
        }
    }


})

//  colors for the background of bars, I only added 4 colors to makes sure the program would repeat colors
let chartColors = ['red', 'blue', 'green', 'yellow',]



// copied from map program
let bridges = [
    {'name':'Verrazano-Narrows Bridge', 'cities': 'New York, NY', 'span': '1298.4','coordinates': [40.6066, -74.0447]},
    {'name': 'Golden Gate Bridge','cities':'San Francisco and Marin, CA', 'span': '1280.2','coordinates': [37.8199, -122.4783]},
    {'name': 'Mackinac Bridge', 'cities':'Mackinaw and St Ignace, MI','span':'1158.0', 'coordinates': [45.8174, -84.7278]},
    {'name': 'George Washington Bridge', 'cities':	'New York, NY and New Jersey, NJ', 'span': '1067.0','coordinates':[40.8517, -73.9527]},
    {'name': 'Tacoma Narrows Bridge', 'cities':	'Tacoma and Kitsap, WA', 'span': '853.44','coordinates':[47.2690, -122.5517]}
    ]
    
    // adds bridges names and spans to correct parts of chart
    bridges.forEach(function(bridge){
        names = bridge.name
        chart.data.labels.push(names)
        bridges = bridge.span
        chart.data.datasets[0].data.push(bridges)
        // loops through colors and changes background color of bars, and will repeat color pattern
        chartColors.forEach(function(color){
        chart.data.datasets[0].backgroundColor.push(color)
        chart.update()
        })
    
    })

    
