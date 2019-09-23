// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import Person from '@material-ui/icons/Person';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import BubbleChart from '@material-ui/icons/BubbleChart';
import LocationOn from '@material-ui/icons/LocationOn';
import Notifications from '@material-ui/icons/Notifications';
import Unarchive from '@material-ui/icons/Unarchive';
import Build from '@material-ui/icons/Build';
import Home from '@material-ui/icons/Home';
import Security from '@material-ui/icons/Security';
import Accessibility from '@material-ui/icons/Accessibility';

import DashboardPage from './pages/Dashboard';
import UserProfile from './pages/UserProfile';
import TableList from './pages/TableList';
import Typography from './pages/Typography';
import Icons from './pages/Icons';
import Maps from './pages/Maps';
import NotificationsPage from './pages/Notifications';
import UpgradeToPro from './pages/UpgradeToPro';
import MaterialKitPage from './pages/MaterialKit';
import LandingPage from './pages/Landing';

const dashboardRoutes = [
	{
		path: '/admin/dashboard',
		name: 'Dashboard',
		icon: Dashboard,
		component: DashboardPage,
	},
	{
		path: '/admin/user',
		name: 'Perfil do Usuário',
		icon: Person,
		component: UserProfile,
	},
	{
		path: '/admin/table',
		name: 'Tabelas',
		icon: 'content_paste',
		component: TableList,
	},
	{
		path: '/admin/typography',
		name: 'Tipografia',
		icon: LibraryBooks,
		component: Typography,
	},
	{
		path: '/admin/icons',
		name: 'Ícones',
		icon: BubbleChart,
		component: Icons,
	},
	{
		path: '/admin/maps',
		name: 'Mapas',
		icon: LocationOn,
		component: Maps,
	},
	{
		path: '/admin/notifications',
		name: 'Notificações',
		icon: Notifications,
		component: NotificationsPage,
	},
	{
		path: '/materialkit',
		name: 'Material Kit',
		icon: Build,
		component: MaterialKitPage,
	},
	{
		path: '/landingPage',
		name: 'Landing Page',
		icon: Home,
		component: LandingPage,
	},
	{
		path: '/logon',
		name: 'Login',
		icon: Security,
		component: LandingPage,
	},
	{
		path: '/profile',
		name: 'Profile',
		icon: Accessibility,
		component: LandingPage,
	},
	{
		path: '/admin/upgrade-to-pro',
		name: 'Atualizar para PRO',
		icon: Unarchive,
		component: UpgradeToPro,
	},
];

export default dashboardRoutes;
