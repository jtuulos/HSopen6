google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = _(countries).chain().map(function(country) {
        var education_ratio = country.education_ratio["2009"];
        if (education_ratio > 0) {
            return [
                country.name,
                education_ratio
            ];
        }
    }).compact().value();
    data.unshift(["Country", "Education ratio"]);

    var dataTable = google.visualization.arrayToDataTable(data);

    var options = {
        datalessRegionColor: "#ddd",
        colorAxis: {
            values: [50, 100, 110],
            colors: ['#00f', '#888', '#f00']
        }
    };

    var chart = new google.visualization.GeoChart(document.getElementById('map_container'));
    chart.draw(dataTable, options);
};
