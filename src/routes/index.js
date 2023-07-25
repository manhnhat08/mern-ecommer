// Layouts
import { HeaderOnly } from '~/client/components/Layout';


// Pages
import Home from '~/client/pages/Home';
import Folowing from '../client/pages/Folowing';
import Profile from '~/client/pages/Profile';
import Upload from '~/client/pages/Upload';
import Search from '~/client/pages/Search';


// Public routes
const publRoutes = [
    {path: '/', component: Home},
    {path: '/folowing', component: Folowing},
    {path: '/profile', component: Profile},
    {path: '/upload', component: Upload, layout: HeaderOnly},
    {path: '/search', component:Search, layout: null},
]

const privRoutes = [
    
];

export {publRoutes, privRoutes};