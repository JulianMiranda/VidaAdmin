import React from 'react';
import {
	Edit,
	TextInput,
	ImageInput,
	ReferenceInput,
	ImageField,
	SelectInput,
	SimpleForm,
	BooleanInput,
} from 'react-admin';
import {SubCategoriesTitle} from './SubCategoriesTitle';
import {Grid, CardContent, Card} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

export const styles = {
	first_name: {display: 'inline-block'},
	last_name: {display: 'inline-block', marginLeft: 32},
	t_name: {display: 'inline-block', marginLeft: 64},
	email: {width: 544},
	address: {maxWidth: 300},
	zipcode: {display: 'inline-block'},
	city: {display: 'inline-block', marginLeft: 32},
	comment: {
		maxWidth: '20em',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
	},
	password: {display: 'inline-block'},
	confirm_password: {display: 'inline-block', marginLeft: 32},
};

const useStyles = makeStyles(styles);

const SubCategoriesEdit = (props) => {
	const classes = useStyles();
	return (
		<Edit {...props} title={<SubCategoriesTitle />}>
			<SimpleForm redirect="list">
				<TextInput
					label="Nombre"
					autoFocus
					formClassName={classes.first_name}
					fullWidth
					source="name"
				/>
				<ReferenceInput
					label="Categoría"
					fullWidth
					formClassName={classes.last_name}
					source="category.id"
					reference="categories"
				>
					<SelectInput source="name" />
				</ReferenceInput>
				<BooleanInput label="Estado" formClassName={classes.t_name} source="status" />
				<ImageInput
					formClassName={classes.address}
					source="image"
					resource="subcategories"
					accept="image/*"
					placeholder={<p>Drop your file here</p>}
					fullWidth
				>
					<ImageField source="url" />
				</ImageInput>
			</SimpleForm>
		</Edit>
	);
};
export default SubCategoriesEdit;
