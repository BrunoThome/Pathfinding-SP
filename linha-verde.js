var linhas = {
    'linha_verde': {
        color: '#f5f10a',
        circle_color: '#0001',
        estacoes: [
            {
                id: 'vila_madalena',
                name: 'Vila Madalena',
                pointX: 1,
                pointY: 0,
                estacoes_adjacentes: [
                    'sumare'
                ]
            }, {
                id: 'sumare',
                name: 'Sumaré',
                pointX: 1.5,
                pointY: 0,
                estacoes_adjacentes: [
                    'vila_madalena',
                    'clinicas'
                ]
            }, {
                id: 'clinicas',
                name: 'Clínicas',
                pointX: 2,
                pointY: 0,
                estacoes_adjacentes: [
                    'consolacao',
                    'sumare',

                ]
            }, {
                id: 'trianon_masp',
                name: 'Trianon - Masp',
                pointX: 2.5,
                pointY: 0,
                estacoes_adjacentes: [
                    'consolacao',
                    'brigadeiro'
                ]
            }, {
                id: 'brigadeiro',
                name: 'Brigadeiro',
                pointX: 3,
                pointY: 0,
                estacoes_adjacentes: [
                    'trianon_masp',
                    'paraiso'
                ]
            }, {
                id: 'santos_imigrantes',
                name: 'Santos - Imigrantes',
                pointX: 3.5,
                pointY: 0,
                estacoes_adjacentes: [
                    'chacara_klabin',
                    'alto_do_ipiranga'
                ]
            }, {
                id: 'alto_do_ipiranga',
                name: 'Alto do Ipiranga',
                pointX: 4,
                pointY: -0.2,
                estacoes_adjacentes: [
                    'sacoma',
                    'santos_imigrantes'
                ]
            },
        ]
    }
}