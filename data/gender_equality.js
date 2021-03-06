var gender_equality_fields = [
  "country", "ccode", "2005", "2006", "2007", "2008", "2009", "2010", "2011"
];
var gender_equality_rows = [
  ["Afghanistan","AFG",0,2,2,2,2,2,2],
  ["Albania","ALB",4,4,0,0,0,0,0],
  ["Algeria","DZA",0,0,0,0,0,0,0],
  ["American Samoa","ASM",0,0,0,0,0,0,0],
  ["Andorra","AND",0,0,0,0,0,0,0],
  ["Angola","AGO",3,3,3,3,3.5,3.5,3.5],
  ["Antigua and Barbuda","ATG",0,0,0,0,0,0,0],
  ["Argentina","ARG",0,0,0,0,0,0,0],
  ["Armenia","ARM",4.5,4.5,4.5,4.5,4.5,4.5,4],
  ["Aruba","ABW",0,0,0,0,0,0,0],
  ["Australia","AUS",0,0,0,0,0,0,0],
  ["Austria","AUT",0,0,0,0,0,0,0],
  ["Azerbaijan","AZE",4,4,4,4,4,4,0],
  ["Bahamas, The","BHS",0,0,0,0,0,0,0],
  ["Bahrain","BHR",0,0,0,0,0,0,0],
  ["Bangladesh","BGD",4,4,4,4,4,4,3.5],
  ["Barbados","BRB",0,0,0,0,0,0,0],
  ["Belarus","BLR",0,0,0,0,0,0,0],
  ["Belgium","BEL",0,0,0,0,0,0,0],
  ["Belize","BLZ",0,0,0,0,0,0,0],
  ["Benin","BEN",3,3,3.5,3.5,3.5,3.5,3.5],
  ["Bermuda","BMU",0,0,0,0,0,0,0],
  ["Bhutan","BTN",4.5,4,4,4,4,4,4],
  ["Bolivia","BOL",3.5,4,4,4,4,4,4],
  ["Bosnia and Herzegovina","BIH",4,4.5,4.5,4.5,4.5,4.5,4],
  ["Botswana","BWA",0,0,0,0,0,0,0],
  ["Brazil","BRA",0,0,0,0,0,0,0],
  ["Brunei Darussalam","BRN",0,0,0,0,0,0,0],
  ["Bulgaria","BGR",0,0,0,0,0,0,0],
  ["Burkina Faso","BFA",3.5,3.5,3.5,3.5,3.5,3.5,3.5],
  ["Burundi","BDI",3.5,3.5,4,4,4,4,4],
  ["Cambodia","KHM",3.5,4,4,4,4,4,4],
  ["Cameroon","CMR",3.5,3.5,3,3,3,3,3],
  ["Canada","CAN",0,0,0,0,0,0,0],
  ["Cape Verde","CPV",4.5,4.5,4.5,4.5,4.5,4.5,4.5],
  ["Cayman Islands","CYM",0,0,0,0,0,0,0],
  ["Central African Republic","CAF",2.5,2.5,2.5,2.5,2.5,2.5,2.5],
  ["Chad","TCD",2.5,2.5,2.5,2.5,2.5,2.5,2.5],
  ["Channel Islands","CHI",0,0,0,0,0,0,0],
  ["Chile","CHL",0,0,0,0,0,0,0],
  ["China","CHN",0,0,0,0,0,0,0],
  ["Colombia","COL",0,0,0,0,0,0,0],
  ["Comoros","COM",3,3,3,3,3,3,2.5],
  ["Congo, Dem. Rep.","COD",3,3,3,3,2.5,2.5,2.5],
  ["Congo, Rep.","COG",3,3,3,3,3,3,3],
  ["Costa Rica","CRI",0,0,0,0,0,0,0],
  ["Cote d'Ivoire","CIV",2.5,2.5,2.5,2.5,2.5,2.5,2.5],
  ["Croatia","HRV",0,0,0,0,0,0,0],
  ["Cuba","CUB",0,0,0,0,0,0,0],
  ["Curacao","CUW",0,0,0,0,0,0,0],
  ["Cyprus","CYP",0,0,0,0,0,0,0],
  ["Czech Republic","CZE",0,0,0,0,0,0,0],
  ["Denmark","DNK",0,0,0,0,0,0,0],
  ["Djibouti","DJI",3,3,2.5,2.5,3,3,3],
  ["Dominica","DMA",4.5,4,3.5,3.5,3.5,3,3.5],
  ["Dominican Republic","DOM",0,0,0,0,0,0,0],
  ["Ecuador","ECU",0,0,0,0,0,0,0],
  ["Egypt, Arab Rep.","EGY",0,0,0,0,0,0,0],
  ["El Salvador","SLV",0,0,0,0,0,0,0],
  ["Equatorial Guinea","GNQ",0,0,0,0,0,0,0],
  ["Eritrea","ERI",3.5,3.5,3.5,3.5,3.5,3.5,3.5],
  ["Estonia","EST",0,0,0,0,0,0,0],
  ["Ethiopia","ETH",3,3,3,3,3,3,3],
  ["Faeroe Islands","FRO",0,0,0,0,0,0,0],
  ["Fiji","FJI",0,0,0,0,0,0,0],
  ["Finland","FIN",0,0,0,0,0,0,0],
  ["France","FRA",0,0,0,0,0,0,0],
  ["French Polynesia","PYF",0,0,0,0,0,0,0],
  ["Gabon","GAB",0,0,0,0,0,0,0],
  ["Gambia, The","GMB",3.5,3.5,3.5,3.5,3.5,3.5,3.5],
  ["Georgia","GEO",4.5,4.5,4.5,4.5,4.5,4.5,4.5],
  ["Germany","DEU",0,0,0,0,0,0,0],
  ["Ghana","GHA",4,4,4,4,4,4,4],
  ["Greece","GRC",0,0,0,0,0,0,0],
  ["Greenland","GRL",0,0,0,0,0,0,0],
  ["Grenada","GRD",4.5,5,5,5,4.5,4.5,4],
  ["Guam","GUM",0,0,0,0,0,0,0],
  ["Guatemala","GTM",0,0,0,0,0,0,0],
  ["Guinea","GIN",4,3.5,3.5,3.5,3.5,3.5,3],
  ["Guinea-Bissau","GNB",3,2.5,2.5,2.5,2.5,2.5,2.5],
  ["Guyana","GUY",3.5,4,4,4,4,3.5,3.5],
  ["Haiti","HTI",3,3,3,3,3,3,3],
  ["Honduras","HND",4,4,4,4,4,4,4],
  ["Hong Kong SAR, China","HKG",0,0,0,0,0,0,0],
  ["Hungary","HUN",0,0,0,0,0,0,0],
  ["Iceland","ISL",0,0,0,0,0,0,0],
  ["India","IND",3.5,3.5,3.5,3.5,3.5,3.5,3],
  ["Indonesia","IDN",3.5,3.5,0,0,0,0,0],
  ["Iran, Islamic Rep.","IRN",0,0,0,0,0,0,0],
  ["Iraq","IRQ",0,0,0,0,0,0,0],
  ["Ireland","IRL",0,0,0,0,0,0,0],
  ["Isle of Man","IMN",0,0,0,0,0,0,0],
  ["Israel","ISR",0,0,0,0,0,0,0],
  ["Italy","ITA",0,0,0,0,0,0,0],
  ["Jamaica","JAM",0,0,0,0,0,0,0],
  ["Japan","JPN",0,0,0,0,0,0,0],
  ["Jordan","JOR",0,0,0,0,0,0,0],
  ["Kazakhstan","KAZ",0,0,0,0,0,0,0],
  ["Kenya","KEN",3,3,3,3,3,3.5,3.5],
  ["Kiribati","KIR",3,3,3,2.5,2.5,2.5,2.5],
  ["Korea, Dem. Rep.","PRK",0,0,0,0,0,0,0],
  ["Korea, Rep.","KOR",0,0,0,0,0,0,0],
  ["Kosovo","KSV",0,0,0,0,3.5,3.5,3.5],
  ["Kuwait","KWT",0,0,0,0,0,0,0],
  ["Kyrgyz Republic","KGZ",4,4.5,4.5,4.5,4.5,4.5,4.5],
  ["Lao PDR","LAO",3.5,3.5,3.5,3.5,3.5,3.5,3.5],
  ["Latvia","LVA",0,0,0,0,0,0,0],
  ["Lebanon","LBN",0,0,0,0,0,0,0],
  ["Lesotho","LSO",4,4,4,4,4,4,4],
  ["Liberia","LBR",0,0,0,0,2.5,2.5,3],
  ["Libya","LBY",0,0,0,0,0,0,0],
  ["Liechtenstein","LIE",0,0,0,0,0,0,0],
  ["Lithuania","LTU",0,0,0,0,0,0,0],
  ["Luxembourg","LUX",0,0,0,0,0,0,0],
  ["Macao SAR, China","MAC",0,0,0,0,0,0,0],
  ["Macedonia, FYR","MKD",0,0,0,0,0,0,0],
  ["Madagascar","MDG",3.5,3.5,3.5,3.5,3.5,3.5,3.5],
  ["Malawi","MWI",3.5,3.5,3.5,3.5,3.5,3.5,3.5],
  ["Malaysia","MYS",0,0,0,0,0,0,0],
  ["Maldives","MDV",4,4,4,4,4,4,4],
  ["Mali","MLI",3.5,3.5,3.5,3.5,3.5,3.5,3.5],
  ["Malta","MLT",0,0,0,0,0,0,0],
  ["Marshall Islands","MHL",0,0,0,0,0,0,3],
  ["Mauritania","MRT",3.5,3.5,4,4,4,4,4],
  ["Mauritius","MUS",0,0,0,0,0,0,0],
  ["Mexico","MEX",0,0,0,0,0,0,0],
  ["Micronesia, Fed. Sts.","FSM",0,0,0,0,0,0,2.5],
  ["Moldova","MDA",4.5,5,5,5,5,5,5],
  ["Monaco","MCO",0,0,0,0,0,0,0],
  ["Mongolia","MNG",3.5,3.5,3.5,3.5,3.5,3.5,4],
  ["Montenegro","MNE",0,0,0,0,0,0,0],
  ["Morocco","MAR",0,0,0,0,0,0,0],
  ["Mozambique","MOZ",3.5,3.5,3.5,3.5,3.5,3.5,3.5],
  ["Myanmar","MMR",0,0,0,0,0,0,0],
  ["Namibia","NAM",0,0,0,0,0,0,0],
  ["Nepal","NPL",3,3.5,3.5,3.5,4,4,4],
  ["Netherlands","NLD",0,0,0,0,0,0,0],
  ["New Caledonia","NCL",0,0,0,0,0,0,0],
  ["New Zealand","NZL",0,0,0,0,0,0,0],
  ["Nicaragua","NIC",4,3.5,3.5,3.5,3.5,3.5,4],
  ["Niger","NER",2.5,2.5,2.5,2.5,2.5,2.5,2.5],
  ["Nigeria","NGA",3,3,3,3,3,3,3],
  ["Northern Mariana Islands","MNP",0,0,0,0,0,0,0],
  ["Norway","NOR",0,0,0,0,0,0,0],
  ["Oman","OMN",0,0,0,0,0,0,0],
  ["Pakistan","PAK",2,2,2,2,2,2,2.5],
  ["Palau","PLW",0,0,0,0,0,0,0],
  ["Panama","PAN",0,0,0,0,0,0,0],
  ["Papua New Guinea","PNG",2.5,2.5,2.5,2.5,2.5,2.5,2.5],
  ["Paraguay","PRY",0,0,0,0,0,0,0],
  ["Peru","PER",0,0,0,0,0,0,0],
  ["Philippines","PHL",0,0,0,0,0,0,0],
  ["Poland","POL",0,0,0,0,0,0,0],
  ["Portugal","PRT",0,0,0,0,0,0,0],
  ["Puerto Rico","PRI",0,0,0,0,0,0,0],
  ["Qatar","QAT",0,0,0,0,0,0,0],
  ["Romania","ROU",0,0,0,0,0,0,0],
  ["Russian Federation","RUS",0,0,0,0,0,0,0],
  ["Rwanda","RWA",3.5,3.5,3.5,3.5,3.5,4,4],
  ["Samoa","WSM",4,4,3.5,3.5,3.5,3.5,3.5],
  ["San Marino","SMR",0,0,0,0,0,0,0],
  ["Sao Tome and Principe","STP",3,3,3,3,3,3,3],
  ["Saudi Arabia","SAU",0,0,0,0,0,0,0],
  ["Senegal","SEN",3.5,3.5,3.5,3.5,3.5,3.5,3.5],
  ["Serbia","SRB",4.5,3,0,0,0,0,0],
  ["Seychelles","SYC",0,0,0,0,0,0,0],
  ["Sierra Leone","SLE",3,3,3,3,3,3,3],
  ["Singapore","SGP",0,0,0,0,0,0,0],
  ["Sint Maarten (Dutch part)","SXM",0,0,0,0,0,0,0],
  ["Slovak Republic","SVK",0,0,0,0,0,0,0],
  ["Slovenia","SVN",0,0,0,0,0,0,0],
  ["Solomon Islands","SLB",3,3,3,3,3,3,3],
  ["Somalia","SOM",0,0,0,0,0,0,0],
  ["South Africa","ZAF",0,0,0,0,0,0,0],
  ["South Sudan","SSD",0,0,0,0,0,0,0],
  ["Spain","ESP",0,0,0,0,0,0,0],
  ["Sri Lanka","LKA",4,4,4,4,4,4,4],
  ["St. Kitts and Nevis","KNA",0,0,0,0,0,0,0],
  ["St. Lucia","LCA",4.5,4,3.5,3.5,3.5,3.5,3.5],
  ["St. Martin (French part)","MAF",0,0,0,0,0,0,0],
  ["St. Vincent and the Grenadines","VCT",4.5,4.5,4,4,4,4,4],
  ["Sudan","SDN",2,2,2,2,2,2.5,2.5],
  ["Suriname","SUR",0,0,0,0,0,0,0],
  ["Swaziland","SWZ",0,0,0,0,0,0,0],
  ["Sweden","SWE",0,0,0,0,0,0,0],
  ["Switzerland","CHE",0,0,0,0,0,0,0],
  ["Syrian Arab Republic","SYR",0,0,0,0,0,0,0],
  ["Tajikistan","TJK",3.5,3.5,3.5,4,4,4,4],
  ["Tanzania","TZA",4,4,4,3.5,3.5,3.5,3.5],
  ["Thailand","THA",0,0,0,0,0,0,0],
  ["Timor-Leste","TLS",0,3,3.5,3.5,3.5,3.5,3.5],
  ["Togo","TGO",3,3,3,3,3,3,3],
  ["Tonga","TON",2.5,2.5,2.5,3,3,3,3],
  ["Trinidad and Tobago","TTO",0,0,0,0,0,0,0],
  ["Tunisia","TUN",0,0,0,0,0,0,0],
  ["Turkey","TUR",0,0,0,0,0,0,0],
  ["Turkmenistan","TKM",0,0,0,0,0,0,0],
  ["Turks and Caicos Islands","TCA",0,0,0,0,0,0,0],
  ["Tuvalu","TUV",0,0,0,0,0,0,0],
  ["Uganda","UGA",3.5,3.5,3.5,3.5,3.5,3.5,3.5],
  ["Ukraine","UKR",0,0,0,0,0,0,0],
  ["United Arab Emirates","ARE",0,0,0,0,0,0,0],
  ["United Kingdom","GBR",0,0,0,0,0,0,0],
  ["United States","USA",0,0,0,0,0,0,0],
  ["Uruguay","URY",0,0,0,0,0,0,0],
  ["Uzbekistan","UZB",3.5,3.5,4,4,4,4,4],
  ["Vanuatu","VUT",3,3,3.5,3.5,3.5,3.5,3.5],
  ["Venezuela, RB","VEN",0,0,0,0,0,0,0],
  ["Vietnam","VNM",4.5,4.5,4.5,4.5,4.5,4.5,4.5],
  ["Virgin Islands (U.S.)","VIR",0,0,0,0,0,0,0],
  ["West Bank and Gaza","PSE",0,0,0,0,0,0,0],
  ["Yemen, Rep.","YEM",2.5,2.5,2,2,2,2,2],
  ["Zambia","ZMB",3.5,3.5,3.5,3.5,3.5,3.5,3],
  ["Zimbabwe","ZWE",2.5,2.5,2.5,2.5,2.5,2.5,3]
];