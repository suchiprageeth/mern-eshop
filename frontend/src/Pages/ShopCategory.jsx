import { useContext } from "react";
import "./Styles/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import { Item } from "../Components/Item/Item";

const ShopCategory = ({ category, banner }) => {
  console.log(8, { category });

  const { all_products } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shop-category-banner" src={banner} alt="Banner Logo" />
      <div className="shop-category-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-category-sort">
          Sort by <img src={dropdown_icon} alt="Dropdown Icon" />
        </div>
      </div>
      <div className="shop-category-products">
        {all_products.map((item, index) => {
          if (category === item.category) {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shop-category-loadMore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
