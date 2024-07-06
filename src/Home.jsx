import React from "react";
import Hero from "./components/Hero/Hero";
import BrandsLogo from "./components/BrandsLogo/BrandsLogo";
import Services from "./components/Services/Services";
import BlogsComp from "./components/Blogs/BlogsComp";
import Footer from "./components/Footer/Footer";
import Pricing from "./components/Testimonial/Pricing";
import ContactForm from "./components/ContactUs/ContactUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <BrandsLogo />
      <Services />
      <Pricing />
      <BlogsComp />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
