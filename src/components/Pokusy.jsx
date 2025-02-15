import "./Notification.scss";

const Notification = () => {
	const onChange = (e) => {
		e.preventDefault();

		console.log("start");
	};

	return (
		<section>
			<form onSubmit={onChange}>
				<input type="text" />
				<input type="submit" />
			</form>
		</section>
	);
};

export default Notification;
