Ext.define('DNM.view.Rehab', {
  extend: 'Ext.Panel',
  alias: 'widget.rehab',
  config: {
  layout: 'hbox',
  items:[{
    flex: 3,
    padding:50,
    items:[{xtype:'textfield',
      name:'location',
      id:'rlocation',
      label:'Specify Location: '},
    {
      xtype:'textfield', 
      name:'comment',
      id:'rcomment',
      label:'Add comment about ailment: '},
    {
      xtype:'checkboxfield', 
      name:'government',
      id:'rgovernment',
      label:'Filter by Government/Government aided centers? '},
    {
      xtype:'button', 
      name:'rsearch',
      id:'rsearch',
      text:'Search',
      iconCls: 'search',
      margin:50 },
    {
      xtype:'map',
      useCurrentLocation: true,
      style:'border:solid;height:300px;width:700px;margin:auto;',
    }
    ]},


  {xtype:'panel',
    layout:'vbox',
    flex: 1,
    items:[ 
    {
      xtype:'titlebar',
      flex: 1,
      title:'Found: 5 Results',
    },
    { xtype: 'list',
      flex: 19,
      itemTpl: '{title}',
      data: [
      { title: 'Center 1'},
      { title: 'Center 2'},
      { title: 'Center 3'},
      { title: 'Center 4'},
      { title: 'Center 5'}
      ]
    }
    ]
  }
  ]
}
})
