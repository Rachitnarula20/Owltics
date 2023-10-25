import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import stars from '../assets/stars.png'
import photo from '../assets/photo.png'

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  {
    desc: ' "loret amet consectetur adipisicing elit. Lorem  consectetur adipisicing elit. Lorem  consectetur adipisicing elit. Lorem  consectetur adipisicing elit. Lorem  consectetur adipisicing elit. Lorem  " ',
    name: "name",
    surname: "surname",
    position: "position",
    comp_name: "company name",
  },
  {
    desc: ' "lorit amet consectetur adipisicing elit. Lorem  consectetur adipisicing elit. Lorem  consectetur adipisicing elit. Lorem  consectetur adipisicing elit. Lorem  consectetur adipisicing elit. Lorem  " ',
    name: "name",
    surname: "surname",
    position: "position",
    comp_name: "company name",
  },
  {
    desc: ' "lorem amet consectetur adipisicing elit. Lorem  consectetur adipisicing elit. Lorem  consectetur adipisicing elit. Lorem  consectetur adipisicing elit. Lorem  " ',
    name: "name",
    surname: "surname",
    position: "position",
    comp_name: "company name",
  },
  {
    desc: ' "loret amet consectetur adipisicing elit. Lorem  consectetur adipisicing elit. Lorem   consectetur adipisicing elit. Lorem  consectetur adipisicing elit. Lorem  " ',
    name: "name",
    surname: "surname",
    position: "position",
    comp_name: "company name",
  },
  {
    desc: ' "loret amet consectetur adipisicing elit. Lorem  consectetur adipisicing elit. Lorem  consectetur adipisicing elit. Lorem  consectetur adipisicing elit. Lorem  " ',
    name: "name",
    surname: "surname",
    position: "position",
    comp_name: "company name",
  },
  {
    desc: ' "loret amet consectetur adipisicing elit. Lorem  consectetur adipisicing elit. Lorem  consectetur adipisicing elit. Lorem  consectetur adipisicing elit. Lorem  " ',
    name: "name",
    surname: "surname",
    position: "position",
    comp_name: "company name",
  },
  {
    desc: ' "lorem amet consectetur adipisicing elit. Lorem  consectetur adipisicing elit. Lorem  consectetur adipisicing elit. Lorem  consectetur adipisicing elit. Lorem  " ',
    name: "name",
    surname: "surname",
    position: "position",
    comp_name: "company name",
  },
  { 
    desc: ' "lorem amet consectetur adipisicing elit. Lorem  consectetur adipisicing elit. Lorem  consectetur adipisicing elit. Lorem  consectetur adipisicing elit. Lorem  " ',
    name: "name",
    surname: "surname",
    position: "position",
    comp_name: "company name",
  },
  {
    desc: ' "lorem amet consectetur adipisicing elit. Lorem   consectetur adipisicing elit. Lorem  consectetur adipisicing elit. Lorem  " ',
    name: "name",
    surname: "surname",
    position: "position",
    comp_name: "company name",
  },
];

const Blog = () => {
  return (
    <div className="m-6 mb-28 sml:m-2">
      <div className="items-center" id="blog">
        <h1 className="font-bold text-4xl text-center pt-20">
          Customer Testimonials
        </h1>
        <p className="text-center mt-4 mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="mx-48 sml:mx-0">
      <Swiper
          spaceBetween={0}
          slidesPerView={3}
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop
          breakpoints= {{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              // spaceBetween: 20
            },
            // when window width is >= 480px
            540: {
              slidesPerView: 2,
              // spaceBetween: 30
            },
            // when window width is >= 640px
            1200: {
              slidesPerView: 3,
              // spaceBetween: 40
            }}
          }
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
        {data.map((item, index) => (
          <SwiperSlide  key={index} >
            <div className="border bg border-gray-300 bg-white w-[95%] rounded-2xl p-3 h-96 sml:w-[80%]" 
             
            > <img src={stars} alt="stars" className="my-8 sml:my-4"/>
              <p className="h-1/2 font-semibold pr-20 sml:text-xs sml:pr-0">{item.desc}</p>
              <div className="flex pt-8">
              <img src={photo} alt="" className="flex mr-4"/>
              <div className="font-bold capitalize">
                {item.name} {item.surname}
                <p className="font-normal">
                {item.position}, {item.comp_name}
                </p>
              </div>
              </div>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>  
      </div>
    </div>
  );
};

export default Blog;
