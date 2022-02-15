import { isEmpty } from 'lodash';

export const getErrors = (errors) => {
	const errorsArray = Object.values(errors);
	console.log('🚀 ~ file: errors.helper.js ~ line 3 ~ getErrors ~ errorsArray', errorsArray);
	return errorsArray;
};

export const isErrorExist = (arrays) => {
	if (!isEmpty(arrays)) {
		let findEl = arrays.find((err) => !isEmpty(err));
		if (findEl) return true;
	}

	return false;
};
