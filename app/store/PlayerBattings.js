/**
 * A persistent collection of PlayerBatting models.
 *
 */
Ext.define('BaseballExtJS.store.PlayerBattings', {
	extend : 'Ext.data.Store',
	model : 'BaseballExtJS.model.PlayerBatting',
	autoLoad: false,
	autoSync: true,
	remoteSort: true,
	
	sorters: [{
    	property : 'yearID',
        direction: 'ASC'
    }],
	
	proxy: {
		type: 'direct',
		
		reader: {
	        type: 'json',
	        root: 'data',
	        totalProperty: 'total'
	    },
		api: {
			read: 'PlayerBatting.getResults'
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
	}
});