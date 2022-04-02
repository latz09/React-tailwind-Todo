//import use state. defined the entered input in the use state.
//
import { useState } from "react";

const NewToDoForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredNotes, setEnteredNotes] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = event => setEnteredTitle(event.target.value);
    const notesChangeHandler = event => setEnteredNotes(event.target.value);
    const dateChangeHandler = event => setEnteredDate(event.target.value);

	const submitHandler = (event) => { 
        event.preventDefault();

        const toDoData = {
            title: enteredTitle,
            notes: enteredNotes,
            date: new Date(enteredDate)
        }

        props.onSaveFormData(toDoData);
        setEnteredDate('');
        setEnteredDate('');
        setEnteredDate('');

        
		
	};

	return (
		<>
			<form className='bg-cyan-700 pt-4 text-white' onSubmit={submitHandler}>
				{' '}
				
				<div className='grid grid-cols-12 p-6 text-xl'>
					<div className='col-span-4'>
						<label className='p-4'>Title</label>
						<input type='text' className='text-cyan-800 text-xl' onChange={titleChangeHandler} value={enteredTitle}/>
					</div>
					<div className='col-span-4'>
						<label className='p-4'>Notes</label>
						<input type='text' className='text-cyan-800 text-xl' onChange={notesChangeHandler} value={enteredNotes}/>
					</div>
					<div className='text-cyan-800 text-xl col-span-2'>
						<input className='' type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} value={enteredDate}/>
					</div>

					<button
						type='submit'
						className='addtodo-btn font-bold text-lg place-self-end col-span-2'
					>
						Add ToDo
					</button>
				</div>
			</form>
		</>
	);
};

export default NewToDoForm;
