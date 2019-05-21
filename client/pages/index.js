import AdminMain from './AdminMain';
import AdminEmail from './AdminEmail';
import AdminBlog from './AdminBlog';

import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import WeekendIcon from '@material-ui/icons/Weekend';

const adminMainPage = {
  path: '/admin',
  text: 'Admin',
  Component: AdminMain,
  Icon: SettingsIcon
};

const adminEmailPage = {
  path: '/admin/email',
  text: 'Email',
  Component: AdminEmail,
  Icon: MailIcon
};

const adminBlogPage = {
  path: '/admin/blog',
  text: 'Blog',
  Component: AdminBlog,
  Icon: WeekendIcon
};



export const adminPages = [ adminMainPage, adminEmailPage, adminBlogPage ];
