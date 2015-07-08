var WIDTH = 250, HEIGHT = 200;

var ROW_HEIGHT = 15, LABEL_WIDTH = 50, MARGIN_TOP = 25;

var sizeFn = absoluteSize;

var entries = null;

var buttons = d3.select("#canvas-svg9").append("div").style("margin-bottom", "10px");
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
var svg = d3.select("#canvas-svg9").append("svg").attr({
    width: WIDTH + 20,
    height: HEIGHT
});

var maleScale = d3.scale.linear(), femaleScale = d3.scale.linear(), maleAxis = d3.svg.axis().orient("top").tickSize(-HEIGHT, 0, 0).scale(maleScale), femaleAxis = d3.svg.axis().orient("top").tickSize(-HEIGHT, 0, 0).scale(femaleScale);

svg.append("text").text("车型").attr({
    x: LABEL_WIDTH ,
    y: MARGIN_TOP -5,
    fill: "rgb(0,146,97)",
    class:"p4-content"
});

svg.append("text").text("微信提及频次").attr({
    x: LABEL_WIDTH + 50,
    y: MARGIN_TOP -5,
    fill: "rgb(144,196,50)",
    class:"p4-content"
});

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP )  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p26-11.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 15)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p26-12.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 30)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p26-13.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 45)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p26-14.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 60)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p26-15.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 75)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p26-16.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 90)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p26-17.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 105)  
    .attr("width",16.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p26-18.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 120)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p24-1.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 135)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p26-20.png"); 

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
        {num:1, expense: 165, category: "大切诺基",total:60},
        {num:2, expense: 149, category: "S60L",total:60},
        {num:3, expense: 138, category: "GT-R nismo",total:60},
        {num:4, expense: 131, category: "萨瓦纳",total:60},
        {num:5, expense: 127, category: "MU-X",total:60},
        {num:6, expense: 115, category: "H6",total:60},
        {num:7, expense: 113, category: "K9",total:60},
        {num:8, expense: 111, category: "CS10",total:60},
        {num:9, expense: 102, category: "CR-V",total:60},
        {num:10, expense: 89, category: "M6",total:60}
    ];

function render(data, category) {
        var svg9 = d3.select("#canvas-svg9")
        svg9.append("div").attr("class", "p24-1wrapper");
        var div = d3.select("div.p24-1wrapper").selectAll("div.p24-1hbar") // <-B
                .data(data)
                .enter()
                .append("div")
                    .attr("class", "p24-1chart")
                .append("div")
                    .attr("class", "p24-1hbar");
        d3.select("div.p24-1wrapper").selectAll("div.p24-1chart")
            .append("span")
            .attr("class","text-right");
        div.append("span")
            .attr("class","p24-1number");
        div.append("span")
            .attr("class","p19left");
        d3.select("#canvas-svg9").selectAll("div.p24-1hbar") // <-C
                .data(data)
            .exit().remove();

        d3.select("#canvas-svg9").selectAll("div.p24-1chart") // <-D
                .data(data)
            .attr("class", "p24-1chart")
            .style("width", function (d) {
                return (d.expense * 0.8 +60) + "px";}
            );

        my_data = d3.select("#canvas-svg9").selectAll("div.p24-1hbar") // <-D
                .data(data)
            .attr("class", "p24-1hbar")
            .style("width", function (d) {
            //    return (d.category * 0.2) + "px";}
                return (d.total) + "px";}
            );
            my_data.select("span.p24-1number")
                .text(function (d) {
                    return d.num;
                });
            my_data.select("span.p19left")
                .text(function (d) {
                    return d.category;
                });
            d3.select("div.p24-1wrapper").selectAll("div.p24-1chart")
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