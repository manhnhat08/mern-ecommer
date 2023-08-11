import config from '~/config'

// Layouts
import { HeaderOnly } from '~/client/layouts';


// Pages
import Home from '~/client/pages/Home';
import Learning from '../client/pages/Learning';
import Course from '~/client/pages/Course';
import Blog from '~/client/pages/Blog';
import Profile from '~/client/pages/Profile';
import Upload from '~/client/pages/Upload';
import Search from '~/client/pages/Search';


// Public routes
const publRoutes = [
    {path: config.routes.home, component: Home},
    {path: config.routes.learning, component: Learning},
    {path: config.routes.course, component: Course},
    {path: config.routes.blog, component: Blog},
    {path: config.routes.profile, component: Profile},
    {path: config.routes.upload, component: Upload, layout: HeaderOnly},
    {path: config.routes.search, component:Search, layout: null},
]

const privRoutes = [
    
];

export {publRoutes, privRoutes};