import { useState } from "react";
export default function Box() {
  const [isOpen2, setIsOpen2] = useState(true);
  <button
            className="btn-toggle"
            onClick={() => setIsOpen2((open) => !open)}
          >
            {isOpen2 ? "–" : "+"}
          </button>
}
