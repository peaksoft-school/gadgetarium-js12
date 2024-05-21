/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneInputWrapper = forwardRef((props, ref) => {
	const phoneInputRef = useRef<React.ElementRef<typeof PhoneInput>>(null);

	useImperativeHandle(ref, () => ({
		focus: () => {
			if (phoneInputRef.current) {
				(phoneInputRef.current as any).focus();
			}
		}
	}));

	return <PhoneInput ref={phoneInputRef} {...props} />;
});

export default PhoneInputWrapper;
