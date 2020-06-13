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
	linha_azul,
	//linha_coral,
	linha_diamante,
	linha_esmeralda,
	//linha_jade,
	linha_lilas,
	//linha_prata,
	//linha_rubi,
	//linha_safira,
	linha_turquesa,
	linha_verde,
	//linha_vermelha
]


function calcularCustoG(startNode, endNode) {
	if(!startNode || !endNode){
		console.log("eerro")
	}
	let custo_x = Math.pow(startNode.pointX - endNode.x, 2)
	let custo_y = Math.pow(startNode.pointY - endNode.y, 2)
	return Math.sqrt(custo_x + custo_y)
}

linhas.forEach((linha) => {
	linha.estacoes.forEach((estacao, index) => {
		g.nodes.push({
			id: estacao.id,
			label: estacao.name,
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
			var proximoNode
			g.nodes.forEach((node) => {
				if (node.id == nextStation) {
					proximoNode = node
				}
			})
			g.edges.push({
				id: `e_${node.id}_${nextStation}_${index}`,
				source: node.id,
				label: String(calcularCustoG(node, proximoNode).toFixed(2)),
				target: nextStation,
				size: 100,
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
				e.data.node.type = "startNode";
				document.querySelector("#startNode").innerHTML = e.data.node.label;
				break;
			case 'fim':
				e.data.node.type = "endNode";
				document.querySelector("#endNode").innerHTML = e.data.node.label;
				break;
			default:
				break;
		}
	});

}

var results;

function showPath(s) {
	// Colocando a cor original dos nodes, das labels
	// e das linhas em outra propriedade
	let startNode = null;
	let endNode = null;
	s.graph.nodes().forEach(function (node) {
		node.originalColor = node.color;
		node.originalLabel = node.label;
		node.originalLabelColor = "#000";
		if (node.type == "startNode")
			startNode = node;
		else if (node.type == "endNode")
			endNode = node;
	});

	s.graph.edges().forEach(function (e) {
		e.originalColor = e.color;
	});

	results = findPath(startNode, endNode);
	var { finalPath, openList, closedList, totalValue } = results;
	var nodesPath = []
	s.graph.nodes().forEach(function (node) {
		if (finalPath.includes(node.id)) {
			var indexToAdd = finalPath.indexOf(node.id);
			nodesPath[indexToAdd] = node;
			// node.color = node.originalColor;
			// node.label = node.originalLabel;
			node.color = '#eee';
		} else {
			node.color = '#eee';
		}

	});

	nodesPath.forEach((node, index) => {
		setTimeout(() => {
			node.color = node.originalColor;
			node.label = node.originalLabel;
			s.refresh();
		}, index * 100);
	})

	s.graph.edges().forEach(function (e) {
		if (finalPath.includes(e.source) && finalPath.includes(e.target))
			e.color = e.originalColor;
		else
			e.color = '#eee';
	});



	s.refresh();

	const domElementOpenList = document.querySelector("#openList");
	const domElementClosedList = document.querySelector("#closedList");
	const domElementTotalValue = document.querySelector("#totalValue");
	setTimeout(() => {
		closedList.forEach((node) => {
			domElementClosedList.innerHTML += `<li>${node.name}</li>`
		})

		openList.forEach((node) => {
			domElementOpenList.innerHTML += `<li>${node.name}</li>`
		})

		domElementTotalValue.innerHTML = totalValue
	}, nodesPath.length * 100)


}

// Instantiate sigma:
var s = new sigma({
	graph: g,
	renderer: {
		container: document.getElementById('graph-container'),
		type: 'canvas'

	},
	settings: {
		labelThreshold: 15,
		edgeLabelSize: 'fixed',
		defaultNodeColor: "#000",
		edgeLabelThreshold: 1.9,

	}
});


function destacarNosAbertos(s, openList) {
	var openListIds = openList.map((node) => node.id)
	var nodesPath = []

	s.graph.nodes().forEach(function (node) {
		if (openListIds.includes(node.id)) {
			var indexToAdd = openListIds.indexOf(node.id);
			nodesPath[indexToAdd] = node;
			// node.color = node.originalColor;
			// node.label = node.originalLabel;
			node.color = '#eee';
		} else {
			node.color = '#eee';
		}

	});


	s.graph.edges().forEach(function (e) {
		e.color = "#eee";
	});

	nodesPath.forEach((node) => {
		node.color = "#2196F3";
		node.label = node.originalLabel;
	})
	s.refresh();
}

function destacarNos(s, nodeList, color = null) {
	var nodeListId = nodeList.map((node) => node.id)

	s.graph.nodes().forEach(function (node) {
		if (nodeListId.includes(node.id)) {
			if (!color) {
				node.color = node.previousColor;
			} else {
				node.previousColor = node.color;
				node.color = color;
			}
		}

	});

	s.graph.edges().forEach(function (e) {
		e.color = "#eee";
	});

	s.refresh();
}

function startButton() {


	document.querySelector("#openList").innerHTML = "";
	document.querySelector("#closedList").innerHTML = "";
	document.querySelector("#totalValue").innerHTML = "0";
	showPath(s);
}

function handleDestacarAbertos(event) {

	var { openList } = results;
	switch (event.checked) {
		case true:
			destacarNos(s, openList, "#2196F3");
			break;
		case false:
			destacarNos(s, openList);
			break;

	}
}

function handleDestacarFechados(event) {

	var { closedList } = results;
	switch (event.checked) {
		case true:
			destacarNos(s, closedList, "#EC7000");
			break;
		case false:
			destacarNos(s, closedList);
			break;

	}
}



function resetInfos() {
	document.querySelector("#openList").innerHTML = "";
	document.querySelector("#closedList").innerHTML = "";
	document.querySelector("#totalValue").innerHTML = "0";
	document.querySelector("#startNode").innerHTML = "";
	document.querySelector("#endNode").innerHTML = "";
	document.querySelector("#changeNosAbertos").checked = false;
	document.querySelector("#changeNosFechados").checked = false;
}

function resetMap() {
	s.graph.nodes().forEach(function (n) {
		n.color = n.originalColor;
		n.label = n.originalLabel;
		n.type = null;
	});

	s.graph.edges().forEach(function (e) {
		e.color = e.originalColor;
	});

	// Same as in the previous event:
	s.refresh();
}


function resetButton() {
	resetMap();
	resetInfos();
}
var start_node, end_node = "";
addClickNode(s);