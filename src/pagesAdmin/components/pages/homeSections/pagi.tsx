import React, { useRef, useState } from 'react';
import scss from './ProductsMainSection.module.scss';
import Input from 'antd/es/input';
import { Checkbox, ConfigProvider, DatePicker, Pagination, theme } from 'antd';
import {
	IconChartCircles,
	IconEdit,
	IconPhotoPlus,
	IconTrash,
	IconX
} from '@tabler/icons-react';
import PhonesDropdown from '@/src/ui/catalogPhonesDropdown/PhonesDropdown';
import CustomModal from '@/src/ui/modalAdmin/CustomModal';
import CancelButtonCustom from '@/src/ui/adminButtons/CancelButtonCustom';
import CustomButtonAdd from '@/src/ui/adminButtons/CustomButtonAdd';
import UploadBanner from '@/src/ui/customImageAdd/UploadBanner';
import Infographics from '@/src/ui/infographics/Infographics';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import {
	useDeleteGoodsGadgetMutation,
	useGetGoodGadgetQuery,
	usePostGoodsBannerMutation,
	usePostGoodsDiscountMutation
} from '@/src/redux/api/goods';
import type { UploadFile } from 'antd';
import moment from 'moment';
import dayjs from 'dayjs';
import { usePostUploadMutation } from '@/src/redux/api/pdf';
import { IconDeleteForBanner } from '@/src/assets/icons';
import { useGetSlidersQuery } from '@/src/redux/api/slider';

const ProductsMainSection = () => {
	const [postDiscount] = usePostGoodsDiscountMutation();

	const buttonStyleRef = React.useRef<boolean>(false);
	const [searchParams, setSearchParams] = useSearchParams();
	const [modalForBanner, setModalForBanner] = useState<boolean>(false);
	const { data: banner = [] } = useGetSlidersQuery();
	const [filtered, setFiltered] = useState<boolean>(false);
	const bannerInputFileRef = useRef<HTMLInputElement>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [bannerFormResponse, setBannerFormResponse] = useState<string[]>([]);
	const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
	const [isModalOpenBanner, setIsModalOpenBanner] = useState(false);
	const [gadgetId, setGadgetId] = useState<number | null>(null);
	const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);
	const [gadgetIds, setGadgetIds] = useState<number[]>([]);
	const [postUploadForBanner] = usePostUploadMutation();
	const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
	const [searchInput, setSearchInput] = useState<string>('');
	const initialFileList: UploadFile[] = [
		{
			uid: '-1',
			name: 'image.png',
			status: 'done',
			url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
		}
	];

	const [fileList, setFileList] = useState<UploadFile[]>(initialFileList);
	const [discountSize, setDiscountSize] = useState<number>();
	const [discountStartDay, setDiscountStartDay] = useState('');
	const [discountEndDay, setDiscountEndDay] = useState('');
	const changeDateFunk = (date: moment.Moment | null) => {
		if (date) {
			const formattedDate = date.format('YYYY-MM-DD');
			searchParams.set('startDate', formattedDate);
			setSearchParams(searchParams); // Update searchParams after setting
		} else return;
	};

	const changeDateFunk2 = (date: moment.Moment | null) => {
		if (date) {
			const formattedDate = date.format('YYYY-MM-DD');
			searchParams.set('endDate', formattedDate);
			setSearchParams(searchParams); // Update searchParams after setting
		} else return;
	};

	const navigate = useNavigate();

	const addProduct = () => {
		navigate('/admin/product-adding/part-1');
	};

	const handleClickBannerInputRef = () => {
		if (bannerInputFileRef.current) {
			bannerInputFileRef.current.click();
		}
	};

	const changeSearchInputValueFunk = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		searchParams.set('keyword', event.target.value);
		setSearchParams(searchParams);
		if (event.target.value === '') {
			searchParams.delete('keyword');
			setSearchParams(searchParams);
		}
	};

	const showModal = () => {
		setIsModalOpen(true);
	};

	const showModalDelete = () => {
		setIsModalOpenDelete(true);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const handleCancelBanner = () => {
		setIsModalOpenBanner(false);
	};

	const showModalBanner = () => {
		setIsModalOpenBanner(true);
	};

	const handleFiltered = () => {
		setFiltered(!filtered);
	};

	const antdThemeConfig = {
		algorithm: theme.defaultAlgorithm,
		token: {
			colorPrimary: '#cb11ab',
			colorBgContainer: 'transparent'
		}
	};

	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(10); // по умолчанию количество элементов на странице

	const { data, refetch } = useGetGoodGadgetQuery({
		page: currentPage,
		size: pageSize,
		keyword: searchParams.get('keyword') || '',
		discount: searchParams.get('discount') || '',
		endDate: searchParams.get('endDate') || '',
		getType: searchParams.get('getType') || '',
		sort: searchParams.get('sort') || '',
		startDate: searchParams.get('startDate') || ''
	});

	const handlePageChange = (page, pageSize) => {
		setCurrentPage(page);
		setPageSize(pageSize);
		// При необходимости обновите searchParams
		searchParams.set('page', page);
		searchParams.set('size', pageSize);
		setSearchParams(searchParams);
	};

	const [deleteGadget] = useDeleteGoodsGadgetMutation();
	const [postBanner] = usePostGoodsBannerMutation();

	const handleProductsCategoryButtons = (categoryText: string) => {
		searchParams.set('getType', categoryText);
		setSearchParams(searchParams);
	};
	const handleDeleteGadget = async () => {
		if (gadgetId !== null) {
			await deleteGadget(gadgetId);
			setGadgetId(null);
			setIsModalOpenDelete(false);
		}
	};

	const handlePostBanner = async () => {
		const bannerData = {
			images: fileList.map((file) => file.url)
		};
		const res = await postBanner(bannerData);
		console.log(res);
	};

	const handlePostDiscount = async () => {
		const discountData = {
			gadgetId: [...gadgetIds],
			discountSize: Number(discountSize),
			startDay: discountStartDay,
			endDay: discountEndDay
		};
		const {
			discountSize: DiscountSize,
			endDay,
			gadgetId,
			startDay
		} = discountData;
		try {
			await postDiscount({
				discountSize: DiscountSize!,
				endDay,
				gadgetId,
				startDay
			});
			setIsModalOpen(false);
			setGadgetIds([]);
			setDiscountSize(0);
			setDiscountStartDay('');
			setDiscountEndDay('');
		} catch (e) {
			console.log(e);
		}
	};

	const handleImageChangeBanner = ({
		fileList
	}: {
		fileList: UploadFile[];
	}) => {
		const updatedFileList = fileList.map((file) => {
			if (file.response) {
				return {
					...file,
					url: file.response.url
				};
			}
			return file;
		});

		setFileList(updatedFileList);
	};

	const handleImageRemove = async (file: UploadFile) => {
		const updatedFileList = fileList.filter((item) => item.uid !== file.uid);
		setFileList(updatedFileList);
	};

	const handlePostUploadBanner = async (options: any) => {
		const { onSuccess, onError, file } = options;
		const formData = new FormData();
		formData.append('file', file);
		try {
			const response = await postUploadForBanner(formData).unwrap();
			onSuccess(response);
		} catch (error) {
			onError(error);
		}
	};

	const handleMouseEnter = (itemId: number) => {
		setHoveredItemId(itemId);
	};

	const handleMouseLeave = () => {
		setHoveredItemId(null);
	};

	const handleAddToDiscount = (id: number) => {
		if (gadgetIds.includes(id)) {
			setGadgetIds(gadgetIds.filter((gadgetId) => gadgetId !== id));
		} else {
			setGadgetIds([...gadgetIds, id]);
		}
	};

	return (
		<div className={scss.wrapper}>
			<div className={scss.searchInputWrapper}>
				<Input
					className={scss.inputSearch}
					placeholder="Search..."
					value={searchInput}
					onChange={changeSearchInputValueFunk}
				/>
			</div>

			<div className={scss.productsCategoryButtons}>
				<button
					onClick={() => handleProductsCategoryButtons('all')}
					className={searchParams.get('getType') === 'all' ? scss.active : ''}
				>
					All
				</button>
				<button
					onClick={() => handleProductsCategoryButtons('category1')}
					className={
						searchParams.get('getType') === 'category1' ? scss.active : ''
					}
				>
					Category 1
				</button>
				<button
					onClick={() => handleProductsCategoryButtons('category2')}
					className={
						searchParams.get('getType') === 'category2' ? scss.active : ''
					}
				>
					Category 2
				</button>
				<button
					onClick={() => handleProductsCategoryButtons('category3')}
					className={
						searchParams.get('getType') === 'category3' ? scss.active : ''
					}
				>
					Category 3
				</button>
			</div>

			<div className={scss.productsList}>
				{data?.paginationGadgets?.gadgets.map((gadget: any) => (
					<div
						key={gadget.id}
						className={scss.productItem}
						onMouseEnter={() => handleMouseEnter(gadget.id)}
						onMouseLeave={handleMouseLeave}
					>
						<div className={scss.productInfo}>
							<span>{gadget.name}</span>
							<span>{gadget.price}</span>
						</div>
						<div className={scss.productActions}>
							<Link to={`/admin/product-editing/${gadget.id}`}>
								<IconEdit />
							</Link>
							<button
								onClick={() => {
									setGadgetId(gadget.id);
									showModalDelete();
								}}
							>
								<IconTrash />
							</button>
							{hoveredItemId === gadget.id && (
								<button onClick={() => handleAddToDiscount(gadget.id)}>
									{gadgetIds.includes(gadget.id) ? (
										<IconX />
									) : (
										<IconChartCircles />
									)}
								</button>
							)}
						</div>
					</div>
				))}
			</div>

			<Pagination
				current={currentPage}
				pageSize={pageSize}
				total={data?.paginationGadgets?.total || 0}
				onChange={handlePageChange}
			/>

			<div className={scss.bannerSection}>
				<button onClick={showModalBanner}>Add Banner</button>
				{banner.map((bannerItem: any) => (
					<div key={bannerItem.id} className={scss.bannerItem}>
						<img src={bannerItem.image} alt="Banner" />
						<button
							onClick={() => {
								setBannerFormResponse([bannerItem.id.toString()]);
								handleCancelBanner();
							}}
						>
							<IconDeleteForBanner />
						</button>
					</div>
				))}
			</div>

			<ConfigProvider theme={antdThemeConfig}>
				<CustomModal
					title="Add Discount"
					visible={isModalOpen}
					onCancel={handleCancel}
					footer={[
						<CancelButtonCustom key="cancel" onClick={handleCancel} />,
						<CustomButtonAdd key="submit" onClick={handlePostDiscount} />
					]}
				>
					<div className={scss.modalContent}>
						<span>Discount Size</span>
						<Input
							type="number"
							value={discountSize}
							onChange={(e) => setDiscountSize(Number(e.target.value))}
						/>
						<span>Start Date</span>
						<DatePicker
							value={dayjs(discountStartDay)}
							onChange={(date) =>
								setDiscountStartDay(date?.format('YYYY-MM-DD') || '')
							}
						/>
						<span>End Date</span>
						<DatePicker
							value={dayjs(discountEndDay)}
							onChange={(date) =>
								setDiscountEndDay(date?.format('YYYY-MM-DD') || '')
							}
						/>
					</div>
				</CustomModal>
			</ConfigProvider>

			<ConfigProvider theme={antdThemeConfig}>
				<CustomModal
					title="Delete Product"
					visible={isModalOpenDelete}
					onCancel={handleCancel}
					footer={[
						<CancelButtonCustom key="cancel" onClick={handleCancel} />,
						<CustomButtonAdd key="submit" onClick={handleDeleteGadget} />
					]}
				>
					<div className={scss.modalContent}>
						<span>Are you sure you want to delete this product?</span>
					</div>
				</CustomModal>
			</ConfigProvider>

			<ConfigProvider theme={antdThemeConfig}>
				<CustomModal
					title="Add Banner"
					visible={isModalOpenBanner}
					onCancel={handleCancelBanner}
					footer={[
						<CancelButtonCustom key="cancel" onClick={handleCancelBanner} />,
						<CustomButtonAdd key="submit" onClick={handlePostBanner} />
					]}
				>
					<div className={scss.modalContent}>
						<UploadBanner
							fileList={fileList}
							onChange={handleImageChangeBanner}
							onRemove={handleImageRemove}
							customRequest={handlePostUploadBanner}
						/>
					</div>
				</CustomModal>
			</ConfigProvider>
		</div>
	);
};

export default ProductsMainSection;
