import React from "react";

function Carousel() {
  const [shownImage, setShownImage] = useState(0);
  const data = [{}, {}, {}];

  return (
    <div className="flex items-center overflow-x-scroll no-wrap">
      <span>Back</span>
      {data.map((data) => (
        <img
          className="inset-0 w-full h-full"
          src={data.imgUrl}
          key={data.id}
          alt="Image"
        />
      ))}
      <span>Next</span>
    </div>
  );
}

export default Carousel;
