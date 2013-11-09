Ext.define('BaseballExtJS.view.player.BioTab', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.bioTab',
    layout: 'fit',
	title: '<span style="font-weight: normal;">Bio</span>',
	glyph: 'xf007@FontAwesome',
	
	tpl: [
		'<div style="margin: 10px;"><p>',
		'<table width="100%">',
		'<tr><td width=200><b>First Name:</b> {nameFirst}</td><td><b>Last Name:</b> {nameLast}</td><td><b>Name Given:</b> {nameGiven}</td></tr>',
		'<tr><td colspan=3><b>Nickname:</b> {nameNick}</td></tr>',
		'</table>',
		'</div>',
		'<div style="margin: 10px;"><p>',
		'<table width="100%">',
		'<tr><td><b>Born:</b> {birthMonth}/{birthDay}/{birthYear}, {birthCity} {birthState} {birthCountry}</td></tr>',
		'</table>',
		'</div>',
		'<div style="margin: 10px;"><p>',
		'<table width="100%">',
		'<tr><td width=200><b>Weight:</b> {weight}</td><td><b>Bats:</b> {bats}</td></tr>',
		'<tr><td width=200><b>Height:</b> {height}</td><td><b>Throws:</b> {throws}</td></tr>',
		'</table>',
		'</div>',
		'<div style="margin: 10px;"><p>',
		'<table width="100%">',
		'<tr><td width=200><b>Debut:</b> {debut}</td><td><b>Final Game:</b> {finalGame}</td></tr>',
		'</table>',
		'</div>'
    ],
	
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
		var thisBioTab = this;
		var PlayerBio = Ext.ModelManager.getModel('BaseballExtJS.model.PlayerBio');
		
		PlayerBio.load(data.lahmanID, {
		    success: function(playerBio) {
				thisBioTab.data = playerBio.data;
				thisBioTab.update(playerBio.data);
		    }
		});		
	}
});