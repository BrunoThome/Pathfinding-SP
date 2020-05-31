var linha_diamante =  {
        color: '#666',
        circle_color: '#0001',
        estacoes: [
            {
                id: 'amador_bueno',
                name: 'Amador Bueno',
                pointX: -1.4,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'santa_rita'
                ]
            }, {
                id: 'santa_rita',
                name: 'Santa Rita',
                pointX: -1.2,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'amador_bueno',
                    'itapevi'
                ]
            }, {
                id: 'itapevi',
                name: 'Itapevi',
                pointX: -1,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'santa_rita',
                    'eng_cardoso'                    

                ]
            }, {
                id: 'eng_cardoso',
                name: 'Engenheiro Cardoso',
                pointX: -0.8,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'itapevi',
                    'sagrado_coracao'
                ]
            }, {
                id: 'sagrado_coracao',
                name: 'Sagrado Coracao',
                pointX: -0.6,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'eng_cardoso',
                    'jandira'
                ]
            }, {
                id: 'jandira',
                name: 'Jandira',
                pointX: -0.4,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'sagrado_coracao',
                    'jardim_silveira'
                ]
            }, {
                id: 'jardim_silveira',
                name: 'Jardim Silveira',
                pointX: -0.2,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'jandira',
                    'jardim_belval'
                ]
            }, {
                id: 'jardim_belval',
                name: 'Jardim Belval',
                pointX: 0,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'jardim_silveira',
                    'barueri'
                ]
            }, {
                id: 'barueri',
                name: 'Barueri',
                pointX: 0.2,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'jardim_belval',
                    'antonio_joao'
                ]
            }, {
                id: 'antonio_joao',
                name: 'Antonio Joao',
                pointX: 0.4,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'barueri',
                    'santa_terezinha'
                ]
            },{
                id: 'santa_terezinha',
                name: 'Santa Terezinha',
                pointX: 0.6,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'antonio_joao',
                    'carapicuiba'
                ]
            },{
                id: 'carapicuiba',
                name: 'Carapicuiba',
                pointX: 0.8,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'santa_terezinha',
                    'gen_miguel_costa'
                ]
            },{
                id: 'gen_miguel_costa',
                name: 'General Miguel Costa',
                pointX: 1,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'carapicuiba',
                    'quitauna'
                ]
            },{
                id: 'quitauna',
                name: 'Quitauna',
                pointX: 1.25,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'gen_miguel_costa',
                    'com_sampaio'
                ]
            },{
                id: 'com_sampaio',
                name: 'Comandante Sampaio',
                pointX: 1.5,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'quitauna',
                    'osasco'
                ]
            },{
                id: 'imperatriz_leopoldina',
                name: 'Imperatriz Leopoldina',
                pointX: 2.6,
                pointY: -0.7,
                estacoes_adjacentes: [
                    'pres_altino',
                    'domingo_de_moraes'
                ]
            },{
                id: 'domingo_de_moraes',
                name: 'Domingo de Moraes',
                pointX: 2.9,
                pointY: -0.7,
                estacoes_adjacentes: [
                    'imperatriz_leopoldina',
                    'lapa2'
                ]
            },{
                id: 'lapa2',
                name: 'Lapa 2',
                pointX: 3.2,
                pointY: -0.7,
                estacoes_adjacentes: [
                    'domingo_de_moraes',
                    'palmeiras_barra_funda'
                    
                ]
            },{
                id: 'julio_prestes',
                name: 'Julio Prestes',
                pointX: 3.8,
                pointY: -0.7,
                estacoes_adjacentes: [
                    'palmeiras_barra_funda'                    
                ]
            }
        ]
    }
