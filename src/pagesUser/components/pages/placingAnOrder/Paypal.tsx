// import { usePostLoginMutation } from '@/src/redux/api/auth';
// import { usePostCreatePaymentMutation } from '@/src/redux/api/payment';
// import {
// 	PayPalButtons,
// 	PayPalButtonsComponentProps,
// 	PayPalScriptProvider,
// 	ReactPayPalScriptOptions
// } from '@paypal/react-paypal-js';

// const Paypal = () => {
// 	const [postPaypal] = usePostCreatePaymentMutation();
// 	const [getUserId] = usePostLoginMutation();
// 	const userId = getUserId.data?.id ?? '1';

// 	const initialOptions: ReactPayPalScriptOptions = {
// 		clientId: userId,
// 		vault: true,
// 		intent: 'subscription'
// 	};

// 	console.log(userId, 'text id');

// 	const createOrder: PayPalButtonsComponentProps['createOrder'] = async () => {
// 		try {
// 			const orderData = await postPaypal({
// 				cart: [{ id: '3', quantity: 8 }]
// 			}).unwrap();

// 			if (!orderData.id) {
// 				const errorDetail = orderData?.details?.[0];
// 				const errorMessage = errorDetail
// 					? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
// 					: 'Unexpected error occurred, please try again.';

// 				throw new Error(errorMessage);
// 			}

// 			return orderData.id;
// 		} catch (error) {
// 			console.error(error);
// 			throw error;
// 		}
// 	};

// 	const onCancel: PayPalButtonsComponentProps['onCancel'] = () => {
// 		window.location.assign('/');
// 	};

// 	const handleApprove: PayPalButtonsComponentProps['onApprove'] = async (
// 		data,
// 		actions
// 	) => {
// 		if (actions.order) {
// 			await actions.order.capture();
// 			console.log('Order captured successfully');
// 		}
// 	};

// 	const styles: PayPalButtonsComponentProps['style'] = {
// 		shape: 'rect',
// 		layout: 'vertical',
// 		color: 'gold',
// 		disableMaxWidth: true,
// 		label: 'paypal'
// 	};

// 	return (
// 		<>
// 			<PayPalScriptProvider options={initialOptions}>
// 				<PayPalButtons
// 					style={styles}
// 					createOrder={createOrder}
// 					onApprove={handleApprove}
// 					onCancel={onCancel}
// 				/>
// 			</PayPalScriptProvider>
// 		</>
// 	);
// };

// export default Paypal;

// !!bgthbiehb

// import React, { useState } from 'react';
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
// import { usePostCreatePaymentMutation } from '@/src/redux/api/payment';

// function Message({ content }) {
// 	return <p>{content}</p>;
// }

// function Paypal() {
// 	const [postPaypal] = usePostCreatePaymentMutation();
// 	const initialOptions = {
// 		'client-id': 'YOUR_PAYPAL_CLIENT_ID',
// 		'enable-funding': 'paylater,venmo',
// 		'data-sdk-integration-source': 'integrationbuilder_sc'
// 	};

// 	const [message, setMessage] = useState('');

// 	return (
// 		<div className="App">
// 			<PayPalScriptProvider options={initialOptions}>
// 				<PayPalButtons
// 					style={{
// 						shape: 'rect',
// 						layout: 'vertical'
// 					}}
// 					createOrder={async () => {
// 						try {
// 							const response = await fetch('/api/paypal/create-payment', {
// 								method: 'POST',
// 								headers: {
// 									'Content-Type': 'application/json'
// 								},
// 								body: JSON.stringify({
// 									cart: [
// 										{
// 											id: 'YOUR_PRODUCT_ID',
// 											quantity: 'YOUR_PRODUCT_QUANTITY'
// 										}
// 									]
// 								}),
// 								invalidatesTags: ['payment']
// 							});

// 							const orderData = await response.json();

// 							if (orderData.id) {
// 								return orderData.id;
// 							} else {
// 								const errorDetail = orderData?.details?.[0];
// 								const errorMessage = errorDetail
// 									? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
// 									: JSON.stringify(orderData);

// 								throw new Error(errorMessage);
// 							}
// 						} catch (error) {
// 							console.error(error);
// 							setMessage(`Could not initiate PayPal Checkout...${error}`);
// 						}
// 					}}
// 					onApprove={async (data, actions) => {
// 						try {
// 							const response = await fetch(
// 								`/api/orders/${data.orderID}/capture`,
// 								{
// 									method: 'POST',
// 									headers: {
// 										'Content-Type': 'application/json'
// 									}
// 								}
// 							);
// 							const orderData = await response.json();
// 							const errorDetail = orderData?.details?.[0];
// 							if (errorDetail?.issue === 'INSTRUMENT_DECLINED') {
// 								return actions.restart();
// 							} else if (errorDetail) {
// 								throw new Error(
// 									`${errorDetail.description} (${orderData.debug_id})`
// 								);
// 							} else {
// 								const transaction =
// 									orderData.purchase_units[0].payments.captures[0];
// 								setMessage(
// 									`Transaction ${transaction.status}: ${transaction.id}. See console for all available details`
// 								);
// 								console.log(
// 									'Capture result',
// 									orderData,
// 									JSON.stringify(orderData, null, 2)
// 								);
// 							}
// 						} catch (error) {
// 							console.error(error);
// 							setMessage(
// 								`Sorry, your transaction could not be processed...${error}`
// 							);
// 						}
// 					}}
// 				/>
// 			</PayPalScriptProvider>
// 			<Message content={message} />
// 		</div>
// 	);
// }

// export default Paypal;

// !!!kjfhgvleighver

import React, { useEffect, useRef } from 'react';
import { loadScript } from '@paypal/paypal-js';

const PayPalButton = () => {
	const paypalRef = useRef();

	useEffect(() => {
		loadScript({ 'client-id': 'YOUR_PAYPAL_CLIENT_ID' }).then((paypal) => {
			paypal
				?.Buttons({
					style: {
						shape: 'rect',
						layout: 'vertical'
					},
					createOrder: async () => {
						try {
							const response = await fetch('/api/orders', {
								method: 'POST',
								headers: {
									'Content-Type': 'application/json'
								},	
								body: JSON.stringify({
									cart: [
										{
											id: 'YOUR_PRODUCT_ID',
											quantity: 'YOUR_PRODUCT_QUANTITY'
										}
									]
								})
							});

							const orderData = await response.json();

							if (orderData.id) {
								return orderData.id;
							} else {
								const errorDetail = orderData?.details?.[0];
								const errorMessage = errorDetail
									? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
									: JSON.stringify(orderData);

								throw new Error(errorMessage);
							}
						} catch (error) {
							console.error(error);
							resultMessage(
								`Could not initiate PayPal Checkout...<br><br>${error}`
							);
						}
					},
					onApprove: async (data, actions) => {
						try {
							const response = await fetch(
								`/api/orders/${data.orderID}/capture`,
								{
									method: 'POST',
									headers: {
										'Content-Type': 'application/json'
									}
								}
							);

							const orderData = await response.json();
							const errorDetail = orderData?.details?.[0];

							if (errorDetail?.issue === 'INSTRUMENT_DECLINED') {
								return actions.restart();
							} else if (errorDetail) {
								throw new Error(
									`${errorDetail.description} (${orderData.debug_id})`
								);
							} else if (!orderData.purchase_units) {
								throw new Error(JSON.stringify(orderData));
							} else {
								const transaction =
									orderData?.purchase_units?.[0]?.payments?.captures?.[0] ||
									orderData?.purchase_units?.[0]?.payments?.authorizations?.[0];
								resultMessage(
									`Transaction ${transaction.status}: ${transaction.id}<br><br>See console for all available details`
								);
								console.log(
									'Capture result',
									orderData,
									JSON.stringify(orderData, null, 2)
								);
							}
						} catch (error) {
							console.error(error);
							resultMessage(
								`Sorry, your transaction could not be processed...<br><br>${error}`
							);
						}
					}
				})
				.render(paypalRef.current);
		});
	}, []);

	const resultMessage = (message) => {
		const container = document.querySelector('#result-message');
		container.innerHTML = message;
	};

	return (
		<div>
			<div ref={paypalRef} id="paypal-button-container"></div>
			<div id="result-message"></div>
		</div>
	);
};

export default PayPalButton;
