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
    N = 10,
    E = 10,
    g = {
        nodes: [],
        edges: []
    };


var linhas = {
    'linha_amarela': {
        color: '#f5f10a',
        circle_color: '#0001',
        estacoes: [
            {
                id: 'sp_morumbi',
                name: 'Morumbi',
                pointX: 1,
                pointY: 0,
                estacoes_adjacentes: [
                    'butanta'
                ]
            }, {
                id: 'butanta',
                name: 'Butantã',
                pointX: 1.5,
                pointY: 0,
                estacoes_adjacentes: [
                    'sp_morumbi',
                    'pinheiros'
                ]
            }, {
                id: 'pinheiros',
                name: 'Pinheiros',
                pointX: 2,
                pointY: 0,
                estacoes_adjacentes: [
                    'butanta',
                    'faria_lima',
                    'cidade_universitaria',
                    'hebraica'

                ]
            }, {
                id: 'faria_lima',
                name: 'Faria Lima',
                pointX: 2.5,
                pointY: 0,
                estacoes_adjacentes: [
                    'pinheiros',
                    'fradique_coutinho'
                ]
            }, {
                id: 'fradique_coutinho',
                name: 'Fradique Coutinho',
                pointX: 3,
                pointY: 0,
                estacoes_adjacentes: [
                    'faria_lima',
                    'oscar_freire'
                ]
            }, {
                id: 'oscar_freire',
                name: 'Oscar Freire',
                pointX: 3.5,
                pointY: 0,
                estacoes_adjacentes: [
                    'fradique_coutinho',
                    'paulista'
                ]
            }, {
                id: 'paulista',
                name: 'Paulista',
                pointX: 4,
                pointY: -0.2,
                estacoes_adjacentes: [
                    'oscar_freire',
                    'higienopolis'
                ]
            }, {
                id: 'higienopolis',
                name: 'Higienópolis',
                pointX: 4.5,
                pointY: -0.4,
                estacoes_adjacentes: [
                    'paulista',
                    'republica'
                ]
            }, {
                id: 'republica',
                name: 'Republica',
                pointX: 5,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'higienopolis',
                    'luz'
                ]
            }, {
                id: 'luz',
                name: 'Luz',
                pointX: 5.5,
                pointY: -0.8,
                estacoes_adjacentes: [
                    'republica',
                ]
            }
        ]
    },
    'linha_esmeralda': {
        color: '#00A88E',
        circle_color: '#0003',
        estacoes: [
            {
                id: 'osasco',
                name: 'Osasco',
                pointX: 1.5,
                pointY: -0.60,
                estacoes_adjacentes: [
                    'pres_altino'
                ]
            }, {
                id: 'pres_altino',
                name: 'Pres. Altino',
                pointX: 2,
                pointY: -0.60,
                estacoes_adjacentes: [
                    'osasco',
                    'ceasa'
                ]
            }, {
                id: 'ceasa',
                name: 'Ceasa',
                pointX: 2,
                pointY: -0.45,
                estacoes_adjacentes: [
                    'pres_altino',
                    'villa_lobos'
                ]
            }, {
                id: 'villa_lobos',
                name: 'Villa Lobo',
                pointX: 2,
                pointY: -0.30,
                estacoes_adjacentes: [
                    'ceasa',
                    'cidade_universitaria'
                ]
            }, {
                id: 'cidade_universitaria',
                name: 'Cidade Universitária',
                pointX: 2,
                pointY: -0.15,
                estacoes_adjacentes: [
                    'villa_lobos',
                    'pinheiros',
                ]
            }, {
                id: 'hebraica',
                name: 'Hebraica',
                pointX: 2,
                pointY: 0.15,
                estacoes_adjacentes: [
                    'pinheiros',
                    'cidade_jardim'
                ]
            }, {
                id: 'cidade_jardim',
                name: 'Cidade Jardim',
                pointX: 2,
                pointY: 0.30,
                estacoes_adjacentes: [
                    'hebraica',
                    'vila_olimpia',
                ]
            }, {
                id: 'vila_olimpia',
                name: 'Vila Olimpia',
                pointX: 2,
                pointY: 0.45,
                estacoes_adjacentes: [
                    'cidade_jardim',
                    'berrini',
                ]
            }, {
                id: 'berrini',
                name: 'Berrini',
                pointX: 2,
                pointY: 0.60,
                estacoes_adjacentes: [
                    'vila_olimpia',
                    'morumbi',
                ]
            }, {
                id: 'morumbi',
                name: 'Morumbi',
                pointX: 2,
                pointY: 0.75,
                estacoes_adjacentes: [
                    'berrini',
                    'granja_julieta',
                ]
            }, {
                id: 'granja_julieta',
                name: 'Granja Julieta',
                pointX: 2,
                pointY: 0.9,
                estacoes_adjacentes: [
                    'morumbi',
                    'santo_amaro'
                ]
            }, {
                id: 'santo_amaro',
                name: 'Santo Amaro',
                pointX: 2,
                pointY: 1.05,
                estacoes_adjacentes: [
                    'granja_julieta',
                    'socorro'
                ]
            }, {
                id: 'socorro',
                name: 'Socorro',
                pointX: 2,
                pointY: 1.20,
                estacoes_adjacentes: [
                    'santo_amaro',
                    'jurubatuba'
                ]
            }, {
                id: 'jurubatuba',
                name: 'Jurubatuba',
                pointX: 2,
                pointY: 1.35,
                estacoes_adjacentes: [
                    'socorro',
                    'autodromo'
                ]
            }, {
                id: 'autodromo',
                name: 'Autódromo',
                pointX: 2,
                pointY: 1.50,
                estacoes_adjacentes: [
                    'jurubatuba',
                    'interlagos'
                ]
            }, {
                id: 'interlagos',
                name: 'Interlagos',
                pointX: 2,
                pointY: 1.65,
                estacoes_adjacentes: [
                    'autodromo',
                    'grajau'
                ]
            }, {
                id: 'grajau',
                name: 'Grajaú',
                pointX: 2,
                pointY: 1.80,
                estacoes_adjacentes: [
                    'interlagos',
                ]
            }
        ]
    }
}

var linha_roxa = {
    id: 'jundiai',
    name: 'Jundiai',
    pointX: 2,
    pointY: 1.80,
    estacoes_adjacentes: [
        'varzea_paulista',
    ]
}, outra_estação ={
    id: 'agua_branca',
    name: 'Água Branca',
    pointX: 2,
    pointY: 1.80,
    estacoes_adjacentes: [
        'lapa',
        'palmeiras_barra_funda'
    ]
}

linhas.linha_amarela.estacoes.forEach((estacao, index) => {
    g.nodes.push({
        id: estacao.id,
        label: estacao.name,
        x: estacao.pointX,
        y: estacao.pointY,
        size: 0.8,
        labelSize: "proportional",
        color: linhas.linha_amarela.circle_color
    })


})

linhas.linha_amarela.estacoes.forEach((node, index, nodes) => {
    node.estacoes_adjacentes.forEach((nextStation) => {
        g.edges.push({
            id: `e_${node.id}_${nextStation}_${index}`,
            source: node.id,
            target: nextStation,
            size: 3,
            color: linhas.linha_amarela.color
        });
    })

})


linhas.linha_esmeralda.estacoes.forEach((estacao, index) => {
    g.nodes.push({
        id: estacao.id,
        label: estacao.name,
        x: estacao.pointX,
        y: estacao.pointY,
        size: 0.8,
        color: linhas.linha_esmeralda.circle_color
    })


})

linhas.linha_esmeralda.estacoes.forEach((node, index, nodes) => {
    node.estacoes_adjacentes.forEach((nextStation) => {
        g.edges.push({
            id: `e_${node.id}_${nextStation}_${index}`,
            source: node.id,
            target: nextStation,
            size: 3,
            color: linhas.linha_esmeralda.color
        });
    })

})


// Generate a random graph:
// for (i = 0; i < N; i++)
//   g.nodes.push({
//     id: 'n' + i,
//     label: 'Node ' + i,
//     x: i,
//     y: 10,
//     size: 1,
//     color: '#666'
//   });

// for (i = 0; i < E; i++)
//   g.edges.push({
//     id: 'e' + i,
//     source: 'n' + (Math.random() * N | 0),
//     target: 'n' + (Math.random() * N | 0),
//     size: Math.random(),
//     color: '#ccc'
//   });

sigma.classes.graph.addMethod('neighbors', function (nodeId) {
    var k,
        neighbors = {},
        index = this.allNeighborsIndex[nodeId] || {};

    for (k in index)
        neighbors[k] = this.nodesIndex[k];

    return neighbors;
});

function config(s) {
    // We first need to save the original colors of our
    // nodes and edges, like this:
    s.graph.nodes().forEach(function (n) {
        n.originalColor = n.color;
    });
    s.graph.edges().forEach(function (e) {
        e.originalColor = e.color;
    });

    // When a node is clicked, we check for each node
    // if it is a neighbor of the clicked one. If not,
    // we set its color as grey, and else, it takes its
    // original color.
    // We do the same for the edges, and we only keep
    // edges that have both extremities colored.
    s.bind('clickNode', function (e) {
        var nodeId = e.data.node.id,
            toKeep = s.graph.neighbors(nodeId);
        toKeep[nodeId] = e.data.node;

        s.graph.nodes().forEach(function (n) {
            if (toKeep[n.id])
                n.color = n.originalColor;
            else
                n.color = '#eee';
        });

        s.graph.edges().forEach(function (e) {
            if (toKeep[e.source] && toKeep[e.target])
                e.color = e.originalColor;
            else
                e.color = '#eee';
        });

        // Since the data has been modified, we need to
        // call the refresh method to make the colors
        // update effective.
        s.refresh();
    });

    // When the stage is clicked, we just color each
    // node and edge with its original color.
    s.bind('clickStage', function (e) {
        s.graph.nodes().forEach(function (n) {
            n.color = n.originalColor;
        });

        s.graph.edges().forEach(function (e) {
            e.color = e.originalColor;
        });

        // Same as in the previous event:
        s.refresh();
    });
}

// Instantiate sigma:
s = new sigma({
    graph: g,
    container: 'graph-container',

});

config(s)


