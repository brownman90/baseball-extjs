Ext.define('BaseballExtJS.view.player.PlayerBattingsGrid', {
    extend: 'Ext.grid.Panel',
	xtype: 'player-battings-grid',
	
	requires: [
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.util.*'
	],
	
	height: 340,
	width: 700,
    viewConfig: {
        stripeRows: true
    },
	
	initComponent : function() {
		var me = this;

        Ext.apply(me, {
            store : me.buildStore()
        });

		this.columns = this.buildColumns();
        this.callParent(arguments);
    },

    initEvents: function() {
        this.callParent();
		var gridSm = this.getSelectionModel();
		gridSm.on('selectionchange', this.onRowSelect, this);
    },
    
	onRowSelect: function(sm, rs) {
		if (rs.length) {
			this.fireEvent('playerBattingsGridSelection', rs);
        }
    },
	
	setPlayer: function(data) {
		this.store.load({
			params: data,
			scope: this,
		    callback: function(records, operation, success) {
		    }
		});
	},
	
    buildStore : function() {
        return Ext.create('BaseballExtJS.store.PlayerBattings', {});
    },
	
    buildColumns : function() {
       return [
	   		{
				dataIndex: 'yearID',
				flex: 1.4,
				sortable: true,
				text: 'Year'
			}, {
				dataIndex: 'teamID',
				flex: 1.3,
				sortable: true,
				text: 'teamID'
			}, {
				dataIndex: 'G',
				flex: 1,
				sortable: true,
				text: 'G'
			}, {
				dataIndex: 'AB',
				flex: 1,
				sortable: true,
				text: 'AB'
			}, {
				dataIndex: 'R',
				flex: 1,
				sortable: true,
				text: 'R'
			}, {
				dataIndex: 'H',
				flex: 1,
				sortable: true,
				text: 'H'
			}, {
				dataIndex: '2B',
				flex: 1,
				sortable: true,
				text: '2B'
			}, {
				dataIndex: '3B',
				flex: 1,
				sortable: true,
				text: '3B'
			}, {
				dataIndex: 'HR',
				flex: 1,
				sortable: true,
				text: 'HR'
			}, {
				dataIndex: 'RBI',
				flex: 1,
				sortable: true,
				text: 'RBI'
			}, {
				dataIndex: 'SB',
				flex: 1,
				sortable: true,
				text: 'SB'
			}, {
				dataIndex: 'CS',
				flex: 1,
				sortable: true,
				text: 'CS'
			}, {
				dataIndex: 'BB',
				flex: 1,
				sortable: true,
				text: 'BB'
			}, {
				dataIndex: 'SO',
				flex: 1,
				sortable: true,
				text: 'SO'
			}
			
        ];
    }
});