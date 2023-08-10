import routesConfig from '~/config/routes'

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
    {path: routesConfig.home, component: Home},
    {path: routesConfig.folowing, component: Folowing},
    {path: routesConfig.profile, component: Profile},
    {path: routesConfig.upload, component: Upload, layout: HeaderOnly},
    {path: routesConfig.search, component:Search, layout: null},
]

const privRoutes = [
    
];

export {publRoutes, privRoutes};