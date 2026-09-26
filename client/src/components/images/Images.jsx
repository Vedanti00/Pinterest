import { Image, ImageKitProvider } from "@imagekit/react";
import React from "react";

const Images = ({ src, alt, className, w, h }) => {
  return (
    // different than tutorial that used path={item.media} instead src
    <ImageKitProvider urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}>
      <Image
        src={src}
        transformation={[{ height: h, width: w }]}
        loading="lazy"
        alt={alt}
        className={className}
        lqip={{ active: true, quality: 20 }}
      />
    </ImageKitProvider>
  );
};

export default Images;
