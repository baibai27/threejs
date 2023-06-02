import React from "react";
import { Environment as OriginalEnvironment } from "@react-three/drei";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

const CustomEnvironment = (props) => {
  const { background = false, ...rest } = props;

  const hdrUrl = "../public/potsdamer_platz_4k.exr"; // Update this with the path to your HDR file

  return (
    <OriginalEnvironment
      {...rest}
      background={background}
      files={hdrUrl}
      path=""
      format=".hdr"
      loader={new RGBELoader()}
    />
  );
};

export default CustomEnvironment;
