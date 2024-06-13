import { useParams } from "react-router-dom"
import Catalog from "./catalogPhones/Catalog"

const CatalogPage = () => {
  const {brand} =  useParams();
  console.log(brand, 'brand is');
  
  return (
    <>
      <Catalog />
    </>
  )
}

export default CatalogPage
