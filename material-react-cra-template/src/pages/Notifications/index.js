import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddAlert from '@material-ui/icons/AddAlert';

import GridItem from '../../components/GridItem';
import GridContainer from '../../components/GridContainer';
import Button from '../../components/Button';
import SnackbarContent from '../../components/SnackbarContent';
import Snackbar from '../../components/Snackbar';
import Card from '../../components/Card';
import CardHeader from '../../components/CardHeader';
import CardBody from '../../components/CardBody';

import styles from './styles';

const useStyles = makeStyles(styles);

export default function Notifications() {
	const classes = useStyles();
	const [tl, setTL] = useState(false);
	const [tc, setTC] = useState(false);
	const [tr, setTR] = useState(false);
	const [bl, setBL] = useState(false);
	const [bc, setBC] = useState(false);
	const [br, setBR] = useState(false);
	useEffect(() => {
		if (tl) {
			setTimeout(function() {
				setTL(false);
			}, 1000);
		} else if (tc) {
			setTimeout(function() {
				setTC(false);
			}, 1000);
		} else if (tr) {
			setTimeout(function() {
				setTR(false);
			}, 1000);
		} else if (bl) {
			setTimeout(function() {
				setBL(false);
			}, 1000);
		} else if (bc) {
			setTimeout(function() {
				setBC(false);
			}, 1000);
		} else if (br) {
			setTimeout(function() {
				setBR(false);
			}, 1000);
		}
		// Specify how to clean up after this effect:
		return function cleanup() {
			// to stop the warning of calling setState of unmounted component
			var id = window.setTimeout(null, 0);
			while (id--) {
				window.clearTimeout(id);
			}
		};
	});
	const showNotification = place => {
		switch (place) {
			case 'tl':
				if (!tl) {
					setTL(true);
				}
				break;
			case 'tc':
				if (!tc) {
					setTC(true);
				}
				break;
			case 'tr':
				if (!tr) {
					setTR(true);
				}
				break;
			case 'bl':
				if (!bl) {
					setBL(true);
				}
				break;
			case 'bc':
				if (!bc) {
					setBC(true);
				}
				break;
			case 'br':
				if (!br) {
					setBR(true);
				}
				break;
			default:
				break;
		}
	};
	return (
		<Card>
			<CardHeader color='primary'>
				<h4 className={classes.cardTitleWhite}>Notificações</h4>
				<p className={classes.cardCategoryWhite}>
					Esta é a página de exemplo de notificações
				</p>
			</CardHeader>
			<CardBody>
				<GridContainer>
					<GridItem xs={12} sm={12} md={6}>
						<h5>Estilos de notificações</h5>
						<br />
						<SnackbarContent
							message={'Esta é uma notificação simples'}
						/>
						<SnackbarContent
							message={'Esta é uma notificação com botão Fechar.'}
							close
						/>
						<SnackbarContent
							message={
								'Esta é uma notificação com botão Fechar e Ícone'
							}
							close
							icon={AddAlert}
						/>
						<SnackbarContent
							message={
								'Esta é uma notificação com botão Fechar, Ícone e multipla linhas. Você pode perceber que o ícone e o botão fechar estão sempre alinhados verticalmente. Esta é uma bela notificação. Então você não tem que se preocupar com sua estilização.'
							}
							close
							icon={AddAlert}
						/>
					</GridItem>
					<GridItem xs={12} sm={12} md={6}>
						<h5>Cores de notificações</h5>
						<br />
						<SnackbarContent
							message={
								'INFO - Esta é uma notificação simples feita com color="info"'
							}
							close
							color='info'
						/>
						<SnackbarContent
							message={
								'SUCCESS - Esta é uma notificação simples feita com color="success"'
							}
							close
							color='success'
						/>
						<SnackbarContent
							message={
								'WARNING - Esta é uma notificação simples feita com color="warning"'
							}
							close
							color='warning'
						/>
						<SnackbarContent
							message={
								'DANGER - Esta é uma notificação simples feita com color="danger"'
							}
							close
							color='danger'
						/>
						<SnackbarContent
							message={
								'PRIMARY - Esta é uma notificação simples feita com color="primary"'
							}
							close
							color='primary'
						/>
					</GridItem>
				</GridContainer>
				<br />
				<br />
				<GridContainer justify='center'>
					<GridItem
						xs={12}
						sm={12}
						md={6}
						style={{ textAlign: 'center' }}
					>
						<h5>
							Posição das notificações
							<br />
							<small>Clique para ver as notificações</small>
						</h5>
					</GridItem>
				</GridContainer>
				<GridContainer justify='center'>
					<GridItem xs={12} sm={12} md={10} lg={8}>
						<GridContainer>
							<GridItem xs={12} sm={12} md={4}>
								<Button
									fullWidth
									color='primary'
									onClick={() => showNotification('tl')}
								>
									Superior Esquerdo
								</Button>
								<Snackbar
									place='tl'
									color='info'
									icon={AddAlert}
									message='Bem-vindo ao MATERIAL DASHBOARD React - um lindo layout para desenvolvedores web.'
									open={tl}
									closeNotification={() => setTL(false)}
									close
								/>
							</GridItem>
							<GridItem xs={12} sm={12} md={4}>
								<Button
									fullWidth
									color='primary'
									onClick={() => showNotification('tc')}
								>
									Superior Centro
								</Button>
								<Snackbar
									place='tc'
									color='info'
									icon={AddAlert}
									message='Bem-vindo ao MATERIAL DASHBOARD React - um lindo layout para desenvolvedores web.'
									open={tc}
									closeNotification={() => setTC(false)}
									close
								/>
							</GridItem>
							<GridItem xs={12} sm={12} md={4}>
								<Button
									fullWidth
									color='primary'
									onClick={() => showNotification('tr')}
								>
									Superior Direito
								</Button>
								<Snackbar
									place='tr'
									color='info'
									icon={AddAlert}
									message='Bem-vindo ao MATERIAL DASHBOARD React - um lindo layout para desenvolvedores web.'
									open={tr}
									closeNotification={() => setTR(false)}
									close
								/>
							</GridItem>
						</GridContainer>
					</GridItem>
				</GridContainer>
				<GridContainer justify={'center'}>
					<GridItem xs={12} sm={12} md={10} lg={8}>
						<GridContainer>
							<GridItem xs={12} sm={12} md={4}>
								<Button
									fullWidth
									color='primary'
									onClick={() => showNotification('bl')}
								>
									Inferior Esquerdo
								</Button>
								<Snackbar
									place='bl'
									color='info'
									icon={AddAlert}
									message='Bem-vindo ao MATERIAL DASHBOARD React - um lindo layout para desenvolvedores web.'
									open={bl}
									closeNotification={() => setBL(false)}
									close
								/>
							</GridItem>
							<GridItem xs={12} sm={12} md={4}>
								<Button
									fullWidth
									color='primary'
									onClick={() => showNotification('bc')}
								>
									Inferior Centro
								</Button>
								<Snackbar
									place='bc'
									color='info'
									icon={AddAlert}
									message='Bem-vindo ao MATERIAL DASHBOARD React - um lindo layout para desenvolvedores web.'
									open={bc}
									closeNotification={() => setBC(false)}
									close
								/>
							</GridItem>
							<GridItem xs={12} sm={12} md={4}>
								<Button
									fullWidth
									color='primary'
									onClick={() => showNotification('br')}
								>
									Inferior Direito
								</Button>
								<Snackbar
									place='br'
									color='info'
									icon={AddAlert}
									message='Bem-vindo ao MATERIAL DASHBOARD React - um lindo layout para desenvolvedores web.'
									open={br}
									closeNotification={() => setBR(false)}
									close
								/>
							</GridItem>
						</GridContainer>
					</GridItem>
				</GridContainer>
			</CardBody>
		</Card>
	);
}
