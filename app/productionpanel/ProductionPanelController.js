/**
 * Created by Алексей on 26.04.2018.
 */
Ext.define('DiplomSite.productionpanel.ProductionPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productionPanelController',

    openProductionView: function (component) {
        var lowCurrentMeterView = Ext.create(component.viewName);
        var centralPanel = this.getView().up().lookupReference('centralPanel');
        centralPanel.removeAll();
        centralPanel.add(lowCurrentMeterView);
        this.getViewModel().set('hiddenMainViewButton', false);
        this.getView().up().getViewModel().set('title', component.buttonTitle);
    },

    onMainPage: function (component) {
        var mainInformationView = Ext.create('DiplomSite.mainsiteview.MainInformationView');
        var centralPanel = this.getView().up().lookupReference('centralPanel');
        centralPanel.removeAll();
        centralPanel.add(mainInformationView);
        this.getViewModel().set('hiddenMainViewButton', true);
        if (component) {
            this.getView().up().getViewModel().set('title', component.buttonTitle);
        }
    },

    onContactInformation: function (component) {
        var contactInformationView = Ext.create('DiplomSite.productionview.contactinformation.ContactInformationView');
        var centralPanel = this.getView().up().lookupReference('centralPanel');
        centralPanel.removeAll();
        centralPanel.add(contactInformationView);
        this.getViewModel().set('hiddenMainViewButton', false);
        this.getView().up().getViewModel().set('title', component.buttonTitle);
    }
});