import "./preloader.css";

export default function Preloader() {
	return (
		<div id="preloader">
			<div className="loading">
				<div className="loading-center"></div>
			</div>
			<h2>Loading...</h2>
		</div>
	);
}
