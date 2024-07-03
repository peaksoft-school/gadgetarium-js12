/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import scss from './Review.module.scss';
import {
	useGetDecorPaymentQuery,
	useGetOrderIdQuery,
	useGetReviewPayQuery,
	usePostConfirmPaymentMutation
} from '@/src/redux/api/payment';
import { Modal, message } from 'antd';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGetBasketOrderGadgetQuery } from '@/src/redux/api/basket';

interface ArrayTypes {
	id: number;
	quantity: number;
	article?: number;
	colour?: string;
	image?: string;
	memory?: string;
	nameOfGadget?: string;
}
const Review = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const { data: getOrderId, isSuccess } = useGetOrderIdQuery('');
	const [orderId, setOrderId] = useState<number | null>();
	const [openModal, setOpenModal] = useState(false);
	const [basketArray, setBasketArray] = useState<ArrayTypes[]>([]);
	// const [paymentId, setPaymentId] = useState<string>('');
	const [confirmPayment] = usePostConfirmPaymentMutation();
	const { data: basketOrder } = useGetBasketOrderGadgetQuery([
		window.location.search.substring(1)
	]);
	console.log(basketOrder, 'dates');
	useEffect(() => {
		const newArray = basketOrder?.gadgetResponse.map((product) => ({
			id: product.id,
			quantity: product.quantity
		}));
		setBasketArray(newArray!);
	}, [basketOrder]);
	console.log(basketArray, 'basket arrays');

	const navigate = useNavigate();

	console.log(isSuccess);
	console.log(getOrderId);

	useEffect(() => {
		if (isSuccess && getOrderId) {
			setTimeout(() => {
				setOrderId(getOrderId.orderId);
			}, 2000);
		}
	}, [isSuccess, getOrderId]);

	console.log(orderId);

	const { data: review } = useGetReviewPayQuery(
		{ orderId: orderId! }
		// { skip: orderId === undefined }
	);
	const { data: decorPay } = useGetDecorPaymentQuery({ orderId: orderId! });

	const handleModalDecorPay = async () => {
		searchParams.set(
			'paymentId',
			localStorage.getItem('paymentId')?.slice(1, 28) || ''
		);
		setSearchParams(searchParams);
		try {
			const result = await confirmPayment({
				paymentId: searchParams.get('paymentId') || '',
				idsAndQuantities: basketArray
			});
			localStorage.removeItem('paymentId');
			if ('data' in result) {
				console.log('Payment confirmed:', result.data);
				// message.success('Платеж успешно проведен');
				setOpenModal(true);
			} else {
				console.error('Failed to confirm payment:', result);
				message.error('paymentId не пришел');
			}
		} catch (error) {
			console.error('Error in handleConfirmPayment:', error);
		}
		// navigate('/basket');
	};

	const handleNavBas = () => {
		setOpenModal(false);
		navigate('/');
	};

	return (
		<>
			<div className={scss.OrderOverview}>
				<div className={scss.content}>
					<h2>Обзор заказа</h2>
					<div className={scss.texts} key={review?.id}>
						{/* {data?.m}	 */}
						<div className={scss.total}>
							<h3>
								Итого <p>{review?.price} с</p>
							</h3>
							<hr />
						</div>
						<div className={scss.delivery}>
							<p className={scss.text_delivery}>Доставка</p>
							<p> {review?.delivery}</p>
							<p
								className={scss.change}
								onClick={() => navigate('/pay/delivery')}
							>
								Изменить
							</p>
						</div>
						<div className={scss.payment}>
							<p className={scss.text_payment}>Оплата</p>
							<p>{review?.payment}</p>
							<p
								className={scss.change}
								onClick={() => navigate('/pay/payment')}
							>
								Изменить
							</p>
						</div>
						<hr />
					</div>
					<button onClick={handleModalDecorPay}>Оформить заказ</button>
				</div>
			</div>
			<Modal
				open={openModal}
				footer={false}
				onCancel={() => setOpenModal(false)}
			>
				<div className={scss.modal_pay}>
					<div className={scss.modal_pay_two}>
						<div className={scss.title}>
							<p>Спасибо!</p>
							<p>Заявка успешно оформлена!</p>
						</div>
						<div className={scss.number_pays}>
							<p className={scss.number_pay}>Номер заявки</p>
							<p className={scss.num}>{decorPay?.number}</p>
						</div>
						<div className={scss.description}>
							<p>
								Ваша заявка №{decorPay?.number} от {decorPay?.createAd}{' '}
								оформлена
							</p>
							<p>Вся актуальная информация о статусе исполнения</p>
							<p>заказа придет на указанный email:</p>
							<p style={{ fontWeight: '560' }}>{decorPay?.email}</p>
						</div>
						<button onClick={handleNavBas}>Продолжить покупки</button>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default Review;
