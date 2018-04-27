/**
 * Created by Алексей on 26.04.2018.
 */
Ext.define('DiplomSite.mainsiteview.MainSiteViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainSiteViewController',

    boxready: function () {
        this.getView().lookupReference('productionPanel').getController().onMainPage();
    }
});