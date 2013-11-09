
Ext.require([
    'Ext.direct.*',
	'Ext.layout.container.*',
    'Ext.resizer.Splitter',
    'Ext.fx.target.Element',
    'Ext.fx.target.Component',
    'Ext.window.Window'
]);

Ext.Loader.setConfig({
    enabled: true
});

Ext.Loader.setPath('Ext', '/src');
Ext.Loader.setPath('Ext.ux', '/src/ux');

Ext.define('BaseballExtJS.Application', {
    name: 'BaseballExtJS',
	appFolder: '/examples/afrith/BaseballExtJS/app',

    extend: 'Ext.app.Application',

    views: [
        // TODO: add views here
		'Portal'
    ],

    controllers: [
		'Player',
		'Search'
    ],
	
	models: [
		'PlayerBio',
		'PlayerBatting'
	],
	
    stores: [
	],
	
	init: function() {
		Ext.direct.Manager.addProvider(Ext.app.REMOTING_API);
		Ext.create('BaseballExtJS.store.Players');
	}
});
