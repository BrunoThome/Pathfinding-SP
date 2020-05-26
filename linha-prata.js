var linha_prata ={
	color: '#c0c0c0',
        circle_color: '#0001',
        estacoes: [
            {
                id: 'Oratorio',
                name: 'Oratório',
                pointX: 1,
                pointY: 6,
                estacoes_adjacentes: [
                    'Vila_Prudente',
                    'Sao_Lucas'
                ]
            }, {
                id: 'Sao_Lucas',
                name: 'São Lucas',
                pointX: 1.5,
                pointY: 6,
                estacoes_adjacentes: [
                    'Oratorio',
                    'Camilo_Haddad'
                ]
            }, {
                id: 'Camilo_Haddad',
                name: 'Camilo Haddad',
                pointX: 2,
                pointY: 6,
                estacoes_adjacentes: [
                    'Sao_Lucas',
                    'Vila_Tolstoi'

                ]
            }, {
                id: 'Vila_Tolstoi',
                name: 'Vila Tolstói',
                pointX: 2.5,
                pointY: 6,
                estacoes_adjacentes: [
                    'Camilo_Haddad',
                    'Vila_Uniao'
                ]
            }, {
                id: 'Vila_Uniao',
                name: 'Vila União',
                pointX: 3,
                pointY: 6,
                estacoes_adjacentes: [
                    'Vila_Tolstoi',
                    'Jd_Planalto'
                ]
            }, {
                id: 'Jd_Planalto',
                name: 'Jd. Planalto',
                pointX: 3.5,
                pointY: 6,
                estacoes_adjacentes: [
                    'Vila_Uniao'
                ]
            }
        ]
}