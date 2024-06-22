import React, { useState } from 'react';
import scss from './ProductsMainSection.module.scss';
import Input, { SearchProps } from 'antd/es/input';
import { ConfigProvider, DatePicker, DatePickerProps, Pagination, theme } from 'antd';
import { IconChartCircles, IconEdit, IconTrash } from '@tabler/icons-react';
import PhonesDropdown from '@/src/ui/catalogPhonesDropdown/PhonesDropdown';
import CustomModal from '@/src/ui/modalAdmin/CustomModal';
import CancelButtonCustom from '@/src/ui/adminButtons/CancelButtonCustom';
import CustomButtonAdd from '@/src/ui/adminButtons/CustomButtonAdd';
import UploadBanner from '@/src/ui/customImageAdd/UploadBanner';
import Infographics from '@/src/ui/infographics/Infographics';
import { Link, useNavigate } from 'react-router-dom';
import { useDeleteGoodsGadgetMutation, useGetGoodGadgetQuery, usePostGoodsBannerMutation, usePostGoodsDiscountMutation } from '@/src/redux/api/goods';
import type { UploadFile } from 'antd';
import moment from 'moment';

const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
  console.log(info?.source, value);

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const ProductsMainSection = () => {
  const [filtered, setFiltered] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
  const [isModalOpenBanner, setIsModalOpenBanner] = useState(false);
  const [gadgetId, setGadgetId] = useState<number | null>(null);
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  
  const initialFileList: UploadFile[] = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }
  ];
  
  const [fileList, setFileList] = useState<UploadFile[]>(initialFileList);
  const [discountSize, setDiscountSize] = useState("");
  const [discountStartDay, setDiscountStartDay] = useState("");
  const [discountEndDay, setDiscountEndDay] = useState("");

  const navigate = useNavigate();

  const addProduct = () => {
    navigate('/admin/product-adding/part-1');
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
  
  
  const { data } = useGetGoodGadgetQuery("");
  console.log(data);
  const [deleteGadget] = useDeleteGoodsGadgetMutation();
  const [postBanner] = usePostGoodsBannerMutation();

  const handleDeleteGadget = async () => {
    if (gadgetId !== null) {
      await deleteGadget(gadgetId);
      setGadgetId(null);
      setIsModalOpenDelete(false);
    }
  };

  const handlePostBanner = async () => {
    const bannerData = {
      images: fileList.map(file => file.url)
    };
    const res = await postBanner(bannerData);
    console.log(res);
  };

  const [postDiscount] = usePostGoodsDiscountMutation();

  const handlePostDiscount = async () => {
    const discountData = {
      gadgetId: [
        selectedItemId
      ],
      discountSize: discountSize,
      startDay: discountStartDay,
      endDay: discountEndDay
    };
    const res = await postDiscount(discountData);
    console.log(res);
    setIsModalOpen(false)
  };

  const handleHover = (id: number | null) => {
    setHoveredItemId(id);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    e.stopPropagation();
    e.preventDefault();
    setSelectedItemId(id);
    setGadgetId(id);
  };

  const handleCheckboxClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div className={scss.ProductsMainSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left_content}>
            <div className={scss.search_input_buttons}>
              <div>
                <ConfigProvider theme={antdThemeConfig}>
                  <Input.Search
                    className={scss.search}
                    size="large"
                    placeholder="Поиск по артикулу или ..."
                    allowClear
                    onSearch={onSearch}
                  />
                </ConfigProvider>
              </div>
              <div className={scss.add_product}>
                <button onClick={addProduct}>Добавить товар</button>
                <button onClick={showModal}>Создать скидку</button>
              </div>
            </div>
            <div className={scss.product_buttons}>
              <div className={scss.buttons}>
                <button
                  onClick={handleFiltered}
                  className={
                    filtered
                      ? `${scss.all_product} ${scss.active}`
                      : `${scss.all_product}`
                  }
                >
                  Все товары
                </button>
                <button
                  onClick={handleFiltered}
                  className={
                    filtered
                      ? `${scss.all_product} ${scss.active}`
                      : `${scss.all_product}`
                  }
                >
                  В продаже
                </button>
                <button
                  onClick={handleFiltered}
                  className={
                    filtered
                      ? `${scss.all_product} ${scss.active}`
                      : `${scss.all_product}`
                  }
                >
                  В избранном
                </button>
                <button
                  onClick={handleFiltered}
                  className={
                    filtered
                      ? `${scss.all_product} ${scss.active}`
                      : `${scss.all_product}`
                  }
                >
                  В корзине
                </button>
              </div>
              <button className={scss.banner} onClick={showModalBanner}>
                <IconChartCircles />
                Загрузить баннер
              </button>
            </div>
            <hr />
            <div className={scss.inputs_date}>
              <DatePicker
                className={scss.input_date}
                onChange={(date, dateString) => setDiscountStartDay(dateString)}
                placeholder="От"
              />
              <DatePicker
                className={scss.input_date}
                onChange={(date, dateString) => setDiscountEndDay(dateString)}
                placeholder="До"
              />
            </div>
            <div className={scss.products_card}>
              <div className={scss.product_title}>
                <p>Найдено 167 Товаров </p>
                <PhonesDropdown />
              </div>
              <table className={scss.cards}>
                <thead>
                  <tr className={scss.card_title}>
                    <div className={scss.row_1}>
                      <th>ID</th>
                      <th>Фото</th>
                    </div>
                    <div className={scss.rows}>
                      <div className={scss.row_2}>
                        <th>Артикул</th>
                        <th>Наименование товара</th>
                        <th>Дата создания</th>
                        <th>Кол-во</th>
                        <th>Цена товара</th>
                      </div>
                      <div className={scss.row_3}>
                        <th>Текущая цена</th>
                        <th>Действия</th>
                      </div>
                    </div>
                  </tr>
                </thead>
                <tbody>
                  {data?.paginationGadgets?.map((item, index) => (
                    <tr
                      key={index}
                      className={scss.tr}
                      onMouseEnter={() => handleHover(item.id)}
                      onMouseLeave={() => handleHover(null)}
                    >
                      <Link to={`/admin/goodsPage/product-page/${item?.id}`} className={scss.link_button}>
                        <div className={scss.card}>
                          <div className={scss.three}>
                            <td>
                              {hoveredItemId === item.id || selectedItemId === item.id ? (
                                <input
                                  type="checkbox"
                                  checked={selectedItemId === item.id}
                                  onClick={handleCheckboxClick}
                                  onChange={(e) => handleSelect(e, item.id)}
                                />
                              ) : (
                                item.id
                              )}
                            </td>
                            <img src={item.images} alt="" />
                          </div>
                          <td>{item?.article}</td>
                          <div className={scss.quantity_name}>
                            <td>Кол-во товара {item?.quantity}шт.</td>
                            <td className={scss.name}>{item?.nameOfGadget}</td>
                          </div>
                          <div className={scss.date_time}>
                            <td>{item?.releaseDate}</td>
                            {/* <td className={scss.time}>{productName.time}</td> */}
                          </div>
                          <td>{item?.quantity}</td>
                          <div className={scss.price_discount}>
                            <td className={scss.price_td}>{item?.price}с</td>
                            <td className={scss.discount}>
                              {item?.percent}%
                            </td>
                          </div>
                          <td className={scss.price_td}>{item?.currentPrice}с</td>
                          <div className={scss.icons}>
                            <IconEdit className={scss.trash} />
                            <IconTrash onClick={(e) => {
                              showModalDelete();
                              e.stopPropagation();
                              e.preventDefault();
                              setGadgetId(item?.id);
                            }} />
                          </div>
                        </div>
                      </Link>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <Pagination defaultCurrent={10} total={40} />
            </div>
          </div>
          <div className={scss.right_content}>
            <Infographics />
          </div>
        </div>
        <div className={scss.modal_create_newsletter}>
          <CustomModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          >
            <div className={scss.create_newsletter}>
              <h1>Создать скидку</h1>
              <div className={scss.size_sale}>
                <label className={scss.label} htmlFor="name">
                  Размер скидки *
                </label>
                <input 
                  className={scss.discount}
                  value={discountSize} 
                  onChange={(e) => setDiscountSize(e.target.value)} 
                  type="number" 
                  name="name" 
                  placeholder="0%  " />
              </div>
              <div className={scss.dates}>
                <div>
                  <label className={scss.label} htmlFor="name">
                    Дата начала скидки *{' '}
                  </label>
                  <DatePicker
                    name="name"
                    className={scss.date}
                    value={discountStartDay ? moment(discountStartDay) : null}
                    onChange={(date, dateString) => setDiscountStartDay(dateString)}
                    placeholder="От"
                  />
                </div>
                <div>
                  <label className={scss.label} htmlFor="name">
                    Дата окончания скидки *
                  </label>
                  <DatePicker
                    name="name"
                    className={scss.date}
                    value={discountEndDay ? moment(discountEndDay) : null}
                    onChange={(date, dateString) => setDiscountEndDay(dateString)}
                    placeholder="Выберите дату"
                  />
                </div>
              </div>
              <div className={scss.buttons}>
                <CancelButtonCustom onClick={handleCancel}>
                  ОТМЕНИТЬ
                </CancelButtonCustom>
                <CustomButtonAdd onClick={handlePostDiscount}>
                  ОТПРАВИТЬ
                </CustomButtonAdd>
              </div>
            </div>
          </CustomModal>
          <CustomModal
            isModalOpen={isModalOpenBanner}
            setIsModalOpen={setIsModalOpenBanner}
          >
            <div className={scss.add_banner}>
              <h1>Загрузить баннер</h1>
              <UploadBanner fileList={fileList} setFileList={setFileList} />
              <div className={scss.buttons_banner}>
                <CancelButtonCustom onClick={handleCancelBanner}>
                  ОТМЕНИТЬ
                </CancelButtonCustom>
                <CustomButtonAdd onClick={handlePostBanner}>
                  ОТПРАВИТЬ
                </CustomButtonAdd>
              </div>
            </div>
          </CustomModal>
        </div>
      </div>
      <CustomModal
        isModalOpen={isModalOpenDelete}
        setIsModalOpen={setIsModalOpenDelete}
      >
        <div className={scss.modal}>
          <h2>
            Вы уверены, что хотите удалить товар?
          </h2>

          <div className={scss.modal_buttons}>
            <CancelButtonCustom onClick={() => setIsModalOpenDelete(false)}>
              Отменить
            </CancelButtonCustom>
            <CustomButtonAdd onClick={handleDeleteGadget}>Удалить</CustomButtonAdd>
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default ProductsMainSection;
