import React, { useRef, useState } from "react";
import { statusCode } from "../../util/statusCodeList";
import { CatContainer } from "./cat.styles";
import catAnimation from "../../assets/cats.json";
import Lottie from "lottie-react";
import { FaAngleDown } from "react-icons/fa";

const Cat = () => {
  const [status, setStatus] = useState<number | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  function handleVisible() {
    visible ? setVisible(false) : setVisible(true);
  }

  function handleStatus(status: number) {
    setStatus(status);
    handleVisible();
  }

  const defaultConfig = {
    loop: true,
    autoplay: true,
    animationData: catAnimation,
  };

  return (
    <CatContainer>
      <div className="content">
      <div className="status">
        <span onClick={handleVisible}>
        <p>  {status ? `Status atual: ${status}` : "Selecionar status code"}</p>
        <FaAngleDown />
        </span>
        {visible && (
          <ul className="list">
            {statusCode.map((statusCode) => (
              <li onClick={() => handleStatus(statusCode)}>status: {statusCode}</li>
            ))}
          </ul>
        )}
      </div>
      {status ? (
        <img loading="lazy" src={`https://http.cat/${status}`} />
      ) : (
        <Lottie id="cat" {...defaultConfig} style={{ width: "27em" }} />
      )}
      </div>
    </CatContainer>
  );
};

export default Cat;
