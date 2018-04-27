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
        'DiplomSite.model.CharacteristicGridModel'
    ],

    items: [
        {
            xtype: 'label',
            html: 'Раздел с описанием измерителей малых токов (в разработке...)'
        }
    ]
});