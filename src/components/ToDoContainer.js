import ToDoItem from './ToDoItem';

function ToDoContainer() {
	const toDos = [
		{
			title: 'laundry',
			notes:
				' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ',
			date: '1/31/1990',
		},
		{
			title: 'dishes',
			notes:
				' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ',
			date: '6/21/2021',
		},
		{
			title: 'vacuum',
			notes:
				' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ',
			date: '5/4/2021',
		},
		{
			title: 'windows',
			notes:
				' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ',
			date: '6/5/2021',
		},
	];
	return (
		<div className='bg-cyan-400 p-4'>
			<h1 className='text-center text-4xl p-4 border-b-4 shadow-md'>TODOS</h1>
			<ToDoItem
				title={toDos[0].title}
				notes={toDos[0].notes}
				date={toDos[0].date}
			/>
			<ToDoItem
				title={toDos[1].title}
				notes={toDos[1].notes}
				date={toDos[1].date}
			/>
			<ToDoItem
				title={toDos[2].title}
				notes={toDos[2].notes}
				date={toDos[2].date}
			/>
			<ToDoItem
				title={toDos[3].title}
				notes={toDos[3].notes}
				date={toDos[3].date}
			/>
		</div>
	);
}

export default ToDoContainer;
