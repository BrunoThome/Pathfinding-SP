/* Declaração do vetor de linhas, começando pelas estações que estão presentes
	em mais de uma linha
*/
const linhas = [
	especial_points,
	linha_amarela,
	linha_azul,
	linha_coral,
	linha_diamante,
	linha_esmeralda,
	linha_jade,
	linha_lilas,
	linha_rubi,
	linha_prata,
	linha_safira,
	linha_turquesa,
	linha_verde,
	linha_vermelha
]

/* Declaração do objeto inicial de estacoes */
var estacoes = {
		nodes: [/**
			Lista de estações de todas as linhas.
			Cada estação possui a seguinte estrutura:
			{
				id,
				label,
				x,
				y,
				color
			}
		
		*/],
		edges: [ /**
			Lista todas as ligações entre uma estação e sua subsequente
			seguindo a orientação para direita e para baixo.
			Cada ligação possui a seguinta estrutra:
			{
				id,
				source,
				target,
				label,
				color
			}	
		*/]
	};




/** Essa função recebe uma estação inicia e uma estação final e calcula
 *  a distancia euclidiana entre elas. É usada para calcular o custo de 
 *  mudança de estado
 * 
 * 	@param {object}		startNode 	A estação atual
 * 	@param {object}		endNode		A estação final
 * 	@return {float}					A raiz quadrada da soma das diferenças entre as 
 * 									coordenadas X e Y das estações ao quadrado
 * 
 */
function calcularCustoG(startNode, endNode) {
	let custo_x = Math.pow(startNode.pointX - endNode.x, 2)
	let custo_y = Math.pow(startNode.pointY - endNode.y, 2)
	return Math.sqrt(custo_x + custo_y)
}


/** Adiciona à classe sigma o metodo neighbors, que recebe como parametro o id
 * 	de uma estação e retorna todas as estações vizinhas, independente de orientação
 * 
 * 	@param {String} 	nodeId	Id da estação que se deseja obter os vizinhos
 * 	@return {Array}				Todos os objetos do tipo "node" ligados a estação
 */
sigma.classes.graph.addMethod('neighbors', function (nodeId) {
	var k,
		neighbors = {},
		index = this.allNeighborsIndex[nodeId] || {};

	for (k in index)
		neighbors[k] = this.nodesIndex[k];

	return neighbors;
});


/** Percorre todo o vetor de linhas e para cada estação da linha
 * 	adiciona um novo objeto no vetor nodes do objeto estacoes
 */
linhas.forEach((linha) => {
	linha.estacoes.forEach((estacao, index) => {
		estacoes.nodes.push({
			id: estacao.id,
			label: estacao.name,
			x: estacao.pointX,
			y: estacao.pointY,
			size: 1,
			color: linha.circle_color
		})
	})
})


/** Percorre novamente o vetor de linhas e para cada estação, percorre o vetor de estações adjacentes,
 * 	para cada estação adjacente cria uma ligação e adiciona ao vetor "edges" do objeto estacoes
 * 
 * 	Durante esse loop, verifica na lista de nodes do atribute estação qual é a proxima estação,
 * 	para chamar a função calcularCustoG, passando a estação atual como startNode e a estação adjacente
 * 	como endNode
 */
linhas.forEach((linha) => {
	linha.estacoes.forEach((node, index, nodes) => {
		node.estacoes_adjacentes.forEach((nextStation, nextStationIndex) => {
			var proximoNode
			estacoes.nodes.forEach((node) => {
				if (node.id == nextStation) {
					proximoNode = node
				}
			})
			estacoes.edges.push({
				id: `e_${node.id}_${nextStation}_${index}`,
				source: node.id,
				target: nextStation,
				label: String(calcularCustoG(node, proximoNode).toFixed(2)),
				color: node.colors ? node.colors[nextStationIndex] : linha.color
			});
		})

	})
})







/** Cria um objeto da classe sigma, passando a lista de estações e suas ligações
 * 	também recebe algumas configurações de renderização e o elemento html onde 
 * 	esse grafo vai ser renderizado
 */
var s = new sigma({
	graph: estacoes,
	renderer: {
		container: document.getElementById('graph-container'),
		type: 'canvas'
	}, 
	settings: {
		labelThreshold: 15,
		defaultNodeColor: "#000",
		edgeLabelThreshold: 1.9,

	}
});

s.bind('clickNode', function (e) {
	var option = document.querySelector("input[name='control']:checked").value;

	switch (option) {
		case 'inicio':
			e.data.node.startNode = true;
			document.querySelector("#startNode").innerHTML = e.data.node.label;
			break;
		case 'fim':
			e.data.node.endNode = true;
			document.querySelector("#endNode").innerHTML = e.data.node.label;
			break;
		default:
			break;
	}
});

var results;

var start_node, end_node = "";

/** Função que é executada quando temos um startNode e um endNode definido e clicamos
 * 	no botão calcular
 * 
 * 	@param {sigma} 	s  Instância sigma onde será executado a busca A*
 */
function showPath() {
	let startNode = null;
	let endNode = null;

	/** Percorre todos os nodes e ligações da instância e cria um atributo com a cor e label original,
	 *  para posteriormente recuperarmos quando for exibido o caminho encontrado
	 * 	
	 * 	Caso algum dos nodes possua um atributo startNode ou endNode, esses são marcados com seu
	 * 	respectivo papel
	 */
	s.graph.nodes().forEach(function (node) {
		node.originalColor = node.color;
		node.originalLabel = node.label;
		node.originalLabelColor = "#000";
		if (node.startNode)
			startNode = node;
		if (node.endNode)
			endNode = node;
	});

	s.graph.edges().forEach(function (e) {
		e.originalColor = e.color;
		e.color = "#eee"
	});

	/** Com os nós de inicio e fim definidos, podemos executar a função findPath
	 * 	que vai retornar o caminho encontrado, a lista de nós abertos, a lista de
	 * 	nós fechados e o valor total do caminho
	 */
	results = findPath(startNode, endNode);
	var { finalPath, openList, closedList, totalValue } = results;

	/** Novamente percorre a lista de nós da instância e vê qual deles está incluido na
	 * 	lista de ids do caminho final, se ele existir no caminho final adiciona ele na ordem
	 * 	que deve ser mostrado. Também coloca a cor do nó como cinza bem claro
	 */
	var nodesPath = []
	s.graph.nodes().forEach(function (node) {
		if (finalPath.includes(node.id)) {
			var indexToAdd = finalPath.indexOf(node.id);
			nodesPath[indexToAdd] = node;
			node.color = '#eee';
		} else {
			node.color = '#eee';
		}

	});

	/** Para cada nó da lista de nós do caminho, adiciona um timeout de 100 ms multiplicado pelo
	 * 	index do nó na lista de nós, esse timeout é para causar a impressão de algo sequencial
	 */
	nodesPath.forEach((node, index) => {
		setTimeout(() => {
			node.color = node.originalColor;
			s.refresh();
		}, index * 100);
	})

	/** Para cada ligação da instância verifica se o source ou o target da ligação é um nó
	 * 	do caminho final encontrado, se for printa com a cor original
	 */
	s.graph.edges().forEach(function (e) {
		if (finalPath.includes(e.source) && finalPath.includes(e.target))
			e.color = e.originalColor;
	});


	/** Atualiza a instância para aplicar as mudanças de cor */
	s.refresh();

	const domElementOpenList = document.querySelector("#openList");
	const domElementClosedList = document.querySelector("#closedList");
	const domElementTotalValue = document.querySelector("#totalValue");

	/** Após exibir o caminho final e aplicar todas as alterações de cor
	 * 	preenche a lista de nós abertos e a lista de nós fechados, também
	 * 	preenche o valor total do caminho encontrado
	 * 
	 * 	O calculo para exibir isso sempre após a exibição do caminho é
	 * 	o tamanho do vetor do caminho encontrado * 100 ms
	 */
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

/** Essa função recebe uma lista de nós, no caso abertos ou fechados e atualiza suas
 * 	cores na instância do sigma, se uma cor não for passada para a função, então ele
 * 	mostra que estava sendo exibida antes da execução dessa função
 * 
 * 	@param {sigma}		s 			Instancia sigma onde foi executado a busca A*
 * 	@param {Array}		nodeList 	Array com os nós que serão destacados
 * 	@param {String}		color		String de cor em formato hexadecimal
 */
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
		if (nodeListId.includes(e.source) && nodeListId.includes(e.target)){			
			if (!color) {
				e.color = e.previousColor;
			} else {
				e.previousColor = e.color;
				e.color = "#eee"
			}
		}
	});

	s.refresh();
}

/** Função para gerenciar o destaque da lista de nós abertoss, baseado em um
 * 	evento disparado pelo checkbox ao lado da lista
 * 	
 * 	@param {Event}	event evento disparado pelo checkbox ao lado da lista
 */
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

/** Função para gerenciar o destaque da nós fechados, baseado em um
 * 	evento disparado pelo checkbox ao lado da lista
 * 	
 * 	@param {Event}	event evento disparado pelo checkbox ao lado da lista
 */
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



/** Função para apagar da tela todas as informações que vão ser preenchidas pela nova
 * 	execução da busca, é executada sempre antes de uma nova busca
 */
function resetInfos() {
	document.querySelector("#openList").innerHTML = "";
	document.querySelector("#closedList").innerHTML = "";
	document.querySelector("#totalValue").innerHTML = "0";
	document.querySelector("#startNode").innerHTML = "";
	document.querySelector("#endNode").innerHTML = "";
	document.querySelector("#changeNosAbertos").checked = false;
	document.querySelector("#changeNosFechados").checked = false;
}


/** Função para restaurar a instância do sigma para seu estado original, quando foi criada
 * 	restaura as cores, labels e apaga quem eram os nós de inicio e fim
 */
function resetMap() {
	s.graph.nodes().forEach(function (n) {
		n.color = n.originalColor;
		n.label = n.originalLabel;
		n.startNode = false;
		n.endNode = false;
	});

	s.graph.edges().forEach(function (e) {
		e.color = e.originalColor;
	});

	// Same as in the previous event:
	s.refresh();
}

/** Função para iniciar a busca na instância do sigma, primeiramente apaga as informações
 * 	se ja tiverem sido preenchidas e então executa a função showPath, passando a instância
 * 	como paramêtro
 */
function startButton() {
	document.querySelector("#openList").innerHTML = "";
	document.querySelector("#closedList").innerHTML = "";
	document.querySelector("#totalValue").innerHTML = "0";
	showPath(s);
}


/** Função executada através do botão resetar, primeiro chama a função resetMap para restaurar
 * 	o grafo pro estado de quando foi criado, depois a função resetInfos para apagar as informações
 * 	de uma possivel busca anterior
 */
function resetButton() {
	resetMap();
	resetInfos();
}

