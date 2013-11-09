Ext.define('BaseballExtJS.view.player.PlayerDetail', {
    extend: 'Ext.Panel',
	xtype: 'player-detail',
	itemId: 'playerDetail',
	height: 505,
    
	requires: [
		'BaseballExtJS.view.player.BioTab',
		'BaseballExtJS.view.player.BattingStatsTab',
		'BaseballExtJS.view.player.FieldingStatsTab',
		'BaseballExtJS.view.player.PitchingStatsTab',
		'BaseballExtJS.view.player.ChartsTab',
		'BaseballExtJS.view.player.AwardsTab'
	],
    
	startingMarkup: 'Please select a player to see additional details',

	items: [{
        xtype: 'tabpanel',
        tabPosition: 'top',
		height: 505,
		defaults: {
			autoScroll: true
        },
        plain: true,
        items: [{
			xtype: 'bioTab'
        }, {
			xtype: 'battingStatsTab'
        },  {
			xtype: 'chartsTab'
        }]
    }],
    
	initComponent: function() {
        this.html = this.startingMarkup;
        this.callParent();
    },
	
	setPlayer: function (data) {
		var me = this;
		
		var bioTab = me.down('bioTab');
		bioTab.setPlayer(data);
		
		var battingStatsTab = me.down('battingStatsTab');
		battingStatsTab.setPlayer(data);
		
		var chartsTab = me.down('chartsTab');
		chartsTab.setPlayer(data);
	}
});