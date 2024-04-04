import { Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import scss from "./LayoutUser.module.scss";
import HomePage from "../pages/HomePage";

const Layout = () => {
	return (
		<>
			<div className={scss.Layout}>
				<Header />
				<main>
					<Routes>
						<Route path="/*" element={<HomePage />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
