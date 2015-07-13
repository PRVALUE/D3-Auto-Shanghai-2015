var WIDTH = 250, HEIGHT = 200;

var ROW_HEIGHT = 15, LABEL_WIDTH = 50, MARGIN_TOP = 25;

var sizeFn = absoluteSize;

var entries = null;

var duration = 500;

var buttons = d3.select("#canvas-svg7").append("div").style("margin-bottom", "10px");
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
var svg = d3.select("#canvas-svg7").append("svg").attr({
    width: WIDTH + 20,
    height: HEIGHT
});

var maleScale = d3.scale.linear(), femaleScale = d3.scale.linear(), maleAxis = d3.svg.axis().orient("top").tickSize(-HEIGHT, 0, 0).scale(maleScale), femaleAxis = d3.svg.axis().orient("top").tickSize(-HEIGHT, 0, 0).scale(femaleScale);

svg.append("text").text("车型").attr({
    x: LABEL_WIDTH ,
    y: MARGIN_TOP -5,
    fill: "rgb(3,110,183)",
    class:"p4-content"
});

svg.append("text").text("提及总频次").attr({
    x: LABEL_WIDTH + 50,
    y: MARGIN_TOP -5,
    fill: "rgb(0,149,206)",
    class:"p4-content"
});

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP )  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p24-12.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 15)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p24-13.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 30)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p24-14.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 45)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p24-15.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 60)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p24-16.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 75)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p24-17.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 90)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p24-13.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 105)  
    .attr("width",16.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p24-13.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 120)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p24-18.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 35)  
    .attr("y",MARGIN_TOP + 135)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","http://autoshanghai2015-cdn.prvalue.cn/img/p24-14.png"); 


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
        {num:1, expense: 365, category: "全新SUV",total:60},
        {num:2, expense: 339, category: "福克斯",total:60},
        {num:3, expense: 270, category: "元",total:60},
        {num:4, expense: 259, category: "观致2SUV",total:60},
        {num:5, expense: 247, category: "东风1号",total:60},
        {num:6, expense: 181, category: "领航员",total:60},
        {num:7, expense: 180, category: "金牛座",total:60},
        {num:8, expense: 157, category: "GT",total:60},
        {num:9, expense: 150, category: "博瑞",total:60},
        {num:10, expense: 136, category: "宋",total:60}
    ];

function render(data, category) {
        var svg7 = d3.select("#canvas-svg7")
        svg7.append("div").attr("class", "p24-2wrapper");
        var div = d3.select("div.p24-2wrapper").selectAll("div.p24-2hbar") // <-B
                .data(data)
                .enter()
                .append("div")
                    .attr("class", "p24-2chart")
                    .style("width", "0px")
                .append("div")
                    .attr("class", "p24-2hbar")
                    .style("width", "0px");
        d3.select("div.p24-2wrapper").selectAll("div.p24-2chart")
            .append("span")
            .attr("class","text-right");
        div.append("span")
            .attr("class","p24-2number");
        div.append("span")
            .attr("class","p19left");
        d3.select("#canvas-svg7").selectAll("div.p24-2hbar") // <-C
                .data(data)
            .exit().remove();

        var greed_barchart = d3.select("#canvas-svg7").selectAll("div.p24-2chart") // <-D
                .data(data)
            .attr("class", "p24-2chart")
            greed_barchart.transition().duration(duration)
                .style("width", function (d) { 
                    return (barWidth2(d) * 0.4+ 60) + "px"; 
                });

        my_data = d3.select("#canvas-svg7").selectAll("div.p24-2hbar") // <-D
                .data(data)
            .attr("class", "p24-2hbar")
            my_data.transition().duration(duration)
                .style("width", function (d) { 
                    return barWidth(d) + "px"; 
                })
            my_data.select("span.p24-2number")
                .text(function (d) {
                    return d.num;
                });
            my_data.select("span.p19left")
                .text(function (d) {
                    return d.category;
                });
            d3.select("div.p24-2wrapper").selectAll("div.p24-2chart")
                .select("span.text-right")
                .text(function (d) {
                    return d.expense;
                });
    }
    function barWidth(d) {
        return d.total;
    }
    function barWidth2(d) {
        return d.expense;
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