Ext.define('BaseballExtJS.view.player.ChartsTab', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.chartsTab',
	
    requires: [
		'BaseballExtJS.view.chart.BattingChart'
	],
	
    layout: 'fit',
	title: '<span style="font-weight: normal;">Charts</span>',
    glyph: 'xf080@FontAwesome',
	
	tpl: [
        '{nameFirst} {nameLast}'
    ],
	
	items: [{
		xtype: 'batting-chart'
	}],

    initComponent: function () {
        this.callParent();
    },

    afterRender: function () {
        this.callParent();
    },

    onDestroy: function () {
		this.callParent();
    },
	
	setPlayer: function(data) {
		var me = this;
		var battingChart = me.down('batting-chart');
		battingChart.setPlayer(data);
	}
});