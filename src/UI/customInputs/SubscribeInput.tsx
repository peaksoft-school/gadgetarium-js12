import scss from './SubscribeInput.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';

interface InputType {
	email: string;
}

const schema = yup.object().shape({
	email: yup
		.string()
		.email('Введите корректный email')
		.required('Email обязателен для заполнения')
});

const SubscribeInput = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<InputType>({
		resolver: yupResolver(schema)
	});

	const [isSubscribed, setIsSubscribed] = useState<string | boolean>(false);

	const onSubmit = (data: InputType) => {
		console.log(data);
		setIsSubscribed(true);
	};

	return (
		<form className={scss.SubsInputButton} onSubmit={handleSubmit(onSubmit)}>
			<p className={scss.promoDiscount}>Расскажем об акциях и скидках </p>
			<div>
				<input
					{...register('email')}
					className={`${scss.emailInput} ${errors.email ? scss.errorInput : ''}`}
					placeholder="Email"
				/>
				<button type="submit" className={scss.subscribeButton}>
					Подписаться
				</button>
			</div>
			<p className={scss.addSubscrib}>
				Нажимая на кнопку «подписаться» Вы соглашаетесь <br /> на обработку
				персональных данных
			</p>
			{errors.email ? (
				<div
					style={{
						color: 'red'
					}}
				>
					{errors.email.message}
				</div>
			) : isSubscribed ? (
				<div style={{ color: 'green' }}>Вы успешно подписались!</div>
			) : null}
		</form>
	);
};

export default SubscribeInput;
