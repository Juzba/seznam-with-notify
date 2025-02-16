import React, { useState } from "react";
import "./Notification.scss";

const Notification = () => {
	const [list, setList] = useState([]);
	const [movieName, setMovieName] = useState("");
	const [showNotify, setShowNotify] = useState(false);

	const removeItem = (id) => {
		setList(
			list.filter((value, index) => {
				return index !== id;
			})
		);
	};

	const onChange = (e) => {
		e.preventDefault();

		if (movieName) {
			setList([...list, movieName]);
			setMovieName("");

			setShowNotify(true);

			setTimeout(() => {
				setShowNotify(false);
			}, 3000);
		}
	};

	return (
		<section className="notify">
			<form onSubmit={onChange}>
				<p className={showNotify ? "cont show" : "cont"}>{list[list.length - 1]}</p>
				<input type="text" value={movieName} onChange={(e) => setMovieName(e.target.value)} />
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
