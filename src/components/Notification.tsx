import { useReducer, useEffect } from "react";
import "./Notification.scss";

const reducer = (state: any, action: any) => {
	switch (action.type) {

		case "SetMovieName":
			return {
				...state,
				movieName: action.payload,
			};

		case "SetMovieList":
			return {
				...state,
				movieList: [...state.movieList, state.movieName],
				notifyText: state.movieName,
				movieName: "",
				showNotify: true,
			};

		case "RemoveMovieList":
			let text;
			return {
				...state,
				movieList: state.movieList.filter((value: string, index: number) => {
					if (action.payload === index) text = value;
					return action.payload !== index;
				}),
				showNotify: true,
				notifyText: `Smazáno: ${text}`,
			};

		case "NotifyDisable":
			return {
				...state,
				showNotify: false,
			};

		case "CHYBA_ZADANI":
			return {
				...state,
				showNotify: true,
				notifyText: "Neplatné zadání!",
			};

		default:
			// return state;
			console.log("Chyba useReducer -> action type nenalezen");
			return new Error("Chyba 123");
	}
};

const defaultState = {
	movieList: [],
	movieName: "",
	showNotify: false,
	notifyText: "",
};

const Notification = () => {
	const [state, dispatch] = useReducer(reducer, defaultState);
	const { movieList, movieName, showNotify, notifyText } = state;

	const onChange = (e: any) => {
		e.preventDefault();

		if (movieName.length === 0 || movieName.length > 29) {
			dispatch({ type: "CHYBA_ZADANI" });
		} else {
			dispatch({ type: "SetMovieList" });
		}
	};

	

	useEffect(() => {
		if (showNotify)
			setTimeout(() => {
				dispatch({ type: "NotifyDisable" });
			}, 3000);
	}, [showNotify]);

	return (
		<section className="notify">
			<form onSubmit={onChange}>
				{/* Notify window------------- */}
				<p className={showNotify ? "cont show" : "cont"}>{notifyText}</p>
				<input
					type="text"
					value={movieName}
					onChange={(e) => dispatch({ type: "SetMovieName", payload: e.target.value })}
				/>
				<input type="submit" value="Přidat" />
			</form>

			{movieList.map((item: string, index: number) => {
				return (
					<div key={index} className="list">
						<p>{item}</p>
						<button onClick={() => dispatch({ type: "RemoveMovieList", payload: index })}>Smazat</button>
					</div>
				);
			})}
		</section>
	);
};

export default Notification;
