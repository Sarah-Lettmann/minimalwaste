/***** water *****/
layout['title'] = 'Wasserverbrauch (Liter)';

var water1 = {
  x: ['5 Jahre', '10 Jahre', '20 Jahre', '50 Jahre'],
  y: [949, 1898, 3796, 9490],
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

var water2 = {
  x: ['5 Jahre', '10 Jahre', '20 Jahre', '50 Jahre'],
  y: [284.7, 569.4, 1138.8, 2847],
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

var water3 = {
  x: ['5 Jahre', '10 Jahre', '20 Jahre', '50 Jahre'],
  y: [2071.3, 2280.6, 2699.2, 3955],
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

var water4 = {
  x: ['5 Jahre', '10 Jahre', '20 Jahre', '50 Jahre'],
  y: [1329.3, 1538.6, 1957.2, 3213],
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

var data = [water1, water2, water3, water4];
Plotly.newPlot('water', data, layout, config);
