import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import styles from "./Layout.module.css"
const Layout = ({ children }) => {
	return (
		<div className={styles.container}>
			<Navbar/>
			<div className={styles.main}>
				<Sidebar/>
				<div className={styles.content}>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Layout;
