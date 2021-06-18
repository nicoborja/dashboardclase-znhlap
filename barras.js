var datos = [80, 1, 115, 200, 100, 221, 30, 80, 2000];

d3.selectAll('#anillos')
  .select('circle')
  .style('stroke', '#ffd7c0');

var barras = d3
  .select('#graficobarras')
  .append('svg')
  //.style('background-color', 'red')
  .attr('width', 600)
  .attr('height', 100);

var alturaBarra = 100 / datos.length - 2;

barras
  .selectAll('rect')
  .data(datos)
  .enter()
  .append('rect')
  .attr('width', (valor, index) => {
    return valor;
  })
  .attr('height', alturaBarra)
  .attr('y', (valor, index) => {
    return index * (alturaBarra + 2);
  });