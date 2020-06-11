var linha_coral =  {
        color: '#f5f10a',
        circle_color: '#0001',
        estacoes: [
            {
                id: 'dom_bosco',
                name: 'Dom Bosco',
                pointX: 1,
                pointY: 0,
                estacoes_adjacentes: [
                    'corinthias_itaquera',
                    'jose_bonifacio'
                ]
            }, {
                id: 'jose_bonifacio',
                name: 'Jose Boniacio',
                pointX: 1.5,
                pointY: 0,
                estacoes_adjacentes: [
                    'dom_bosco',
                    'guaianases'
                ]
            }, {
                id: 'guaianases',
                name: 'Guaianases',
                pointX: 2,
                pointY: 0,
                estacoes_adjacentes: [
                    'jose_bonifacio',
                    'antonio_gianetti_neto'                    

                ]
            }, {
                id: 'antonio_gianetti_neto',
                name: 'Antonio Gianetti Neto',
                pointX: 2.5,
                pointY: 0,
                estacoes_adjacentes: [
                    'guaianases',
                    'ferraz_de_vasconcelos'
                ]
            }, {
                id: 'ferraz_de_vasconcelos',
                name: 'Ferraz de Vasconcelos',
                pointX: 3,
                pointY: 0,
                estacoes_adjacentes: [
                    'antonio_gianetti_neto',
                    'poa'
                ]
            }, {
                id: 'poa',
                name: 'Poa',
                pointX: 3.5,
                pointY: 0,
                estacoes_adjacentes: [
                    'ferraz_de_vasconcelos',
                    'calmon_viana'
                ]
            }, {
                id: 'suzano',
                name: 'Suzano',
                pointX: 4,
                pointY: -0.2,
                estacoes_adjacentes: [
                    'calmon_viana',
                    'jundiapeba'
                ]
            }, {
                id: 'jundiapeba',
                name: 'Jundiapeba',
                pointX: 4.5,
                pointY: -0.4,
                estacoes_adjacentes: [
                    'suzano',
                    'braz_cubas'
                ]
            }, {
                id: 'braz_cubas',
                name: 'Braz Cubas',
                pointX: 5,
                pointY: -0.6,
                estacoes_adjacentes: [
                    'jundiapeba',
                    'mogi_das_cruzes'
                ]
            }, {
                id: 'mogi_das_cruzes',
                name: 'Mogi das Cruzes',
                pointX: 5.5,
                pointY: -0.8,
                estacoes_adjacentes: [
                    'braz_cubas',
                    'estudantes'
                ]
            },{
                id: 'estudantes',
                name: 'Estudantes',
                pointX: 5.5,
                pointY: -0.8,
                estacoes_adjacentes: [
                    'mogi_das_cruzes',
                ]
            }
        ]
    }
