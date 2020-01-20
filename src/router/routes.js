export const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard'),
        meta:{
            requiresAuth:true,
            nav:true,
            icon: 'view_list',
        }
    },
    {
        path:'/calender',
        name:'Calender',
        component: () => import('@/views/Calender'),
        meta:{
            requiresAuth:true,
            nav:true,
            icon:'calendar_today'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/auth/login'),
        meta:{
            login:true,        
        }
    },
    {
        path: '/pageNotFound',
        name: 'NotFound',
        component: () => import('@/views/errors/NotFound'),
        meta:{
            nav:false
        }
    }, 
    {
        path: '*',
        redirect: '/pageNotFound',
        meta:{
            nav:false
        }
    },
    {
        path:'/about',
        name:'about',
        component: () => import('@/views/staticPages/about')
    },
    {
        path:'/projects',
        name:'Tenders',
        component: () => import('@/views/Projects'),
        meta:{
            requiresAuth:true,
            nav:true,
            icon: 'business_center',
            
        },
        children:[
            {
                path:'create',
                name:'Create Tender',
                component: () => import('@/views/Projects/modules/CreateProject'),
            },
            
            {
                path:'view/all',
                name:'View All Tenders',
                component: () => import('@/views/Projects/modules/ViewAll')
            },
            {
                path:'view/completed',
                name:'View Completed Tenders',
                component: () => import('@/views/Projects/modules/ViewCompleted')
            },
            {
                path:'view/due',
                name:"View Tenders Due",
                component: () => import('@/views/Projects/modules/ViewDue')
            },
            {
                path:'view/bids',
                name:"View Bids",
                component: () => import('@/views/Projects/modules/ViewBids')
            }
        ]

    },
    {
        path:'/contractors',
        name:"Contractors",
        component: () => import('@/views/Contractors'),
        meta:{
            requiresAuth:true,
            nav:true,
            icon: 'person',
        }
    },
   /*  {
        path:'/reports',
        name:'Reports',
        component: () => import('@/views/Reports'),
        meta:{
            requiresAuth:true,
            nav:true,
            icon:'folder'
        }
    },
    {
        path:'/analysics',
        name:"Data Analysics",
        component: () => import("@/views/Analysics"),
        meta:{
            requiresAuth:true,
            nav:true,
            icon:'perm_data_setting'
        }
    }, */
    {
        path:'/settings',
        name:'Settings',
        component: () => import('@/views/Settings'),
        meta:{
            requiresAuth:true,
            nav:true,
            icon: 'settings',
        }
    },
    {
        path:'/project/view/:id',
        name:'View Tender',
        component: () => import('@/views/Projects/modules/Show'),
        meta:{
            requiresAuth:true,
        }
    },
    {
        path:'/project/edit/:id',
        name:'Edit Tender',
        component: () => import("@/views/Projects/modules/EditProject"),
        meta:{
            requiresAuth:true,
        }
    },
    {
        path:"/bids",
        name:'Project Bids',
        component: () => import('@/views/Bids/index'),
        meta:{
            requiresAuth:false
        },
        children:[
            {
                path:"project/:id",
                name:"bids_project",
                component: () => import("@/views/Bids/modules/Project")
            }
        ]
    },
    {
        path:"/reports",
        component: () => import("@/views/Reports"),
        name:"Reports",
        children:[
            {
                path:"project/:id",
                name:"Project Report",
                component: () => import("@/views/Reports/modules/ProjectReport"),


            },
            {
                path:"bid/:id",
                name:"Bid Report",
                component: () => import('@/views/Reports/modules/BidReport')
            },
            {
                path:"contractors",
                name:"Contractors Report",
                component: () => import('@/views/Reports/modules/ContractorsReport')
            },
            {
                path:"projects",
                name:"Projects Report",
                component: () => import('@/views/Reports/modules/ProjectsReport')
            }
        ]

    }
]