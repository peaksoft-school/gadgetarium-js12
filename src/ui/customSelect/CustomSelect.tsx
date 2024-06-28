import { FC, useState } from 'react';
import scss from './CustomSelect.module.scss';
import { IconChevronDown } from '@tabler/icons-react';
import { usePutAdminOrderMutation } from '@/src/redux/api/adminOrders';

interface handleChangeProps {
	value: string;
	color: string;
}

interface CustomSelectProps {
	orderId: string;
	orderStatus: string;
	currentColor: string;
	onStatusChange: (orderId: string, newStatus: string) => void;
}

const CustomSelect: FC<CustomSelectProps> = ({
	orderId,
	orderStatus,
	currentColor,
	onStatusChange
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [select, setSelect] = useState(orderStatus);
	const [selectColor, setSelectColor] = useState(currentColor);
	const [updateSelect] = usePutAdminOrderMutation();

	const toggleDropdown = (event: React.MouseEvent<HTMLDivElement>) => {
		event.preventDefault();
		event.stopPropagation();
		setIsOpen(!isOpen);
	};

	const handleChange = async (
		event: React.MouseEvent<HTMLButtonElement>,
		{ value, color }: handleChangeProps
	) => {
		event.stopPropagation();
		event.preventDefault();
		setSelect(value);
		setSelectColor(color);
		setIsOpen(false);

		try {
			await updateSelect({
				orderId: orderId,
				status: value
			});
			onStatusChange(orderId, value);
		} catch (error) {
			console.error('Failed to update order status:', error);
		}
	};

	return (
		<>
			<div className={scss.dropdown_select}>
				<div className={scss.selected_option_icon} onClick={toggleDropdown}>
					<span style={{ color: selectColor }} className={scss.selected_option}>
						{select}
					</span>
					<IconChevronDown />
				</div>
				{isOpen && (
					<div className={scss.dropdown}>
						<button
							style={{ color: '#2C68F5' }}
							onClick={(event) =>
								handleChange(event, { value: 'PENDING', color: '#2C68F5' })
							}
						>
							В ожидании
						</button>
						<button
							style={{ color: '#F99808' }}
							onClick={(event) =>
								handleChange(event, { value: 'READY', color: '#F99808' })
							}
						>
							В обработке
						</button>
						<button
							style={{ color: '#08A592' }}
							onClick={(event) =>
								handleChange(event, {
									value: 'COURIER_ON_THE_WAY',
									color: '#08A592'
								})
							}
						>
							Курьер в пути
						</button>
						<button
							style={{ color: '#2FC509' }}
							onClick={(event) =>
								handleChange(event, { value: 'RECEIVED', color: '#2FC509' })
							}
						>
							Доставлены
						</button>
						<button
							style={{ color: '#F10000' }}
							onClick={(event) =>
								handleChange(event, { value: 'CANCELLED', color: '#F10000' })
							}
						>
							Отменены
						</button>
					</div>
				)}
			</div>
		</>
	);
};

export default CustomSelect;
