var WIDTH = 250, HEIGHT = 180;

var ROW_HEIGHT = 15, LABEL_WIDTH = 50, MARGIN_TOP = 25;

var sizeFn = absoluteSize;

var entries = null;

var buttons = d3.select("#canvas-svg13").append("div").style("margin-bottom", "10px");
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
var svg = d3.select("#canvas-svg13").append("svg").attr({
    width: WIDTH + 20,
    height: HEIGHT
});

var maleScale = d3.scale.linear(), femaleScale = d3.scale.linear(), maleAxis = d3.svg.axis().orient("top").tickSize(-HEIGHT, 0, 0).scale(maleScale), femaleAxis = d3.svg.axis().orient("top").tickSize(-HEIGHT, 0, 0).scale(femaleScale);


svg.append("image")
    .attr("x",LABEL_WIDTH - 30)  
    .attr("y",MARGIN_TOP )  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p23-2.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 30)  
    .attr("y",MARGIN_TOP + 15)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p23-2.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 30)  
    .attr("y",MARGIN_TOP + 30)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p19-1.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 30)  
    .attr("y",MARGIN_TOP + 45)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p19-3.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 30)  
    .attr("y",MARGIN_TOP + 60)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p19-3.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 30)  
    .attr("y",MARGIN_TOP + 75)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p30-5.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 30)  
    .attr("y",MARGIN_TOP + 90)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p30-5.png");  

svg.append("image")
    .attr("x",LABEL_WIDTH - 30)  
    .attr("y",MARGIN_TOP + 105)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p34-1.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 30)  
    .attr("y",MARGIN_TOP + 120)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p19-5.png"); 

svg.append("image")
    .attr("x",LABEL_WIDTH - 30)  
    .attr("y",MARGIN_TOP + 135)  
    .attr("width",14.5)  
    .attr("height",14.5)  
    .attr("xlink:href","../img/p23-6.png"); 

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
        {num:1, expense: 628, category: 172,total:800,pp:"元"},
        {num:2, expense: 454, category: 346,total:800,pp:"宋"},
        {num:3, expense: 395, category: 405,total:800,pp:"C COUPE GTE"},
        {num:4, expense: 376, category: 424,total:800,pp:"GLC coupe"},
        {num:5, expense: 231, category: 569,total:800,pp:"GLE"},
        {num:6, expense: 224, category: 576,total:800,pp:"Q70L"},
        {num:7, expense: 171, category: 629,total:800,pp:"Q70L"},
        {num:8, expense: 140, category: 660,total:800,pp:"NSX"},
        {num:9, expense: 118, category: 682,total:800,pp:"Q7 e-tron"},
        {num:10, expense: 101, category: 699,total:800,pp:"楼兰"}
    ];

function render(data, category) {
        var svg13 = d3.select("#canvas-svg13")
        svg13.append("div").attr("class", "p19wrapper");
        var div = d3.select("div.p19wrapper").selectAll("div.p34hbar") // <-B
                .data(data)
                .enter()
                .append("div")
                    .attr("class", "p34-chart")
                .append("div")
                    .attr("class", "p34hbar");
        d3.select("div.p19wrapper").selectAll("div.p34-chart")
            .append("span")
            .attr("class","text-right");
        div.append("span")
            .attr("class","p19number");
        div.append("span")
            .attr("class","p34left");
        div.append("span")
            .attr("class","p21right-2");
        d3.select("#canvas-svg13").selectAll("div.p34hbar") // <-C
                .data(data)
            .exit().remove();

        d3.select("#canvas-svg13").selectAll("div.p34-chart") // <-D
                .data(data)
            .attr("class", "p34-chart")
            .style("width", function (d) {
                return (d.total * 0.26) + "px";}
            );

        my_data = d3.select("#canvas-svg13").selectAll("div.p34hbar") // <-D
                .data(data)
            .attr("class", "p34hbar")
            .style("width", function (d) {
                return (d.category * 0.26) + "px";}
            );
            my_data.select("span.p34left")
                .text(function (d) {
                    return d.pp;
                });
            d3.select("div.p19wrapper").selectAll("div.p34-chart")
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