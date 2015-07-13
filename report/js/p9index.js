var svg = d3.select("#canvas-svgp9").append("div.hbar");

var duration = 1200;
var data = [ // <-A
        {num:1, expense: 76, category: "买车网"},
        {num:2, expense: 74, category: "车享"},
        {num:3, expense: 67, category: "腾讯汽车"},
        {num:4, expense: 62, category: "中国汽车报"},
        {num:5, expense: 56, category: "一猫汽车资讯"},
        {num:6, expense: 53, category: "汽车导购杂志"},
        {num:7, expense: 52, category: "中国经济网汽车"},
        {num:8, expense: 51, category: "车头条"},
        {num:9, expense: 48, category: "爱卡汽车"},
        {num:10, expense: 48, category: "车图腾"}
    ];
    function render(data, category) {
        var div = d3.select("#canvas-svgp9").selectAll("div.hbar5") // <-B
                .data(data)
                .enter()
                .append("div")
                    .attr("class", "p7-chart")
                .append("div")
                    .attr("class", "hbar5")
                    .style("width", "0px");
        div.append("span")
            .attr("class","number3");
        div.append("span")
            .attr("class","left");
        div.append("span")
            .attr("class","right");
        d3.select("#canvas-svgp9").selectAll("div.hbar5") // <-C
                .data(data)
            .exit().remove();

        my_data = d3.select("#canvas-svgp9").selectAll("div.hbar5") // <-D
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
        d3.select("#canvas-svgp9").selectAll("div.hbar5")
                .filter(function (d, i) { // <-E
                    return d.category == category;
                })
                .classed("selected", true);
    }
    function barWidth(d) {
        return d.expense;
    }
    render(data);