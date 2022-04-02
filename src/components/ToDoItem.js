import { useState } from 'react';

import Date from './Date';
function ToDoItem(props) {
	const [title, setTitle] = useState(props.title);

	const clickHandler = () => { 
		setTitle('updated');
		console.log('test');
	}; 
    

	return (
		<div>
			<div className='py-8 m-4 rounded-xl bg-cyan-200 grid grid-cols-6 text-center'>
				<h2 className='text-2xl'>{title}</h2>
				<p className='text-sm col-span-3'>{props.notes}</p>
				<Date date={props.date} />
				<button
					className='update-btn'
					onClick={clickHandler}
				>
					Change Title
				</button>
			</div>
		</div>
	);
}

export default ToDoItem;
