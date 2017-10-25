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
                            rect: ['1px', '0px', '360px', '360px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"data_distributors_elemei_box_nelkul.png",'0px','0px'],
                            transform: [[],[],[],[],['56%']]
                        },
                        {
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['19px', '15px', '332px', '326px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'arefacts_kor',
                            type: 'image',
                            rect: ['168px', '253px', '62px', '85px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"arefacts_kor.png",'0px','0px'],
                            transform: [[],[],[],[],['56%']]
                        },
                        {
                            id: 'strategies_kor',
                            type: 'image',
                            rect: ['238px', '192px', '62px', '83px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"strategies_kor.png",'0px','0px'],
                            transform: [[],[],[],[],['56%']]
                        },
                        {
                            id: 'behaviour_karika2',
                            type: 'image',
                            rect: ['239px', '88px', '61px', '74px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"behaviour_karika.png",'0px','0px'],
                            transform: [[],[],[],[],['56%']]
                        },
                        {
                            id: 'enviroment_karika',
                            type: 'image',
                            rect: ['162px', '17px', '68px', '84px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"enviroment_karika.png",'0px','0px'],
                            transform: [[],[],[],[],['56%']]
                        },
                        {
                            id: 'distriputor_krapekok',
                            type: 'image',
                            rect: ['40px', '122px', '65px', '89px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"distriputor_krapekok.png",'0px','0px'],
                            transform: [[],[],[],[],['56%']]
                        },
                        {
                            id: 'evoke_nyil',
                            type: 'image',
                            rect: ['77px', '234px', '56px', '69px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"evoke_nyil.png",'0px','0px'],
                            transform: [[],['-5'],[],[],['100%','100%']]
                        },
                        {
                            id: 'use_nyil',
                            type: 'image',
                            rect: ['111px', '216px', '37px', '47px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"use_nyil.png",'0px','0px'],
                            transform: [[],['-17'],[],['0','0'],['0%','0%']]
                        },
                        {
                            id: 'pursue_nyil',
                            type: 'image',
                            rect: ['138px', '193px', '74px', '32px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"pursue_nyil.png",'0px','0px'],
                            transform: [[],['6'],[],[],['0%','0%']]
                        },
                        {
                            id: 'sima_nyil',
                            type: 'image',
                            rect: ['135px', '129px', '82px', '42px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"sima_nyil.png",'0px','0px'],
                            transform: [[],['8'],[],[],['0%','100%']]
                        },
                        {
                            id: 'respond_nyil',
                            type: 'image',
                            rect: ['115px', '90px', '47px', '51px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"respond_nyil.png",'0px','0px'],
                            transform: [[],['12'],[],[],['100%','0%']]
                        },
                        {
                            id: 'interfacts_nyil',
                            type: 'image',
                            rect: ['68px', '43px', '70px', '72px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"interfacts_nyil.png",'0px','0px'],
                            transform: [[],[],[],[],['0%','100%']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '360px', '360px', 'auto', 'auto'],
                            sizeRange: ['0px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 4340,
                    autoPlay: false,
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
                            "eid209",
                            "left",
                            4340,
                            0,
                            "easeOutSine",
                            "${data_distributors_elemei_box_nelkul}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid94",
                            "-webkit-transform-origin",
                            4340,
                            0,
                            "easeOutSine",
                            "${data_distributors_elemei_box_nelkul}",
                            [56,50],
                            [56,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid621",
                            "-moz-transform-origin",
                            4340,
                            0,
                            "easeOutSine",
                            "${data_distributors_elemei_box_nelkul}",
                            [56,50],
                            [56,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid622",
                            "-ms-transform-origin",
                            4340,
                            0,
                            "easeOutSine",
                            "${data_distributors_elemei_box_nelkul}",
                            [56,50],
                            [56,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid623",
                            "msTransformOrigin",
                            4340,
                            0,
                            "easeOutSine",
                            "${data_distributors_elemei_box_nelkul}",
                            [56,50],
                            [56,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid624",
                            "-o-transform-origin",
                            4340,
                            0,
                            "easeOutSine",
                            "${data_distributors_elemei_box_nelkul}",
                            [56,50],
                            [56,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid625",
                            "transform-origin",
                            4340,
                            0,
                            "easeOutSine",
                            "${data_distributors_elemei_box_nelkul}",
                            [56,50],
                            [56,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
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
                            "eid207",
                            "width",
                            4340,
                            0,
                            "easeOutSine",
                            "${data_distributors_elemei_box_nelkul}",
                            '360px',
                            '360px'
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
                            "eid205",
                            "height",
                            4340,
                            0,
                            "easeOutSine",
                            "${data_distributors_elemei_box_nelkul}",
                            '360px',
                            '360px'
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
                            "eid208",
                            "top",
                            4340,
                            0,
                            "easeOutSine",
                            "${data_distributors_elemei_box_nelkul}",
                            '0px',
                            '0px'
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
                            "eid8",
                            "scaleY",
                            3113,
                            307,
                            "easeOutSine",
                            "${sima_nyil}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("320_edgeActions.js");
})("EDGE-3228515");
