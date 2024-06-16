import { useEffect, useState } from "react";
import scss from "./OrderSinglePage.module.scss";
import { Link, useParams } from "react-router-dom";

interface AdminOrders {
  id: string;
  fullName: string;
  number: string;
  date: string;
  count: string;
  totalPrice: string;
  nameOfGadget: string[];
  discountPrice: string;
  price: string;
} 

interface OtherData {
  id: number;
  number: number;
  status: string;
  phoneNumber: string;
  address: string;
}

const OrderSinglePage = () => {
  const { id } = useParams();
  const [order, setOrder] = useState<AdminOrders | null>(null);
  const [secondData, setSecondData] = useState<OtherData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      fetch(`http://3.76.202.126/api/order/by-id/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      }),
      fetch(`http://3.76.202.126/api/order/order-info/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      })
    ])
    .then(async ([orderRes, otherDataRes]) => {
      if (!orderRes.ok) {
        throw new Error(`Order fetch error! Status: ${orderRes.status}`);
      }
      if (!otherDataRes.ok) {
        throw new Error(`Other data fetch error! Status: ${otherDataRes.status}`);
      }

      const orderData = await orderRes.json();
      const otherData = await otherDataRes.json();

      setOrder(orderData);
      setSecondData(otherData);
      
      setIsLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <section className={scss.orders}>
      <div className="container">
        <div className={scss.content}>
          {isLoading ? (
            <div className={scss.loading_div}>Loading...</div>
          ) : (
            <div className={scss.content_2}>
              {order && secondData && (
                <div className={scss.pages}>
                  <div className={scss.page_content_1}>
                    <p className={scss.navigation_p}>
                      <Link to="/admin/orders/in-pending">
                        <p>Заказы »</p>
                      </Link>
                      <h3>{order.fullName}</h3>
                    </p>

                    <div className={scss.div_heading}>
                      <h3>Оплата заказа <span>{order.number}</span></h3>
                      <div></div>
                    </div>
                  </div>

                  <div className={scss.page_content_2}>
                    <div className={scss.left_div}>
                      <div className={scss.sides_div}>
                        <div className={scss.left}>
                          <h3>Наименование:</h3>
                          <h3 className={scss.quantity_h3}>Кол-во товара:</h3>
                          <h3 className={scss.total_h3}>Общая сумма заказа:</h3>
                          <h3 className={scss.discount_h3}>Скидка: <span>15%</span></h3>
                          <h3>Сумма скидки:</h3>
                        </div>
                        <div className={scss.right}>
                          <div className={scss.right_part_1}>
                            <h3>{order.nameOfGadget.join(', ')}</h3>
                            <h3>{order.count}</h3>
                            <h3>{order.totalPrice}</h3>
                          </div>
                          <h3 className={scss.discount_col}>{order.discountPrice} с</h3>
                        </div>
                      </div>
                      <div className={scss.border_div_2}></div>

                      <div className={scss.total_div}>
                        <h3>Итого: <span>{order.price} с</span></h3>
                      </div>
                    </div>

                    <div className={scss.right_div}>
                      <div className={scss.information_div}>
                        <h3>Информация о заказе</h3>

                        <div className={scss.border_div}></div>

                        <p>Заказ № <span>{secondData.number}</span></p>
                        <p>Состояние: <span>{secondData.status}</span></p>
                        <p className={scss.p_other_2}>Контактный телефон: <span>{secondData.phoneNumber}</span></p>
                        <p className={scss.p_other_2}>Адрес доставки: <span>{secondData.address}</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default OrderSinglePage;
