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
                            id: 'bal_oldal_sav',
                            symbolName: 'bal_oldal_sav',
                            type: 'rect',
                            rect: ['-1px', '0', '226', '646', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '226px', '646px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                            [ "eid1", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${bal_oldal_sav}', [] ] ]
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
                            fill: ['rgba(0,0,0,0)', 'images/Pasted.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['1', '0'], ['20%']],
                            id: 'nyil',
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
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid9",
                            "scaleX",
                            435,
                            565,
                            "easeOutQuart",
                            "${nyil}",
                            '0',
                            '1'
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
                            "eid4",
                            "scaleX",
                            0,
                            895,
                            "easeOutCubic",
                            "${Pasted}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("exporter_edgeActions.js");
})("EDGE-106128043");
