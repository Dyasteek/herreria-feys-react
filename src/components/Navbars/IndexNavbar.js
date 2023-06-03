import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="/"
              target="_blank"
              id="navbar-brand"
            >
              FEYS
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              ¡Bienvenidos a la fundición!
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >
                  <p>Nosotros</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <p>Trabajos</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="mr-1"></i>
                    Escaleras
                  </DropdownItem>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="mr-1"></i>
                    Mensulas
                  </DropdownItem>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="mr-1"></i>
                    Parrillas
                  </DropdownItem>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="mr-1"></i>
                    Parrilleros
                  </DropdownItem>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="mr-1"></i>
                    Pergolas
                  </DropdownItem>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="mr-1"></i>
                    Portones
                  </DropdownItem>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="mr-1"></i>
                    Protecciones
                  </DropdownItem>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="mr-1"></i>
                    Puertas
                  </DropdownItem>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="mr-1"></i>
                    Rejas
                  </DropdownItem>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="mr-1"></i>
                    Techos
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href="https://api.whatsapp.com/send/?phone=59894535117"
                  id="upgrade-to-pro"
                  target="_blank"
                >
                  <p>¡Contactanos!</p>
                </Button>
                <UncontrolledTooltip target="#upgrade-to-pro">
                  Horario de atención de 08 a 20 hs.
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/profile.php?id=100011575505193"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Danos un like en Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/herreriafeys/"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Seguinos en Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
