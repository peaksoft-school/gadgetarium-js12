import { useEffect, useState } from "react"
import scss from "./OrderSinglePage.module.scss"
import { Link, useParams } from "react-router-dom"

interface AdminOrders {
  _id: string;
  fullname: string;
  number: string;
  date: string;
  quantity: string;
  totalPrice: string;
  orderType: string;
  status: string;
  product: string;
  discount: string;
  discountPrice: string;
  fullOldPrice: string;
  state: string;
  phone: string;
  address: string;
}

const OrderSinglePage = () => {
  const { id } = useParams()
  const [order, setOrder] = useState<AdminOrders | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetch(` http://3.76.202.126/api/order/by-id/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    })
    .then(async res => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      try {
        const data = await res.json();
        setOrder(data);
      } catch {
        throw new Error('Invalid JSON response');
      }
      setIsLoading(false);
    })
      .catch(error => {
        console.error('Error fetching data:', error)
        setIsLoading(false)
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
              {order && (
                <div className={scss.pages}>
                  <div className={scss.page_content_1}>
                    <p className={scss.navigation_p}>
                      <Link to="/admin/orders/in-processing">
                        <p>Заказы »</p>
                      </Link>
                      <h3>{order.fullname}</h3>
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
                          <h3 className={scss.discount_h3}>Скидка: <span>{order.discount}</span></h3>
                          <h3>Сумма скидки:</h3>
                        </div>
                        <div className={scss.right}>
                          <div className={scss.right_part_1}>
                            <h3>{order.product}</h3>
                            <h3>{order.quantity}</h3>
                            <h3>{order.fullOldPrice}</h3>
                          </div>
                          <h3 className={scss.discount_col}>{order.discountPrice}</h3>
                        </div>
                      </div>
                      <div className={scss.border_div_2}></div>

                      <div className={scss.total_div}>
                        <h3>Итого: <span>{order.totalPrice}</span></h3>
                      </div>
                    </div>

                    <div className={scss.right_div}>
                      <div className={scss.information_div}>
                        <h3>Информация о заказе</h3>

                        <div className={scss.border_div}></div>

                        <p>Заказ № <span>{order.number}</span></p>
                        <p>Состояние: <span>{order.state}</span></p>
                        <p className={scss.p_other_2}>Контактный телефон: <span>{order.phone}</span></p>
                        <p className={scss.p_other_2}>Адрес доставки: <span>{order.address}</span></p>
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
  )
}

export default OrderSinglePage