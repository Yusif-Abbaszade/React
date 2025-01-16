import "../assets/css/header.css";
import LangUtil from "../utils/LangUtil";

const Header = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-between headersec text-light py-2"
      style={{ background: "#634c9f" }}
    >
      <div className="left-side" style={{ fontSize: "14px" }}>
        <b>
          <LangUtil
            AZ={
              "Çatdırılma PULSUZ və növbəti 3 sifarişə 40% Endirim! 1-ci sifarişinizi verin."
            }
            EN={
              "FREE delivery & 40% Discount for next 3 orders! Place your 1st order in."
            }
          />
        </b>
      </div>
      <div className="right-side" style={{ fontSize: "14px" }}>
        <LangUtil
          AZ={"Satışın bitməyinə:"}
          EN={"Until the end of sale:"}
        />{" "}
        <span className="fs-5">47</span>{" "}
        <LangUtil AZ={"gün"} EN={"days"} />{" "}
        <span className="fs-5">08</span>{" "}
        <LangUtil AZ={"saat"} EN={"hours"} />{" "}
        <span className="fs-5">13</span>{" "}
        <LangUtil AZ={"dəqiqə"} EN={"minutes"} />{" "}
        <span className="fs-5">20</span>{" "}
        <LangUtil AZ={"saniyə"} EN={"sec"} /> .
      </div>
    </div>
  );
};

export default Header;
