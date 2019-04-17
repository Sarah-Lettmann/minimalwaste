/* layout and config*/
var layout = {
  showlegend: false,
  font: {
    family: 'Lora, Georgia, serif',
    size: 11,
    color: '#666'
  }
};

var config = {
  displayModeBar: false,
  responsive: true
};




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
    color: '#9c9',
    size: 8
  },
};

var oneTissue3 = {
  x: ['Papier', 'Recyclingpapier', 'Baumwolle', 'Bio-Baumwolle'],
  y: [2.9, 2.3, 22, 13],
  type: 'bar',
  name: 'CO2-Emissionen (g)',
  marker: {
    color: '#beb',
    size: 8
  },
};

var data = [oneTissue1, oneTissue2, oneTissue3];
Plotly.newPlot('oneTissue', data, layout, config);




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
