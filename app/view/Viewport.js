Ext.define('BaseballExtJS.view.Viewport', {
    extend: 'Ext.container.Viewport',
    
	requires:[
        'Ext.layout.container.Fit',
        'BaseballExtJS.view.Main'
    ],

    layout: {
        type: 'fit'
    },
	
    items: [{
        xtype: 'app-main'
    }]
});
