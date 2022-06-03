import React, { useRef } from "react";

function AddForm({ onAdd }) {
	console.log(`add form`);
	const inputRef = useRef(null);

	const handleAdd = (event) => {
		event.preventDefault();
		const name = inputRef.current.value;
		if (!name) return;
		onAdd(name);
		inputRef.current.value = "";
	};

	return (
		<form className="add-form" onSubmit={handleAdd}>
			<input
				ref={inputRef}
				placeholder="habit"
				className="add-input"
			></input>
			<button className="habit-add">Add</button>
		</form>
	);
}

export default React.memo(AddForm);
