import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneNumberValidation = () => {
	const [phoneNumber, setPhoneNumber] = useState<string>('');
	const [, setValid] = useState<boolean>(true);

	const handleChange = (value: string) => {
		setPhoneNumber(value);
		setValid(validationPhoneNumber(value));
	};
	const PhoneInputWrapper = forwardRef((props, ref) => {
		const phoneInputRef = useRef<React.ElementRef<typeof PhoneInput>>(null);

	const validationPhoneNumber = (phoneNumber: string): boolean => {
		const phoneNumberPattern = /^\+[1-9]\d{1,14}$/;
		return phoneNumberPattern.test(phoneNumber);
	};

	return (
		<div>
			<PhoneInput
				searchStyle={{
					width: '100px'
				}}
				inputStyle={{
					maxWidth: '454px',
					width: '100%',
					height: '40px',
					color: 'black',
					border: '1px solid black',
					borderRadius: '5px'
				}}
				country={'us'}
				value={phoneNumber}
				onChange={handleChange}
				inputProps={{
					required: true
				}}
			/>
		</div>
	);
});

export default PhoneNumberValidation;
