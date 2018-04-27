/**
 * Created by Алексей on 26.04.2018.
 */
Ext.define('DiplomSite.productionpanel.ProductionPanel', {
        extend: 'Ext.container.Container',
        alias: 'widget.productionPanel',

        requires: [
            'DiplomSite.productionpanel.ProductionPanelController',
            'DiplomSite.productionpanel.ProductionPanelViewModel'
        ],
        controller: 'productionPanelController',
        viewModel: {
            type: 'productionPanelViewModel'
        },
        defaults: {
            margin: '15 15 15 15'
        },
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [
            {
                xtype: 'button',
                text: 'Датчики открытого пламени',
                handler: 'openProductionView',
                viewName: 'DiplomSite.productionview.openflamesensors.OpenFlameSensorsView',
                buttonTitle: 'Датчики открытого пламени'
            },
            {
                xtype: 'button',
                text: 'Измерители малых токов',
                handler: 'openProductionView',
                viewName: 'DiplomSite.productionview.lowcurrentmeter.LowCurrentMeterView',
                buttonTitle: 'Измерители малых токов'
            },
            {
                xtype: 'button',
                text: 'Контактная информация',
                handler: 'onContactInformation',
                buttonTitle: 'Контактная информация'
            },
            {
                xtype: 'button',
                text: 'Вернуться на главную страницу',
                handler: 'onMainPage',
                bind: {
                    hidden: '{hiddenMainViewButton}'
                },
                buttonTitle: 'Наши разработки'
            }

        ]
    }
);