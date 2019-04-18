/***** co2 *****/
layout['title'] = 'CO2-Emissionen (kg)';

var co21 = {
  x: ['5 Jahre', '10 Jahre', '20 Jahre', '50 Jahre'],
  y: [21.2, 42.3, 84.7, 211.7],
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

var co22 = {
  x: ['5 Jahre', '10 Jahre', '20 Jahre', '50 Jahre'],
  y: [16.8, 33.6, 67.2, 167.9],
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

var co23 = {
  x: ['5 Jahre', '10 Jahre', '20 Jahre', '50 Jahre'],
  y: [1.9, 3.4, 6.5, 15.8],
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

var co24 = {
  x: ['5 Jahre', '10 Jahre', '20 Jahre', '50 Jahre'],
  y: [1.7, 3.3, 6.4, 15.7],
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

var data = [co21, co22, co23, co24];
Plotly.newPlot('co2', data, layout, config);
