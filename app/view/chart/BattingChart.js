Ext.define('BaseballExtJS.view.chart.BattingChart', {
    extend: 'Ext.chart.Chart',
	xtype: 'batting-chart',
	
	requires: [
	    'Ext.chart.*',
		'Ext.layout.container.Fit',
	    'Ext.window.MessageBox',
	    'Ext.grid.Panel'
	],
	
	shadow: true,
	
	axes: [{
        type: 'Numeric',
        position: 'left',
        fields: ['H'],
        title: 'Hits',
        grid: true,
        minimum: 0
    }, {
        type: 'Category',
        position: 'bottom',
        fields: ['yearID'],
		title: 'Year'
    }],
    series: [{
        type: 'line',
        axis: 'left',
		gutter: 80,
        highlight: true,
		xField: 'yearID',
        yField: 'H'
	}],
	
	initComponent : function() {
		var me = this;

        Ext.apply(me, {
            store : me.buildStore()
        });

        this.callParent(arguments);
    },
	
    buildStore : function() {
        return Ext.create('BaseballExtJS.store.PlayerBattings', {});
    },

    afterRender: function () {
        this.callParent();
    },

    onDestroy: function () {
		this.callParent();
    },
	
	setPlayer: function(data) {
		this.store.load({
			params: data,
			scope: this,
		    callback: function(records, operation, success) {
		    }
		});
	}
});