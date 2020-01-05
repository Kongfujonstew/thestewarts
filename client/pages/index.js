// AppMenu Icons
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import WeekendIcon from '@material-ui/icons/Weekend';

// public
// import Home from './Home';
// import Login from './Login';

// private
// import Landing from './Landing';
import Wedding from './Wedding';

// admin
// import AdminMain from './AdminMain';
// import AdminEmail from './AdminEmail';
// import AdminBlog from './AdminBlog';


const landingPage = {
  path: '/',
  name: null,
  component: Wedding,
  icon: null
}

const weddingPage = {
  path: '/wedding',
  name: null,
  component: Wedding,
  icon: null
}
//
// const loginPage = {
//   path: '/login',
//   name: null,
//   component: Login,
//   icon: null
// }
//
// const homePage = {
//   path: '/private',
//   name: 'Home',
//   component: Home,
//   icon: WeekendIcon
// }
//
// const adminMainPage = {
//   path: '/admin',
//   name: 'Admin',
//   component: AdminMain,
//   icon: SettingsIcon
// };
//
// const adminEmailPage = {
//   path: '/admin/email',
//   name: 'Email',
//   component: AdminEmail,
//   icon: MailIcon
// };
//
// const adminBlogPage = {
//   path: '/admin/blog',
//   name: 'Blog',
//   component: AdminBlog,
//   icon: WeekendIcon
// };

export const publicPages = [ weddingPage, landingPage ];
// export const privatePages = [ homePage ];
// export const adminPages = [ adminMainPage, adminEmailPage, adminBlogPage ];
