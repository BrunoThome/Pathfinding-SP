var linha_azul ={
    'linha_azul': {
        color: '#0000FF',
        circle_color: '#0001',
        estacoes: [
            {
                id: 'tucuruvi',
                name: 'Tucuruvi',
                pointX: 1,
                pointY: 0,
                estacoes_adjacentes: [
                    'parada_inglesa'
                ]
            }, {
                id: 'parada_inglesa',
                name: 'Parada Inglesa',
                pointX: 1.5,
                pointY: 0,
                estacoes_adjacentes: [
                    'Tucuruvi',
                    'jardim_sao_paulo_ayrton_senna'
                ]
            }, {
                id: 'jardim_sao_paulo_ayrton_senna',
                name: 'Jardim Sao Paulo Ayrton Senna',
                pointX: 2,
                pointY: 0,
                estacoes_adjacentes: [
                    'parada_inglesa',
                    'santana' 
                ]
            }, {
                id: 'santana',
                name: 'Santana',
                pointX: 2.5,
                pointY: 0,
                estacoes_adjacentes: [
                    'jardim_sao_paulo_ayrton_senna',
                    'carandiru'
                ]
            }, {
                id: 'carandiru',
                name: 'Carandiru',
                pointX: 3,
                pointY: 0,
                estacoes_adjacentes: [
                    'santana',
                    'portuguesa_tiete'
                ]
            }, {
                id: 'portuguesa_tiete',
                name: 'Portuguesa Tiete',
                pointX: 3.5,
                pointY: 0,
                estacoes_adjacentes: [
                    'santana',
                    'armenia'
                ]
            }, {
                id: 'armenia',
                name: 'Armenia',
                pointX: 4,
                pointY: -0.2,
                estacoes_adjacentes: [
                    'portuguesa_tiete',
                    'tiradentes'
                ]
            }, {
                id: 'tiradentes',
                name: 'Tiradentes',
                pointX: 4.5,
                pointY: -0.4,
                estacoes_adjacentes: [
                    'armenia',
                    'luz'
                ]
            }, {
                id: 'sao_bento',
                name: 'Sao Bento',
                pointX: 5,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'luz',
                    'se'
                ]
            },
            {
                id: 'japao_liberdade',
                name: 'Japao Liberdade',
                pointX: 5,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'se',
                    'sao_joaquim'
                ]
            },
            {
                id: 'sao_joaquim',
                name: 'Sao Joaquim',
                pointX: 5,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'japao_liberdade',
                    'vergueiro'
                ]
            },
            {
                id: 'vergueiro',
                name: 'Vergueiro',
                pointX: 5,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'sao_joaquim',
                    'paraiso'
                ]
            },
            {
                id: 'vila_mariana',
                name: 'Vila Mariana',
                pointX: 5,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'ana_rosa',
                    'santa_cruz'
                ]
            },
            {
                id: 'praca_da_arvore',
                name: 'Praca da Arvore',
                pointX: 5,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'santa_cruz',
                    'saude'
                ]
            },
            {
                id: 'saude',
                name: 'Saude',
                pointX: 5,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'praca_da_arvore',
                    'sao_judas'
                ]
            },
            {
                id: 'sao_judas',
                name: 'Sao Judas ',
                pointX: 5,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'saude',
                    'conceisao'
                ]
            },
            {
                id: 'conceisao',
                name: 'Conceisao',
                pointX: 5,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'sao_judas',
                    'jabaquara'
                ]
            },
            {
                id: 'jabaquara',
                name: 'Jabaquara',
                pointX: 5,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'sao_judas'
                ]
            }
             
        ]
    }
}