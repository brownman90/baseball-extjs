/**
 * Models a Player.
 *
 */
Ext.define('BaseballExtJS.model.Player', {
	extend : 'Ext.data.Model',

	fields : [
		{ name : 'lahmanID'	},
		{ name : 'playerID', type : 'string' },
		{ name : 'nameFirst', type : 'string' },
		{ name : 'nameLast', type : 'string' },
		{ name : 'nameGiven', type : 'string' }, 
		{ name : 'nameNick', type : 'string' },
		{ name : 'debut', type : 'string' },
		{ name : 'finalGame', type : 'string' },
		{ name : 'G', type : 'int' },
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
		{ name : 'SO', type : 'int' }
	],

	constructor : function () {
		this.callParent(arguments);
		return this;
	}

});