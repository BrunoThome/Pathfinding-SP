var especial_points = {
    circle_color: '#000',
    estacoes: [
        {
            id: 'pinheiros',
            name: 'Pinheiros',
            pointX: 2.12,
            pointY: 0,
            estacoes_adjacentes: [
                'hebraica',
                'faria_lima'
            ]
        },{
            id: 'osasco',
            name: 'Osasco',
            pointX: 1.86,
            color: "#00A88E",
            pointY: -1.35,
            estacoes_adjacentes: [
                'com_sampaio',
                "pres_altino"
            ]
        },{
            id: 'pres_altino',
            name: "Pres. Altino",
            pointX: 2.06,
            pointY: -1.35,
            estacoes_adjacentes: [
                "osasco",
                "ceasa",
                "imperatriz_leopoldina"
            ]
        }, {
            id: 'santo_amaro',
            name: 'Santo Amaro',
            pointX: 2,
            pointY: 1.05,
            estacoes_adjacentes: [
                "granja_julieta",
                "socorro",
                "Giovanni_Gronchi",
                "Largo_Treze"
            ]
        }, {
            id: 'santa_cruz',
            name: 'Santa Cruz',
            pointX: 4.9,
            pointY: 0.45,
            color: '#A7349D',
            estacoes_adjacentes: [
                "chacara_klabin",
            ]
        }, {
            id: 'chacara_klabin',
            name: 'Chacará Klabin',
            pointX: 5.1,
            pointY: 0.3,
            estacoes_adjacentes: [
            ]
        }, {
            id: 'palmeiras_barra_funda',
            name: 'Palmeiras - Barra funda',
            pointX: 3.5,
            pointY: -0.7,
            estacoes_adjacentes: [
                'lapa2',
                'julio_prestes'
            ]
        }
    ]
}
