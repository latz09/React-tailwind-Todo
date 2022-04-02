import NewToDoForm from './NewToDoForm';
import { v4 as uuid } from 'uuid';

const newToDo = (props) => {
	const getToDoData = (toDoData) => {
		const expenseData = {
			...toDoData,
			id: uuid(), 
		};

		props.onAddtoDo(expenseData);
	};
	return <NewToDoForm onSaveFormData={getToDoData} />;
};

export default newToDo;

