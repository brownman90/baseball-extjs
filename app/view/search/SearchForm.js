Ext.define('BaseballExtJS.view.search.SearchForm', {
	extend: 'Ext.form.FormPanel',
	
	border: false,
	xtype: 'search-search-form',
	itemId: 'searchSearchForm',
	cls: 'playersSearchForm',
	
	layout: 'form',
    //url: 'save-form.php',
    frame: false,
    bodyPadding: '5 5 5 5',
	fieldDefaults: {
        msgTarget: 'side',
        labelWidth: 100	
    },
    defaultType: 'textfield',
    items: [{
        emptyText: 'First Name',
		name: 'nameFirst',
        tooltip: 'Enter player first name'
    }, {
        emptyText: 'Last Name',
        name: 'nameLast',
        tooltip: 'Enter player last name'
    }, {
        emptyText: 'Name Given',
        name: 'nameGiven',
        tooltip: 'Enter player name given'
    }, {
        emptyText: 'Nickname',
        name: 'nameNick',
        tooltip: 'Enter player nickname'
    }],

    buttons: [{
		text: 'Search'
    },{
		text: 'Reset'
    }]
});


