Ext.define('BaseballExtJS.model.PlayerBio', {
	extend : 'Ext.data.Model',

	fields : [
		{ name : 'lahmanID' }, 
		{ name : 'playerID', type : 'string' },
		{ name : 'nameFirst', type : 'string' },
		{ name : 'nameLast', type : 'string' },
		{ name : 'nameGiven', type : 'string' },
		{ name : 'nameNote', type : 'string' }, 
		{ name : 'nameNick', type : 'string' }, 
		{ name : 'birthYear', type : 'string' }, 
		{ name : 'birthMonth', type : 'string' }, 
		{ name : 'birthDay', type : 'string' }, 
		{ name : 'birthCountry', type : 'string' }, 
		{ name : 'birthState', type : 'string' }, 
		{ name : 'birthCity', type : 'string' }, 
		{ name : 'deathYear', type : 'string' }, 
		{ name : 'deathMonth', type : 'string' }, 
		{ name : 'deathDay', type : 'string' }, 
		{ name : 'deathCountry', type : 'string' },
		{ name : 'deathState', type : 'string' },
		{ name : 'deathCity', type : 'string' },
		{ name : 'weight', type : 'string' },
		{ name : 'height', type : 'string' },
		{ name : 'bats', type : 'string' },
		{ name : 'throws', type : 'string' },
		{ name : 'college', type : 'college' },
		{ name : 'finalGame', type : 'string' },
		{ name : 'debut', type : 'string' }
	],
	
    proxy: {
        type: 'rest',
        url : 'api/index.php/players/bio'
    },

	constructor : function () {
		this.callParent(arguments);
		return this;
	}

});