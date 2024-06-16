import React, { FC, forwardRef, useImperativeHandle, useRef } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface PhoneInputWrapperProps {
	style?: React.CSSProperties;
	inputStyle?: React.CSSProperties;
	country: string;
	inputProps?: Record<string, unknown>;
}

const PhoneInputWrapper: FC<PhoneInputWrapperProps> = forwardRef(
	(props, ref) => {
		const phoneInputRef = useRef<React.ElementRef<typeof PhoneInput>>(null);

		useImperativeHandle(ref, () => ({
			focus: () => {
				if (phoneInputRef.current) {
					phoneInputRef.current.focus();
				}
			}
		}));

		return <PhoneInput ref={phoneInputRef} {...props} />;
	}
);

export default PhoneInputWrapper;
