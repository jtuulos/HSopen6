// Gender equality ranking
var countries = _(gender_equality_rows).map(function(row) {
    var country = {
        "name": row[0],
        "code": row[1],
        "gender_equality": {}
    };
    for (var i = 0; i < 7; i++) {
        country.gender_equality[i + 2005] = row[i + 2];
    }
    return country;
});

// Augment with ODA recipient data
_(countries).each(function(country) {
    var oda_rows = _(oda_recipient_rows).filter(function(row) {
        return row[0] == country.name;
    });

    if (!_.isEmpty(oda_rows)) {
        country.oda_amount = {};
        _(oda_rows).each(function(row) {
            country.oda_amount[row[1]] = row[2];
        });
    }
});
