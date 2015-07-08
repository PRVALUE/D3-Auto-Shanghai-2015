var WIDTH = 250, HEIGHT = 180;

var ROW_HEIGHT = 15, LABEL_WIDTH = 50, MARGIN_TOP = 25;

var sizeFn = absoluteSize;

var entries = null;

var buttons = d3.select("#canvas-svg4").append("div").style("margin-bottom", "10px");
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
var svg = d3.select("#canvas-svg4").append("svg").attr({
    width: WIDTH + 20,
    height: HEIGHT
});

var maleScale = d3.scale.linear(), femaleScale = d3.scale.linear(), maleAxis = d3.svg.axis().orient("top").tickSize(-HEIGHT, 0, 0).scale(maleScale), femaleAxis = d3.svg.axis().orient("top").tickSize(-HEIGHT, 0, 0).scale(femaleScale);



svg.append("text").text("福克斯")
    .attr("x",LABEL_WIDTH - 30)  
    .attr("y",MARGIN_TOP + 10)  
    .attr("class","p4-content")  
    .attr("fill","rgb(203,47,43)"); 

svg.append("text").text("东风1号")
    .attr("x",LABEL_WIDTH - 33)  
    .attr("y",MARGIN_TOP + 25)  
    .attr("class","p4-content")  
    .attr("fill","rgb(203,47,43)"); 

svg.append("text").text("全新SUV")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 40)  
    .attr("class","p4-content")  
    .attr("fill","rgb(203,47,43)"); 

svg.append("text").text("H6")
    .attr("x",LABEL_WIDTH - 20)  
    .attr("y",MARGIN_TOP + 55)  
    .attr("class","p4-content")  
    .attr("fill","rgb(203,47,43)"); 

svg.append("text").text("领航员")
    .attr("x",LABEL_WIDTH - 28)  
    .attr("y",MARGIN_TOP + 70)  
    .attr("class","p4-content")  
    .attr("fill","rgb(203,47,43)");  

svg.append("text").text("观致2SUV")
    .attr("x",LABEL_WIDTH - 37)  
    .attr("y",MARGIN_TOP + 85)  
    .attr("class","p4-content")  
    .attr("fill","rgb(203,47,43)"); 

svg.append("text").text("GT")
    .attr("x",LABEL_WIDTH - 20)  
    .attr("y",MARGIN_TOP + 100)  
    .attr("class","p4-content")  
    .attr("fill","rgb(203,47,43)"); 

svg.append("text").text("H8")
    .attr("x",LABEL_WIDTH - 20)  
    .attr("y",MARGIN_TOP + 115)  
    .attr("class","p4-content")  
    .attr("fill","rgb(203,47,43)"); 

svg.append("text").text("金牛座")
    .attr("x",LABEL_WIDTH - 28)  
    .attr("y",MARGIN_TOP + 130)  
    .attr("class","p4-content")  
    .attr("fill","rgb(203,47,43)"); 

svg.append("text").text("元")
    .attr("x",LABEL_WIDTH - 17)  
    .attr("y",MARGIN_TOP + 145)  
    .attr("class","p4-content")  
    .attr("fill","rgb(203,47,43)"); 

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
        {num:1, expense: 1266, category: 52,total:1318},
        {num:2, expense: 1303, category: 12,total:1315},
        {num:3, expense: 1159, category: 5,total:1164},
        {num:4, expense: 993, category: 157,total:1150},
        {num:5, expense: 1054, category: 3,total:1057},
        {num:6, expense: 1002, category: 12,total:1014},
        {num:7, expense: 741, category: 136,total:877},
        {num:8, expense: 745, category: 119,total:864},
        {num:9, expense: 798, category: 30,total:828},
        {num:10, expense: 720, category: 40,total:760}
    ];

function render(data, category) {
        var svg4 = d3.select("#canvas-svg4")
        svg4.append("div").attr("class", "p19wrapper");
        var div = d3.select("div.p19wrapper").selectAll("div.p19hbar") // <-B
                .data(data)
                .enter()
                .append("div")
                    .attr("class", "p21-chart")
                .append("div")
                    .attr("class", "p19hbar");
        d3.select("div.p19wrapper").selectAll("div.p21-chart")
            .append("span")
            .attr("class","text-right");
        div.append("span")
            .attr("class","p19number");
        div.append("span")
            .attr("class","p21left");
        div.append("span")
            .attr("class","p21right-2");
        d3.select("#canvas-svg4").selectAll("div.p19hbar") // <-C
                .data(data)
            .exit().remove();

        d3.select("#canvas-svg4").selectAll("div.p21-chart") // <-D
                .data(data)
            .attr("class", "p21-chart")
            .style("width", function (d) {
                return (d.total * 0.11) + "px";}
            );

        my_data = d3.select("#canvas-svg4").selectAll("div.p19hbar") // <-D
                .data(data)
            .attr("class", "p19hbar")
            .style("width", function (d) {
                return (d.category * 0.11) + "px";}
            );
            my_data.select("span.p19number")
                .text(function (d) {
                    return d.num;
                });
            my_data.select("span.p21left")
                .text(function (d) {
                    return d.category;
                });
            d3.select("div.p19wrapper").selectAll("div.p21-chart")
                .select("span.text-right")
                .text(function (d) {
                    return d.expense;
                });
            my_data.select("span.p21right-2")
                .text(function (d) {
                    return d.total;
                });
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