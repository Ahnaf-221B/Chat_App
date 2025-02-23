import { Routes, Route } from "react-router";
import SignInPage from "./Pages/auth/sign-in.page";
import SignUpPage from "./Pages/auth/sign-up.page";

function App() {
	return (
		<Routes>
			<Route path="/auth/sign-in" element={<SignInPage />} />
			<Route path="/auth/sign-up" element={<SignUpPage />} />
		</Routes>
	);
}

export default App;
