Ext.define('DNM.view.Medical', {
  extend: 'Ext.Panel',
  alias: 'widget.medical',
  config: {
    layout: 'hbox',
    items:[{
      flex: 3,
      padding:50,
      items:[{xtype:'textfield',
        name:'location',
        id:'location',
        label:'Specify Location: '},
      {
        xtype:'selectfield', 
        name:'speciality',
        id:'speclt',
        options: [{text: 'All', value:'All'},
        {text: 'General Practitioner', value:'General Practitioner'},
        {text: 'Dentistry', value:'Dentistry'},
        {text: 'Paediatrics', value:'Paediatrics'},
        {text: 'Orthopaedics', value:'Orthopaedics'},
        {text: 'Gynaecology', value:'Gynaecology'},
        {text: 'Oncology', value:'Oncology'},
        {text: 'Surgery', value:'Surgery'},
        ],
        label:'Filter by speciality: '},

      {
        xtype:'textfield', 
        name:'comment',
        id:'comment',
        label:'Add comment about ailment: '},
      {
        xtype:'checkboxfield', 
        name:'home-visit',
        id:'home-visit',
        label:'Require home visits? '},
      {
        xtype:'checkboxfield', 
        name:'government',
        id:'government',
        label:'Filter by Government/Government aided centers? '},
      {
        xtype:'button', 
        name:'msearch',
        id:'msearch',
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
        { title: 'Doctor 1'},
        { title: 'Doctor 2'},
        { title: 'Doctor 3'},
        { title: 'Doctor 4'},
        { title: 'Doctor 5'}
        ]
      }
      ]
    }
    ]
  }
  })
