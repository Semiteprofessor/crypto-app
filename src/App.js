/** @format */

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import CoinDetails from "./components/Sidebar";
import Navbar from "./components/Navbar";
// Pages

// import Product from './pages/ProductDetails'

const user = {
	firstName: "Taiwo",
	lastName: "Olapade",
};
function App() {
	return (
		<div>
			<Router>
        <Navbar />
				<Switch>
					<Route path="/coins/:coinId/" component={CoinDetails} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
