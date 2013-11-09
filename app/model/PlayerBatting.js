Ext.define('BaseballExtJS.model.PlayerBatting', {
	extend : 'Ext.data.Model',

	fields : [
		{ name : 'playerID', type : 'string' }, 
		{ name : 'yearID', type : 'string' }, 
		{ name : 'stint', type : 'string' }, 
		{ name : 'teamID', type : 'string' }, 
		{ name : 'lgID', type : 'string' },
		{ name : 'G', type : 'int' },
		{ name : 'G_batting', type : 'string' },
		{ name : 'AB', type : 'int' },
		{ name : 'R', type : 'int' },
		{ name : 'H', type : 'int' },
		{ name : '2B', type : 'int' },
		{ name : '3B', type : 'int' },
		{ name : 'HR', type : 'int' },
		{ name : 'RBI', type : 'int' },
		{ name : 'SB', type : 'int' },
		{ name : 'CS', type : 'int' },
		{ name : 'BB', type : 'int' },
		{ name : 'SO', type : 'int' },
		{ name : 'IBB', type : 'int' },
		{ name : 'HBP', type : 'int' },
		{ name : 'SH', type : 'int' },
		{ name : 'SF', type : 'int' },
		{ name : 'GIDP', type : 'int' },
		{ name : 'G_old', type : 'int' }
	],

	constructor : function () {
		this.callParent(arguments);
		return this;
	}

});