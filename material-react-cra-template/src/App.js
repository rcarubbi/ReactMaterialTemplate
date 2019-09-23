import React, { useEffect, useState, createRef } from 'react';

import { Switch, Route } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import FixedPlugin from './components/FixedPlugin';

import appStyle from './appStyle.js';

import routes from './routes.js';

import bgImage from './assets/img/sidebar-2.jpg';
import logo from './assets/img/reactlogo.png';

let ps;

const useStyles = makeStyles(appStyle);

const App = ({ ...rest }) => {
	// styles
	const classes = useStyles();
	// ref to help us initialize PerfectScrollbar on windows devices
	const mainPanel = createRef();
	// states and functions
	const [image, setImage] = useState(bgImage);
	const [color, setColor] = useState('blue');
	const [mobileOpen, setMobileOpen] = useState(false);
	const [fixedClasses, setFixedClasses] = useState('dropdown');

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	const handleImageClick = image => {
		setImage(image);
	};
	const handleColorClick = color => {
		setColor(color);
	};
	const handleFixedClick = () => {
		if (fixedClasses === 'dropdown') {
			setFixedClasses('dropdown show');
		} else {
			setFixedClasses('dropdown');
		}
	};

	const switchRoutes = (
		<Switch>
			{routes.map((prop, key) => {
				return (
					<Route
						path={prop.path}
						component={prop.component}
						key={key}
					/>
				);
			})}
		</Switch>
	);

	const IsMapsRoute = () => {
		return window.location.pathname === '/admin/maps';
	};

	const resizeFunction = () => {
		if (window.innerWidth >= 960) {
			setMobileOpen(false);
		}
	};

	useEffect(() => {
		if (navigator.platform.indexOf('Win') > -1) {
			ps = new PerfectScrollbar(mainPanel.current, {
				suppressScrollX: true,
				suppressScrollY: false,
			});
			document.body.style.overflow = 'hidden';
		}
		window.addEventListener('resize', resizeFunction);
		// Specify how to clean up after this effect:
		return function cleanup() {
			if (navigator.platform.indexOf('Win') > -1) {
				ps.destroy();
			}
			window.removeEventListener('resize', resizeFunction);
		};
	}, [mainPanel]);

	return (
		<div className={classes.wrapper}>
			<Sidebar
				routes={routes}
				logoText={'Título'}
				logo={logo}
				image={image}
				handleDrawerToggle={handleDrawerToggle}
				open={mobileOpen}
				color={color}
				{...rest}
			/>
			<div className={classes.mainPanel} ref={mainPanel}>
				<Header
					routes={routes}
					handleDrawerToggle={handleDrawerToggle}
					{...rest}
				/>
				{IsMapsRoute() ? (
					<div className={classes.map}>{switchRoutes}</div>
				) : (
					<div className={classes.content}>
						<div className={classes.container}>{switchRoutes}</div>
					</div>
				)}
			</div>
			<FixedPlugin
				handleImageClick={handleImageClick}
				handleColorClick={handleColorClick}
				bgColor={color}
				bgImage={image}
				handleFixedClick={handleFixedClick}
				fixedClasses={fixedClasses}
			/>
		</div>
	);
};

export default App;
