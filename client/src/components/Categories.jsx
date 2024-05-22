import { categories } from "../data";
import "../styles/Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <h1>Khám phá các địa điểm nổi bật nhất</h1>
      <p>
        Khám phá các nhà nghỉ , nơi ở cho thuê của chúng tôi phục vụ cho mọi đối
        tượng khách du lịch. Đắm mình trong văn hóa địa phương, tận hưởng những
        tiện nghi như ở nhà và tạo ra những kỷ niệm khó quên ở điểm đến mơ ước
        của bạn.
      </p>

      <div className="categories_list">
        {categories?.slice(1, 7).map((category, index) => (
          <Link to={`/properties/category/${category.label}`} key={index}>
            <div className="category" key={index}>
              <img src={category.img} alt={category.label} />
              <div className="overlay"></div>
              <div className="category_text">
                <div className="category_text_icon">{category.icon}</div>
                <p>{category.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
