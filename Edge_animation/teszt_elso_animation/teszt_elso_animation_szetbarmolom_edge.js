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
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Baground_light_Croped',
                            type: 'image',
                            rect: ['-1px', '12px', '551px', '379px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Baground_light_Croped.jpg",'0px','0px','100%','100%', 'no-repeat'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 2, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'socio_sym',
                            symbolName: 'socio_sym',
                            type: 'rect',
                            rect: ['0', '283', '550', '123', 'auto', 'auto']
                        },
                        {
                            id: 'enablers_sym',
                            symbolName: 'enablers_sym',
                            type: 'rect',
                            rect: ['0', '0', '550', '123', 'auto', 'auto']
                        },
                        {
                            id: 'legal_sym',
                            symbolName: 'legal_sym',
                            type: 'rect',
                            rect: ['409', '0', '141', '406', 'auto', 'auto']
                        },
                        {
                            id: 'tecnologica_sym',
                            symbolName: 'tecnologica_sym',
                            type: 'rect',
                            rect: ['-1', '1', '141', '401', 'auto', 'auto']
                        },
                        {
                            id: 'kozep_btn',
                            display: 'block',
                            type: 'rect',
                            rect: ['160px', '123px', '222px', '160px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: 0,
                            fill: ["rgba(255,223,183,1)"],
                            stroke: [3,"rgb(255, 202, 138)","solid"]
                        },
                        {
                            id: 'Rectangle6',
                            type: 'rect',
                            rect: ['-1px', '0px', '545px', '406px', 'auto', 'auto'],
                            fill: ["rgba(155,155,155,0.63)"],
                            stroke: [3,"rgba(249,249,249,1.00)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '551px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 560,
                    autoPlay: true,
                    data: [
                        [
                            "eid113",
                            "display",
                            60,
                            0,
                            "linear",
                            "${kozep_btn}",
                            'block',
                            'block'
                        ],
                        [
                            "eid114",
                            "display",
                            105,
                            0,
                            "linear",
                            "${kozep_btn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid112",
                            "filter.blur",
                            60,
                            500,
                            "linear",
                            "${Baground_light_Croped}",
                            '2px',
                            '0px'
                        ]
                    ]
                }
            },
            "tecnologica_sym": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-130px', '130px', '395px', '135px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '319px 319px', '282px 282px'],
                            transform: [[], ['-90']],
                            id: 'Rectangle2Copy3',
                            stroke: [3, 'rgba(255,202,138,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,223,183,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'technological',
                            opacity: 0.69918699186992,
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(53,75,196,1)', '400', 'none solid rgb(53, 75, 196)', 'normal', 'break-word', 'nowrap'],
                            transform: [[], ['-90'], [], ['1.71', '1.71']],
                            text: 'Technological',
                            rect: ['15px', '190px', 'auto', 'auto', 'auto', 'auto'],
                            textShadow: ['rgba(0,0,0,0.65098)', 0, 0, 3],
                            align: 'left'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '141px', '401px']
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
                            '190px',
                            '188px'
                        ],
                        [
                            "eid33",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Rectangle2Copy3}",
                            '130px',
                            '191px'
                        ],
                        [
                            "eid67",
                            "left",
                            0,
                            500,
                            "linear",
                            "${technological}",
                            '15px',
                            '-46px'
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
                            '-130px',
                            '-190px'
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
                            "eid32",
                            "height",
                            0,
                            500,
                            "linear",
                            "${Rectangle2Copy3}",
                            '135px',
                            '14px'
                        ]
                    ]
                }
            },
            "enablers_sym": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '544px', '117px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '617px 617px', '617px 617px'],
                            id: 'Rectangle2',
                            stroke: [3, 'rgba(255,202,138,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,223,183,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'enablers',
                            opacity: 0.7,
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(53,75,196,1)', '400', 'none solid rgb(53, 75, 196)', 'normal', 'break-word', 'nowrap'],
                            transform: [[], [], [], ['1.66', '1.66']],
                            text: 'Enablers',
                            rect: ['239px', '51px', 'auto', 'auto', 'auto', 'auto'],
                            textShadow: ['rgba(0,0,0,0.65098)', 0, 0, 3],
                            align: 'left'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '550px', '123px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
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
                            "eid84",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${enablers}",
                            '1.66',
                            '1'
                        ]
                    ]
                }
            },
            "legal_sym": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-133px', '132px', '400px', '135px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '363px 363px', '332px 332px'],
                            transform: [[], ['90']],
                            id: 'Rectangle2Copy2',
                            stroke: [3, 'rgba(255,202,138,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,223,183,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text6',
                            opacity: 0.7,
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(53,75,196,1)', '400', 'none solid rgb(53, 75, 196)', 'normal', 'break-word', 'nowrap'],
                            transform: [[], ['90'], [], ['1.98', '1.98']],
                            text: 'Legal',
                            rect: ['48px', '191px', 'auto', 'auto', 'auto', 'auto'],
                            textShadow: ['rgba(0,0,0,0.65098)', 0, 0, 3],
                            align: 'left'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '141px', '406px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
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
                            "eid49",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Rectangle2Copy2}",
                            '-133px',
                            '-72px'
                        ],
                        [
                            "eid48",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Rectangle2Copy2}",
                            '132px',
                            '193px'
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
                            "eid97",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Text6}",
                            '48px',
                            '112px'
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
                            "eid115",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Text6}",
                            '191px',
                            '193px'
                        ],
                        [
                            "eid47",
                            "height",
                            0,
                            500,
                            "linear",
                            "${Rectangle2Copy2}",
                            '135px',
                            '14px'
                        ]
                    ]
                }
            },
            "socio_sym": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '544px', '117px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '617px 617px', '617px 617px'],
                            transform: [[], ['180']],
                            id: 'Rectangle2Copy',
                            stroke: [3, 'rgba(255,202,138,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,223,183,1.00)']
                        },
                        {
                            rect: ['168px', '51px', 'auto', 'auto', 'auto', 'auto'],
                            text: 'Socio Economic<br>',
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(53,75,196,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            id: 'socio_economic',
                            opacity: 0.69918675248216,
                            textShadow: ['rgba(0,0,0,0.65098)', 1, 2, 3],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '550px', '123px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid55",
                            "top",
                            0,
                            500,
                            "linear",
                            "${socio_economic}",
                            '51px',
                            '102px'
                        ],
                        [
                            "eid51",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Rectangle2Copy}",
                            '0px',
                            '103px'
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
                            "eid59",
                            "font-size",
                            0,
                            500,
                            "linear",
                            "${socio_economic}",
                            '30px',
                            '18px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("teszt_elso_animation_szetbarmolom_edgeActions.js");
})("EDGE-11720980");
