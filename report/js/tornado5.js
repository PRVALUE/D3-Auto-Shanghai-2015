var WIDTH = 250, HEIGHT = 220;

var ROW_HEIGHT = 15, LABEL_WIDTH = 50, MARGIN_TOP = 25;

var sizeFn = absoluteSize;

var entries = null;

var buttons = d3.select("#canvas-svg5").append("div").style("margin-bottom", "10px");
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
var svg = d3.select("#canvas-svg5").append("svg").attr({
    width: WIDTH + 20,
    height: HEIGHT
});

var maleScale = d3.scale.linear(), femaleScale = d3.scale.linear(), maleAxis = d3.svg.axis().orient("top").tickSize(-HEIGHT, 0, 0).scale(maleScale), femaleAxis = d3.svg.axis().orient("top").tickSize(-HEIGHT, 0, 0).scale(femaleScale);

svg.append("text").text("车型").attr({
    x: LABEL_WIDTH ,
    y: MARGIN_TOP -5,
    fill: "rgb(203,47,43)",
    class:"p4-content"
});

svg.append("text").text("微博提及频次").attr({
    x: LABEL_WIDTH + 50,
    y: MARGIN_TOP -5,
    fill: "rgb(242,150,0)",
    class:"p4-content"
});

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP )  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p19-6.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 15)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p23-2.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 30)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p19-6.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 45)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p23-2.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 60)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p19-10.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 75)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p23-6.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 90)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p23-7.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 105)  
    .attr("width",16.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p23-8.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 120)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p23-9.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 135)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p19-3.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 150)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p23-11.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 165)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p23-12.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 180)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p19-6.png"); 

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
        {num:1, expense: 43, category: "GT",total:50},
        {num:2, expense: 26, category: "元",total:50},
        {num:3, expense: 25, category: "福克斯",total:50},
        {num:4, expense: 23, category: "宋",total:50},
        {num:5, expense: 21, category: "H7",total:50},
        {num:6, expense: 18, category: "楼兰",total:50},
        {num:7, expense: 18, category: "大陆",total:50},
        {num:8, expense: 17, category: "α5概念车",total:50},
        {num:9, expense: 17, category: "NSX",total:50},
        {num:10, expense: 16, category: "GLE",total:50},
        {num:10, expense: 16, category: "XC90",total:50},
        {num:10, expense: 16, category: "ES",total:50},
        {num:10, expense: 16, category: "金牛座",total:50}
    ];

function render(data, category) {
        var svg5 = d3.select("#canvas-svg5")
        svg5.append("div").attr("class", "p23wrapper");
        var div = d3.select("div.p23wrapper").selectAll("div.p19hbar") // <-B
                .data(data)
                .enter()
                .append("div")
                    .attr("class", "p23-chart")
                .append("div")
                    .attr("class", "p19hbar");
        d3.select("div.p23wrapper").selectAll("div.p23-chart")
            .append("span")
            .attr("class","text-right");
        div.append("span")
            .attr("class","p19number");
        div.append("span")
            .attr("class","p19left");
        d3.select("#canvas-svg5").selectAll("div.p19hbar") // <-C
                .data(data)
            .exit().remove();

        d3.select("#canvas-svg5").selectAll("div.p23-chart") // <-D
                .data(data)
            .attr("class", "p23-chart")
            .style("width", function (d) {
                return (d.expense * 4 +50) + "px";}
            );

        my_data = d3.select("#canvas-svg5").selectAll("div.p19hbar") // <-D
                .data(data)
            .attr("class", "p19hbar")
            .style("width", function (d) {
            //    return (d.category * 0.2) + "px";}
                return (d.total) + "px";}
            );
            my_data.select("span.p19number")
                .text(function (d) {
                    return d.num;
                });
            my_data.select("span.p19left")
                .text(function (d) {
                    return d.category;
                });
            d3.select("div.p23wrapper").selectAll("div.p23-chart")
                .select("span.text-right")
                .text(function (d) {
                    return d.expense;
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