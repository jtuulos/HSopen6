google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = _(countries).chain().map(function(country) {
        var gender_equality = country.gender_equality["2011"];
        if (gender_equality > 0) {
            return [country.name, gender_equality];
        }
    }).compact().value();
    data.unshift(["Country", "Gender equality rating"]);

    var dataTable = google.visualization.arrayToDataTable(data);

    var options = {
        datalessRegionColor: "#ddd",
        colorAxis: {
            minValue: 1,
            maxValue: 6,
            colors: ['#f00', '#ff0']
        },
        // https://developers.google.com/chart/interactive/docs/gallery/geochart#Continent_Hierarchy
        region: "002" // Africa
    };

    var chart = new google.visualization.GeoChart(document.getElementById('map_container'));
    chart.draw(dataTable, options);
};
