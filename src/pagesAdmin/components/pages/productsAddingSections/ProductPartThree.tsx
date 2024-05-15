import { Link } from "react-router-dom"
import scss from "./ProductPartThree.module.scss"
import { IconFileDownload } from "@tabler/icons-react"
import Textarea from "@/src/ui/textarea/Textarea"

const ProductPartThree = () => {
  return (
    <section className={scss.product}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.page_content_1}>
            <p className={scss.navigation_p}>
              <Link to={"/admin"}><p>Товары »</p></Link> <h3>Описание и обзор</h3>
            </p>
            <div className={scss.border_div}>
              <h3>Описание и обзор</h3>
              <div></div>
            </div>
          </div>

          <div className={scss.page_content_2}>
            <div className={scss.nav_div}>
              <div className={scss.nav_one}>
                <h3>1</h3>
                <p>Добавление товара</p>
              </div>
              <div className={scss.line}></div>
              <div className={scss.nav_two}>
                <h3>2</h3>
                <p>Установка цены и количества товара</p>
              </div>
              <div className={scss.line}></div>
              <div className={scss.nav_three}>
                <h3>3</h3>
                <p>Описание и обзор</p>
              </div>
            </div>

            <div className={scss.buttons_div}>
              <div className={scss.button_part_1}>
                <p>Загрузите видеообзор</p>
                <div className={scss.part}>
                  <input
                    type="text"
                    placeholder="Вставьте ссылку на видеообзор"
                  />
                  <IconFileDownload />
                </div>
              </div>

              <div className={scss.button_part_2}>
                <p>Загрузите документ PDF</p>
                <div className={scss.part}>
                  <input type="text"
                    placeholder="Вставьте документ в PDF файле"
                  />
                  <IconFileDownload />
                </div>
              </div>
            </div>
            <Textarea />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPartThree