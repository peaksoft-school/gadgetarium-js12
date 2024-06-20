import { usePostLoginMutation } from '@/src/redux/api/auth';
import { usePostCreatePaymentMutation } from '@/src/redux/api/payment';
import {
	PayPalButtons,
	PayPalButtonsComponentProps,
	PayPalScriptProvider,
	ReactPayPalScriptOptions
} from '@paypal/react-paypal-js';

const Paypal = () => {
	const [postPaypal] = usePostCreatePaymentMutation();
	const [getUserId] = usePostLoginMutation();
	const userId = getUserId.data?.id ?? '1';

	const initialOptions: ReactPayPalScriptOptions = {
		clientId: userId,
		vault: true,
		intent: 'subscription'
	};

	console.log(userId, 'text id');

	const createOrder: PayPalButtonsComponentProps['createOrder'] = async () => {
		try {
			const orderData = await postPaypal({
				cart: [{ id: '3', quantity: 8 }]
			}).unwrap();

			if (!orderData.id) {
				const errorDetail = orderData?.details?.[0];
				const errorMessage = errorDetail
					? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
					: 'Unexpected error occurred, please try again.';

				throw new Error(errorMessage);
			}

			return orderData.id;
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const onCancel: PayPalButtonsComponentProps['onCancel'] = () => {
		window.location.assign('/');
	};

	const handleApprove: PayPalButtonsComponentProps['onApprove'] = async (
		data,
		actions
	) => {
		if (actions.order) {
			await actions.order.capture();
			console.log('Order captured successfully');
		}
	};

	const styles: PayPalButtonsComponentProps['style'] = {
		shape: 'rect',
		layout: 'vertical',
		color: 'gold',
		disableMaxWidth: true,
		label: 'paypal'
	};

	return (
		<>
			<PayPalScriptProvider options={initialOptions}>
				<PayPalButtons
					style={styles}
					createOrder={createOrder}
					onApprove={handleApprove}
					onCancel={onCancel}
				/>
			</PayPalScriptProvider>
		</>
	);
};

export default Paypal;
