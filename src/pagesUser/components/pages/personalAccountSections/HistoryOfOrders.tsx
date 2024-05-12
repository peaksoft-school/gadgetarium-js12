import { Link } from "react-router-dom"
import scss from "./HistoryOfOrders.module.scss"
import { IconX } from "@tabler/icons-react"
import { useDeleteOrderMutation, useGetOrderQuery } from "@/src/redux/api/personalAccount/orderHistory"
import dummy from "@/src/assets/sammy-the-man-trying-to-find-the-right-document 1.png"
import { useState } from "react"

const HistoryOfOrders = () => {
  const { data: orders, isLoading } = useGetOrderQuery(0)
  const [deleteOrder] = useDeleteOrderMutation()
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteOrder = async () => {
    setIsDeleting(true);
    try {
      await deleteOrder();
      setIsDeleting(false);
      console.log(isDeleting);

    } catch (error) {
      console.error(error);
      setIsDeleting(false);
    }
  };

  return (
    <section className={scss.history}>
      <div className="container">
        <div className={scss.content}>
          {orders?.length !== 0 ? (
            <div className={scss.pages}>
              <div className={scss.page_content_1}>
                <p className={scss.navigation_p}>Личный кабинет » <h3>История заказов</h3></p>

                <div className={scss.div_heading}>
                  <h3>История заказов</h3>
                  <div></div>
                </div>

                <div className={scss.div_navigation}>
                  <div className={scss.navigation}>
                    <button className={scss.active_button}>История заказов</button>
                    <Link to="/personal-account/favorite">
                      <button>Избранное</button>
                    </Link>
                    <Link to="/personal-account/profile">
                      <button>Профиль</button>
                    </Link>
                  </div>
                  <div className={scss.clear} onClick={handleDeleteOrder}>
                    <IconX />
                    <p>Очистить список заказов</p>
                  </div>
                </div>
              </div>
              <div className={scss.page_content_3}>
                <div className={scss.orders}>
                  {isLoading && <h1>Loading...</h1>}
                  {orders?.map((e) => (
                    <Link to={`my-orders/${e._id}`}>
                      <div className={scss.order}>
                        <div className={scss.order_information}>
                          <p className={scss.order_date}>{e.date}</p>
                          <p className={scss.order_number}>{e.orderNumber}</p>
                          <div className={scss.all}>
                            <span className={scss.order_delivered}>{e.statusDelivered}</span>
                            <span className={scss.order_cancelled}>{e.statusCancelled}</span>
                            <span className={scss.order_processing}>{e.statusProcessing}</span>
                            <span className={scss.order_on_the_way}>{e.statusOnTheWay}</span>
                          </div>
                        </div>
                        <div className={scss.order_total}>
                          <h3>{e.total}</h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className={scss.pages}>
              <div className={scss.page_content_1}>
                <p className={scss.navigation_p}>Личный кабинет » <h3>История заказов</h3></p>

                <div className={scss.div_heading}>
                  <h3>История заказов</h3>
                  <div></div>
                </div>

                <div className={scss.div_navigation_two}>
                  <div className={scss.navigation}>
                    <button className={scss.active_button}>История заказов</button>
                    <Link to="/personal-account/favorite">
                      <button>Избранное</button>
                    </Link>
                    <Link to="/personal-account/profile">
                      <button>Профиль</button>
                    </Link>
                  </div>
                  <div className={scss.account}>
                    <h3>Азамат Азаматов</h3>
                    <p className={scss.account_email}>aza@gmail.com</p>
                    <p className={scss.account_phone}>+996 (400) 88-88-88</p>
                    <p className={scss.account_leave}>Выйти</p>
                  </div>
                </div>
              </div>

              <div className={scss.page_content_2}>
                <>
                  <img src={dummy} alt="historyOrder" />
                  <div className={scss.image_text}>
                    <h2>Здесь пока пусто</h2>
                    <p>
                      Здесь будет храниться история ваших заказов.
                    </p>
                    <Link to="/">
                      <button>К покупкам</button>
                    </Link>
                  </div>
                </>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default HistoryOfOrders