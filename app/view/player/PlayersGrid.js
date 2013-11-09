Ext.define('BaseballExtJS.view.player.PlayersGrid', {
    extend: 'Ext.grid.Panel',
	xtype: 'players-grid',
	itemId: 'playersGrid',
	
	requires: [
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.util.*',
        'Ext.toolbar.Paging',
        'Ext.ux.ProgressBarPager'
	],
	
	height: 340,
	width: 700,
	
    initComponent : function() {
        //console.log(this.$className + ' initComponent');
		var me = this, 
			//group1 = this.id + 'group1',
			//group2 = this.id + 'group2';
			group1 = 'PlayersGrid_group1',
			group2 = 'PlayerComparisonsGrid_group2';
		
		this.store = Ext.data.StoreManager.lookup('Players');
		this.columns = this.buildColumns();
		
		Ext.apply(this, {
		    viewConfig: {
		        stripeRows: true,
		        plugins: {
		            ptype: 'gridviewdragdrop',
		            dragGroup: group1,
		            dropGroup: group2
		        },
				copy: true,
		        listeners: {
		            drop: function(node, data, dropRec, dropPosition) {
						var dropOn = dropRec ? ' ' + dropPosition + ' ' + dropRec.get('name') : ' on empty view';
		                Ext.example.msg('Drag from left to right', 'Dropped ' + data.records[0].get('name') + dropOn);
		            }
		        }
		    },
				
            bbar: {
                xtype: 'pagingtoolbar',
                pageSize: 100,
                store: this.store,
                displayInfo: true,
		        displayMsg: 'Displaying {0} - {1} of {2}',
		        emptyMsg: 'No records to display',
                plugins: new Ext.ux.ProgressBarPager()
            }
				
        });
        this.callParent();
    },
	
    initEvents: function() {
        this.callParent();
		var gridSm = this.getSelectionModel();
		gridSm.on('selectionchange', this.onRowSelect, this);
    },

	onRowSelect: function(sm, rs) {

		if (rs.length) {
			this.fireEvent('playersGridSelection', rs);
        }
    },
	
    buildColumns : function() {
       return [
			{
				dataIndex: 'nameFirst',
				flex: 1,
				sortable: true,
				text: 'First Name'
			}, {
				dataIndex: 'nameLast',
				flex: 1.3,
				sortable: true,
				text: 'Last Name'
			}, {
				dataIndex: 'nameGiven',
				flex: 1.3,
				sortable: true,
				text: 'Name Given'
			}, {
				dataIndex: 'nameNick',
				flex: 1.3,
				sortable: true,
				text: 'Nickname'
			}, {
				dataIndex: 'debut',
				flex: 1.3,
				sortable: true,
				text: 'Debut'
			}, {
				dataIndex: 'finalGame',
				flex: 1.3,
				sortable: true,
				text: 'Final Game'
			}, {
				xtype:'actioncolumn',
	            width:50,
	            items: [{
					width: 20,
					height: 20,
	                icon: 'resources/icons/eye.png',  // Use a URL in the icon config
	                tooltip: 'View',
	                handler: function(grid, rowIndex, colIndex) {
						var rec = grid.getStore().getAt(rowIndex);
	                    grid.ownerCt.fireEvent('playersGridViewSelection', rec);
	                }
	            }]
			}
        ];
    }
});