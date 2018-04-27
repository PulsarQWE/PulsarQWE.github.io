/**
 * Created by Алексей on 26.04.2018.
 */
Ext.define('DiplomSite.model.Base', {
    extend : 'Ext.data.Model',
    schema : {
        namespace : 'DiplomSite.model',
        urlPrefix : 'http://localhost/diplomsite/',
        proxy : {
            type : 'ajax',
            reader : {
                type : 'json',
                rootProperty : 'data'
            },
            writer : {
                type : 'json',
                rootProperty : 'data',
                allowSingle : false
            }
        }
    }
});