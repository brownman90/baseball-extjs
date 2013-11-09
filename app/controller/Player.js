Ext.define('BaseballExtJS.controller.Player', {
    extend: 'Ext.app.Controller',
	
	stores: [
		'Players',
		'PlayerBattings'
	],
	
    refs:[{
			ref: 'portletPlayersGrid',
		    selector: 'portalpanel #portlet-players-grid'
	    }, {
			ref: 'portletPlayerDetail',
		    selector: 'portalpanel #portlet-player-detail'
	    }, {
			ref: 'playersGrid',
		    selector: 'players-grid'
	    }, {
			ref: 'playerDetail',
		    selector: 'player-detail'
	    }, {
			ref: 'bioTab',
		    selector: 'bioTab'
	    }, {
			ref: 'battingStatsTab',
		    selector: 'battingStatsTab'
	    }, {
			ref: 'fieldingStatsTab',
		    selector: 'fieldingStatsTab'
	    }, {
			ref: 'pitchingStatsTab',
		    selector: 'pitchingStatsTab'
	    }, {
			ref: 'chartsTab',
		    selector: 'chartsTab'
	    }, {
			ref: 'awardsTab',
		    selector: 'awardsTab'
	    }
    ],
	
	constructor : function () {
		Ext.create('BaseballExtJS.store.Players');
		Ext.create('BaseballExtJS.store.PlayerBattings');
		this.callParent(arguments);
	},
	
    init: function () {
		this.control({
			'portalpanel #portlet-players-grid': {
				playersGridRefresh: this.onPlayersGridRefresh
			},
            'players-grid': {
                playersGridViewSelection: this.onPlayersGridViewSelection
            }
        });
    },
	
	onPlayersGridRefresh: function() {
	},
		
    onPlayersGridViewSelection: function (rec) {
		this.displayPlayerDetailWindow(rec.data);
	},
	
	displayPlayerDetailWindow: function (data) {
		var win = Ext.create('BaseballExtJS.view.player.PlayerDetailWindow', {});
		win.setTitle(data.nameFirst + " " + data.nameLast);
        
		var playerDetail = win.down('player-detail');
		playerDetail.setPlayer(data);
		win.show();
	}
});
