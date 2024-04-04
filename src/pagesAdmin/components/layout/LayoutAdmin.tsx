import HomePage from "../pages/HomePage";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import scss from "./LayoutAdmin.module.scss";
import { Route, Routes } from "react-router-dom";

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
