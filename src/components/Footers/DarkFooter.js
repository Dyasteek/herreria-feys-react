/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
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
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("download-section")
                    .scrollIntoView();
                }}
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
            mianDEV
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

export default DarkFooter;
