var linhas = {
    'linha_rubi': {
        color: '#f5f10a',
        circle_color: '#0001',
        estacoes: [
            {
                id: 'Jundiai',
                name: 'Jundiaí',
                pointX: 1,
                pointY: 5,
                estacoes_adjacentes: [
                    'Varzea_Paulista'
                ]
            }, {
                id: 'Varzea_Paulista',
                name: 'Várzea Paulista',
                pointX: 1.5,
                pointY: 5,
                estacoes_adjacentes: [
                    'Jundiai',
                    'Campo_limpo_paulista'
                ]
            }, {
                id: 'Campo_limpo_paulista',
                name: 'Campo Limpo Paulista',
                pointX: 2,
                pointY: 5,
                estacoes_adjacentes: [
                    'botujuru',
                    'Varzea_Paulista',

                ]
            }, {
                id: 'botujuru',
                name: 'Botujuru',
                pointX: 2.5,
                pointY: 5,
                estacoes_adjacentes: [
                    'Campo_limpo_paulista',
                    'Francisco_Morato'
                ]
            }, {
                id: 'Francisco_Morato',
                name: 'Francisco Morato',
                pointX: 3.5,
                pointY: 5,
                estacoes_adjacentes: [
                    'botujuru',
                    'Baltasar_Fidelis'
                ]
            }, {
                id: 'Baltasar_Fidelis',
                name: 'Baltasar Fidélis',
                pointX: 4,
                pointY: -0.2,
                estacoes_adjacentes: [
                    'Francisco_Morato',
                    'Franco_da_Rocha'
                ]
            }, {
                id: 'Franco_da_Rocha',
                name: 'Franco da Rocha',
                pointX: 4.5,
                pointY: -0.7,
                estacoes_adjacentes: [
                    'Baltasar_Fidelis',
                    'caieiras'
                ]
            }, {
                id: 'caieiras',
                name: 'Caieiras',
                pointX: 5,
                pointY: -0.8,
                estacoes_adjacentes: [
                    'Franco_da_Rocha',
                    'perus'
                ]
            }, {
                id: 'perus',
                name: 'Perus',
                pointX: 5.5,
                pointY: -0.9,
                estacoes_adjacentes: [
                    'caieiras',
                    'Vila_Aurora'
                ]
            }
            {
                id: 'Vila_Aurora',
                name: 'Vila Aurora',
                pointX: 5.5,
                pointY: -0.11,
                estacoes_adjacentes: [
                    'perus',
                    'jaragua'
                ]
            }
            {
                id: 'jaragua',
                name: 'Jaraguá',
                pointX: 5.5,
                pointY: -0.8,
                estacoes_adjacentes: [
                    'Vila_Aurora',
                    'Vila_Clarice'
                ]
            }
            {
                id: 'Vila_Clarice',
                name: 'Vila Clarice',
                pointX: 5.5,
                pointY: -0.15,
                estacoes_adjacentes: [
                    'jaragua',
                    'pirituba'
                ]
            }
            {
                id: 'pirituba',
                name: 'Pirituba',
                pointX: 5.5,
                pointY: -0.8,
                estacoes_adjacentes: [
                    'Vila_Clarice',
                    'piqueri'
                ]
            }
            {
                id: 'piqueri',
                name: 'Piqueri',
                pointX: 5.5,
                pointY: -0.8,
                estacoes_adjacentes: [
                    'pirituba',
                    'lapa'
                ]
            }
            {
                id: 'lapa',
                name: 'Lapa',
                pointX: 5.5,
                pointY: -0.8,
                estacoes_adjacentes: [
                    'piqueri',
                    'Agua_Branca'
                ]
            }
            {
                id: 'Agua_Branca',
                name: 'Água Branca',
                pointX: 5.5,
                pointY: -0.8,
                estacoes_adjacentes: [
                    'lapa',
                    'Palmeiras_barra_funda'
                ]
            }
             
        ]
    },