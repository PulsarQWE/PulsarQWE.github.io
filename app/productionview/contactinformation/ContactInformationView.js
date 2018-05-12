/**
 * Created by Алексей on 27.04.2018.
 */
Ext.define('DiplomSite.productionview.contactinformation.ContactInformationView', {
    extend: 'Ext.container.Container',
    alias: 'widget.contactInformationView',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    flex: 1,

    items: [
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items:[
                        {
                            xtype: 'label',
                            html: 'Адреса электронной почты',
                            margin: '8 15 60 10'
                        },
                        {
                            xtype: 'label',
                            html: 'Связаться в контакте',
                            margin: '0 15 0 10'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'button',
                            text: 'Алексей',
                            handler:function(){
                                document.location.href = 'mailto:89301751763@mail.ru'
                            },
                            margin: '5 10 10 0'
                        },
                        {
                            xtype: 'button',
                            text: 'Илья',
                            handler:function(){
                                document.location.href = 'mailto:sobolev251997@mail.ru'
                            },
                            margin: '5 10 10 0'
                        },
                        {
                            xtype: 'button',
                            text: 'Алексей',
                            href: 'https://vk.com/pulsar_qwe',
                            target: '_blank',
                            margin: '5 10 10 0'
                        },
                        {
                            xtype: 'button',
                            text: 'Илья',
                            href: 'https://vk.com/iljas25',
                            target: '_blank',
                            margin: '5 10 10 0'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'label',
                            html: '- 89301751763@mail.ru',
                            margin: '8 15 23 10'
                        },
                        {
                            xtype: 'label',
                            html: '- sobolev251997@mail.ru',
                            margin: '0 15 0 10'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'label',
            text: 'Адрес: г. Тверь, Садовый переулок, д.35',
            margin: '10 10 10 10'
        },
        {
            xtype: 'image',
            src: 'src/images/map.png'
        }
    ]
});