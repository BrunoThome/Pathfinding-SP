var linha_amarela =  {
    color: '#f5f10a',
    circle_color: '#0001',
    estacoes: [
        {
            id: 'sp_morumbi',
            name: 'Morumbi',
            pointX: 0,
            pointY: 0,
            estacoes_adjacentes: [
                'butanta'
            ]
        }, {
            id: 'butanta',
            name: 'Butantã',
            pointX: 1,
            pointY: 0,
            estacoes_adjacentes: [
                'sp_morumbi',
                'pinheiros'
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
            pointY: -0.15,
            estacoes_adjacentes: [
                'oscar_freire',
                'higienopolis'
            ]
        }, {
            id: 'higienopolis',
            name: 'Higienópolis',
            pointX: 4.5,
            pointY: -0.30,
            estacoes_adjacentes: [
                'paulista',
                'republica'
            ]
        }, {
            id: 'republica',
            name: 'Republica',
            pointX: 5,
            pointY: -0.45,
            estacoes_adjacentes: [
                'higienopolis',
                'luz'
            ]
        }, {
            id: 'luz',
            name: 'Luz',
            pointX: 5.5,
            pointY: -0.60,
            estacoes_adjacentes: [
                'republica',
            ]
        }
    ]
}