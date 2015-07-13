var WIDTH = 250, HEIGHT = 180;

var ROW_HEIGHT = 15, LABEL_WIDTH = 50, MARGIN_TOP = 25;

var sizeFn = absoluteSize;

var entries = null;

var duration = 500;

var buttons = d3.select("#canvas-svg2").append("div").style("margin-bottom", "10px");
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
var svg = d3.select("#canvas-svg2").append("svg").attr({
    width: WIDTH + 20,
    height: HEIGHT
});

var maleScale = d3.scale.linear(), femaleScale = d3.scale.linear(), maleAxis = d3.svg.axis().orient("top").tickSize(-HEIGHT, 0, 0).scale(maleScale), femaleAxis = d3.svg.axis().orient("top").tickSize(-HEIGHT, 0, 0).scale(femaleScale);

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP )  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p19-1.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 15)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p19-2.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 30)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p19-3.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 45)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p19-4.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 60)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p19-5.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 75)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p19-6.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 90)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p19-7.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 105)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p19-8.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 120)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p19-9.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 135)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p19-10.png"); 

/*
svg.append("text").text("2").attr({
    x: WIDTH,
    y: MARGIN_TOP + 12,
    fill: "white",
    class:"p4-content",
    "text-anchor": "end"
});
*/
var data = [ // <-A
        {num:1, expense: 733, category: 191,total:924},
        {num:2, expense: 649, category: 147,total:796},
        {num:3, expense: 565, category: 122,total:687},
        {num:4, expense: 552, category: 113,total:665},
        {num:5, expense: 480, category: 170,total:650},
        {num:6, expense: 461, category: 97,total:558},
        {num:7, expense: 430, category: 71,total:501},
        {num:8, expense: 402, category: 96,total:498},
        {num:9, expense: 417, category: 45,total:462},
        {num:10, expense: 357, category: 40,total:397}
    ];

function render(data, category) {
        var svg2 = d3.select("#canvas-svg2")
        svg2.append("div").attr("class", "p19wrapper");
        var div = d3.select("div.p19wrapper").selectAll("div.p19hbar") // <-B
                .data(data)
                .enter()
                .append("div")
                    .attr("class", "p19-chart")
                    .style("width", "0px")
                .append("div")
                    .attr("class", "p19hbar")
                    .style("width", "0px");
        d3.select("div.p19wrapper").selectAll("div.p19-chart")
            .append("span")
            .attr("class","text-right");
        div.append("span")
            .attr("class","p19number");
        div.append("span")
            .attr("class","p19left");
        div.append("span")
            .attr("class","p19right-2");
        d3.select("#canvas-svg2").selectAll("div.p19hbar") // <-C
                .data(data)
            .exit().remove();

        var greed_barchart =d3.select("#canvas-svg2").selectAll("div.p19-chart") // <-D
                .data(data)
            .attr("class", "p19-chart")
            greed_barchart.transition().duration(duration)
                .style("width", function (d) { 
                    return barWidth2(d) * 0.2 + "px"; 
                });

        my_data = d3.select("#canvas-svg2").selectAll("div.p19hbar") // <-D
                .data(data)
            my_data.transition().duration(duration)
                .style("width", function (d) { 
                    return barWidth(d) * 0.2 + "px"; 
                })
            my_data.select("span.p19number")
                .text(function (d) {
                    return d.num;
                });
            my_data.select("span.p19left")
                .text(function (d) {
                    return d.category;
                });
            d3.select("div.p19wrapper").selectAll("div.p19-chart")
                .select("span.text-right")
                .text(function (d) {
                    return d.expense;
                });
            my_data.select("span.p19right-2")
                .text(function (d) {
                    return d.total;
                });
    }
    function barWidth(d) {
        return d.category;
    }
    function barWidth2(d) {
        return d.total;
    }
    render(data);



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