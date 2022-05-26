import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Sports from "./components/Sports";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>

			{user && <Route path="/" exact element={<Main />} />}
			{user && <Route path="/sports" exact element={<Sports />} />}


			{/* Sign Up and Login Pages */}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />


			{/* Routes */}
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/sports" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
