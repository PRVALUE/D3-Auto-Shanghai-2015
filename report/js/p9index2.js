var svg = d3.select("#canvas-svgp9-2").append("div.hbar");

var duration = 500;
var data = [ // <-A
        {num:1, expense: 42, category: "新浪汽车"},
        {num:2, expense: 40, category: "时代汽车杂志"},
        {num:3, expense: 35, category: "新易汽车"},
        {num:4, expense: 33, category: "汽车之家"},
        {num:5, expense: 30, category: "腾讯汽车"},
        {num:6, expense: 26, category: "车云网"},
        {num:7, expense: 25, category: "名车志Daily"},
        {num:8, expense: 24, category: "12缸"},
        {num:9, expense: 21, category: "爱卡汽车"},
        {num:10, expense: 21, category: "易车网"}
    ];
var render2 = function () {
        var div = d3.select("#canvas-svgp9-2").selectAll("div.hbar6") // <-B
                .data(data)
                .enter()
                .append("div")
                    .attr("class", "p7-chart")
                .append("div")
                    .attr("class", "hbar6")
                    .style("width", "0px");
        div.append("span")
            .attr("class","number3");
        div.append("span")
            .attr("class","left");
        div.append("span")
            .attr("class","right");
        d3.select("#canvas-svgp9-2").selectAll("div.hbar6") // <-C
                .data(data)
            .exit().remove();

        my_data = d3.select("#canvas-svgp9-2").selectAll("div.hbar6") // <-D
                .data(data)
            my_data.transition().duration(duration)
                .style("width", function (d) { 
                    return barWidth(d) * 3 + "px"; 
                })
            my_data.select("span")
                .text(function (d) {
                    return d.num;
                });
            my_data.select("span.left")
                .text(function (d) {
                    return d.category;
                });
            my_data.select("span.right")
                .text(function (d) {
                    return d.expense;
                });
                /*
        d3.select("body").selectAll("div.bar2")
                .filter(function (d, i) { // <-E
                    return d.category == category;
                })
                .classed("selected", true);
                */
    }
    function barWidth(d) {
        return d.expense;
    }
    render2(data);