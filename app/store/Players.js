/**
 * A persistent collection of Player models.
 *
 */
Ext.define('BaseballExtJS.store.Players', {
	extend : 'Ext.data.Store',
	model : 'BaseballExtJS.model.Player',
	autoLoad: { params: { start: 0, limit: 100} },
	autoSync: true,
	remoteSort: true,
	sorters: [{
    	property : 'nameLast',
        direction: 'ASC'
    }],
    pageSize: 100,
	proxy: {
		type: 'direct',
		enablePaging: true,
		reader: {
	        type: 'json',
	        root: 'data',
	        totalProperty: 'total'
	    },
		api: {
			read: 'Player.getResults'
		}
	},

	listeners: {
		'write' : function(store, operation, eOpts) {
			//console.log('something');
		},
		'beforesync' : function(options, eOpts) {
			//console.log('beforesync');
		},
		'remove' : function (store, record, index, isMove, eOpts) {
			//console.log('remove');
		},
		'datachanged' : function (item, eOpts) {
			//console.log('beforesync');
		},
		'update' : function (item, record, operation, modifiedFieldNames, eOpts) {
			//console.log('update');
		},
		'beforeload' : function ( store, operation, eOpts ) {
			//console.log('beforeload');
		},
		'beforeprefetch' : function ( item, operation, eOpts ) {
			//console.log('beforeprefetch');
		}
	},
	
    filterNameLast: function(nameLast) {
        this.getProxy().api.read = Players.filterNameLast;
        this.load({params: {nameLast: nameLast}});
    }
	
});