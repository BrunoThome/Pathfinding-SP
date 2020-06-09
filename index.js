/**
   * This is a basic example on how to instantiate sigma. A random graph is
   * generated and stored in the "graph" variable, and then sigma is instantiated
   * directly with the graph.
   *
   * The simple instance of sigma is enough to make it render the graph on the on
   * the screen, since the graph is given directly to the constructor.
   */
var i,
	s,
	N = 100,
	E = 500,
	g = {
		nodes: [],
		edges: []
	};



var linhas = [
	especial_points,
	linha_amarela,
	//linha_azul,
	//linha_coral,
	linha_diamante,
	linha_esmeralda,
	//linha_jade,
	linha_lilas,
	//linha_prata,
	//linha_rubi,
	//linha_safira,
	//linha_turquesa,
	//linha_verde,
	//linha_vermelha
]

linhas.forEach((linha) => {
	linha.estacoes.forEach((estacao, index) => {
		g.nodes.push({
			id: estacao.id,
			label: estacao.id,
			x: estacao.pointX,
			y: estacao.pointY,
			size: 0.8,
			color: linha.circle_color
		})
	})
})



linhas.forEach((linha) => {
	linha.estacoes.forEach((node, index, nodes) => {
		node.estacoes_adjacentes.forEach((nextStation) => {
			g.edges.push({
				id: `e_${node.id}_${nextStation}_${index}`,
				source: node.id,
				target: nextStation,
				size: 3,
				color: node.color ? node.color : linha.color
			});
		})

	})
})

sigma.classes.graph.addMethod('neighbors', function (nodeId) {
	var k,
		neighbors = {},
		index = this.allNeighborsIndex[nodeId] || {};

	for (k in index)
		neighbors[k] = this.nodesIndex[k];

	return neighbors;
});

sigma.classes.graph.addMethod('getPath', function (start_node, end_node) {
	return findPath(start_node, end_node).path;
});


function addClickNode(s) {
	s.bind('clickNode', function (e) {
		var option = document.querySelector("input[name='control']:checked").value;


		switch (option) {
			case 'inicio':
				start_node = e;
				break;
			case 'fim':
				end_node = e;
				break;
			default:
				break;
		}
	});

}

function showPath(s) {
	// We first need to save the original colors of our
	// nodes and edges, like this:
	s.graph.nodes().forEach(function (n) {
		n.originalColor = n.color;
		n.originalLabel = n.label;
	});
	s.graph.edges().forEach(function (e) {
		e.originalColor = e.color;
	});


	var toKeep = s.graph.getPath(start_node, end_node);

	s.graph.nodes().forEach(function (n) {
		if (toKeep.includes(n.id)) {
			n.color = n.originalColor;
			n.label = n.originalLabel;
		}
		else {
			n.color = '#fff';
			n.label = "";
		}

	});

	s.graph.edges().forEach(function (e) {
		if (toKeep.includes(e.source) && toKeep.includes(e.target))
			e.color = e.originalColor;
		else
			e.color = '#fff';
	});

	// Since the data has been modified, we need to
	// call the refresh method to make the colors
	// update effective.
	s.refresh();

	// When the stage is clicked, we just color each
	// node and edge with its original color.

}

// Instantiate sigma:
var s = new sigma({
	graph: g,
	container: 'graph-container',

});


function startButton() {
	showPath(s);
}

function resetButton() {
	s.graph.nodes().forEach(function (n) {
		n.color = n.originalColor;
		n.label = n.originalLabel;
	});

	s.graph.edges().forEach(function (e) {
		e.color = e.originalColor;
	});

	// Same as in the previous event:
	s.refresh();
}
var start_node, end_node = "";
addClickNode(s);