Ext.define('DNM.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.form.Panel',
        'Ext.Map',
        'Ext.field.Select',
        'DNM.view.Medical',
        'DNM.view.Counselling',
        'DNM.view.Rehab',
        'DNM.view.Pathlab'
    ],
    config: {
        tabBarPosition: 'top',

        layout: {
                animation: {type: 'fade', duration: 800},
        },
        
        items: [{
                 xtype:'titlebar',
                 title:'Doctors Near Me',
                 docked:'top'
                },
                {title:'Dotors',
                 iconCls: 'search',
                 items:{xtype:'medical'}
                },
                {title:'Counsellors',
                 iconCls: 'search',
                 items:{xtype:'counselling'}
                },
                {title:'Rehabilitation Centers',
                 iconCls: 'search',
                 items:{xtype:'rehab'}
                },
                {title:'Pathology Labs',
                 iconCls: 'search',
                 items:{xtype:'pathlab'}
                },
                ]
            }
    }
);
