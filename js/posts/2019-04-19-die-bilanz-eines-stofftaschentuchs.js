/***** bilanz einzelnes Stofftaschentuch *****/
layout['title'] = 'Bilanz eines einzelnen Stofftaschentuchs';

var oneTissue1 = {
  x: ['Papier', 'Recyclingpapier', 'Baumwolle', 'Bio-Baumwolle'],
  y: [0.13, 0.039, 133, 80],
  type: 'bar',
  name: 'Wasserverbrauch (Liter)',
  marker: {
    color: '#585',
    size: 8
  },
};

var oneTissue2 = {
  x: ['Papier', 'Recyclingpapier', 'Baumwolle', 'Bio-Baumwolle'],
  y: [13, 5.2, 144, 24],
  type: 'bar',
  name: 'Energieverbrauch (Wh)',
  marker: {
    color: '#ada',
    size: 8
  },
};

var oneTissue3 = {
  x: ['Papier', 'Recyclingpapier', 'Baumwolle', 'Bio-Baumwolle'],
  y: [2.9, 2.3, 22, 13],
  type: 'bar',
  name: 'CO2-Emissionen (g)',
  marker: {
    color: '#8b8',
    size: 8
  },
};

var data = [oneTissue1, oneTissue2, oneTissue3];
Plotly.newPlot('oneTissue', data, layout, config);
