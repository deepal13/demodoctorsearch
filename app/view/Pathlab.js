Ext.define('DNM.view.Pathlab', {
  extend: 'Ext.Panel',
  alias: 'widget.pathlab',
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
      xtype:'checkboxfield', 
      name:'government',
      id:'pgovernment',
      label:'Filter by Government/Government aided Laboratorys? '},
    {
      xtype:'button', 
      name:'psearch',
      id:'psearch',
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
      { title: 'Laboratory 1'},
      { title: 'Laboratory 2'},
      { title: 'Laboratory 3'},
      { title: 'Laboratory 4'},
      { title: 'Laboratory 5'}
      ]
    }
    ]
  }
  ]
}
})
