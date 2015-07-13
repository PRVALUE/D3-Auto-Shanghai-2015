var svg = d3.select("#canvas-svgp7-2").append("div.hbar");

var duration = 1200;
var data = [ // <-A
        {num:1, expense: 344, category: "新浪汽车"},
        {num:2, expense: 208, category: "太平洋汽车"},
        {num:3, expense: 182, category: "汽车之家"},
        {num:4, expense: 125, category: "autocarweekly"},
        {num:5, expense: 115, category: "易车网"},
        {num:6, expense: 111, category: "汽车周刊"},
        {num:7, expense: 108, category: "凤凰汽车"},
        {num:8, expense: 102, category: "汽车营销分析"},
        {num:9, expense: 94, category: "中国汽车报"},
        {num:10, expense: 92, category: "车讯网"}
    ];
var render2 = function () {
        var data = [ // <-A
        {num:1, expense: 344, category: "新浪汽车"},
        {num:2, expense: 208, category: "太平洋汽车"},
        {num:3, expense: 182, category: "汽车之家"},
        {num:4, expense: 125, category: "autocarweekly"},
        {num:5, expense: 115, category: "易车网"},
        {num:6, expense: 111, category: "汽车周刊"},
        {num:7, expense: 108, category: "凤凰汽车"},
        {num:8, expense: 102, category: "汽车营销分析"},
        {num:9, expense: 94, category: "中国汽车报"},
        {num:10, expense: 92, category: "车讯网"}
        ];
        var div = d3.select("#canvas-svgp7-2").selectAll("div.hbar2") // <-B
                .data(data)
                .enter()
                .append("div")
                    .attr("class", "p7-chart")
                .append("div")
                    .attr("class", "hbar2")
                    .style("width", "0px");
        div.append("span")
            .attr("class","number");
        div.append("span")
            .attr("class","left");
        div.append("span")
            .attr("class","right");
        d3.select("#canvas-svgp7-2").selectAll("div.hbar2") // <-C
                .data(data)
            .exit().remove();

        my_data = d3.select("#canvas-svgp7-2").selectAll("div.hbar2") // <-D
                .data(data)
            my_data.transition().duration(duration)
                .style("width", function (d) { 
                    return barWidth(d) * 0.7 + "px"; 
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