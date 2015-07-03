var WIDTH = 250, HEIGHT = 180;

var ROW_HEIGHT = 15, LABEL_WIDTH = 50, MARGIN_TOP = 25;

var sizeFn = absoluteSize;

var entries = null;

var buttons = d3.select("#canvas-svg11").append("div").style("margin-bottom", "10px");
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
var svg = d3.select("#canvas-svg11").append("svg").attr({
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

svg.append("text").text("26").attr({
    x: LABEL_WIDTH +40,
    y: MARGIN_TOP + 12,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("244").attr({
    x: WIDTH - 33 ,
    y: MARGIN_TOP + 12,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("text").text("元").attr({
    x: LABEL_WIDTH - 5 ,
    y: MARGIN_TOP + 12,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("元").attr({
    x: WIDTH  ,
    y: MARGIN_TOP + 12,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("text").text("23").attr({
    x: LABEL_WIDTH +40,
    y: MARGIN_TOP + 27,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("113").attr({
    x: WIDTH - 85 ,
    y: MARGIN_TOP + 27,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("text").text("宋").attr({
    x: LABEL_WIDTH -5,
    y: MARGIN_TOP + 27,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("宋").attr({
    x: WIDTH ,
    y: MARGIN_TOP + 27,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("text").text("18").attr({
    x: LABEL_WIDTH +40,
    y: MARGIN_TOP + 42,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("103").attr({
    x: WIDTH - 90 ,
    y: MARGIN_TOP + 42,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("text").text("楼兰").attr({
    x: LABEL_WIDTH -10,
    y: MARGIN_TOP + 42,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("GLE").attr({
    x: WIDTH-13 ,
    y: MARGIN_TOP + 42,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("text").text("17").attr({
    x: LABEL_WIDTH +40,
    y: MARGIN_TOP + 57,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("85").attr({
    x: WIDTH - 95 ,
    y: MARGIN_TOP + 57,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("text").text("NSX").attr({
    x: LABEL_WIDTH -10,
    y: MARGIN_TOP + 57,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("艾瑞泽3").attr({
    x: WIDTH - 30 ,
    y: MARGIN_TOP + 57,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("text").text("16").attr({
    x: LABEL_WIDTH +40,
    y: MARGIN_TOP + 72,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("82").attr({
    x: WIDTH - 98 ,
    y: MARGIN_TOP + 72,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("text").text("GLE").attr({
    x: LABEL_WIDTH -10,
    y: MARGIN_TOP + 72,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("Q7 e-tron").attr({
    x: WIDTH - 38 ,
    y: MARGIN_TOP + 72,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("text").text("15").attr({
    x: LABEL_WIDTH +40,
    y: MARGIN_TOP + 87,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("76").attr({
    x: WIDTH - 100 ,
    y: MARGIN_TOP + 87,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("text").text("Q70L").attr({
    x: LABEL_WIDTH -10,
    y: MARGIN_TOP + 87,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("GLC coupe").attr({
    x: WIDTH - 48 ,
    y: MARGIN_TOP + 87,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("text").text("15").attr({
    x: LABEL_WIDTH +40,
    y: MARGIN_TOP + 102,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("70").attr({
    x: WIDTH - 103 ,
    y: MARGIN_TOP + 102,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("text").text("GLC coupe").attr({
    x: LABEL_WIDTH -30,
    y: MARGIN_TOP + 102,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("全新一代索纳塔").attr({
    x: WIDTH - 70 ,
    y: MARGIN_TOP + 102,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("text").text("13").attr({
    x: LABEL_WIDTH +40,
    y: MARGIN_TOP + 117,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("70").attr({
    x: WIDTH - 103 ,
    y: MARGIN_TOP + 117,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("text").text("Q80 Inspiration").attr({
    x: LABEL_WIDTH -45,
    y: MARGIN_TOP + 117,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("卡罗拉混动版").attr({
    x: WIDTH - 60 ,
    y: MARGIN_TOP + 117,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("text").text("13").attr({
    x: LABEL_WIDTH +40,
    y: MARGIN_TOP + 132,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("65").attr({
    x: WIDTH - 105 ,
    y: MARGIN_TOP + 132,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("text").text("Q7 e-tron").attr({
    x: LABEL_WIDTH -25,
    y: MARGIN_TOP + 132,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("楼兰").attr({
    x: WIDTH -10 ,
    y: MARGIN_TOP + 132,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("text").text("10").attr({
    x: LABEL_WIDTH +40,
    y: MARGIN_TOP + 147,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("62").attr({
    x: WIDTH - 108 ,
    y: MARGIN_TOP + 147,
    fill: "rgb(141,194,31)",
    class:"p4-content"
});

svg.append("text").text("C COUPE GTE").attr({
    x: LABEL_WIDTH -45,
    y: MARGIN_TOP + 147,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("iEV5").attr({
    x: WIDTH - 13 ,
    y: MARGIN_TOP + 147,
    fill: "rgb(141,194,31)",
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

d3.csv("data/tornado3.csv", function(data){
    drawD3Document(data);
});

function render() {
    var row = svg.selectAll("g.row").data(entries);
    row.enter().append("g").classed("row", true).attr({
        transform: function(d, i) {
            return "translate(" + (LABEL_WIDTH + (WIDTH - LABEL_WIDTH) / 3) + "," + (MARGIN_TOP + i * ROW_HEIGHT) + ")";
        }
    }).call(function(row) {
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