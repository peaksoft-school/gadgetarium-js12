/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetProductsItemIdQuery } from '@/src/redux/api/product';
import scss from './CharacteristicsPage.module.scss';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export const CharacteristicsPage = () => {
	const { productId } = useParams();
	const { data } = useGetProductsItemIdQuery(productId!);
  const [characteristicsProduct, setCharacteristicsProduct] = useState<boolean>(false)
	
	useEffect(() => {

  }, []);

	return <section  className={scss.CharacteristicsPage}>
    <div className={scss.product_contents}>
      <div onClick={() => setCharacteristicsProduct(!characteristicsProduct)} className={scss.contentCharacteristics}>
        <h3>Основные xарактеристики</h3>
        <div className={characteristicsProduct ? `${scss.icon} ${scss.iconActive}` : `${scss.icon}`}>
          <p>Icon</p>

        </div>
      </div>
    </div>
  </section>;
};
