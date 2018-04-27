/**
 * Created by Алексей on 26.04.2018.
 */
Ext.define('DiplomSite.productionview.openflamesensors.OpenFlameSensorsView', {
    extend: 'Ext.container.Container',
    alias: 'widget.openFlameSensorsView',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    flex: 1,

    items: [
        {
            xtype: 'label',
            html: 'Раздел с описанием датчиков открытого пламени (в разработке...)'
        }
    ]
});