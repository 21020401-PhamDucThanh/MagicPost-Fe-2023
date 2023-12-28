import React, { useRef } from "react";
import ReactToPrint from 'react-to-print';
import "./Print.css"; // Import stylesheet for printing styles

const Print = () => {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => {
          return <button>In Ảnh</button>;
        }}
        content={() => componentRef.current}
        documentTitle="new document"
        pageStyle="print"
      />
      <div ref={componentRef}>
        {/* Remove the image tag if you don't want to display the image */}
        <img src="/images/post3.png" alt="" className="hiddenOnScreen" />
      </div>
    </div>
  );
};

export default Print;
