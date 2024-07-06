import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/website/rs.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Registrations Started",
    description:
      "Register Now to get the best discounts and give yourself a headstart.",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div
        className="bg-gray-100 dark:bg-black dark:text-white py-10 pb-14"
        id="Announcements"
      >
        <section data-aos="fade-up" className="container text-center">
          <h2
            className="md:text-5xl text-2xl font-extrabold text-primary mb-8"
            data-aos="fade-up"
          >
            Announcements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center">
            <button className="primary-btn">View All Announcements</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
