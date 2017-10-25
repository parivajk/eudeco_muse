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
                            id: 'Baground_light_Croped',
                            type: 'image',
                            rect: ['-1px', '12px', '551px', '379px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Baground_light_Croped.jpg",'0px','0px','100%','100%', 'no-repeat']
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['0px', '0px', '544px', '117px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "617px 617px", "617px 617px"],
                            fill: ["rgba(255,223,183,1.00)"],
                            stroke: [3,"rgba(255,202,138,1.00)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy',
                            type: 'rect',
                            rect: ['0px', '283px', '544px', '117px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "617px 617px", "617px 617px"],
                            fill: ["rgba(255,223,183,1.00)"],
                            stroke: [3,"rgba(255,202,138,1.00)","solid"],
                            transform: [[],['180']]
                        },
                        {
                            id: 'socio_economic',
                            type: 'text',
                            rect: ['168px', '334px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: 0.69918675248216,
                            text: "Socio Economic<br>",
                            font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(53,75,196,1.00)", "normal", "none", "", "break-word", "nowrap"],
                            textShadow: ["rgba(0,0,0,0.65098)", 1, 2, 3]
                        },
                        {
                            id: 'Rectangle2Copy2',
                            type: 'rect',
                            rect: ['260px', '116px', '400px', '167px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "363px 363px", "332px 332px"],
                            fill: ["rgba(255,223,183,1.00)"],
                            stroke: [3,"rgba(255,202,138,1.00)","solid"],
                            transform: [[],['90']]
                        },
                        {
                            id: 'Rectangle2Copy3',
                            type: 'rect',
                            rect: ['-115px', '115px', '395px', '167px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "319px 319px", "282px 282px"],
                            fill: ["rgba(255,223,183,1.00)"],
                            stroke: [3,"rgba(255,202,138,1.00)","solid"],
                            transform: [[],['-90']]
                        },
                        {
                            id: 'technological',
                            type: 'text',
                            rect: ['-47px', '191px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: 0.69918699186992,
                            text: "Technological",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(53,75,196,1)", "400", "none solid rgb(53, 75, 196)", "normal", "break-word", "nowrap"],
                            textShadow: ["rgba(0,0,0,0.65098)", 0, 0, 3],
                            transform: [[],['-90'],[],['1.71','1.71']]
                        },
                        {
                            id: 'enablers',
                            type: 'text',
                            rect: ['239px', '51px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: 0.7,
                            text: "Enablers",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(53,75,196,1)", "400", "none solid rgb(53, 75, 196)", "normal", "break-word", "nowrap"],
                            textShadow: ["rgba(0,0,0,0.65098)", 0, 0, 3],
                            transform: [[],[],[],['1.66','1.66']]
                        },
                        {
                            id: 'Text6',
                            type: 'text',
                            rect: ['441px', '192px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: 0.7,
                            text: "Legal",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(53,75,196,1)", "400", "none solid rgb(53, 75, 196)", "normal", "break-word", "nowrap"],
                            textShadow: ["rgba(0,0,0,0.65098)", 0, 0, 3],
                            transform: [[],['90'],[],['1.98','1.98']]
                        },
                        {
                            id: 'kozep_btn',
                            type: 'rect',
                            rect: ['160px', '123px', '222px', '160px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(255,223,183,1)"],
                            stroke: [3,"rgb(255, 202, 138)","solid"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '550px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid69",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${technological}",
                            '1.71',
                            '1'
                        ],
                        [
                            "eid51",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Rectangle2Copy}",
                            '283px',
                            '386px'
                        ],
                        [
                            "eid33",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Rectangle2Copy3}",
                            '115px',
                            '192px'
                        ],
                        [
                            "eid37",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '544px',
                            '544px'
                        ],
                        [
                            "eid52",
                            "height",
                            0,
                            500,
                            "linear",
                            "${Rectangle2}",
                            '117px',
                            '14px'
                        ],
                        [
                            "eid83",
                            "top",
                            0,
                            500,
                            "linear",
                            "${enablers}",
                            '51px',
                            '-1px'
                        ],
                        [
                            "eid95",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Text6}",
                            '192px',
                            '192px'
                        ],
                        [
                            "eid82",
                            "left",
                            500,
                            0,
                            "linear",
                            "${enablers}",
                            '239px',
                            '239px'
                        ],
                        [
                            "eid62",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${socio_economic}",
                            '0.69918675248216',
                            '0.69918675248216'
                        ],
                        [
                            "eid46",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid49",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Rectangle2Copy2}",
                            '260px',
                            '337px'
                        ],
                        [
                            "eid36",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            '544px',
                            '544px'
                        ],
                        [
                            "eid48",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Rectangle2Copy2}",
                            '116px',
                            '193px'
                        ],
                        [
                            "eid97",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Text6}",
                            '441px',
                            '520px'
                        ],
                        [
                            "eid78",
                            "textShadow.offsetV",
                            0,
                            0,
                            "linear",
                            "${technological}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid34",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Rectangle2Copy3}",
                            '-115px',
                            '-191px'
                        ],
                        [
                            "eid47",
                            "height",
                            0,
                            500,
                            "linear",
                            "${Rectangle2Copy2}",
                            '167px',
                            '14px'
                        ],
                        [
                            "eid70",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${technological}",
                            '1.71',
                            '1'
                        ],
                        [
                            "eid68",
                            "top",
                            0,
                            500,
                            "linear",
                            "${technological}",
                            '191px',
                            '189px'
                        ],
                        [
                            "eid50",
                            "height",
                            0,
                            500,
                            "linear",
                            "${Rectangle2Copy}",
                            '117px',
                            '14px'
                        ],
                        [
                            "eid84",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${enablers}",
                            '1.66',
                            '1'
                        ],
                        [
                            "eid101",
                            "textShadow.offsetV",
                            0,
                            0,
                            "linear",
                            "${Text6}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid90",
                            "textShadow.offsetV",
                            0,
                            0,
                            "linear",
                            "${enablers}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid100",
                            "textShadow.offsetH",
                            0,
                            0,
                            "linear",
                            "${Text6}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid72",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${technological}",
                            '0.69918699186992',
                            '0.69918699186992'
                        ],
                        [
                            "eid89",
                            "textShadow.offsetH",
                            0,
                            0,
                            "linear",
                            "${enablers}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid98",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${Text6}",
                            '1.98',
                            '1'
                        ],
                        [
                            "eid30",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            '395px',
                            '395px'
                        ],
                        [
                            "eid85",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${enablers}",
                            '1.66',
                            '1'
                        ],
                        [
                            "eid99",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${Text6}",
                            '1.98',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${enablers}",
                            '0.7',
                            '0.7'
                        ],
                        [
                            "eid60",
                            "left",
                            0,
                            500,
                            "linear",
                            "${socio_economic}",
                            '168px',
                            '222px'
                        ],
                        [
                            "eid59",
                            "font-size",
                            0,
                            500,
                            "linear",
                            "${socio_economic}",
                            '30px',
                            '18px'
                        ],
                        [
                            "eid102",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text6}",
                            '0.7',
                            '0.7'
                        ],
                        [
                            "eid43",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid77",
                            "textShadow.offsetH",
                            0,
                            0,
                            "linear",
                            "${technological}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid35",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid32",
                            "height",
                            0,
                            500,
                            "linear",
                            "${Rectangle2Copy3}",
                            '167px',
                            '14px'
                        ],
                        [
                            "eid42",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid55",
                            "top",
                            0,
                            500,
                            "linear",
                            "${socio_economic}",
                            '334px',
                            '385px'
                        ],
                        [
                            "eid67",
                            "left",
                            0,
                            500,
                            "linear",
                            "${technological}",
                            '30px',
                            '-47px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("teszt_elso_animation_edgeActions.js");
})("EDGE-11720980");
