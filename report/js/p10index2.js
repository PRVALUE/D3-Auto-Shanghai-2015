var svg = d3.select("#canvas-svgp10-2").append("div.hbar");

var render2 = function () {
        var data = [ // <-A
        {num:1, expense: 16, category: "车市红点"},
        {num:2, expense: 11, category: "车边社"},
        {num:3, expense: 10, category: "autocarweekly"},
        {num:4, expense: 10, category: "文书车云"},
        {num:5, expense: 5, category: "朱伟华后市场"}
        ];
        var div = d3.select("#canvas-svgp10-2").selectAll("div.hbar8") // <-B
                .data(data)
                .enter()
                .append("div")
                    .attr("class", "p7-chart")
                .append("div")
                    .attr("class", "hbar8");
        div.append("span")
            .attr("class","number4");
        div.append("span")
            .attr("class","left3");
        div.append("span")
            .attr("class","right");
        d3.select("#canvas-svgp10-2").selectAll("div.hbar8") // <-C
                .data(data)
            .exit().remove();

        my_data = d3.select("#canvas-svgp10-2").selectAll("div.hbar8") // <-D
                .data(data)
            .attr("class", "hbar8")
            .style("width", function (d) {
                return (d.expense * 5) + "px";}
            );
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
                /*
        d3.select("body").selectAll("div.h-bar")
                .filter(function (d, i) { // <-E
                    return d.category == category;
                })
                .classed("selected", true);
                */
    }
    render2(data);