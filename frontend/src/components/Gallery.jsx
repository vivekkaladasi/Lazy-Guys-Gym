import React from "react";

export const Gallery = () => {
  const gallery = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
  ];
  return (
    <section className="gallery">
      <h1>Discipline greater than motivation</h1>
      <div>
        {gallery.slice(0, 3).map((element, index) => (
          <img key={index} src={element} alt="galleryImage" />
        ))}
      </div>
      <div>
        {gallery.slice(3, 6).map((element, index) => (
          <img key={index} src={element} alt="galleryImage" />
        ))}
      </div>
      <div>
        {gallery.slice(5, 7).map((element, index) => (
          <img key={index} src={element} alt="galleryImage" />
        ))}
      </div>
    </section>
  );
};
