var linhas = {
    'linha_safira': {
        color: '#f5f10a',
        circle_color: '#0001',
        estacoes: [
            {
                id: 'aracaré', //intersecção com a linha 11
                name: 'Aracaré',
                pointX: 1,
                pointY: 0,
                estacoes_adjacentes: [
                    'itaquaquecetuba'
                ]
            }, {
                id: 'itaquaquecetuba',
                name: 'Itaquaquecetuba',
                pointX: 1.5,
                pointY: 0,
                estacoes_adjacentes: [
                    'aracaré',
                    'eng_manoel_feio'
                
                ]
            }, {
                id: 'eng_manoel_feio',
                name: 'Engenheiro Manoel Feio',
                pointX: 2,
                pointY: 0,
                estacoes_adjacentes: [
                    'itaquaquecetuba',
                    'jardim_romano',

                ]
            }, {
                id: 'jardim_romano',
                name: 'Jardim Romano',
                pointX: 2.5,
                pointY: 0,
                estacoes_adjacentes: [
                    'eng_manoel_feio',
                    'itaim_paulista'
                ]
            }, {
                id: 'itaim_paulista',
                name: 'Itaim Paulista',
                pointX: 3,
                pointY: 0,
                estacoes_adjacentes: [
                    'jardim_romano',
                    'jardim_helena'
                ]
            }, {
                id: 'jardim_helena',
                name: 'Jardim Helena - Vila Mara',
                pointX: 3.5,
                pointY: 0,
                estacoes_adjacentes: [
                    'itaim_paulista',
                    'sao_miguel_paulista'
                ]
            }, {
                id: 'sao_miguel_paulista',
                name: 'Sao Miguel Paulista',
                pointX: 4,
                pointY: -0.2,
                estacoes_adjacentes: [
                    'jardim_helena',
                    'comendador_ermelino'
                ]
            }, {
                id: 'comendador_ermelino',
                name: 'Comendador Ermelino',
                pointX: 4,
                pointY: -0.2,
                estacoes_adjacentes: [
                    'sao_miguel_paulista',
                    'usp_leste'
                ]
            },{
                id: 'usp_leste',
                name: 'USP Leste',
                pointX: 4,
                pointY: -0.2,
                estacoes_adjacentes: [
                    'eng_goulart',
                    'comendador_ermelino'
                ]
            },
        ]
    }
}