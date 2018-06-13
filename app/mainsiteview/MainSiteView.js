/**
 * Created by Алексей on 26.04.2018.
 */
Ext.define('DiplomSite.mainsiteview.MainSiteView',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainSiteView',
    layout: {
        type: 'border',
        align: 'stretch'
    },
    requires: [
        'DiplomSite.productionpanel.ProductionPanel',
        'DiplomSite.mainsiteview.MainSiteViewController',
        'DiplomSite.mainsiteview.MainSiteViewViewModel'
    ],
    viewModel: {
        type: 'mainSiteViewViewModel'
    },
    controller: 'mainSiteViewController',
    items: [
        {
            xtype: 'label',
            bind: {
                text: '{title}'
            },
            region: 'north',
            cls: 'header-label-style'
        },
        {
            xtype: 'productionPanel',
            region: 'west',
            reference: 'productionPanel'
        },
        {
            xtype: 'container',
            region: 'center',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            reference: 'centralPanel',
            listeners: {
                boxready: 'boxready'
            }
        }
    ]
});