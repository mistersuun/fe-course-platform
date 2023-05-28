import React from 'react'
import Portfolio from '../Portfolio'
import Div from '../Div'
import Slider from 'react-slick';
import VideoModal from '../VideoModal';

export default function PortfolioSlider() {
  const portfolioData = [
    {
      title:'Colorful Art Work',
      subtitle:'See Details',
      href:'/portfolio/portfolio-details',
      src:'/images/portfolio_1.jpeg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      title:'Colorful Art Work',
      subtitle:'See Details',
      href:'/portfolio/portfolio-details',
      src:'/images/portfolio_2.jpeg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      title:'Colorful Art Work',
      subtitle:'See Details',
      href:'/portfolio/portfolio-details',
      src:'/images/portfolio_0.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      title:'Colorful Art Work',
      subtitle:'See Details',
      href:'/portfolio/portfolio-details',
      src:'/images/portfolio_3.jpeg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }
  ]
  
  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  
  return (
    <Slider {...settings} className='cs-slider cs-style3 cs-gap-24'>
      {portfolioData.map((item, index)=> (
        <Div key={index}>
          <VideoModal
          videoSrc={item.videoUrl}
          bgUrl={item.src}
        />
        </Div>
      ))}
    </Slider>
  )
}
