var svg = d3.select("#canvas-svgp7").append("div.hbar");

var duration = 500;
var data = [ // <-A
        {num:1, expense: 192, category: "太平洋汽车"},
        {num:2, expense: 124, category: "易车网"},
        {num:3, expense: 115, category: "汽车周刊"},
        {num:4, expense: 114, category: "人民网"},
        {num:5, expense: 112, category: "新浪汽车"},
        {num:6, expense: 94, category: "中国汽车报"},
        {num:7, expense: 90, category: "中国经营报"},
        {num:8, expense: 89, category: "汽车点评网"},
        {num:9, expense: 76, category: "新京报"},
        {num:10, expense: 68, category: "重庆晚报"}
    ];
    function render(data, category) {
        var div = d3.select("#canvas-svgp7").selectAll("div.hbar") // <-B
                .data(data)
                .enter()
                .append("div")
                    .attr("class", "p7-chart")
                .append("div")
                    .attr("class", "hbar")
                    .style("width", "0px");
        div.append("span")
            .attr("class","number");
        div.append("span")
            .attr("class","left");
        div.append("span")
            .attr("class","right");
        d3.select("#canvas-svgp7").selectAll("div.hbar") // <-C
                .data(data)
            .exit().remove();

        var my_data = d3.select("#canvas-svgp7").selectAll("div.hbar") // <-D
                .data(data)
            my_data.transition().duration(duration)
                .style("width", function (d) { 
                    return barWidth(d) + "px"; 
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
        d3.select("#canvas-svgp7").selectAll("div.hbar")
                .filter(function (d, i) { // <-E
                    return d.category == category;
                })
                .classed("selected", true);
    }
    function barWidth(d) {
        return d.expense;
    }
    render(data);