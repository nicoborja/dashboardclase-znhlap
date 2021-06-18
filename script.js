
var urlsvg = 'https://raw.githubusercontent.com/ivan-abreu/evd-selectors-svg/master/infografia.svg';

d3.svg(urlsvg).then(function(data){
  d3.select("body").node().append( data.dcomentElement )
});
