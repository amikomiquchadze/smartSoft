import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { logout, selectUsername, selectToken } from "../../store/authSlice";
import * as S from "./Navbar.Styled";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useAppSelector(selectToken);
  const username = useAppSelector(selectUsername);
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    setOpen(false);
  };

  return (
    <S.Nav>
      <S.Left>
        <S.Logo to="/">SmartSoft</S.Logo>

        <S.Hamburger onClick={() => setOpen((o) => !o)}>
          {open ? <FiX /> : <FiMenu />}
        </S.Hamburger>

        <S.Menu className={open ? "open" : ""}>
          {!token ? (
            <>
              <S.NavLink to="/register" onClick={() => setOpen(false)}>
                Register
              </S.NavLink>
              <S.NavLink to="/login" onClick={() => setOpen(false)}>
                Login
              </S.NavLink>
            </>
          ) : (
            <>
              <S.NavLink to="/words" onClick={() => setOpen(false)}>
                Words
              </S.NavLink>
              <S.NavLink to="/countries" onClick={() => setOpen(false)}>
                Countries
              </S.NavLink>
              <S.LogoutMenuItem onClick={handleLogout}>Logout</S.LogoutMenuItem>
            </>
          )}
        </S.Menu>
      </S.Left>

      <S.UserSection>
        {token && <S.Username>{username}</S.Username>}
        {token && (
          <S.LogoutButton onClick={handleLogout}>Logout</S.LogoutButton>
        )}
      </S.UserSection>
    </S.Nav>
  );
}
