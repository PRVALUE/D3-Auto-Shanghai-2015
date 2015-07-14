var svg = d3.select("#canvas-svgp8").append("div.hbar");

var duration = 1200;
var data = [ // <-A
        {num:1, expense: 25, category: "PS3保罗"},
        {num:2, expense: 19, category: "车讯网-carxoo"},
        {num:3, expense: 17, category: "王政"},
        {num:4, expense: 17, category: "车市红点"},
        {num:5, expense: 12, category: "苏雨农"},
        {num:6, expense: 8, category: "何宽_AT"},
        {num:7, expense: 6, category: "李克Mac"},
        {num:8, expense: 6, category: "咏雪Maggie"},
        {num:9, expense: 4, category: "丹东晓程"},
        {num:10, expense: 4, category: "张志勇0318"}
    ];
    function render(data, category) {
        var div = d3.select("#canvas-svgp8").selectAll("div.hbar3") // <-B
                .data(data)
                .enter()
                .append("div")
                    .attr("class", "p7-chart")
                .append("div")
                    .attr("class", "hbar3")
                    .style("width", "0px");
        div.append("span")
            .attr("class","number2");
        div.append("span")
            .attr("class","left2");
        div.append("span")
            .attr("class","right");
        d3.select("#canvas-svgp8").selectAll("div.hbar3") // <-C
                .data(data)
            .exit().remove();

        my_data = d3.select("#canvas-svgp8").selectAll("div.hbar3") // <-D
                .data(data)
            my_data.transition().duration(duration)
                .style("width", function (d) { 
                    return barWidth(d) * 0.9 + "px"; 
                })
            my_data.select("span")
                .text(function (d) {
                    return d.num;
                });
            my_data.select("span.left2")
                .text(function (d) {
                    return d.category;
                });
            my_data.select("span.right")
                .text(function (d) {
                    return d.expense;
                });
        d3.select("#canvas-svgp8").selectAll("div.hbar3")
                .filter(function (d, i) { // <-E
                    return d.category == category;
                })
                .classed("selected", true);
    }
    function barWidth(d) {
        return d.expense;
    }    
    render(data);