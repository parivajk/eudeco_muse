/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Beground_light_Cop2',
                            display: 'none',
                            type: 'image',
                            rect: ['-1px', '0px', '962px', '646px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Beground_light_Cop2.png",'0px','0px']
                        },
                        {
                            id: 'also_sav',
                            symbolName: 'also_sav',
                            type: 'rect',
                            rect: ['216px', '549', '528', '97', 'auto', 'auto']
                        },
                        {
                            id: 'Jobb_oldali_sav4',
                            symbolName: 'Jobb_oldali_sav',
                            type: 'rect',
                            rect: ['734px', '0px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['180']]
                        },
                        {
                            id: 'Merleg',
                            symbolName: 'Merleg',
                            type: 'rect',
                            rect: ['663px', '152px', '195', '216', 'auto', 'auto'],
                            transform: [[],[],[],['0.88','0.88'],['75%','78%']]
                        },
                        {
                            id: 'Felso_sav',
                            symbolName: 'Felso_sav',
                            type: 'rect',
                            rect: ['216px', '0px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['180']]
                        },
                        {
                            id: 'foldgomb3',
                            symbolName: 'foldgomb',
                            type: 'rect',
                            rect: ['428px', '12px', '99', '97', 'auto', 'auto'],
                            transform: [[],[],[],['0.59091','0.59091']]
                        },
                        {
                            id: 'bal_oldal_sav',
                            symbolName: 'bal_oldal_sav',
                            type: 'rect',
                            rect: ['-1px', '0', '226', '646', 'auto', 'auto']
                        },
                        {
                            id: 'szinhaz',
                            type: 'image',
                            rect: ['78px', '5px', '192px', '152px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"szinhaz.png",'0px','0px'],
                            transform: [[],[],[],['0.88','0.88']]
                        },
                        {
                            id: 'data_idojaras',
                            type: 'image',
                            rect: ['674px', '15px', '203px', '139px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"data_idojaras.png",'0px','0px'],
                            transform: [[],[],[],['0.88','0.88']]
                        },
                        {
                            id: 'weather_szinhaz',
                            display: 'none',
                            type: 'image',
                            rect: ['50px', '486px', '249px', '163px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"weather_szinhaz.png",'0px','0px'],
                            transform: [[],[],[],['0.88','0.88']]
                        },
                        {
                            id: 'save_operation_less_cloud',
                            type: 'image',
                            rect: ['662px', '478px', '226px', '171px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"save_operation_less_cloud.png",'0px','0px'],
                            transform: [[],[],[],['0.88','0.88']]
                        },
                        {
                            id: 'data_users_smal_repulo',
                            type: 'image',
                            rect: ['-204px', '-252px', '1542px', '1404px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"data_users_smal_repulo.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'data_processors',
                            type: 'image',
                            rect: ['-57px', '-385px', '1407px', '1407px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"data_processors.png",'0px','0px'],
                            transform: [[],[],[],['0.07','0.07']]
                        },
                        {
                            id: 'data_holders',
                            type: 'image',
                            rect: ['-150px', '-499px', '1396px', '1384px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"data_holders.png",'0px','0px'],
                            transform: [[],[],[],['0.07','0.07']]
                        },
                        {
                            id: 'data_holders_big',
                            type: 'image',
                            rect: ['-342px', '-499px', '1485px', '1384px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"data_holders_big.png",'0px','0px'],
                            transform: [[],[],[],['0.07','0.07']]
                        },
                        {
                            id: 'data_distributors',
                            type: 'image',
                            rect: ['-470px', '-396px', '1542px', '1432px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"data_distributors.png",'0px','0px'],
                            transform: [[],[],[],['0.07','0.07']]
                        },
                        {
                            id: 'data_users_big',
                            type: 'image',
                            rect: ['-373px', '-242px', '1543px', '1386px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"data_users_big.png",'0px','0px'],
                            transform: [[],[],[],['0.07','0.07']]
                        },
                        {
                            id: 'vallas_merleg',
                            type: 'image',
                            rect: ['934px', '156px', '99px', '106px', 'auto', 'auto'],
                            clip: 'rect(0px 86.0986328125px 79.847412109375px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"vallas_merleg.png",'0px','0px'],
                            transform: [[],[],[],['0.81','0.81']]
                        },
                        {
                            id: 'vallas_merlegCopy3',
                            type: 'image',
                            rect: ['743px', '319px', '150px', '160px', 'auto', 'auto'],
                            clip: 'rect(0.697265625px 152.4033203125px 161.286865234375px -2.5224609375px)',
                            fill: ["rgba(0,0,0,0)",im+"jog_konyv-min.png",'0px','0px'],
                            transform: [[],['-28'],[],['0.3','0.3'],['78%','88%']]
                        },
                        {
                            id: 'villaskulcs2',
                            symbolName: 'villaskulcs',
                            type: 'rect',
                            rect: ['122px', '300px', '47', '46', 'auto', 'auto'],
                            opacity: 0.82926829268293,
                            transform: [[],[],[],['1.26','1.26']]
                        },
                        {
                            id: 'enablers_gomb',
                            symbolName: 'enablers_gomb',
                            type: 'rect',
                            rect: ['450', '562px', '73', '58', 'auto', 'auto']
                        },
                        {
                            id: 'diagramm-min',
                            type: 'image',
                            rect: ['572px', '-68px', '83px', '48px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"diagramm-min.png",'0px','0px']
                        },
                        {
                            id: 'busz-min',
                            type: 'image',
                            rect: ['303px', '58px', '104px', '28px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"busz-min.png",'0px','0px']
                        },
                        {
                            id: 'kalap_penz-min',
                            type: 'image',
                            rect: ['333px', '635px', '58px', '57px', 'auto', 'auto'],
                            clip: 'rect(26.771728515625px 59px 58px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"kalap_penz-min.png",'0px','0px'],
                            transform: [[],[],[],['1.5','1.5']]
                        },
                        {
                            id: 'kalap_penz-minCopy',
                            type: 'image',
                            rect: ['568px', '569px', '58px', '57px', 'auto', 'auto'],
                            clip: 'rect(0px 58px 24.716552734375px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"kalap_penz-min.png",'0px','0px'],
                            transform: [[],[],[],['1.7','1.7'],['50%','1%']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '960px', '646px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 5873,
                    autoPlay: true,
                    data: [
                        [
                            "eid132",
                            "scaleY",
                            3250,
                            750,
                            "easeOutBounce",
                            "${data_users_smal_repulo}",
                            '0',
                            '0.07'
                        ],
                        [
                            "eid138",
                            "scaleY",
                            4373,
                            750,
                            "easeOutBounce",
                            "${data_holders_big}",
                            '0',
                            '0.07'
                        ],
                        [
                            "eid206",
                            "opacity",
                            585,
                            415,
                            "easeOutQuad",
                            "${vallas_merlegCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid89",
                            "rotateZ",
                            1722,
                            0,
                            "easeOutQuad",
                            "${Felso_sav}",
                            '180deg',
                            '180deg'
                        ],
                        [
                            "eid134",
                            "scaleY",
                            3623,
                            750,
                            "easeOutBounce",
                            "${data_processors}",
                            '0',
                            '0.07'
                        ],
                        [
                            "eid137",
                            "scaleX",
                            4373,
                            750,
                            "easeOutBounce",
                            "${data_holders_big}",
                            '0',
                            '0.07'
                        ],
                        [
                            "eid133",
                            "scaleX",
                            3623,
                            750,
                            "easeOutBounce",
                            "${data_processors}",
                            '0',
                            '0.07'
                        ],
                        [
                            "eid139",
                            "scaleX",
                            4750,
                            750,
                            "easeOutBounce",
                            "${data_distributors}",
                            '0',
                            '0.07'
                        ],
                        [
                            "eid236",
                            "opacity",
                            427,
                            500,
                            "easeOutCubic",
                            "${diagramm-min}",
                            '0',
                            '1'
                        ],
                        [
                            "eid94",
                            "left",
                            1628,
                            0,
                            "easeOutQuad",
                            "${Jobb_oldali_sav4}",
                            '734px',
                            '734px'
                        ],
                        [
                            "eid144",
                            "display",
                            8,
                            0,
                            "easeOutBounce",
                            "${Beground_light_Cop2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid229",
                            "scaleX",
                            1492,
                            750,
                            "easeOutBounce",
                            "${enablers_gomb}",
                            '0',
                            '1'
                        ],
                        [
                            "eid214",
                            "left",
                            500,
                            637,
                            "easeOutQuad",
                            "${vallas_merlegCopy3}",
                            '867px',
                            '743px'
                        ],
                        [
                            "eid91",
                            "top",
                            1722,
                            0,
                            "easeOutQuad",
                            "${Felso_sav}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid254",
                            "scaleX",
                            927,
                            500,
                            "easeOutCubic",
                            "${kalap_penz-minCopy}",
                            '0',
                            '1.7'
                        ],
                        [
                            "eid235",
                            "scaleX",
                            427,
                            500,
                            "easeOutCubic",
                            "${diagramm-min}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid205",
                            "scaleX",
                            585,
                            415,
                            "easeOutQuad",
                            "${vallas_merlegCopy3}",
                            '0',
                            '0.3'
                        ],
                        [
                            "eid125",
                            "opacity",
                            2451,
                            673,
                            "linear",
                            "${data_idojaras}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid251",
                            "top",
                            750,
                            878,
                            "easeOutCubic",
                            "${kalap_penz-minCopy}",
                            '639px',
                            '569px'
                        ],
                        [
                            "eid253",
                            "scaleY",
                            927,
                            500,
                            "easeOutCubic",
                            "${kalap_penz-minCopy}",
                            '0',
                            '1.7'
                        ],
                        [
                            "eid227",
                            "scaleX",
                            750,
                            750,
                            "easeOutBounce",
                            "${villaskulcs2}",
                            '0',
                            '1.26'
                        ],
                        [
                            "eid247",
                            "scaleY",
                            927,
                            500,
                            "easeOutCubic",
                            "${kalap_penz-min}",
                            '0',
                            '1.5'
                        ],
                        [
                            "eid215",
                            "left",
                            500,
                            637,
                            "easeOutQuad",
                            "${vallas_merleg}",
                            '934px',
                            '798px'
                        ],
                        [
                            "eid241",
                            "top",
                            250,
                            1038,
                            "easeOutCubic",
                            "${busz-min}",
                            '-58px',
                            '58px'
                        ],
                        [
                            "eid246",
                            "opacity",
                            927,
                            500,
                            "easeOutCubic",
                            "${kalap_penz-min}",
                            '0',
                            '1'
                        ],
                        [
                            "eid245",
                            "scaleX",
                            927,
                            500,
                            "easeOutCubic",
                            "${kalap_penz-min}",
                            '0',
                            '1.5'
                        ],
                        [
                            "eid224",
                            "scaleY",
                            1137,
                            750,
                            "easeOutBounce",
                            "${foldgomb3}",
                            '0',
                            '0.59'
                        ],
                        [
                            "eid244",
                            "scaleX",
                            427,
                            500,
                            "easeOutCubic",
                            "${busz-min}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid228",
                            "scaleY",
                            750,
                            750,
                            "easeOutBounce",
                            "${villaskulcs2}",
                            '0',
                            '1.26'
                        ],
                        [
                            "eid142",
                            "scaleY",
                            5123,
                            750,
                            "easeOutBounce",
                            "${data_users_big}",
                            '0',
                            '0.07'
                        ],
                        [
                            "eid136",
                            "scaleY",
                            4000,
                            750,
                            "easeOutBounce",
                            "${data_holders}",
                            '0',
                            '0.07'
                        ],
                        [
                            "eid230",
                            "scaleY",
                            1492,
                            750,
                            "easeOutBounce",
                            "${enablers_gomb}",
                            '0',
                            '1'
                        ],
                        [
                            "eid242",
                            "opacity",
                            427,
                            500,
                            "easeOutCubic",
                            "${busz-min}",
                            '0',
                            '1'
                        ],
                        [
                            "eid201",
                            "scaleY",
                            585,
                            415,
                            "easeOutQuad",
                            "${vallas_merleg}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid200",
                            "opacity",
                            585,
                            415,
                            "easeOutQuad",
                            "${vallas_merleg}",
                            '0',
                            '1'
                        ],
                        [
                            "eid240",
                            "top",
                            250,
                            1038,
                            "easeOutCubic",
                            "${diagramm-min}",
                            '-68px',
                            '48px'
                        ],
                        [
                            "eid237",
                            "scaleY",
                            427,
                            500,
                            "easeOutCubic",
                            "${diagramm-min}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid250",
                            "top",
                            750,
                            878,
                            "easeOutCubic",
                            "${kalap_penz-min}",
                            '635px',
                            '540px'
                        ],
                        [
                            "eid90",
                            "left",
                            1722,
                            0,
                            "easeOutQuad",
                            "${Felso_sav}",
                            '216px',
                            '216px'
                        ],
                        [
                            "eid124",
                            "opacity",
                            2827,
                            673,
                            "linear",
                            "${save_operation_less_cloud}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid243",
                            "scaleY",
                            427,
                            500,
                            "easeOutCubic",
                            "${busz-min}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid252",
                            "opacity",
                            927,
                            500,
                            "easeOutCubic",
                            "${kalap_penz-minCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid131",
                            "scaleX",
                            3250,
                            750,
                            "easeOutBounce",
                            "${data_users_smal_repulo}",
                            '0',
                            '0.07'
                        ],
                        [
                            "eid126",
                            "opacity",
                            2001,
                            673,
                            "linear",
                            "${szinhaz}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid147",
                            "opacity",
                            1628,
                            673,
                            "linear",
                            "${weather_szinhaz}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid219",
                            "scaleX",
                            1242,
                            750,
                            "easeOutBounce",
                            "${Merleg}",
                            '0',
                            '0.59'
                        ],
                        [
                            "eid140",
                            "scaleY",
                            4750,
                            750,
                            "easeOutBounce",
                            "${data_distributors}",
                            '0',
                            '0.07'
                        ],
                        [
                            "eid141",
                            "scaleX",
                            5123,
                            750,
                            "easeOutBounce",
                            "${data_users_big}",
                            '0',
                            '0.07'
                        ],
                        [
                            "eid223",
                            "scaleX",
                            1137,
                            750,
                            "easeOutBounce",
                            "${foldgomb3}",
                            '0',
                            '0.59'
                        ],
                        [
                            "eid199",
                            "scaleX",
                            585,
                            415,
                            "easeOutQuad",
                            "${vallas_merleg}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid95",
                            "top",
                            1628,
                            0,
                            "easeOutQuad",
                            "${Jobb_oldali_sav4}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid135",
                            "scaleX",
                            4000,
                            750,
                            "easeOutBounce",
                            "${data_holders}",
                            '0',
                            '0.07'
                        ],
                        [
                            "eid148",
                            "display",
                            0,
                            0,
                            "linear",
                            "${weather_szinhaz}",
                            'none',
                            'none'
                        ],
                        [
                            "eid149",
                            "display",
                            1628,
                            0,
                            "linear",
                            "${weather_szinhaz}",
                            'none',
                            'block'
                        ],
                        [
                            "eid220",
                            "scaleY",
                            1242,
                            750,
                            "easeOutBounce",
                            "${Merleg}",
                            '0',
                            '0.59'
                        ],
                        [
                            "eid207",
                            "scaleY",
                            585,
                            415,
                            "easeOutQuad",
                            "${vallas_merlegCopy3}",
                            '0',
                            '0.3'
                        ],
                            [ "eid64", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${bal_oldal_sav}', [] ] ],
                            [ "eid84", "trigger", 8, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Jobb_oldali_sav4}', [] ] ],
                            [ "eid92", "trigger", 8, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Felso_sav}', [] ] ],
                            [ "eid60", "trigger", 8, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${also_sav}', [] ] ],
                            [ "eid93", "trigger", 250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Felso_sav}', [] ] ],
                            [ "eid85", "trigger", 500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Jobb_oldali_sav4}', [] ] ],
                            [ "eid63", "trigger", 750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${also_sav}', [] ] ]
                    ]
                }
            },
            "bal_oldal_sav": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0'], ['0%']],
                            id: 'Pasted',
                            type: 'image',
                            rect: ['0px', '0px', '203px', '646px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Technological.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['1', '0'], ['20%']],
                            id: 'nyil',
                            type: 'image',
                            rect: ['128px', '286px', '62px', '74px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/nyil.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.87', '0.87']],
                            rect: ['-48px', '145px', '99px', '84px', 'auto', 'auto'],
                            id: 'satelitCopy',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/satelit.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.87', '0.87']],
                            id: 'mikroszkopCopy2',
                            type: 'image',
                            rect: ['43px', '394px', '114px', '99px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/mikroszkop.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '226px', '646px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid192",
                            "scaleX",
                            0,
                            415,
                            "easeOutQuad",
                            "${mikroszkopCopy2}",
                            '0',
                            '0.87'
                        ],
                        [
                            "eid194",
                            "scaleY",
                            0,
                            415,
                            "easeOutQuad",
                            "${mikroszkopCopy2}",
                            '0',
                            '0.87'
                        ],
                        [
                            "eid174",
                            "scaleX",
                            0,
                            415,
                            "easeOutCubic",
                            "${satelitCopy}",
                            '0',
                            '0.87'
                        ],
                        [
                            "eid175",
                            "opacity",
                            0,
                            415,
                            "easeOutCubic",
                            "${satelitCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11",
                            "scaleY",
                            435,
                            565,
                            "easeOutQuart",
                            "${nyil}",
                            '0',
                            '1'
                        ],
                        [
                            "eid176",
                            "scaleY",
                            0,
                            415,
                            "easeOutCubic",
                            "${satelitCopy}",
                            '0',
                            '0.87'
                        ],
                        [
                            "eid115",
                            "top",
                            1000,
                            0,
                            "easeOutQuad",
                            "${nyil}",
                            '286px',
                            '286px'
                        ],
                        [
                            "eid13",
                            "left",
                            680,
                            320,
                            "easeOutCirc",
                            "${nyil}",
                            '128px',
                            '164px'
                        ],
                        [
                            "eid195",
                            "left",
                            0,
                            1000,
                            "easeOutCubic",
                            "${mikroszkopCopy2}",
                            '-68px',
                            '43px'
                        ],
                        [
                            "eid188",
                            "left",
                            0,
                            1000,
                            "easeOutCubic",
                            "${satelitCopy}",
                            '-48px',
                            '63px'
                        ],
                        [
                            "eid4",
                            "scaleX",
                            0,
                            895,
                            "easeOutCubic",
                            "${Pasted}",
                            '0',
                            '1'
                        ],
                        [
                            "eid193",
                            "opacity",
                            0,
                            415,
                            "easeOutQuad",
                            "${mikroszkopCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid9",
                            "scaleX",
                            435,
                            565,
                            "easeOutQuart",
                            "${nyil}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "also_sav": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['1', '0'], ['50%', '100%']],
                            id: 'also',
                            type: 'image',
                            rect: ['0px', '0px', '528px', '97px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Enablers_kisebb.svg', '0px', '0px']
                        },
                        {
                            transform: [[], ['-90'], [], ['1', '0'], ['20%']],
                            id: 'nyilCopy',
                            type: 'image',
                            rect: ['249px', '29px', '62px', '74px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/nyil.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '528px', '97px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid44",
                            "scaleY",
                            435,
                            565,
                            "easeOutQuart",
                            "${nyilCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid113",
                            "left",
                            250,
                            0,
                            "easeOutQuad",
                            "${nyilCopy}",
                            '249px',
                            '249px'
                        ],
                        [
                            "eid111",
                            "left",
                            1000,
                            0,
                            "easeOutQuad",
                            "${nyilCopy}",
                            '249px',
                            '249px'
                        ],
                        [
                            "eid42",
                            "scaleX",
                            435,
                            565,
                            "easeOutQuart",
                            "${nyilCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid32",
                            "scaleY",
                            0,
                            1000,
                            "easeOutQuad",
                            "${also}",
                            '0',
                            '1'
                        ],
                        [
                            "eid48",
                            "top",
                            699,
                            301,
                            "easeOutCubic",
                            "${nyilCopy}",
                            '29px',
                            '-19px'
                        ]
                    ]
                }
            },
            "Felso_sav": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'also',
                            rect: ['0px', '0px', '528px', '97px', 'auto', 'auto'],
                            transform: [[], [], [], ['1', '0'], ['50%', '100%']],
                            fill: ['rgba(0,0,0,0)', 'images/Socio_frame.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'nyilCopy',
                            rect: ['252px', '29px', '62px', '74px', 'auto', 'auto'],
                            transform: [[], ['-90'], [], ['1', '0'], ['20%']],
                            fill: ['rgba(0,0,0,0)', 'images/nyil.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '528px', '97px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid44",
                            "scaleY",
                            435,
                            565,
                            "easeOutQuart",
                            "${nyilCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid47",
                            "left",
                            1000,
                            0,
                            "easeOutCubic",
                            "${nyilCopy}",
                            '252px',
                            '252px'
                        ],
                        [
                            "eid48",
                            "top",
                            699,
                            301,
                            "easeOutCubic",
                            "${nyilCopy}",
                            '29px',
                            '-19px'
                        ],
                        [
                            "eid32",
                            "scaleY",
                            0,
                            1000,
                            "easeOutQuad",
                            "${also}",
                            '0',
                            '1'
                        ],
                        [
                            "eid42",
                            "scaleX",
                            435,
                            565,
                            "easeOutQuart",
                            "${nyilCopy}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Jobb_oldali_sav": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0'], ['0%']],
                            id: 'Pasted',
                            type: 'image',
                            rect: ['0px', '0px', '203px', '646px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Legal_famework.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['1', '0'], ['20%']],
                            id: 'nyilCopy',
                            type: 'image',
                            rect: ['128px', '286px', '62px', '74px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/nyil.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '226px', '646px']
                        }
                    }
                },
                timeline: {
                    duration: 2492,
                    autoPlay: true,
                    data: [
                        [
                            "eid233",
                            "scaleY",
                            1927,
                            565,
                            "easeOutQuart",
                            "${nyilCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "left",
                            2172,
                            320,
                            "easeOutCirc",
                            "${nyilCopy}",
                            '128px',
                            '164px'
                        ],
                        [
                            "eid4",
                            "scaleX",
                            0,
                            895,
                            "easeOutCubic",
                            "${Pasted}",
                            '0',
                            '1'
                        ],
                        [
                            "eid231",
                            "top",
                            2492,
                            0,
                            "easeOutQuad",
                            "${nyilCopy}",
                            '286px',
                            '286px'
                        ],
                        [
                            "eid232",
                            "scaleX",
                            1927,
                            565,
                            "easeOutQuart",
                            "${nyilCopy}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Merleg": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['96px', '119px', '99px', '97px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Ellipse',
                            opacity: 1,
                            type: 'ellipse',
                            fill: ['rgba(46,192,105,1.00)']
                        },
                        {
                            type: 'image',
                            rect: ['2px', '-4px', '177px', '193px', 'auto', 'auto'],
                            id: 'vallas_merleg2Copy',
                            transform: [[], [], [], [], ['77%', '87%']],
                            clip: 'rect(146.0673828125px 177px 193px 104.494140625px)',
                            fill: ['rgba(0,0,0,0)', 'images/vallas_merleg.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '195px', '216px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "foldgomb": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '99px', '97px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Ellipse',
                            opacity: 1,
                            type: 'ellipse',
                            fill: ['rgba(104,187,85,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'foldgomb2',
                            rect: ['20px', '12px', '59px', '73px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/foldgomb.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '99px', '97px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "villaskulcs": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.47', '0.47']],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy',
                            opacity: 1,
                            rect: ['-26px', '-26px', '99px', '97px', 'auto', 'auto'],
                            type: 'ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(254,192,100,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'villaskulcs',
                            rect: ['-15px', '-18px', '78px', '80px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.41', '0.41']],
                            fill: ['rgba(0,0,0,0)', 'images/villaskulcs.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '47px', '46px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "enablers_gomb": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.6', '0.6']],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy2',
                            opacity: 1,
                            rect: ['-20px', '-19px', '99px', '97px', 'auto', 'auto'],
                            type: 'ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(14,207,216,1.00)']
                        },
                        {
                            type: 'image',
                            rect: ['10px', '24px', '40px', '28px', 'auto', 'auto'],
                            id: 'emberke',
                            transform: [[], [], [], ['1.14562', '1.14561']],
                            clip: 'rect(0px 25.625px 28px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/emberke.png', '0px', '0px']
                        },
                        {
                            rect: ['33px', '12px', '18px', '16px', 'auto', 'auto'],
                            borderRadius: ['4px', '4px', '4px', '4px 4px'],
                            transform: [[], [], [], ['1.12', '1.12']],
                            id: 'Rectangle',
                            stroke: [1, 'rgba(86,4,108,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['44px', '18px', '6px', '6px', 'auto', 'auto'],
                            id: 'Text3',
                            text: '$',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [9, 'px'], 'rgba(86,4,108,1.00)', '700', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(86,4,108,1)', '700', 'none solid rgb(86, 4, 108)', 'normal', 'break-word', 'nowrap'],
                            rect: ['26px', '19px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text4',
                            text: '-',
                            align: 'left',
                            transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            type: 'text',
                            rect: ['36px', '13px', '3px', '6px', 'auto', 'auto'],
                            id: 'Text3Copy',
                            text: '€',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [9, 'px'], 'rgba(86,4,108,1.00)', '700', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '73px', '58px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("animacio_edge_proj_edgeActions.js");
})("EDGE-85783668");
