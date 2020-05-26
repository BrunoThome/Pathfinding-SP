var linhas = {
    'linha_lilas': {
        color: '#f5f10a',
        circle_color: '#0001',
        estacoes: [
            {
                id: 'Capao_Redondo',
                name: 'Capão Redondo',
                pointX: 1,
                pointY: 0,
                estacoes_adjacentes: [
                    'Campo_Limpo'
                ]
            }, {
                id: 'Campo_Limpo',
                name: 'Campo Limpo',
                pointX: 1.5,
                pointY: 0,
                estacoes_adjacentes: [
                    'Capao_Redondo',
                    'Vila_das_Belezas'
                ]
            }, {
                id: 'Vila_das_Belezas',
                name: 'Vila das Belezas',
                pointX: 2,
                pointY: 0,
                estacoes_adjacentes: [
                    'Campo_Limpo',
                    'Giovanni_Gronchi',

                ]
            }, {
                id: 'Giovanni_Gronchi',
                name: 'Giovanni Gronchi',
                pointX: 2.5,
                pointY: 0,
                estacoes_adjacentes: [
                    'Vila_das_Belezas',
                    'Santo_Amaro'
                ]
            }, {
                id: 'Largo_Treze',
                name: 'Largo Treze',
                pointX: 3.5,
                pointY: 0,
                estacoes_adjacentes: [
                    'Santo_Amaro',
                    'Adolfo_Pinheiro'
                ]
            }, {
                id: 'Adolfo_Pinheiro',
                name: 'Adolfo Pinheiro',
                pointX: 4,
                pointY: -0.2,
                estacoes_adjacentes: [
                    'Largo_Treze',
                    'Alto_da_Boa_Vista'
                ]
            }, {
                id: 'Alto da Boa Vista',
                name: 'Alto da Boa Vista',
                pointX: 4.5,
                pointY: -0.4,
                estacoes_adjacentes: [
                    'Adolfo_Pinheiro',
                    'Borba_Gato'
                ]
            }, {
                id: 'Borba_Gato',
                name: 'Borba Gato',
                pointX: 5,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'Alto da Boa Vista',
                    'brooklin'
                ]
            }, {
                id: 'brooklin',
                name: 'Brooklin',
                pointX: 5.5,
                pointY: -0.8,
                estacoes_adjacentes: [
                    'Borba_Gato',
                    'Campo_Belo'
                ]
            }
            {
                id: 'Campo_Belo',
                name: 'Campo Belo',
                pointX: 5.5,
                pointY: -0.8,
                estacoes_adjacentes: [
                    'brooklin',
                    'eucaliptos'
                ]
            }
            {
                id: 'eucalipto',
                name: 'Eucalipto',
                pointX: 5.5,
                pointY: -0.8,
                estacoes_adjacentes: [
                    'Campo_Belo',
                    'moema'
                ]
            }
            {
                id: 'moema',
                name: 'Moema',
                pointX: 5.5,
                pointY: -0.8,
                estacoes_adjacentes: [
                    'eucalipto',
                    'AACD_Servidor'
                ]
            }
            {
                id: 'AACD_Servidor',
                name: 'AACD - Servidor',
                pointX: 5.5,
                pointY: -0.8,
                estacoes_adjacentes: [
                    'moema',
                    'Hospital_SP'
                ]
            }
            {
                id: 'Hospital_SP',
                name: 'Hospital São Paulo',
                pointX: 5.5,
                pointY: -0.8,
                estacoes_adjacentes: [
                    'AACD_Servidor',
                    'Vila_Mariana'
                ]
            }
             
        ]
    },