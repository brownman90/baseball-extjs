Ext.define('BaseballExtJS.view.Main', {
	extend: 'Ext.panel.Panel',
	xtype: 'app-main',
	alias: 'widget.app-main',
	autoShow: true,
	border: false,
	layout: 'card',

	requires:[
		'Ext.tab.Panel',
		'Ext.layout.container.Border',
		'BaseballExtJS.view.login.Login',
		'BaseballExtJS.view.account.Register'
	],

    items: [{
		xtype: 'app-portal',
		region: 'north'
	}, {
		xtype: 'app-register',
		region: 'north'
	}, {
		xtype: 'app-login',
		region: 'north'
    }],
	
    displayPortal : function () {
        this.getLayout().setActiveItem(2);
    }
});