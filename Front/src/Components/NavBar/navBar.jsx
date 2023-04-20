import React from "react";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUserRole } from "../../Redux/actions";

function Navbar() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Eliminar la informacion del usuario del localStorage
    localStorage.removeItem("userData");
    dispatch(clearUserRole());
  };

  // Obtener el valor del rol del usuario desde localStorage
  const userRole = localStorage.getItem("userRole");

  return (
    <nav className={style.navbar}>
      <div className={style.navbarContainer}>
        <ul className={style.navList}>
          <li className={style.navItem}>
            <Link to="/Home" className={style.navLink}>
              Area Personal
            </Link>
          </li>
          <li className={`${style.navItem} ${style.dropdown}`}>
            <span className={style.miaula}>Aula</span>
            <ul className={style.dropdownContent}>
              <li>
                <Link to="/alumnos" className={style.navLink}>
                  Alumnos
                </Link>
              </li>
              <li>
                <Link to="/materias" className={style.navLink}>
                  Materias
                </Link>
              </li>
              <li>
                <Link to="/calificaciones" className={style.navLink}>
                  Calificaciones
                </Link>
              </li>
            </ul>
          </li>
          {userRole === "profesor" && (
            <li className={style.navItem}>
              <Link to="/Cursos" className={style.navLink}>
                Mis Cursos
              </Link>
            </li>
          )}
          <li className={style.navItem}>
            <Link to="/form" className={style.navLink}>
              Formulario
            </Link>
          </li>
          <li className={style.navItem}>
            <Link to="/carrito" className={style.navLink}>
              Cuotas
            </Link>
          </li>
          <li className={style.navItem}>
            <Link to="/" onClick={handleLogout} className={style.navLink}>
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
