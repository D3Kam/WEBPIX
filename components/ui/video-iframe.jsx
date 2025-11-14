import * as React from "react";

export const VideoIframe = ({ video, className, ...props }) => {
  return (
    <div className={`aspect-video w-full ${className || ""}`} {...props}>
      <iframe
        src={video}
        className="w-full h-full rounded-lg"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
