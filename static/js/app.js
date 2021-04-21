// Some of the code here comes from office hours with Dom.

console.log('app.js loaded');

function InitDashboard() {
    console.log('InitDashboard()')

    // Populate the dropdown
    var selector = d3.select('#selDataset');

    d3.json('data/samples.json').then(data => {
        console.log(data);

        var sampleNames = data.names;

        sampleNames.forEach(sampleId => {
            selector.append('option').text(sampleId).
            property('value', sampleId)
        });
    });

    // Update bar graph
    // Update bubble chart
    // Update demographic information

}

InitDashboard();