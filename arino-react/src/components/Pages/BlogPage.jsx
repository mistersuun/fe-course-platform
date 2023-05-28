import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import PageHeading from '../PageHeading'
import PostStyle2 from '../Post/PostStyle2'
import Div from '../Div'
import Sidebar from '../Sidebar.jsx'
import Spacing from '../Spacing'
import VideoModal from '../VideoModal'
import AccountOverview from '../Account/AccountOverview'


export default function BlogPage() {
  pageTitle('Account');
  const postData = [
    {
      thumb:'/images/post_4.jpeg',
      title:'A.I will take all human job within next year',
      subtitle:'Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor posuere ac ut consequat semper viverra nam libero justo. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Purus sit amet luctus venenatis lectus. Nunc aliquet bibendum enim facilisis. Pretium viverra suspendisse potenti nullam ac tortor vitae.',
      date:'07 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'/blog/blog-details'
    },
    {
      thumb:'/images/post_5.jpeg',
      title:'Creative studio programm coming soon',
      subtitle:'Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor posuere ac ut consequat semper viverra nam libero justo. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Purus sit amet luctus venenatis lectus. Nunc aliquet bibendum enim facilisis. Pretium viverra suspendisse potenti nullam ac tortor vitae.',
      date:'05 Mar 2022',
      category:'Photography',
      categoryHref:'/blog',
      href:'/blog/blog-details'
    },
  ]

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
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">
            <AccountOverview /> {/* Assuming you have a 'user' state */}
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            <Spacing lg='0' md='80'/>
            <Sidebar/>
          </Div>
        </Div>
      </Div>
      {/* Start Video Block Section */}
      <Spacing lg="70" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
          Our agile process is ability to adapt and respond to change. Agile
          organizations view change as an opportunity, not a threat.
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal style={{display: 'flex'}}
          videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
          bgUrl="/images/video_bg.jpeg"
        />
      </Div>
      {/* End Video Block Section */}
    </>
  )
}
