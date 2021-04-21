// Some of the code here comes from office hours with Dom.

console.log('app.js loaded');

function InitDashboard() {
    console.log('InitDashboard()')

    // Populate the dropdown
    var selector = d3.select('#selDataset');

    d3.json('data/samples.json').then(function(data) {
        console.log(data);
    });

    // Update bar graph
    // Update bubble chart
    // Update demographic information

}

InitDashboard();