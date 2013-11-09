Ext.define('BaseballExtJS.controller.Search', {
    extend: 'Ext.app.Controller',
	
    refs:[{
			ref: 'portletPlayersGrid',
		    selector: 'portalpanel #portlet-players-grid'
	    }, {
			ref: 'searchForm',
		    selector: 'search-search-form'
	    }
    ],
	
	constructor : function () {
		//console.log(this.$className  + ' constructor');
		this.callParent(arguments);
	},
	
    init: function () {
		//console.log(this.$className  + ' init');
        
		this.control({
			'portalpanel #portlet-players-grid': {
				playersGridRefresh: this.onRefreshPlayersGrid
			},
            'search-search-form button[text=Search]': {
                click: this.onSearchClick
            },
			'search-search-form button[text=Reset]': {
                click: this.onResetClick
            }
        });
    },
	
	onRefreshPlayersGrid: function () {
		this.onResetClick();
		this.onSearchClick(null);
	},
	
    onSearchClick: function (evtData) {
        //this.up('form').getForm().isValid();
        var values = this.getSearchForm().getForm().getValues();
		
		Ext.data.StoreManager.lookup('Players').load({
			params: values,
			scope: this,
		    callback: function(records, operation, success) {
		        //console.log(records);
		    }
		});
    },
	
    onResetClick: function () {
		this.getSearchForm().getForm().reset();
		Ext.data.StoreManager.lookup('Players').clearFilter();
    }
	
});