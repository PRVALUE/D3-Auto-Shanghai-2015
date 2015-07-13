var svg = d3.select("#canvas-svgp10").append("div.hbar");

var duration = 500;

var data = [ // <-A
        {num:1, expense: 46, category: "汽车爱好者"},
        {num:2, expense: 46, category: "童济仁的汽车评论"},
        {num:3, expense: 44, category: "AM汽车经理人"},
        {num:4, expense: 42, category: "车辙"},
        {num:5, expense: 35, category: "啊车"},
        {num:6, expense: 35, category: "汽车工厂"},
        {num:7, expense: 35, category: "车早茶"},
        {num:8, expense: 32, category: "玩車教授"},
        {num:9, expense: 29, category: "车市红点"},
        {num:10, expense: 29, category: "autocarweekly"}
    ];
    function render(data, category) {
        var div = d3.select("#canvas-svgp10").selectAll("div.hbar7") // <-B
                .data(data)
                .enter()
                .append("div")
                    .attr("class", "p7-chart")
                .append("div")
                    .attr("class", "hbar7")
                    .style("width", "0px");
        div.append("span")
            .attr("class","number4");
        div.append("span")
            .attr("class","left3");
        div.append("span")
            .attr("class","right");
        d3.select("#canvas-svgp10").selectAll("div.hbar7") // <-C
                .data(data)
            .exit().remove();

        my_data = d3.select("#canvas-svgp10").selectAll("div.hbar7") // <-D
                .data(data)
            my_data.transition().duration(duration)
                .style("width", function (d) { 
                    return barWidth(d) * 5 + "px"; 
                })
            my_data.select("span")
                .text(function (d) {
                    return d.num;
                });
            my_data.select("span.left3")
                .text(function (d) {
                    return d.category;
                });
            my_data.select("span.right")
                .text(function (d) {
                    return d.expense;
                });
        d3.select("#canvas-svgp10").selectAll("div.hbar7")
                .filter(function (d, i) { // <-E
                    return d.category == category;
                })
                .classed("selected", true);
    }
    function barWidth(d) {
        return d.expense;
    }
    render(data);