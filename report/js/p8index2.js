var svg = d3.select("#canvas-svgp8-2").append("div.hbar");

 var render2 = function () {
        var data = [ // <-A
        {num:1, expense: 262, category: "汽车经济杂志张久"},
        {num:2, expense: 55, category: "苏雨农"},
        {num:3, expense: 53, category: "车市红点"},
        {num:4, expense: 40, category: "耿伟达"},
        {num:5, expense: 38, category: "汽车公社卫金桥"},
        {num:6, expense: 26, category: "PS3保罗"},
        {num:7, expense: 25, category: "韩路-"},
        {num:8, expense: 19, category: "汽车公社赵威"},
        {num:9, expense: 19, category: "汽车公社_魏东升"},
        {num:10, expense: 19, category: "郭登礼-汽车周刊"}
        ];
        var div = d3.select("#canvas-svgp8-2").selectAll("div.hbar4") // <-B
                .data(data)
                .enter()
                .append("div")
                    .attr("class", "p7-chart")
                .append("div")
                    .attr("class", "hbar4");
        div.append("span")
            .attr("class","number2");
        div.append("span")
            .attr("class","left2");
        div.append("span")
            .attr("class","right");
        d3.select("#canvas-svgp8-2").selectAll("div.hbar4") // <-C
                .data(data)
            .exit().remove();

        my_data = d3.select("#canvas-svgp8-2").selectAll("div.hbar4") // <-D
                .data(data)
            .attr("class", "hbar4")
            .style("width", function (d) {
                return (d.expense * 0.9) + "px";}
            );
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
                /*
        d3.select("body").selectAll("div.h-bar")
                .filter(function (d, i) { // <-E
                    return d.category == category;
                })
                .classed("selected", true);
                */
    }
    render2(data);