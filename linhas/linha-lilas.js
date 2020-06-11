var linha_lilas = {
    color: '#A7349D',
    circle_color: '#000',
    estacoes: [
        {
            id: 'Capao_Redondo',
            name: 'Capão Redondo',
            pointX: 0,
            pointY: 1.05,
            estacoes_adjacentes: [
                'Campo_Limpo'
            ]
        }, {
            id: 'Campo_Limpo',
            name: 'Campo Limpo',
            pointX: 0.5,
            pointY: 1.05,
            estacoes_adjacentes: [
                'Capao_Redondo',
                'Vila_das_Belezas',
            ]
        }, {
            id: 'Vila_das_Belezas',
            name: 'Vila das Belezas',
            pointX: 1,
            pointY: 1.05,
            estacoes_adjacentes: [
                'Campo_Limpo',
                'Giovanni_Gronchi',

            ]
        }, {
            id: 'Giovanni_Gronchi',
            name: 'Giovanni Gronchi',
            pointX: 1.5,
            pointY: 1.05,
            estacoes_adjacentes: [
                'Vila_das_Belezas',
                'santo_amaro'
            ]
        }, {
            id: 'Largo_Treze',
            name: 'Largo Treze',
            pointX: 2.3,
            pointY: 1.05,
            estacoes_adjacentes: [
                'santo_amaro',
                'Adolfo_Pinheiro'
            ]
        }, {
            id: 'Adolfo_Pinheiro',
            name: 'Adolfo Pinheiro',
            pointX: 2.6,
            pointY: 1.05,
            estacoes_adjacentes: [
                'Largo_Treze',
                'Alto_da_Boa_Vista'
            ]
        }, {
            id: 'Alto_da_Boa_Vista',
            name: 'Alto da Boa Vista',
            pointX: 2.9,
            pointY: 1.05,
            estacoes_adjacentes: [
                'Adolfo_Pinheiro',
                'Borba_Gato'
            ]
        }, {
            id: 'Borba_Gato',
            name: 'Borba Gato',
            pointX: 3.2,
            pointY: 1.05,
            estacoes_adjacentes: [
                'Alto_da_Boa_Vista',
                'brooklin'
            ]
        }, {
            id: 'brooklin',
            name: 'Brooklin',
            pointX: 3.5,
            pointY: 1.05,
            estacoes_adjacentes: [
                'Borba_Gato',
                'Campo_Belo'
            ]
        },
        {
            id: 'Campo_Belo',
            name: 'Campo Belo',
            pointX: 3.9,
            pointY: 1.05,
            estacoes_adjacentes: [
                'brooklin',
                'eucalipto'
            ]
        },
        {
            id: 'eucalipto',
            name: 'Eucalipto',
            pointX: 4.1,
            pointY: 0.9,
            estacoes_adjacentes: [
                'Campo_Belo',
                'moema'
            ]
        },
        {
            id: 'moema',
            name: 'Moema',
            pointX: 4.3,
            pointY: 0.75,
            estacoes_adjacentes: [
                'eucalipto',
                'AACD_Servidor'
            ]
        },
        {
            id: 'AACD_Servidor',
            name: 'AACD - Servidor',
            pointX: 4.5,
            pointY: 0.6,
            estacoes_adjacentes: [
                'moema',
                'Hospital_SP'
            ]
        },
        {
            id: 'Hospital_SP',
            name: 'Hospital São Paulo',
            pointX: 4.7,
            pointY: 0.45,
            estacoes_adjacentes: [
                'AACD_Servidor',
                'santa_cruz'
                
            ]
        }

    ]
}