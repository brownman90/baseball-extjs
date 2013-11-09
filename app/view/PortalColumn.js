/**
 * @class BaseballExtJS.view.PortalColumn
 * @extends Ext.container.Container
 * A layout column class used internally be {@link BaseballExtJS.view.PortalPanel}.
 */
Ext.define('BaseballExtJS.view.PortalColumn', {
    extend: 'Ext.container.Container',
    alias: 'widget.portalcolumn',

    requires: [
        'Ext.layout.container.Anchor',
        'BaseballExtJS.view.Portlet'
    ],

    layout: 'anchor',
    defaultType: 'portlet',
    cls: 'x-portal-column'

    // This is a class so that it could be easily extended
    // if necessary to provide additional behavior.
});