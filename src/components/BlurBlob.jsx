import React from "react";

const colorMap = {
  cyan: "bg-cyan-500",
  violet: "bg-violet-600",
  emerald: "bg-emerald-500",
  purple: "bg-purple-500",
};

const BlurBlob = ({ position, size, color = "cyan" }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top,
        left,
        width,
        height,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className={`w-full h-full ${colorMap[color] || colorMap.cyan} rounded-full opacity-[0.12] blur-3xl animate-blob`}
      />
    </div>
  );
};

export default BlurBlob;
