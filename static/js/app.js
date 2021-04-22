// Some of the code here comes from office hours with Dom.

// console.log('app.js loaded');

// draw bar graphs
function DrawBargraph(sampleId) {
    // console.log(`DrawBargraph(${sampleId})`);

    d3.json('data/samples.json').then(data => {

        var samples = data.samples;
        var resultArray = samples.filter(s => s.id == sampleId);
        var result = resultArray[0]

        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;

        yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();

        var barData = {
            x: sample_values.slice(0, 10).reverse(),
            y: yticks,
            type: 'bar',
            text: otu_labels.slice(0, 10).reverse(),
            orientation: 'h'
        }

        var barArray = [barData]

        var barLayout = {
            title: `Top 10 Bacteria Cultures Found (Subject ${sampleId})`,
            margin: {t: 30, l: 150}
        }

        Plotly.newPlot('bar', barArray, barLayout)

    });
}

function DrawBubblechart(sampleId) {
    // console.log(`DrawBubblechart(${sampleId})`);

    d3.json('data/samples.json').then(data => {

        var samples = data.samples;
        var resultArray = samples.filter(s => s.id == sampleId);
        var result = resultArray[0]

        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;

        var bubbleData = {
            x: otu_ids.slice(0, 500),
            y: sample_values.slice(0, 50),
            mode: 'markers',
            marker: {
                size: sample_values,
                color: otu_ids
                },
            text: otu_labels.slice(0, 10)
        }

        var barArray = [bubbleData]

        var barLayout = {
            margin: {t: 30, l: 50},
            xaxis: {
                title: {
                text: 'OTU ID',
                font: {
                    // family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f'
                }
                },
            },
            yaxis: {
                title: {
                text: 'Sample Value',
                font: {
                    // family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f'
                }
                }
            }
        }

    Plotly.newPlot('bubble', barArray, barLayout)

    });
    
}

function ShowMetadata(sampleId) {
    console.log(`ShowMetadata(${sampleId})`);


        
}


// make function for event handler
function optionChanged(newSampleId) {
    console.log(`User selected ${newSampleId}`);

    DrawBargraph(newSampleId);
    DrawBubblechart(newSampleId);
    ShowMetadata(newSampleId);
}


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

        var id = sampleNames[0];

        DrawBargraph(id);
        DrawBubblechart(id);
        ShowMetadata(id);

    });

    // Update bar graph
    // Update bubble chart
    // Update demographic information

}

InitDashboard();