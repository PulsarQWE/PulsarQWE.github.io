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
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'stretch',
                pack: 'middle'
            },
            items: [
                {
                    xtype: 'image',
                    src: 'src/images/flame.jpg',
                    maxWidth: 660,
                    maxHeight: 385
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
                    html: 'Описание прибора',
                    cls: 'header-label-style',
                    width: 500
                },
                {
                    xtype: 'label',
                    margin: '15 0 0 0',
                    html: 'Прибор, в котором реализована схема двухкаскадного преобразователя. Первый каскад является непосредственно преобразователем ток-напряжение,' +
                    ' а второй каскад - усилителем по напряжению.<br>' +
                    'Прибор возможно использовать с различными пьезоэлектрическими и пироэлектрическими датчиками и преобразователями, где важно' +
                    ' быстрое срабатывание.<br>' +
                    'В результате тестирования прибора было выяснено, что его коэффициент усиления равен 25*10<sup>6</sup>В/А, а рабочий диапазон частот - до 20кГц.',
                    style: {
                        fontSize: '18px'
                    }
                }
            ]
        }
    ]
});