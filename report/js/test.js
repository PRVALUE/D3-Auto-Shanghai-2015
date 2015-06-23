var root = d3.select('#root')

var renderData = function() {
  var data = d3.range(5).map(Math.random);  // 5 random numbers [0, 1)
  var numbers = root.selectAll('div.datum').data(data);
  numbers.enter().append('div')
      .attr('class', 'datum')
      .text(d3.format('.2f'));
};

root.append('button')
    .text('make it rain data!')
    .on('click', renderData);