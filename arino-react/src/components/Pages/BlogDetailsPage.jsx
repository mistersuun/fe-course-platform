import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import PageHeading from '../PageHeading'
import PostStyle2 from '../Post/PostStyle2'
import Div from '../Div'
import Sidebar from '../Sidebar.jsx'
import Spacing from '../Spacing'
import VideoModal from '../VideoModal'
import SectionHeading from '../SectionHeading'
import VideoSlider from '../Slider/VideoSlider'

export default function BlogPage() {
  pageTitle('Account');

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <PageHeading 
        title='Welcome Souleymane'
        bgSrc='/images/blog_hero_bg.jpeg'
        pageLinkText='Account'
        showCircularProgress={true}
      />
      {/* Start Video Slider Section */}
      <Spacing lg="150" md="50" />
      <Div>
        <Div className="container">
          <SectionHeading
            title="Courses to explore"
            subtitle="Your Classes"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <VideoSlider />
      </Div>
      {/* End Video Slider Section */}
    </>
  )
}
