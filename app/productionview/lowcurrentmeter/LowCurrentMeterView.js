/**
 * Created by Алексей on 26.04.2018.
 */
Ext.define('DiplomSite.productionview.lowcurrentmeter.LowCurrentMeterView', {
    extend: 'Ext.container.Container',
    alias: 'widget.lowCurrentMeterView',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    flex: 1,
    requires: [
        'DiplomSite.productionview.lowcurrentmeter.LowCurrentMeterController',
        'DiplomSite.productionview.lowcurrentmeter.LowCurrentMeterViewModel'
    ],
    controller: 'lowCurrentMeterController',
    viewModel: {
        type: 'lowCurrentMeterViewModel'
    },

    items: [
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'stretch',
                pack: 'middle'
            },
            items: [
                {
                    xtype: 'image',
                    src: 'src/images/foto.jpg',
                    maxWidth: 700,
                    height: 400
                }
            ]
        },
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'stretch',
                pack: 'middle'
            },
            items: [
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'panel',
                            title: 'Требования к прибору',
                            collapsible: true,
                            collapsed: true,
                            flex: 1,
                            width: 700,
                            items: [
                                {
                                    xtype: 'label',
                                    html: 'Пределы допускаемой погрешности: ±5%, на верхнем пределе напряжения до 10% Измеряемое сопротивление: до 10ТОм' +
                                    ' Измерительные напряжения: 10В, 100В, 1000В Коэффициенты усиления: 1, 3, 10, 30, 100',
                                    style: {
                                        fontSize: '14px'
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            title: 'Краткое описание прибора',
                            collapsible: true,
                            collapsed: true,
                            flex: 1,
                            width: 700,
                            layout: {
                                type: 'vbox',
                                aling: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    html: ' Измеритель малых токов (или больших сопротивлений) позволяет измерять сопротивление изоляции до 10МОМ.<br> ' +
                                    'За основу разрабатываемого устройства был взят тераомметр Е6-13А. <br> ' +
                                    'Отличительной особенностью разрабатываемого в работе устройства является использование микросхем,<br>' +
                                    'в отличии от Е6-13А который был сконструирован на вакуумных лампах.<br>' +
                                    'Относится к виду испытательного и лабораторного оборудования и может использоваться только<br>' +
                                    'в закрытых помещениях, т.е. в лабораторных и цеховых условиях.<br>' +
                                    'Условия нормальной работы прибора довольно не значительны, так как наш прибор <br>' +
                                    'будет использоваться в качестве стационарной установки, находящейся в помещении. <br>' +
                                    'Так что для его работы и использования будет хватать комнатных условий.<br> ' +
                                    'Также по данному прибору была сделана полезная модель.',
                                    style: {
                                        fontSize: '14px'
                                    }
                                },
                                {
                                    xtype: 'button',
                                    html: 'Патент на полезную модель',
                                    handler: 'onPatent'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            title: 'Из чего состоит',
                            collapsible: true,
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            collapsed: true,
                            flex: 1,
                            width: 700,
                            items: [
                                {
                                    xtype: 'button',
                                    text: '1. Источник питания',
                                    handler: 'openInWindow'
                                },
                                {
                                    xtype: 'button',
                                    html: '2. Преобразователь напряжения',
                                    handler: 'openConverterWindow'
                                },

                                {
                                    xtype: 'button',
                                    html: '3. Усилитель малого тока',
                                    handler: 'openAmplifierWindow'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});