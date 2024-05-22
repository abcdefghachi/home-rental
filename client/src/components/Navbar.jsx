import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import variables from "../styles/variables.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { setLogout, setLogin } from "../redux/state";

const Navbar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);

  // Debugging: log user state
  const user = useSelector((state) => {
    // console.log("User state:", state.user);
    return state.user;
  });

  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <a href="/" style={{ textDecoration: "none" }}>
        <h1 style={{ color: "white" }}>TRANG CHỦ</h1>
      </a>

      <div className="navbar_search">
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <IoIosSearch
          onClick={() => {
            navigate(`/properties/search/${search}`);
          }}
        />
      </div>

      <div className="navbar_right">
        {user ? (
          <a href="/create-listing" className="host">
            <p style={{ color: "white" }}>Tạo mới</p>
          </a>
        ) : (
          <a href="/login" className="host">
            <p style={{ color: "white" }}>Tạo mới</p>
          </a>
        )}

        <button
          className="navbar_right_account"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        >
          <CiMenuBurger sx={{ color: variables.darkgrey }} />
          {!user ? (
            <FaRegUser sx={{ color: variables.darkgrey }} />
          ) : (
            <>
              {" "}
              <img
                src={
                  user.profileImagePath
                    ? `http://localhost:3001/${user.profileImagePath.replace(
                        "public",
                        ""
                      )}`
                    : "/assets/default-profile.png"
                }
                alt="profile photo"
                style={{ objectFit: "cover", borderRadius: "50%" }}
              />
              <p className="fw-bold">{user.firstName}</p>
            </>
            // <p>{user.firstname}</p>
          )}
        </button>

        {dropdownMenu && !user && (
          <div className="navbar_right_accountmenu">
            <Link to="/login">Đăng nhập</Link>
            <Link to="/register">Đăng ký</Link>
          </div>
        )}

        {dropdownMenu && user && (
          <div className="navbar_right_accountmenu">
            <Link to={`/${user._id}/trips`}>Trip List</Link>
            <Link to={`/${user._id}/wishList`}>Bộ sưu tập</Link>
            <Link to={`/${user._id}/properties`}>Property List</Link>
            <Link to={`/${user._id}/reservations`}>Đặt chỗ</Link>
            <Link to="/create-listing">Tạo mới</Link>

            <Link
              to="/login"
              onClick={() => {
                dispatch(setLogout());
              }}
            >
              Đăng xuất
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
