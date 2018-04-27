/**
 * Created by Алексей on 26.04.2018.
 */
Ext.application({
    name: 'DiplomSite',
    requires: [
    ],
    views: [
        'DiplomSite.mainsiteview.MainSiteView'
    ],
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            style: 'background: #00FFFF',
            items: [
                {
                    xtype: 'mainSiteView'
                }
            ]
        });
    }
});