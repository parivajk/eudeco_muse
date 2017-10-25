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
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'data_distributors_elemei_box_nelkul',
                            type: 'image',
                            rect: ['-3px', '-4px', '1306px', '1307px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"data_distributors_elemei_box_nelkul.png",'0px','0px']
                        },
                        {
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['36px', '52px', '1228px', '1208px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'arefacts_kor',
                            type: 'image',
                            rect: ['504px', '912px', '222px', '304px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"arefacts_kor.png",'0px','0px']
                        },
                        {
                            id: 'strategies_kor',
                            type: 'image',
                            rect: ['776px', '601px', '220px', '297px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"strategies_kor.png",'0px','0px']
                        },
                        {
                            id: 'behaviour_karika2',
                            type: 'image',
                            rect: ['777px', '288px', '217px', '264px', 'auto', 'auto'],
                            opacity: 0.67479674796748,
                            fill: ["rgba(0,0,0,0)",im+"behaviour_karika.png",'0px','0px']
                        },
                        {
                            id: 'enviroment_karika',
                            type: 'image',
                            rect: ['548px', '64px', '241px', '299px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"enviroment_karika.png",'0px','0px']
                        },
                        {
                            id: 'distriputor_krapekok',
                            type: 'image',
                            rect: ['186px', '447px', '228px', '321px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"distriputor_krapekok.png",'0px','0px']
                        },
                        {
                            id: 'evoke_nyil',
                            type: 'image',
                            rect: ['253px', '819px', '198px', '245px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"evoke_nyil.png",'0px','0px'],
                            transform: [[],[],[],[],['100%','100%']]
                        },
                        {
                            id: 'use_nyil',
                            type: 'image',
                            rect: ['390px', '764px', '132px', '165px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"use_nyil.png",'0px','0px'],
                            transform: [[],[],[],['0','0'],['0%','0%']]
                        },
                        {
                            id: 'pursue_nyil',
                            type: 'image',
                            rect: ['451px', '675px', '266px', '113px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"pursue_nyil.png",'0px','0px'],
                            transform: [[],[],[],[],['0%','0%']]
                        },
                        {
                            id: 'sima_nyil',
                            type: 'image',
                            rect: ['442px', '470px', '292px', '149px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"sima_nyil.png",'0px','0px'],
                            transform: [[],[],[],[],['0%','100%']]
                        },
                        {
                            id: 'respond_nyil',
                            type: 'image',
                            rect: ['410px', '347px', '166px', '181px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"respond_nyil.png",'0px','0px'],
                            transform: [[],[],[],[],['100%','0%']]
                        },
                        {
                            id: 'interfacts_nyil',
                            type: 'image',
                            rect: ['267px', '180px', '250px', '255px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"interfacts_nyil.png",'0px','0px'],
                            transform: [[],[],[],[],['0%','100%']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '1300px', '1300px'],
                            sizeRange: ['0px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 4339.5693319842,
                    autoPlay: true,
                    data: [
                        [
                            "eid14",
                            "scaleY",
                            2500,
                            307,
                            "easeOutSine",
                            "${interfacts_nyil}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19",
                            "scaleX",
                            500,
                            500,
                            "easeOutBounce",
                            "${enviroment_karika}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10",
                            "scaleY",
                            2807,
                            307,
                            "easeOutSine",
                            "${respond_nyil}",
                            '0',
                            '1'
                        ],
                        [
                            "eid23",
                            "scaleX",
                            1000,
                            500,
                            "easeOutBounce",
                            "${behaviour_karika2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16",
                            "originY",
                            2500,
                            0,
                            "linear",
                            "${interfacts_nyil}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid12",
                            "scaleY",
                            3420,
                            307,
                            "easeOutSine",
                            "${pursue_nyil}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "scaleX",
                            3726,
                            307,
                            "easeOutSine",
                            "${use_nyil}",
                            '0',
                            '1'
                        ],
                        [
                            "eid5",
                            "scaleX",
                            1500,
                            500,
                            "easeOutBounce",
                            "${strategies_kor}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "scaleY",
                            0,
                            500,
                            "easeOutBounce",
                            "${distriputor_krapekok}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6",
                            "scaleY",
                            1500,
                            500,
                            "easeOutBounce",
                            "${strategies_kor}",
                            '0',
                            '1'
                        ],
                        [
                            "eid24",
                            "scaleY",
                            1000,
                            500,
                            "easeOutBounce",
                            "${behaviour_karika2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18",
                            "scaleY",
                            4033,
                            307,
                            "easeOutSine",
                            "${evoke_nyil}",
                            '0',
                            '1'
                        ],
                        [
                            "eid25",
                            "scaleX",
                            2000,
                            500,
                            "easeOutBounce",
                            "${arefacts_kor}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11",
                            "scaleX",
                            3420,
                            307,
                            "easeOutSine",
                            "${pursue_nyil}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13",
                            "scaleX",
                            2500,
                            307,
                            "easeOutSine",
                            "${interfacts_nyil}",
                            '0',
                            '1'
                        ],
                        [
                            "eid26",
                            "scaleY",
                            2000,
                            500,
                            "easeOutBounce",
                            "${arefacts_kor}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "scaleX",
                            0,
                            500,
                            "easeOutBounce",
                            "${distriputor_krapekok}",
                            '0',
                            '1'
                        ],
                        [
                            "eid9",
                            "scaleX",
                            2807,
                            307,
                            "easeOutSine",
                            "${respond_nyil}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7",
                            "scaleX",
                            3113,
                            307,
                            "easeOutSine",
                            "${sima_nyil}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "scaleY",
                            500,
                            500,
                            "easeOutBounce",
                            "${enviroment_karika}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "scaleX",
                            4033,
                            307,
                            "easeOutSine",
                            "${evoke_nyil}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "scaleY",
                            3113,
                            307,
                            "easeOutSine",
                            "${sima_nyil}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4",
                            "scaleY",
                            3726,
                            307,
                            "easeOutSine",
                            "${use_nyil}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15",
                            "originX",
                            2500,
                            0,
                            "linear",
                            "${interfacts_nyil}",
                            '0%',
                            '0%'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("distribution_anim_edgeActions.js");
})("EDGE-3228515");
