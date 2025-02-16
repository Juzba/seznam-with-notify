import React, { useState } from "react";
import "./Notification.scss";

const Notification = () => {
	const [list, setList] = useState([]);
	const [inp, setInput] = useState("");
	const [showNotify, setShowNotify] = useState(false)

	const removeItem = (id) => {
		setList(
			list.filter((value, index) => {
				return index !== id;
			})
		);
	};

	const onChange = (e) => {
		e.preventDefault();

		if (inp) {
			setList([...list, inp]);
			setInput("");
			console.log("time start");
			setShowNotify(true)
			setTimeout(() => {
				console.log("time out");
				setShowNotify(false)
			}, 3000);
		}
	};

	return (
		<section className="notify">
			<form onSubmit={onChange}>
				<p className={showNotify ? "cont show" : "cont"}>{list[list.length - 1]}</p>
				<input type="text" value={inp} onChange={(e) => setInput(e.target.value)} />
				<input type="submit" value="Přidat" />
			</form>

			{list.map((item, index) => {
				return (
					<div key={index} className="list">
						<p>{item}</p>
						<button onClick={() => removeItem(index)}>Smazat</button>
					</div>
				);
			})}
		</section>
	);
};

export default Notification;
