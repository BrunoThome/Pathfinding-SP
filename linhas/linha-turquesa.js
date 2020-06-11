var linha_turquesa ={
	color: '#8b0000',
        circle_color: '#0001',
        estacoes: [
            {
                id: 'Juventus-Mooca',
                name: 'Juventus-Mooca',
                pointX: 1,
                pointY: 4,
                estacoes_adjacentes: [
                    'bras',
                    'Ipiranga'
                ]
            }, {
                id: 'Ipiranga',
                name: 'Ipiranga',
                pointX: 1.5,
                pointY: 4,
                estacoes_adjacentes: [
                    'Tamanduatei',
                    'Juventus-Mooca'
                ]
            }, {
                id: 'Sao_Caetano_Sul',
                name: 'São Caetano do Sul',
                pointX: 2,
                pointY: 4,
                estacoes_adjacentes: [
                    'Tamanduatei',
                    'Utinga'

                ]
            }, {
                id: 'Utinga',
                name: 'Utinga',
                pointX: 2.5,
                pointY: 4,
                estacoes_adjacentes: [
                    'Sao_Caetano_Sul',
                    'Prefeito_Saladino'
                ]
            }, {
                id: 'Prefeito_Saladino',
                name: 'Prefeito Saladino',
                pointX: 3,
                pointY: 4,
                estacoes_adjacentes: [
                    'Utinga',
                    'Santo_Andre'
                ]
            }, {
                id: 'Santo_Andre',
                name: 'Santo André',
                pointX: 3.5,
                pointY: 4,
                estacoes_adjacentes: [
                    'Prefeito_Saladino',
                    'Capuava'
                ]
            }, {
                id: 'Capuava',
                name: 'Capuava',
                pointX: 4,
                pointY: 4,
                estacoes_adjacentes: [
                    'Santo_Andre',
                    'Maua'
                ]
            }, {
                id: 'Maua',
                name: 'Mauá',
                pointX: 4.5,
                pointY: 3,
                estacoes_adjacentes: [
                    'Capuava',
                    'Guapituba'
                ]
            }, {
                id: 'Guapituba',
                name: 'Guapituba',
                pointX: 5,
                pointY: 4,
                estacoes_adjacentes: [
                    'Maua',
                    'Ribeirao_Pires'
                ]
            }, {
                id: 'Ribeirao_Pires',
                name: 'Ribeirão Pires',
                pointX: 5.5,
                pointY: 4,
                estacoes_adjacentes: [
                    'Guapituba',
                    'Rio_Grande_Serra'
                ]
            }, {
                id: 'Rio_Grande_Serra',
                name: 'Rio Grande da Serra',
                pointX: 6,
                pointY: 4,
                estacoes_adjacentes: [
                    'Ribeirao_Pires',
                ]
            }
        ]
}