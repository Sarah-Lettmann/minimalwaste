/***** energy *****/
layout['title'] = 'Energieverbrauch (kWh)';
var energy1 = {
  x: ['5 Jahre', '10 Jahre', '20 Jahre', '50 Jahre'],
  y: [94.9, 189.8, 379.6, 949],
  type: 'scatter',
  name: 'Papier',
  marker: {
    color: '#ada',
    size: 8
  },
  line: {
    color: '#ada',
    width: 2
  }
};

var energy2 = {
  x: ['5 Jahre', '10 Jahre', '20 Jahre', '50 Jahre'],
  y: [38, 75.9, 151.8, 379.6],
  type: 'scatter',
  name: 'Recyclingpapier',
  marker: {
    color: '#beb',
    size: 8
  },
  line: {
    color: '#beb',
    width: 2
  }
};

var energy3 = {
  x: ['5 Jahre', '10 Jahre', '20 Jahre', '50 Jahre'],
  y: [6.4, 10.8, 19.5, 45.7],
  type: 'scatter',
  name: 'Baumwolle',
  marker: {
    color: '#8b8',
    size: 8
  },
  line: {
    color: '#8b8',
    width: 2
  }
};

var energy4 = {
  x: ['5 Jahre', '10 Jahre', '20 Jahre', '50 Jahre'],
  y: [4.7, 9.1, 17.8, 44],
  type: 'scatter',
  name: 'Bio-Baumwolle',
  marker: {
    color: '#585',
    size: 8
  },
  line: {
    color: '#585',
    width: 2
  }
};

var data = [energy1, energy2, energy3, energy4];
Plotly.newPlot('energy', data, layout, config);
