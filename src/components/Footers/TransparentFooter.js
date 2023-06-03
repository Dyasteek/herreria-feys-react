/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="/"
                target="_blank"
              >
                mianDEV
              </a>
            </li>
            <li>
              <a
                href="/"
                target="_blank"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=59894535117"
                target="_blank"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="/"
            target="_blank"
          >
            mianDev
          </a>
          . Coded by{" "}
          <a
            href="https://github.com/Dyasteek"
            target="_blank"
          >
            Dyasteek
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
