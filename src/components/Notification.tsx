import "./Notification.scss";

const Notification = () => {
	const onChange = (e:any) => {
		e.preventDefault();

		console.log("start");
	};

	return (
		<section className="notify">
			<form onSubmit={onChange}>
				<p>Notifikace</p>
				<input type="text" />
				<input type="submit" value="Přidat" />
			</form>
			<div className="list">
				<p>Neco</p>
				<button>Smazat</button>
			</div>
		</section>
	);
};

export default Notification;