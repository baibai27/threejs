import React from "react";
import { useSnapshot } from "valtio";

import state from "../store";
import { getContrastingColor } from "../config/helpers";

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: snap.color,
        color: snap.color,
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

// To valid the prop types
function validateProp(props, propName, componentName, expectedType) {
  if (!props[propName]) {
    return new Error(
      `Missing prop '${propName}' in '${componentName}' component.`
    );
  }
  if (typeof props[propName] !== expectedType) {
    return new Error(
      `Invalid prop '${propName}' type in '${componentName}' component. Expected ${expectedType}, but received ${typeof props[
        propName
      ]}.`
    );
  }
}

CustomButton.propTypes = {
  title: (props, propName, componentName) =>
    validateProp(props, propName, componentName, "string"),
  type: (props, propName, componentName) =>
    validateProp(props, propName, componentName, "string"),
  customStyles: (props, propName, componentName) =>
    validateProp(props, propName, componentName, "string"),
  handleClick: (props, propName, componentName) =>
    validateProp(props, propName, componentName, "function"),
};
export default CustomButton;
