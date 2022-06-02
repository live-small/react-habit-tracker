import React, { useRef } from "react";

// ! AddForm의 onAdd가 변경되지 않는데 계속 리렌더링 일어남 **

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
