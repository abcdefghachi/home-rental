import { useState } from "react";
import "../styles/MyListingCard.scss";
import { ArrowForwardIos, ArrowBackIosNew, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { setPropertyList } from "../redux/state";

const MyListingCard = ({
  listingId,
  creator,
  listingPhotoPaths,
  city,
  province,
  country,
  category,
  type,
  price,
  startDate,
  endDate,
  totalPrice,
  booking,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + listingPhotoPaths.length) % listingPhotoPaths.length
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listingPhotoPaths.length);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const propertiesList = user?.propertyList || [];

  const patchPropertiesList = async () => {
    if (user._id === creator._id) {
      try {
        const response = await fetch(
          `http://localhost:3001/users/${user._id}/properties/${listingId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const updatedPropertiesList = propertiesList.filter(
            (property) => property._id !== listingId
          );
          dispatch(setPropertyList(updatedPropertiesList));
        } else {
          const data = await response.json();
          console.error("Failed to delete listing:", data.message);
        }
      } catch (err) {
        console.error("Error deleting listing", err.message);
      }
    }
  };

  return (
    <div
      className="listing-card"
      onClick={() => {
        navigate(`/properties/${listingId}`);
      }}
    >
      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {listingPhotoPaths?.map((photo, index) => (
            <div key={index} className="slide">
              <img
                src={`http://localhost:3001/${photo?.replace("public", "")}`}
                alt={`photo ${index + 1}`}
              />
              <div
                className="prev-button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevSlide(e);
                }}
              >
                <ArrowBackIosNew sx={{ fontSize: "15px" }} />
              </div>
              <div
                className="next-button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNextSlide(e);
                }}
              >
                <ArrowForwardIos sx={{ fontSize: "15px" }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <h3>
        {city}, {province}, {country}
      </h3>
      <p>{category}</p>

      {!booking ? (
        <>
          <p>{type}</p>
          <p>
            <span>${price}</span>/đêm
          </p>
        </>
      ) : (
        <>
          <p>
            Từ ngày: {format(new Date(startDate), "dd/MM/yyyy", { locale: vi })}
          </p>
          <p>
            Đến ngày: {format(new Date(endDate), "dd/MM/yyyy", { locale: vi })}
          </p>
          <p>
            <span>Tổng : ${totalPrice}</span>
          </p>
        </>
      )}

      <button
        className="delete"
        onClick={(e) => {
          e.stopPropagation();
          if (window.confirm("Are you sure you want to delete this listing?")) {
            patchPropertiesList();
          }
        }}
        disabled={!user}
      >
        <Delete sx={{ color: "red" }} />
      </button>
    </div>
  );
};

export default MyListingCard;
