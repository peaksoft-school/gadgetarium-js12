import {
  useDeleteByIdBasketProductMutation,
  useGetBasketOrderAmountQuery,
  useGetBasketQuery,
  useDeleteAllBasketMutation,
  useBasketPutProductMutation
} from '@/src/redux/api/basket';
import png from '../../../../assets/sammy_shopping_1_1.png';
import scss from './BasketSection.module.scss';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import {
  IconHeart,
  IconX,
  IconExclamationMark,
  IconHeartFilled,
  IconTrash
} from '@tabler/icons-react';
import { Button, Checkbox, ConfigProvider, Rate, InputNumber } from 'antd';
import React, { useState } from 'react';
import {
  useAddAllFavoritesProductsMutation,
  useFavoritePutProductMutation
} from '@/src/redux/api/favorite';

const BasketSection = () => {
  const [basketAddApi] = useBasketPutProductMutation();
  const [deleteAllProductsForBasket] = useDeleteAllBasketMutation();
  const [favoriteAddProduct] = useFavoritePutProductMutation();
  const [addAllFavoriteProducts] = useAddAllFavoritesProductsMutation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValues, setInputValues] = useState<Record<number, number>>({});
  const navigate = useNavigate();
  const { data, isLoading } = useGetBasketQuery();
  const [deleteBasket] = useDeleteByIdBasketProductMutation();
  const [idsArray, setIdsArray] = useState<string[]>(() => {
    const ids = searchParams.getAll('ids');
    return ids.length ? ids : [];
  });

  const handleFavoriteAddProduct = async (id: number) => {
    await favoriteAddProduct(id);
  };

  const handleIdsProducts = (id: number) => {
    const ids = id.toString();
    if (!idsArray.includes(ids)) {
      searchParams.append('ids', ids);
      setIdsArray((prevValue) => [...prevValue, ids]);
      navigate(`/basket?${searchParams.toString()}`);
    } else {
      const removeIds = idsArray.filter((c) => c !== ids);
      searchParams.delete('ids');
      removeIds.forEach((e) => searchParams.append('ids', e));
      setIdsArray(removeIds);
      navigate(`/basket?${searchParams.toString()}`);
    }
  };

  const handleProductsIds = (id: number) => {
    const ids = id.toString();
    if (!idsArray.includes(ids)) {
      searchParams.append('ids', ids);
      setIdsArray((prevValue) => [...prevValue, ids]);
      navigate(`/basket?${searchParams.toString()}`);
    } else {
      setIdsArray([]);
      searchParams.delete('ids');
      setSearchParams(searchParams);
      navigate(`/basket?${searchParams.toString()}`);
    }
  };

  const { data: resultsProductsPrices } = useGetBasketOrderAmountQuery({
    ids: [searchParams.toString()]
  });

  async function handleDeleteAllProducts() {
    try {
      await deleteAllProductsForBasket({
        ids: searchParams.get('ids') ? [searchParams.toString()] : []
      });
    } catch (error) {
      console.error(error);
    }
  }

  const handleAddAllFavoriteProducts = async () => {
    try {
      await addAllFavoriteProducts({
        gadgetIds: searchParams.get('ids')
          ? [`gadgetIds=${searchParams.getAll('ids')}`]
          : []
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputValueForProductQuantity = async (id: number) => {
    try {
      await basketAddApi({
        id,
        quantity: inputValues[id]
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handlePlusCountProduct = async (id: number) => {
    setInputValues((prevValues) => {
      const newValue = (prevValues[id] || 0) + 1;
      return { ...prevValues, [id]: newValue };
    });
    try {
      await basketAddApi({
        id,
        quantity: inputValues[id] + 1
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleMinusCountProduct = async (id: number) => {
    setInputValues((prevValues) => {
      const newValue = Math.max((prevValues[id] || 0) - 1, 1);
      return { ...prevValues, [id]: newValue };
    });
    try {
      await basketAddApi({
        id,
        quantity: Math.max(inputValues[id] - 1, 1)
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteBasket = async (gadgetId: number) => {
    await deleteBasket(gadgetId);
  };

  const handleOrderAmounts = () => {
    navigate(`/pay/delivery?${window.location.search.substring(1)}`);
  };

  const allSelected = idsArray.length === (data?.length || 0);
  const someSelected = idsArray.length > 0;
  const calculateButtonClass = () => {
    if (searchParams.get('ids')) {
      return `${scss.nooActiveButton} ${scss.activeButton}`;
    } else {
      return `${scss.nooActiveButton}`;
    }
  };

  const changeCountBasketProducts = (id: number, value: number | null) => {
    if (value !== null) {
      setInputValues((prevValues) => ({ ...prevValues, [id]: value }));
    }
  };

  return (
    <div className={scss.BasketSection}>
      <div className="container">
        {isLoading ? (
          <h1>IsLoading...</h1>
        ) : (
          <div className={scss.content}>
            <div className={scss.div_page_text}>
              <p className={scss.home_page_text} onClick={() => navigate('/')}>
                Главная »
              </p>
              <p>Корзина</p>
            </div>
            <h1>Товары в корзине</h1>
            <div className={scss.hr}></div>
            {data?.length === 0 ? (
              <>
                <img src={png} alt="png" />
                <div className={scss.text_after_img}>
                  <h2>Ваша корзина пуста</h2>
                  <p>Но вы всегда можете ее наполнить </p>
                  <Link to="/">
                    <button>К покупкам</button>
                  </Link>
                </div>
              </>
            ) : !localStorage.getItem('token') ? (
              <>
                <img src={png} alt="png" />
                <div className={scss.text_after_img}>
                  <h2>Ваша корзина пуста</h2>
                  <p>Но вы всегда можете ее наполнить </p>
                  <Link to="/">
                    <button>К покупкам</button>
                  </Link>
                </div>
              </>
            ) : (
              <div className={scss.basket_product_container_div}>
                <div className={scss.basket_product_result_div}>
                  <div className={scss.button_is_basket_results_div}>
                    <ConfigProvider
                      theme={{
                        components: {
                          Checkbox: {
                            colorPrimary: '#c11bab',
                            colorBgContainer: 'white',
                            algorithm: true
                          }
                        }
                      }}
                    >
                      <Checkbox
                        onChange={() =>
                          data?.forEach((c) => handleProductsIds(c.id))
                        }
                        checked={allSelected && someSelected}
                      >
                        <p>Отметить все</p>
                      </Checkbox>
                    </ConfigProvider>
                  </div>
                  <div
                    className={scss.button_is_basket_results_div}
                    onClick={handleDeleteAllProducts}
                  >
                    <IconTrash
                      color="rgb(144, 156, 181)"
                      width={'24px'}
                      height={'24px'}
                      cursor={'pointer'}
                    />
                    <p>Удалить</p>
                  </div>
                  <div
                    className={scss.button_is_basket_results_div}
                    onClick={handleAddAllFavoriteProducts}
                  >
                    <IconHeart
                      color="rgb(144, 156, 181)"
                      width={'24px'}
                      height={'24px'}
                      cursor={'pointer'}
                    />
                    <p>Переместить в избранное</p>
                  </div>
                </div>
                <div className={scss.basket_products}>
                  <div className={scss.container_basket_product}>
                    {data?.map((item) => (
                      <div
                        key={item.id}
                        className={scss.basket_product_content}
                      >
                        <ConfigProvider
                          theme={{
                            components: {
                              Checkbox: {
                                colorPrimary: '#c11bab',
                                colorBgContainer: 'white',
                                algorithm: true
                              }
                            }
                          }}
                        >
                          <Checkbox
                            checked={idsArray.includes(item.id.toString())}
                            onChange={() => handleIdsProducts(item.id)}
                          ></Checkbox>
                        </ConfigProvider>
                        <div className={scss.basket_product_content_img_div}>
                          <img src={item.images[0]?.image_url} alt="img" />
                        </div>
                        <div className={scss.basket_product_content_main}>
                          <div className={scss.basket_product_content_main_div}>
                            <h3>{item.name}</h3>
                            <div
                              className={
                                scss.basket_product_content_main_div_icon_div
                              }
                            >
                              <IconX
                                onClick={() => handleDeleteBasket(item.id)}
                                color="#909CBD"
                                width={'18px'}
                                height={'18px'}
                                cursor={'pointer'}
                              />
                            </div>
                          </div>
                          <div
                            className={
                              scss.basket_product_content_main_amount_div
                            }
                          >
                            <div
                              className={
                                scss.basket_product_content_main_amount_amount_div
                              }
                            >
                              <p>
                                <span>{item.quantity}</span> шт.
                              </p>
                            </div>
                            <div
                              className={
                                scss.basket_product_content_main_amount_btn_div
                              }
                            >
                              <Button
                                className={
                                  scss.basket_product_content_main_amount_btn_div_btn
                                }
                                onClick={() => handleMinusCountProduct(item.id)}
                              >
                                -
                              </Button>
                              <InputNumber
                                min={1}
                                value={inputValues[item.id] || item.quantity}
                                onChange={(value) =>
                                  changeCountBasketProducts(item.id, value)
                                }
                                onBlur={() =>
                                  handleInputValueForProductQuantity(item.id)
                                }
                              />
                              <Button
                                className={
                                  scss.basket_product_content_main_amount_btn_div_btn
                                }
                                onClick={() => handlePlusCountProduct(item.id)}
                              >
                                +
                              </Button>
                            </div>
                            <div
                              className={
                                scss.basket_product_content_main_amount_price_div
                              }
                            >
                              <p>{item.price * item.quantity} ₽</p>
                            </div>
                          </div>
                          <div
                            className={
                              scss.basket_product_content_main_footer_div
                            }
                          >
                            <div
                              className={
                                scss.basket_product_content_main_footer_review
                              }
                            >
                              <Rate
                                disabled
                                defaultValue={4}
                                style={{
                                  color: '#C11BAB',
                                  fontSize: '14px',
                                  gap: '10px',
                                  cursor: 'pointer'
                                }}
                              />
                              <p>Отзывы</p>
                            </div>
                            <div
                              className={
                                scss.basket_product_content_main_footer_favorite
                              }
                              onClick={() => handleFavoriteAddProduct(item.id)}
                            >
                              {item.isFavorites ? (
                                <IconHeartFilled
                                  color="#C11BAB"
                                  width={'18px'}
                                  height={'18px'}
                                  cursor={'pointer'}
                                />
                              ) : (
                                <IconHeart
                                  color="#909CBD"
                                  width={'18px'}
                                  height={'18px'}
                                  cursor={'pointer'}
                                />
                              )}
                              <p>В избранное</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={scss.order_amount_div}>
                  <div className={scss.order_amount_results_div}>
                    <h2>ИТОГО</h2>
                    <div
                      className={
                        scss.order_amount_results_div_results_products_div
                      }
                    >
                      <p>Товары</p>
                      <p>{resultsProductsPrices?.amountWithoutDiscount} ₽</p>
                    </div>
                    <div
                      className={
                        scss.order_amount_results_div_results_delivery_div
                      }
                    >
                      <p>Доставка</p>
                      <div
                        className={
                          scss.order_amount_results_div_results_delivery_div_description
                        }
                      >
                        <p>бесплатно</p>
                        <p>или самовывоз</p>
                      </div>
                    </div>
                    <div
                      className={
                        scss.order_amount_results_div_results_discount_div
                      }
                    >
                      <p>Скидка</p>
                      <p>0 ₽</p>
                    </div>
                    <div
                      className={scss.order_amount_results_div_results_total_div}
                    >
                      <h2>Итого к оплате</h2>
                      <h2>{resultsProductsPrices?.amountWithoutDiscount} ₽</h2>
                    </div>
                    <button
                      className={calculateButtonClass()}
                      onClick={handleOrderAmounts}
                      disabled={!searchParams.get('ids')}
                    >
                      Перейти к оформлению
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BasketSection;
