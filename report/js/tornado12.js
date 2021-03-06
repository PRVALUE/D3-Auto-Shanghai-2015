var WIDTH = 250, HEIGHT = 220;

var ROW_HEIGHT = 15, LABEL_WIDTH = 50, MARGIN_TOP = 25;

var sizeFn = absoluteSize;

var entries = null;

var buttons = d3.select("#canvas-svg12").append("div").style("margin-bottom", "10px");
/*
var showCounts = buttons.append("span").attr("class", "btn btn-primary").text("Counts").on("click", function() {
    showPct.classed("btn-primary", false);
    showCounts.classed("btn-primary", true);
    sizeFn = absoluteSize;
    render();
});

var showPct = buttons.append("span").attr("class", "btn").text("Percentage").on("click", function() {
    showPct.classed("btn-primary", true);
    showCounts.classed("btn-primary", false);
    sizeFn = relativeSize;
    render();
});
*/
var svg = d3.select("#canvas-svg12").append("svg").attr({
    width: WIDTH + 20,
    height: HEIGHT
});

var maleScale = d3.scale.linear(), femaleScale = d3.scale.linear(), maleAxis = d3.svg.axis().orient("top").tickSize(-HEIGHT, 0, 0).scale(maleScale), femaleAxis = d3.svg.axis().orient("top").tickSize(-HEIGHT, 0, 0).scale(femaleScale);

svg.append("image")
    .attr("x",LABEL_WIDTH + 40)  
    .attr("y",MARGIN_TOP - 25)  
    .attr("width",25)  
    .attr("height",25)  
    .attr("xlink:href","../img/weibo.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH + 65)  
    .attr("y",MARGIN_TOP - 25)  
    .attr("width",25)  
    .attr("height",25)  
    .attr("xlink:href","../img/weixin.png"); 

svg.append("text").text("49").attr({
    x: LABEL_WIDTH +10,
    y: MARGIN_TOP + 12,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("357").attr({
    x: WIDTH - 25 ,
    y: MARGIN_TOP + 12,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("image")
    .attr("x",LABEL_WIDTH - 10)  
    .attr("y",MARGIN_TOP )  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p30-1.png"); 

svg.append("image")
    .attr("x",WIDTH)  
    .attr("y",MARGIN_TOP )  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p30-1-1.png"); 

svg.append("text").text("45").attr({
    x: LABEL_WIDTH +10,
    y: MARGIN_TOP + 27,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("211").attr({
    x: WIDTH - 25 ,
    y: MARGIN_TOP + 27,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("image")
    .attr("x",LABEL_WIDTH - 10)  
    .attr("y",MARGIN_TOP + 15)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p19-3.png"); 

svg.append("image")
    .attr("x",WIDTH)  
    .attr("y",MARGIN_TOP + 15)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p19-3-1.png"); 

svg.append("text").text("39").attr({
    x: LABEL_WIDTH +10,
    y: MARGIN_TOP + 42,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("173").attr({
    x: WIDTH - 25 ,
    y: MARGIN_TOP + 42,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("image")
    .attr("x",LABEL_WIDTH - 10)  
    .attr("y",MARGIN_TOP + 30)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p30-3.png"); 

svg.append("image")
    .attr("x",WIDTH)  
    .attr("y",MARGIN_TOP + 30)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p19-5-1.png"); 

svg.append("text").text("35").attr({
    x: LABEL_WIDTH +10,
    y: MARGIN_TOP + 57,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("166").attr({
    x: WIDTH - 25 ,
    y: MARGIN_TOP + 57,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("image")
    .attr("x",LABEL_WIDTH - 10)  
    .attr("y",MARGIN_TOP + 45)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p19-5.png"); 

svg.append("image")
    .attr("x",WIDTH)  
    .attr("y",MARGIN_TOP + 45)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p30-4-1.png"); 

svg.append("text").text("31").attr({
    x: LABEL_WIDTH +10,
    y: MARGIN_TOP + 72,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("109").attr({
    x: WIDTH - 25 ,
    y: MARGIN_TOP + 72,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("image")
    .attr("x",LABEL_WIDTH - 10)  
    .attr("y",MARGIN_TOP + 60)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p30-5.png"); 

svg.append("image")
    .attr("x",WIDTH)  
    .attr("y",MARGIN_TOP + 60)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p30-5-1.png"); 

svg.append("text").text("26").attr({
    x: LABEL_WIDTH +10,
    y: MARGIN_TOP + 87,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("81").attr({
    x: WIDTH - 25 ,
    y: MARGIN_TOP + 87,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("image")
    .attr("x",LABEL_WIDTH - 10)  
    .attr("y",MARGIN_TOP + 75)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p23-8.png"); 

svg.append("image")
    .attr("x",WIDTH)  
    .attr("y",MARGIN_TOP + 75)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p30-6-1.png"); 

svg.append("text").text("22").attr({
    x: LABEL_WIDTH +10,
    y: MARGIN_TOP + 102,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("70").attr({
    x: WIDTH - 25 ,
    y: MARGIN_TOP + 102,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("image")
    .attr("x",LABEL_WIDTH - 10)  
    .attr("y",MARGIN_TOP + 90)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p30-7.png"); 

svg.append("image")
    .attr("x",WIDTH)  
    .attr("y",MARGIN_TOP + 90)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p19-7-1.png"); 

svg.append("text").text("19").attr({
    x: LABEL_WIDTH +10,
    y: MARGIN_TOP + 117,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("65").attr({
    x: WIDTH - 25 ,
    y: MARGIN_TOP + 117,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("image")
    .attr("x",LABEL_WIDTH - 10)  
    .attr("y",MARGIN_TOP + 105)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p19-2.png"); 

svg.append("image")
    .attr("x",WIDTH)  
    .attr("y",MARGIN_TOP + 105)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p30-8-1.png"); 

svg.append("text").text("18").attr({
    x: LABEL_WIDTH +10,
    y: MARGIN_TOP + 132,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("62").attr({
    x: WIDTH - 25 ,
    y: MARGIN_TOP + 132,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("image")
    .attr("x",LABEL_WIDTH - 10)  
    .attr("y",MARGIN_TOP + 120)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p30-9.png"); 

svg.append("image")
    .attr("x",WIDTH)  
    .attr("y",MARGIN_TOP + 120)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p30-9-1.png"); 

svg.append("text").text("18").attr({
    x: LABEL_WIDTH +10,
    y: MARGIN_TOP + 147,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("54").attr({
    x: WIDTH - 25 ,
    y: MARGIN_TOP + 147,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("image")
    .attr("x",LABEL_WIDTH - 10)  
    .attr("y",MARGIN_TOP + 135)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p30-10.png"); 

svg.append("image")
    .attr("x",WIDTH)  
    .attr("y",MARGIN_TOP + 135)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p30-10-1.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 10)  
    .attr("y",MARGIN_TOP + 150)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p19-4.png"); 

svg.append("image")
    .attr("x",WIDTH)  
    .attr("y",MARGIN_TOP + 150)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p19-1-1.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 10)  
    .attr("y",MARGIN_TOP + 165)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p30-12.png"); 

svg.append("image")
    .attr("x",WIDTH)  
    .attr("y",MARGIN_TOP + 165)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p30-12-1.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 10)  
    .attr("y",MARGIN_TOP + 180)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p30-13.png"); 

svg.append("text").text("18").attr({
    x: LABEL_WIDTH +10,
    y: MARGIN_TOP + 162,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("53").attr({
    x: WIDTH - 25 ,
    y: MARGIN_TOP + 162,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("text").text("18").attr({
    x: LABEL_WIDTH +10,
    y: MARGIN_TOP + 177,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("44").attr({
    x: WIDTH - 25 ,
    y: MARGIN_TOP + 177,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("text").text("18").attr({
    x: LABEL_WIDTH +10,
    y: MARGIN_TOP + 192,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

/*
svg.append("text").text("2").attr({
    x: WIDTH,
    y: MARGIN_TOP + 12,
    fill: "white",
    class:"p4-content",
    "text-anchor": "end"
});
*/
var COLNAMES = [ "Timestamp", "1 Gender", "2 Age", "3. Usual location (Town/City)", "4 Twitter username", "5 Approximate year and month when you first became interested in data visualisation", "6 The focus of your data visualisation interest?", "7 The extent of your data visualisation interest?" ];
var GENDER = COLNAMES[1], AGE = COLNAMES[2], LOCATION = COLNAMES[3], TWITTER = COLNAMES[4], SINCE = COLNAMES[5], FOCUS = COLNAMES[6], INTEREST = COLNAMES[7];

var drawD3Document = function(data) {
    data = cleanup(data);
    var nest = d3.nest().key(function(d) {
        return d[AGE];
        // year = d[SINCE].split('/')[1]
        // if (!year) return 'N/A'
        // else if(year.length == 2) { year = '20' + year }
        // else if(year.length != 4) { return '?' }
        // return year
    }).rollup(function(d) {
        return d.length;
    }).sortKeys(function(a, b) {
        return d3.ascending(parseInt(a), parseInt(b));
    }).key(function(d) {
        return d[GENDER];
    }).rollup(function(d) {
        return d.length;
    });
    entries = nest.entries(data).map(function(d) {
        output = {
            label: d.key
        };
        for (var i = 0; i < d.values.length; i++) {
            output[d.values[i].key.toLowerCase()] = d.values[i].values;
        }
        output.male = output.male || 0;
        output.female = output.female || 0;
        output.maleRatio = output.male / (output.male + output.female);
        output.femaleRatio = output.female / (output.male + output.female);
        return output;
    });

    render();
};

d3.csv("data/tornado4.csv", function(data){
    drawD3Document(data);
});

function render() {
    var row = svg.selectAll("g.row").data(entries);
    row.enter().append("g").classed("row", true).attr({
        transform: function(d, i) {
            return "translate(" + (LABEL_WIDTH + (WIDTH - LABEL_WIDTH) / 3) + "," + (MARGIN_TOP + i * ROW_HEIGHT) + ")";
        }
    }).call(function(row) {
        row.append("text").attr({
            "dx": 10,
            "class": "label",
            fill: "#333",
            transform: " translate(" + (-(WIDTH - LABEL_WIDTH) / 3 - LABEL_WIDTH) + "," + ROW_HEIGHT + ") scale(.85)"
        });
        row.append("rect").attr({
            "class": "male",
            fill: "rgb(203,47,43)",
            height: ROW_HEIGHT - .5
        });
        row.append("rect").attr({
            "class": "female",
            fill: "rgb(141,194,31)",
            height: ROW_HEIGHT - .5
        });
    }).call(sizeFn, entries);
    row.select(".label").text(function(d) {
        return d.label;
    });
    row.transition().call(sizeFn, entries);
    maleAxisG.transition().call(maleAxis);
    femaleAxisG.transition().call(femaleAxis);
}
/*
function relativeSize(row, entries) {
    femaleScale.domain([ 0, 1 ]).range([ 0, (WIDTH - LABEL_WIDTH) / 2 ]);
    maleScale.domain([ 0, 1 ]).range([ 0, -(WIDTH - LABEL_WIDTH) / 2 ]);
    femaleAxis.ticks(4).tickFormat(function(val) {
        return val * 100 + "%";
    });
    maleAxis.ticks(4).tickFormat(function(val) {
        return val * 100 + "%";
    });
    row.select(".male").attr({
        width: function(d) {
            return maleScale(0) - maleScale(d.maleRatio);
        },
        x: function(d) {
            return maleScale(d.maleRatio);
        }
    });
    row.select(".female").attr({
        width: function(d) {
            return femaleScale(d.femaleRatio) - femaleScale(0);
        },
        x: function(d) {
            return femaleScale(0);
        }
    });
}
*/
function absoluteSize(row, entries) {
    var max = d3.max(entries, function(d) {
        return Math.max(d.female, d.male);
    });
    femaleScale.domain([ 0, max ]).range([ 0, (WIDTH - LABEL_WIDTH) / 2 ]);
    maleScale.domain([ 0, max ]).range([ 0, -(WIDTH - LABEL_WIDTH) / 2 ]);
    femaleAxis.ticks(0).tickFormat(null);
    maleAxis.ticks(0).tickFormat(null);
    row.select(".male").attr({
        width: function(d) {
            return maleScale(0) - maleScale(d.male);
        },
        x: function(d) {
            return maleScale(d.male);
        }
    });
    row.select(".female").attr({
        width: function(d) {
            return femaleScale(d.female) - femaleScale(0);
        },
        x: function(d) {
            return femaleScale(0);
        }
    });
}

function cleanup(data) {
    data = data.filter(function(d) {
        var gender = d[GENDER];
        var age = d[AGE];
        return (gender == "Male" || gender == "Female") && parseInt(age).toString() == age;
    });
    //data.forEach(function(d) {});
    return data;
}