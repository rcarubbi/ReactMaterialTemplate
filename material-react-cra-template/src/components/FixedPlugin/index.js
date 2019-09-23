import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import imagine1 from '../../assets/img/sidebar-1.jpg';
import imagine2 from '../../assets/img/sidebar-2.jpg';
import imagine3 from '../../assets/img/sidebar-3.jpg';
import imagine4 from '../../assets/img/sidebar-4.jpg';

import Button from '../Button';

export default function FixedPlugin(props) {
	//const [classes, setClasses] = useState('dropdown show');
	//const [bg_checked, setBg_checked] = useState(true);
	const [bgImage, setBgImage] = useState(props.bgImage);
	const handleClick = () => {
		props.handleFixedClick();
	};

	return (
		<div className={classnames('fixed-plugin')}>
			<div id='fixedPluginClasses' className={props.fixedClasses}>
				<div onClick={handleClick}>
					<i className='fa fa-cog fa-2x' />
				</div>
				<ul className='dropdown-menu'>
					<li className='header-title'>Fitlros da Barra Lateral</li>
					<li className='adjustments-line'>
						<a href='/' className='switch-trigger'>
							<div>
								<span
									className={
										props.bgColor === 'purple'
											? 'badge filter badge-purple active'
											: 'badge filter badge-purple'
									}
									data-color='purple'
									onClick={e => {
										e.preventDefault();
										props.handleColorClick('purple');
									}}
								/>
								<span
									className={
										props.bgColor === 'blue'
											? 'badge filter badge-blue active'
											: 'badge filter badge-blue'
									}
									data-color='blue'
									onClick={e => {
										e.preventDefault();
										props.handleColorClick('blue');
									}}
								/>
								<span
									className={
										props.bgColor === 'green'
											? 'badge filter badge-green active'
											: 'badge filter badge-green'
									}
									data-color='green'
									onClick={e => {
										e.preventDefault();
										props.handleColorClick('green');
									}}
								/>
								<span
									className={
										props.bgColor === 'red'
											? 'badge filter badge-red active'
											: 'badge filter badge-red'
									}
									data-color='red'
									onClick={e => {
										e.preventDefault();
										props.handleColorClick('red');
									}}
								/>
								<span
									className={
										props.bgColor === 'orange'
											? 'badge filter badge-orange active'
											: 'badge filter badge-orange'
									}
									data-color='orange'
									onClick={e => {
										e.preventDefault();
										props.handleColorClick('orange');
									}}
								/>
							</div>
						</a>
					</li>
					<li className='header-title'>Imagens</li>
					<li className={bgImage === imagine1 ? 'active' : ''}>
						<a
							href='/'
							className='img-holder switch-trigger'
							onClick={e => {
								e.preventDefault();
								setBgImage(imagine1);
								props.handleImageClick(imagine1);
							}}
						>
							<img src={imagine1} alt='...' />
						</a>
					</li>
					<li className={bgImage === imagine2 ? 'active' : ''}>
						<a
							href='/'
							className='img-holder switch-trigger'
							onClick={e => {
								e.preventDefault();
								setBgImage(imagine2);
								props.handleImageClick(imagine2);
							}}
						>
							<img src={imagine2} alt='...' />
						</a>
					</li>
					<li className={bgImage === imagine3 ? 'active' : ''}>
						<a
							href='/'
							className='img-holder switch-trigger'
							onClick={e => {
								e.preventDefault();
								setBgImage(imagine3);
								props.handleImageClick(imagine3);
							}}
						>
							<img src={imagine3} alt='...' />
						</a>
					</li>
					<li className={bgImage === imagine4 ? 'active' : ''}>
						<a
							href='/'
							className='img-holder switch-trigger'
							onClick={e => {
								e.preventDefault();
								setBgImage(imagine4);
								props.handleImageClick(imagine4);
							}}
						>
							<img src={imagine4} alt='...' />
						</a>
					</li>

					<li className='button-container'>
						<div className='button-container'>
							<Button
								color='success'
								href='https://www.creative-tim.com/product/material-dashboard-react?ref=mdr-fixed-plugin'
								target='_blank'
								fullWidth
							>
								Baixe de graça!
							</Button>
						</div>
					</li>
					<li className='button-container'>
						<div className='button-container'>
							<Button
								color='warning'
								href='https://www.creative-tim.com/product/material-dashboard-pro-react?ref=mdr-fixed-plugin'
								target='_blank'
								fullWidth
							>
								Adquira a versão PRO
							</Button>
						</div>
					</li>
					<li className='button-container'>
						<Button
							color='info'
							fullWidth
							href='https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin'
							target='_blank'
						>
							Documentação
						</Button>
					</li>
					<li className='adjustments-line' />
				</ul>
			</div>
		</div>
	);
}

FixedPlugin.propTypes = {
	bgImage: PropTypes.string,
	handleFixedClick: PropTypes.func,
	fixedClasses: PropTypes.string,
	bgColor: PropTypes.oneOf(['purple', 'blue', 'green', 'orange', 'red']),
	handleColorClick: PropTypes.func,
	handleImageClick: PropTypes.func,
};
