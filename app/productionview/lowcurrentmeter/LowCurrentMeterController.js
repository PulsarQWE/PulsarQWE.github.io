/**
 * Created by Алексей on 26.04.2018.
 */
Ext.define('DiplomSite.productionview.lowcurrentmeter.LowCurrentMeterController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.lowCurrentMeterController',

    openInWindow: function () {
       var window = Ext.create('Ext.window.Window', {
            title: 'Источник питания',
            height: 370,
            width: 880,
            bodyPadding: 10,
            items: [
                {
                    xtype: 'image',
                    src: 'src/images/in.png'
                }
            ]
        });
       window.show();
    },

    openConverterWindow: function () {
        var window = Ext.create('Ext.window.Window', {
            title: 'Преобразователь напряжения',
            height: 650,
            width: 860,
            bodyPadding: 10,
            items: [
                {
                    xtype: 'image',
                    src: 'src/images/converter.jpg'
                }
            ]
        });
        window.show();

    },

    openAmplifierWindow: function () {
        var window = Ext.create('Ext.window.Window', {
            title: 'Усилитель малого тока',
            height: 530,
            width: 1200,
            bodyPadding: 10,
            items: [
                {
                    xtype: 'image',
                    src: 'src/images/amplifier.jpg'
                }
            ]
        });
        window.show();
    },

    onPatent: function () {
        var window = Ext.create('Ext.window.Window', {
            title: 'Патент на полезную модель',
            height: 835,
            width: 610,
            bodyPadding: 10,
            items: [
                {
                    xtype: 'image',
                    src: 'src/images/patent.jpg'
                }
            ]
        });
        window.show();
    }
});