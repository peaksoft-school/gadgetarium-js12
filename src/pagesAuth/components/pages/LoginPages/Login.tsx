import { useState } from 'react';
import { Link } from 'react-router-dom';
import scss from './Login.module.scss';
import logo from '@/src/assets/Group 337504.png';
const Login = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
	// const [value, setValue] = useState<string>("");
	return (
		<div className={scss.loginPages}>
			<div className="container">
				<div className={scss.content}>
					<div>
						<img src={logo} alt="logo" />
					</div>
					<div className={scss.displayFormDiv}>
						<div className={scss.formsDiv}>
							<div className={scss.forms}>
								<h3>Войти</h3>
								<div></div>
								<div>
									<button></button>
									<p>
										Нет аккаунта? <Link to={'/'}>Зарегистрироваться</Link>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
