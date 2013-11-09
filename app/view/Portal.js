/**
 * @class BaseballExtJS.view.Portal
 * @extends Object
 * A sample portal layout application class.
 */

Ext.define('BaseballExtJS.view.Portal', {
    extend: 'Ext.panel.Panel',
	xtype: 'app-portal',
	
    requires: [
		'BaseballExtJS.view.PortalPanel', 
		'BaseballExtJS.view.PortalColumn', 
		'BaseballExtJS.view.GridPortlet',
		'BaseballExtJS.view.search.SearchForm',
		'BaseballExtJS.view.ChartPortlet',
		'BaseballExtJS.view.Portlet',
		'BaseballExtJS.view.PortalDropZone',
		'BaseballExtJS.view.Navigation',
		'BaseballExtJS.view.player.PlayersGrid',
		'BaseballExtJS.view.player.PlayerDetailWindow'
	],
	
    getTools: function(){
        return [{
            xtype: 'tool',
            type: 'refresh',
            handler: function(e, target, header, tool){
                var portlet = header.ownerCt;
                portlet.setLoading('Loading...');
                Ext.defer(function() {
                    portlet.setLoading(false);
                }, 2000);
				portlet.fireEvent('playersGridRefresh');
            }
        }];
    },

    initComponent: function(){
        var content = '<div class="portlet-content">'+'<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed metus nibh, '+
    'sodales a, porta at, vulputate eget, dui. Pellentesque ut nisl. Maecenas tortor turpis, interdum non, sodales '+
    'non, iaculis ac, lacus. Vestibulum auctor, tortor quis iaculis malesuada, libero lectus bibendum purus, sit amet '+
    'tincidunt quam turpis vel lacus. In pellentesque nisl non sem. Suspendisse nunc sem, pretium eget, cursus a, fringilla.</p>'+'</div>';

        Ext.apply(this, {
            id: 'app-viewport',
            layout: {
                type: 'border',
				split: false,
                padding: '0 5 5 5' // pad the layout from the window edges
            },
            items: [{
                id: 'app-header',
                xtype: 'box',
                region: 'north',
                height: 30,
                html: '<span style="color: #ddd;">baseballextjs</span><span style="color: #999;">proto</span>'
            },{
                xtype: 'container',
                region: 'center',
                layout: 'border',
                items: [{
                    id: 'app-options',
                    title: 'Search',
                    region: 'west',
                    animCollapse: true,
                    width: 300,
                    minWidth: 250,
                    maxWidth: 400,
                    split: true,
					collapsible: true,
                    layout:{
                        type: 'accordion',
                        animate: true
                    },	
                    items: [{
						//items: Ext.create('BaseballExtJS.view.Navigation'),
						title:'<span style="color: #999;">Players</span>',
						items: Ext.create('BaseballExtJS.view.search.SearchForm'),
                        autoScroll: true,
                        border: false,
						glyph: 'xf007@FontAwesome'
                    }]
                }, {
                    id: 'app-portal',
                    xtype: 'portalpanel',
                    region: 'center',
                    items: [{
                        id: 'col-1',
                        items: [
						{
                            id: 'portlet-players-grid',
							itemId: 'portlet-players-grid',
                            title: 'Players',
                            tools: this.getTools(),
                            items: Ext.create('BaseballExtJS.view.player.PlayersGrid'),
                            listeners: {
                                'close': Ext.bind(this.onPortletClose, this)
                            }
                        }]
                    }]
                }]
            }]
        });
        this.callParent(arguments);
    },

    onPortletClose: function(portlet) {
        this.showMsg('"' + portlet.title + '" was removed');
    },
	
    showMsg: function(msg) {
        var el = Ext.get('app-msg'),
            msgId = Ext.id();

        this.msgId = msgId;
        el.update(msg).show();

        Ext.defer(this.clearMsg, 3000, this, [msgId]);
    },

    clearMsg: function(msgId) {
        if (msgId === this.msgId) {
            Ext.get('app-msg').hide();
        }
    }
});
