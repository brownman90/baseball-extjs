Ext.define('BaseballExtJS.view.player.BattingStatsTab', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.battingStatsTab',
	
    requires: [
		'BaseballExtJS.view.player.PlayerBattingsGrid'
	],
	
    layout: 'fit',
	title: '<span style="font-weight: normal;">Batting</span>',
    glyph: 'xf0ce@FontAwesome',
    
	tpl: [
		'playerID: {playerID}<br/>',
		'yearID: {yearID}<br/>',
		'stint: {stint}<br/>',
		'teamID: {teamID}<br/>'
    ],
	
    items: [{
    	xtype: 'player-battings-grid'
	}],
	
	listeners: {
	    activate: function(tab) {
	        //console.log('activate');
	    }
	},

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
		var playerBattingsGrid = me.down('player-battings-grid');
		playerBattingsGrid.setPlayer(data);
	}
});