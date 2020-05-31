var linha_esmeralda =  {
    color: '#00A88E',
    circle_color: '#0003',
    estacoes: [
        {
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