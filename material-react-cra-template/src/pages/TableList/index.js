import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import GridItem from '../../components/GridItem';
import GridContainer from '../../components/GridContainer';
import Table from '../../components/Table';
import Card from '../../components/Card';
import CardHeader from '../../components/CardHeader';
import CardBody from '../../components/CardBody';

const styles = {
	cardCategoryWhite: {
		'&,& a,& a:hover,& a:focus': {
			color: 'rgba(255,255,255,.62)',
			margin: '0',
			fontSize: '14px',
			marginTop: '0',
			marginBottom: '0',
		},
		'& a,& a:hover,& a:focus': {
			color: '#FFFFFF',
		},
	},
	cardTitleWhite: {
		color: '#FFFFFF',
		marginTop: '0px',
		minHeight: 'auto',
		fontWeight: '300',
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		marginBottom: '3px',
		textDecoration: 'none',
		'& small': {
			color: '#777',
			fontSize: '65%',
			fontWeight: '400',
			lineHeight: '1',
		},
	},
};

const useStyles = makeStyles(styles);

export default function TableListPage() {
	const classes = useStyles();

	return (
		<GridContainer>
			<GridItem xs={12} sm={12} md={12}>
				<Card>
					<CardHeader color='primary'>
						<h4 className={classes.cardTitleWhite}>
							Tabela Simples
						</h4>
						<p className={classes.cardCategoryWhite}>
							Aqui vai um sub-título para esta tabela
						</p>
					</CardHeader>
					<CardBody>
						<Table
							tableHeaderColor='primary'
							tableHead={['Name', 'Country', 'City', 'Salary']}
							tableData={[
								[
									'Dakota Rice',
									'Niger',
									'Oud-Turnhout',
									'$36,738',
								],
								[
									'Minerva Hooper',
									'Curaçao',
									'Sinaai-Waas',
									'$23,789',
								],
								[
									'Sage Rodriguez',
									'Netherlands',
									'Baileux',
									'$56,142',
								],
								[
									'Philip Chaney',
									'Korea, South',
									'Overland Park',
									'$38,735',
								],
								[
									'Doris Greene',
									'Malawi',
									'Feldkirchen in Kärnten',
									'$63,542',
								],
								[
									'Mason Porter',
									'Chile',
									'Gloucester',
									'$78,615',
								],
							]}
						/>
					</CardBody>
				</Card>
			</GridItem>
			<GridItem xs={12} sm={12} md={12}>
				<Card plain>
					<CardHeader plain color='primary'>
						<h4 className={classes.cardTitleWhite}>
							Tabela direto no plano de fundo
						</h4>
						<p className={classes.cardCategoryWhite}>
							Aqui vai um sub-título para esta tabela
						</p>
					</CardHeader>
					<CardBody>
						<Table
							tableHeaderColor='primary'
							tableHead={[
								'ID',
								'Name',
								'Country',
								'City',
								'Salary',
							]}
							tableData={[
								[
									'1',
									'Dakota Rice',
									'$36,738',
									'Niger',
									'Oud-Turnhout',
								],
								[
									'2',
									'Minerva Hooper',
									'$23,789',
									'Curaçao',
									'Sinaai-Waas',
								],
								[
									'3',
									'Sage Rodriguez',
									'$56,142',
									'Netherlands',
									'Baileux',
								],
								[
									'4',
									'Philip Chaney',
									'$38,735',
									'Korea, South',
									'Overland Park',
								],
								[
									'5',
									'Doris Greene',
									'$63,542',
									'Malawi',
									'Feldkirchen in Kärnten',
								],
								[
									'6',
									'Mason Porter',
									'$78,615',
									'Chile',
									'Gloucester',
								],
							]}
						/>
					</CardBody>
				</Card>
			</GridItem>
		</GridContainer>
	);
}
