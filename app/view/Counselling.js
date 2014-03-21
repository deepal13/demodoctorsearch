Ext.define('DNM.view.Counselling', {
  extend: 'Ext.Panel',
  alias: 'widget.counselling',
  config: {
  layout: 'hbox',
  items:[{
    flex: 3,
    padding:50,
    items:[{xtype:'textfield',
      name:'location',
      id:'clocation',
      label:'Specify Location: '},
    {
      xtype:'textfield', 
      name:'comment',
      id:'comment',
      label:'Add comment about ailment: '},
    {
      xtype:'checkboxfield', 
      name:'government',
      id:'cgovernment',
      label:'Filter by Government/Government aided centers? '},
    {
      xtype:'button', 
      name:'csearch',
      id:'csearch',
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
      { title: 'Counsellor 1'},
      { title: 'Counsellor 2'},
      { title: 'Counsellor 3'},
      { title: 'Counsellor 4'},
      { title: 'Counsellor 5'}
      ]
    }
    ]
  }
  ]
}
})
