import PropTypes from "prop-types";
import "../App.css";

export default function Tags({ children, bgColor }) {
  return (
    <li className={`tag ${bgColor === "primary" ? "bg-primary" : ""}`}>
      {children}
    </li>
  );
}

Tags.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
};
