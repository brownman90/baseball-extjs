Ext.define('BaseballExtJS.view.player.PlayerDetailWindow', {
    extend: 'Ext.Window',
	xtype: 'player-detail-window',
	itemId: 'playerDetailWindow',
	
	requires: [
		'BaseballExtJS.view.player.PlayerDetail'
	],
		
	title: 'Player',
    closable: true,
    closeAction: 'hide',
    width: 650,
    minWidth: 650,
    height: 505,
    layout: {
        type: 'border',
        padding: 2
    },
    items: [{
        region: 'center',
        items: [{
			xtype: 'player-detail'
		}]
    }]
});