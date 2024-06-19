import React, { useState, useEffect } from 'react';
import { Button, Checkbox, ConfigProvider, Rate, InputNumber } from 'antd';
import { IconHeart, IconX, IconExclamationMark, IconHeartFilled, IconTrash } from '@tabler/icons-react';
import scss from './BasketSection.module.scss';
import png from '../../../../assets/sammy_shopping_1_1.png';
import {
  useDeleteByIdBasketProductMutation,
  useGetBasketOrderAmountQuery,
  useGetBasketQuery,
  useDeleteAllBasketMutation,
  useBasketPutProductMutation
} from '@/src/redux/api/basket';
import { useAddAllFavoritesProductsMutation, useFavoritePutProductMutation } from '@/src/redux/api/favorite';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

const BasketSection = () => {
  const [basketAddApi] = useBasketPutProductMutation();
  const [deleteAllProductsForBasket] = useDeleteAllBasketMutation();
  const [favoriteAddProduct] = useFavoritePutProductMutation();
  const [addAllFavoriteProducts] = useAddAllFavoritesProductsMutation();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({});
  const { data, isLoading } = useGetBasketQuery();
  const [deleteBasket] = useDeleteByIdBasketProductMutation();
  const [idsArray, setIdsArray] = useState(() => {
    const ids = searchParams.getAll('ids');
    return ids.length ? ids : [];
  });

  useEffect(() => {
    if (data) {
      const initialInputValues = data.reduce((acc, item) => {
        acc[item.id] = item.quantity;
        return acc;
      }, {});
      setInputValues(initialInputValues);
    }
  }, [data]);

  const handleFavoriteAddProduct = async (id) => {
    await favoriteAddProduct(id);
  };

  const handleIdsProducts = (id) => {
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

  const handleDeleteAllProducts = async () => {
    try {
      await deleteAllProductsForBasket({
        ids: searchParams.get('ids') ? [searchParams.toString()] : []
      });
    } catch (error) {
      console.error(error);
    }
  };

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

  const handleInputValueForProductQuantity = async (id) => {
    searchParams.set('quantity', inputValues[id].toString());
    setSearchParams(searchParams);
    try {
      await basketAddApi({
        id,
        quantity: `quantity=${searchParams.get('quantity')}`
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handlePlusCountProduct = async (id) => {
    setInputValues((prevValues) => {
      const newValue = (prevValues[id] || 0) + 1;
      searchParams.set('quantity', newValue.toString());
      setSearchParams(searchParams);
      return { ...prevValues, [id]: newValue };
    });
    try {
      await basketAddApi({
        id,
        quantity: `quantity=${searchParams.get('quantity')}`
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleMinusProduct = async (id) => {
    setInputValues((prevValues) => {
      const newValue = Math.max((prevValues[id] || 0) - 1, 1);
      searchParams.set('quantity', newValue.toString());
      setSearchParams(searchParams);
      return { ...prevValues, [id]: newValue };
    });
    try {
      await basketAddApi({
        id,
        quantity: `quantity=${searchParams.get('quantity')}`
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteBasket = async (gadgetId) => {
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

  const changeCountBasketProducts = (id, event) => {
    if (event !== null) {
      const newValue = event.toString();
      setInputValues((prevValues) => ({ ...prevValues, [id]: newValue }));
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
                          data?.forEach((c) => handleIdsProducts(c.id))
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
                          />
                        </ConfigProvider>
                        <div className={scss.content_product_div}>
                          <div className={scss.container_img_div}>
                            <img src={item?.imageUrls?.[0]} alt="png" />
                          </div>
                          <div className={scss.content_product_div__info}>
                            <h2>{item.name}</h2>
                            <div className={scss.counter_products}>
                              <div
                                onClick={() =>
                                  item.quantity > 1
                                    ? handleMinusProduct(item.id)
                                    : handleDeleteBasket(item.id)
                                }
                                className={scss.count_basket_button}
                              >
                                -
                              </div>
                              <InputNumber
                                min={1}
                                value={inputValues[item.id]}
                                onChange={(value) =>
                                  changeCountBasketProducts(item.id, value)
                                }
                                onBlur={() =>
                                  handleInputValueForProductQuantity(item.id)
                                }
                                onPressEnter={() =>
                                  handleInputValueForProductQuantity(item.id)
                                }
                                style={{
                                  width: '52px',
                                  height: '32px',
                                  fontSize: '16px',
                                  lineHeight: '22px',
                                  color: '#101828',
                                  borderRadius: '8px'
                                }}
                              />
                              <div
                                onClick={() => handlePlusCountProduct(item.id)}
                                className={scss.count_basket_button}
                              >
                                +
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={scss.basket_product_content__delete_div}
                        >
                          <div
                            onClick={() => handleDeleteBasket(item.id)}
                            className={scss.basket_product_content__delete}
                          >
                            <IconX
                              width={'24px'}
                              height={'24px'}
                              color="#667085"
                              cursor={'pointer'}
                            />
                          </div>
                          <div
                            onClick={() => handleFavoriteAddProduct(item.id)}
                            className={scss.basket_product_content__delete}
                          >
                            <IconHeartFilled
                              width={'24px'}
                              height={'24px'}
                              color="#c11bab"
                              cursor={'pointer'}
                            />
                          </div>
                          <p>
                            {item.price} ₸ <span>{item.oldPrice} ₸</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={scss.hr}></div>
                <div className={scss.basket_results_div}>
                  <div className={scss.basket_results__price}>
                    <div>
                      <h3>Итог:</h3>
                      <p>
                        {resultsProductsPrices?.amount
                          ?.toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                        ₸
                      </p>
                    </div>
                    <div className={scss.basket_results__price__deliv}>
                      <h4>Доставка:</h4>
                      <p>Расчитается при оформлении</p>
                    </div>
                  </div>
                  <Button
                    onClick={handleOrderAmounts}
                    className={calculateButtonClass()}
                  >
                    Перейти к оформлению
                  </Button>
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
