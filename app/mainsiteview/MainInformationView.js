/**
 * Created by Алексей on 26.04.2018.
 */
Ext.define('DiplomSite.mainsiteview.MainInformationView', {
    extend: 'Ext.container.Container',
    alias: 'widget.mainInformationView',
    requires: [],
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'label',
            html: 'Основная информация о приборах, разрабатываемых в лаборатории а кафедре прикладной физики физико-технического факультета Тверского Государственного Университета',
            style: {
                fontSize: '20px'
            },
            margin: 20
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
                    xtype: 'image',
                    src: 'src/images/phisics.jpg',
                    maxWidth: 1500,
                    height: 800
                }
            ]
        }
    ]
});