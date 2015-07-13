var WIDTH = 250, HEIGHT = 180;

var ROW_HEIGHT = 15, LABEL_WIDTH = 50, MARGIN_TOP = 25;

var sizeFn = absoluteSize;

var entries = null;

var duration = 1200;

var buttons = d3.select("#canvas-svg14").append("div").style("margin-bottom", "10px");
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
var svg = d3.select("#canvas-svg14").append("svg").attr({
    width: WIDTH + 20,
    height: HEIGHT
});

var maleScale = d3.scale.linear(), femaleScale = d3.scale.linear(), maleAxis = d3.svg.axis().orient("top").tickSize(-HEIGHT, 0, 0).scale(maleScale), femaleAxis = d3.svg.axis().orient("top").tickSize(-HEIGHT, 0, 0).scale(femaleScale);


svg.append("image")
    .attr("x",LABEL_WIDTH - 40)  
    .attr("y",MARGIN_TOP )  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p19-3.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 40)  
    .attr("y",MARGIN_TOP + 15)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p19-1.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 40)  
    .attr("y",MARGIN_TOP + 30)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p23-2.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 40)  
    .attr("y",MARGIN_TOP + 45)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p30-5.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 40)  
    .attr("y",MARGIN_TOP + 60)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p23-2.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 40)  
    .attr("y",MARGIN_TOP + 75)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p30-5.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 40)  
    .attr("y",MARGIN_TOP + 90)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p19-3.png");  

svg.append("image")
    .attr("x",LABEL_WIDTH - 40)  
    .attr("y",MARGIN_TOP + 105)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p23-6.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 40)  
    .attr("y",MARGIN_TOP + 120)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p23-9.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 40)  
    .attr("y",MARGIN_TOP + 135)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p19-2.png"); 

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
        {num:1, expense: 802, category: 318,total:1120,pp:"GLC coupe"},
        {num:2, expense: 686, category: 434,total:1120,pp:"C COUPE GTE"},
        {num:3, expense: 609, category: 521,total:1120,pp:"元"},
        {num:4, expense: 533, category: 587,total:1120,pp:"Q80 Inspiration"},
        {num:5, expense: 413, category: 707,total:1120,pp:"宋"},
        {num:6, expense: 340, category: 780,total:1120,pp:"Q70L"},
        {num:7, expense: 330, category: 790,total:1120,pp:"GLE"},
        {num:8, expense: 204, category: 916,total:1120,pp:"楼兰"},
        {num:9, expense: 200, category: 920,total:1120,pp:"NSX"},
        {num:10, expense: 198, category: 922,total:1120,pp:"Quartz"}
    ];

function render(data, category) {
        var svg14 = d3.select("#canvas-svg14")
        svg14.append("div").attr("class", "p19wrapper");
        var div = d3.select("div.p19wrapper").selectAll("div.p34hbar") // <-B
                .data(data)
                .enter()
                .append("div")
                    .attr("class", "p34-chart")
                    .style("width", "0px")
                .append("div")
                    .attr("class", "p34hbar")
                    .style("width", "0px");
        d3.select("div.p19wrapper").selectAll("div.p34-chart")
            .append("span")
            .attr("class","text-right");
        div.append("span")
            .attr("class","p19number");
        div.append("span")
            .attr("class","p35left");
        div.append("span")
            .attr("class","p21right-2");
        d3.select("#canvas-svg14").selectAll("div.p34hbar") // <-C
                .data(data)
            .exit().remove();

        var greed_barchart = d3.select("#canvas-svg14").selectAll("div.p34-chart") // <-D
                .data(data)
            .attr("class", "p34-chart")
            greed_barchart.transition().duration(duration)
                .style("width", function (d) { 
                    return barWidth2(d) * 0.2 + "px"; 
                });

        my_data = d3.select("#canvas-svg14").selectAll("div.p34hbar") // <-D
                .data(data)
            .attr("class", "p34hbar")
            my_data.transition().duration(duration)
                .style("width", function (d) { 
                    return (barWidth(d) * 0.2) + "px"; 
                })
            my_data.select("span.p35left")
                .text(function (d) {
                    return d.pp;
                });
            d3.select("div.p19wrapper").selectAll("div.p34-chart")
                .select("span.text-right")
                .text(function (d) {
                    return d.expense;
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