import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ReactImage = ({ src, alt }) => (
  <>
    <LazyLoadImage alt={alt} src={src} />
  </>
);

export default ReactImage;
