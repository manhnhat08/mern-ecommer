import config from '~/config'

// Layouts
import { HeaderOnly } from '~/client/layouts';


// Pages
import Home from '~/client/pages/Home';
import Folowing from '../client/pages/Folowing';
import Profile from '~/client/pages/Profile';
import Upload from '~/client/pages/Upload';
import Search from '~/client/pages/Search';


// Public routes
const publRoutes = [
    {path: config.routes.home, component: Home},
    {path: config.routes.folowing, component: Folowing},
    {path: config.routes.profile, component: Profile},
    {path: config.routes.upload, component: Upload, layout: HeaderOnly},
    {path: config.routes.search, component:Search, layout: null},
]

const privRoutes = [
    
];

export {publRoutes, privRoutes};