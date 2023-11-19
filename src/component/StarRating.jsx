/* eslint-disable react/prop-types */
import { useState } from "react";
import Star from "./Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};
const starContainerStyle = {
  display: "flex",
};
// const textStyle = {
//   lineHeight: "0",
//   margin: "0",
// };
export default function StarRating({
  maxrating = 5,
  color = "#fcc419",
  size = "48",
  className = "",
  message = [],
}) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  const textStyle = {
    lineHeight: "0",
    margin: "0",
    color,
    fontSize: `${size}px`,
  };
  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxrating }, (_, i) => (
          <Star
            key={i}
            onClick={() => setRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>{message.length===maxrating? message[tempRating?tempRating-1:rating-1]: tempRating || rating || ""}</p>
    </div>
  );
}
