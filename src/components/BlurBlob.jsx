import React from "react";

const colorMap = {
  light: "bg-neutral-400",
  mid: "bg-neutral-600",
  dark: "bg-neutral-800",
};

const BlurBlob = ({ position, size, color = "mid" }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute pointer-events-none"
      style={{ top, left, width, height, transform: "translate(-50%, -50%)" }}
    >
      <div
        className={`w-full h-full ${colorMap[color] || colorMap.mid} rounded-full opacity-[0.06] blur-3xl animate-blob`}
      />
    </div>
  );
};

export default BlurBlob;
