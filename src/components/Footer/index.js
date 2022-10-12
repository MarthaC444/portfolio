import Image from "react-bootstrap/Image";
import Logo from "../../assets/monogram-blk-30.png";
import "./styles.css";

function Footer(props) {
  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Image className="m-2" alt="" src={Logo}></Image>
          <span className="text-muted">&copy; 2022 Martha Chamberlain</span>
        </div>

        <ul className="nav col justify-content-end d-flex">
          <li className="m-1 social-space">
            <a href="https://github.com/MarthaC444">
              <i
                className="bi bi-github text-muted"
                style={{ fontSize: 30 }}
              ></i>
            </a>
          </li>
          <li className="m-1 social-space">
            <a href="https://linkedin.com/in/mchamberlain444">
              <i
                className="bi bi-linkedin text-muted"
                style={{ fontSize: 30 }}
              ></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
