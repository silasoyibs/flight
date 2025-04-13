import React from "react";

function HeadingTag({ children }) {
  return (
    <span className="px-3 py-1 rounded-md font-secondary font-[600] text-[16px] text-primary bg-primary-light">
      {children}
    </span>
  );
}
export default HeadingTag;
