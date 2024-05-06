import { Link, useParams } from "react-router-dom"
import scss from "./HistorySinglePage.module.scss"
import { useEffect, useState } from "react"
import stars from "@/src/assets/rating-stars.png"

interface Order {
  _id: string;
  date: string;
  orderNumber: string;
  statusDelivered: string;
  statusCancelled: string;
  statusProcessing: string;
  statusOnTheWay: string;
  total: string;
  client: string;
  firstName: string;
  lastName: string;
  region: string;
  address: string;
  phone: string;
  email: string;
  payment: string;
  city: string;
  discount: string;
}

const orderProducts = [
  {
    image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY327_FMwebp_QL65_.jpg",
    price: "2 000 с",
    rating: stars,
    productName: "Bluetooth Наушники Yison Е6",
    ratingNumber: "56"
  },
  {
    image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY327_FMwebp_QL65_.jpg",
    price: "2 000 с",
    rating: stars,
    productName: "Bluetooth Наушники Yison Е6",
    ratingNumber: "56"
  },
  {
    image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY327_FMwebp_QL65_.jpg",
    price: "2 000 с",
    rating: stars,
    productName: "Bluetooth Наушники Yison Е6",
    ratingNumber: "56"
  },
  {
    image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY327_FMwebp_QL65_.jpg",
    price: "2 000 с",
    rating: stars,
    productName: "Bluetooth Наушники Yison Е6",
    ratingNumber: "56"
  },
]

const HistorySinglePage = () => {
  const { id } = useParams()
  const [order, setOrder] = useState<Order | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://api-v2.elchocrud.pro/api/v1/38c4902a09cff610684f21d2e5e1f663/orderHistory/${id}`)
      .then(res => res.json())
      .then(data => {
        setOrder(data)
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error)
        setIsLoading(false)
      });
  }, [id]);

  const [status1, setStatus1] = useState(true)
  const [status2, setStatus2] = useState(true)
  const [status3, setStatus3] = useState(true)
  const [status4, setStatus4] = useState(true)

  useEffect(() => {
    if (!order || !order.statusDelivered || !order.statusDelivered.trim()) {
      setStatus1(false);
    } else {
      setStatus1(true);
    }

    if (!order || !order.statusCancelled || !order.statusCancelled.trim()) {
      setStatus2(false);
    } else {
      setStatus2(true);
    }

    if (!order || !order.statusOnTheWay || !order.statusOnTheWay.trim()) {
      setStatus3(false);
    } else {
      setStatus3(true);
    }

    if (!order || !order.statusProcessing || !order.statusProcessing.trim()) {
      setStatus4(false);
    } else {
      setStatus4(true);
    }

  }, [order]);



  return (
    <section className={scss.history}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.page_content_1}>
            <p className={scss.navigation_p}>
              <Link to="/personal-account/history-of-orders">
                <p>Личный кабинет »</p>
              </Link>
              <h3>История заказов</h3>
            </p>

            <div className={scss.div_heading}>
              <h3>История заказов</h3>
              <div></div>
            </div>

          </div>
          <div className={scss.page_content_2}>

            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <div>
                {order && (
                  <div className={scss.content_2}>
                    <h1>{order.orderNumber}</h1>

                    <div className={scss.order_products}>
                      {orderProducts.map((e) => (
                        <div className={scss.order_product}>
                          <img src={e.image} alt="Product" />
                          <h3>{e.productName}</h3>
                          <div className={scss.card_rating}>
                            <p>Рейтинг</p>
                            <img src={e.rating} alt="RatingStars" />
                            <p>({e.ratingNumber})</p>
                          </div>
                          <h2>{e.price}</h2>
                        </div>
                      ))}
                    </div>

                    <div className={scss.columns}>
                      <div className={scss.column_1}>
                        <div className={scss.column_information}>
                          <div className={scss.status}>
                            <p>Статус</p>
                            <div className={scss.statuses}>
                              <button className={scss.wait_status}>О ожидании</button>
                              <button>
                                <span className={status1 ? scss.delivered_status : scss.no_status}>{order.statusDelivered}</span>
                                <span className={status2 ? scss.cancelled_status : scss.no_status}>{order.statusCancelled}</span>
                                <span className={status3 ? scss.way_status : scss.no_status}>{order.statusOnTheWay}</span>
                                <span className={status4 ? scss.processing_status : scss.no_status}>{order.statusProcessing}</span>
                              </button>
                            </div>
                          </div>

                          <div className={scss.client}>
                            <p>Клиент</p>
                            <p className={scss.order_p}>{order.client}</p>
                          </div>

                          <div className={scss.first_name}>
                            <p>Имя</p>
                            <p className={scss.order_p}>{order.firstName}</p>
                          </div>

                          <div className={scss.region}>
                            <p>Область/регион</p>
                            <p className={scss.order_p}>{order.region}</p>
                          </div>

                          <div className={scss.address}>
                            <p>Адрес</p>
                            <p className={scss.order_p}>{order.address}</p>
                          </div>

                          <div className={scss.phone}>
                            <p>Телефон</p>
                            <p className={scss.order_p}>{order.phone}</p>
                          </div>

                          <div className={scss.email}>
                            <p>Email</p>
                            <p className={scss.order_p}>{order.email}</p>
                          </div>
                        </div>

                        <div className={scss.total_information}>
                          <div className={scss.total}>
                            <p className={scss.total_p}>Скидка: <span>{order.discount}</span></p>
                            <p className={scss.total_p}>Итого: <span>{order.total}</span></p>
                          </div>
                        </div>
                      </div>

                      <div className={scss.column_2}>
                        <div className={scss.date}>
                          <p>Дата</p>
                          <p className={scss.order_p}>{order.date}</p>
                        </div>

                        <div className={scss.payment}>
                          <p>Способ оплаты</p>
                          <p className={scss.order_p}>{order.payment}</p>
                        </div>

                        <div className={scss.last_name}>
                          <p>Фамилия</p>
                          <p className={scss.order_p}>{order.lastName}</p>
                        </div>

                        <div className={scss.city}>
                          <p>Город</p>
                          <p className={scss.order_p}>{order.city}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HistorySinglePage