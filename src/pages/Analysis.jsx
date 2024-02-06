import React, { useEffect, useRef, useState } from "react";
import FilterMenu from "../components/FilterMenu";

const Analysis = () => {
  const divRef = useRef(null);
  const [isClickedOutside, setIsClickedOutside] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      // Check if the click is outside the div

      if (divRef.current && !divRef.current.contains(e.target)) {
        setIsClickedOutside(true);
      } else {
        setIsClickedOutside(false);
      }
    };

    // Attach the click event listener to the document
    document.addEventListener("click", handleOutsideClick);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <div>
        <div
          ref={divRef}
          style={{
            width: "200px",
            height: "100px",
            backgroundColor: isClickedOutside ? "red" : "lightblue",
            padding: "10px",
            textAlign: "center",
            margin: "50px auto",
            cursor: "pointer",
          }}
        >
          Click inside or outside this div
        </div>
        <p>
          {isClickedOutside
            ? "Clicked outside the div"
            : "Clicked inside the div"}
        </p>
      </div>
      <FilterMenu
        title={"المكان هنا"}
        data={["الكل", "الإسكندرية", "القاهرة"]}
        selected={"الكل"}
      />
    </div>
  );
};

export default Analysis;
