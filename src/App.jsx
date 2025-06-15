

import './App.css'
import BlogSection from './components/blogSection'
import GalleryGrid from './components/galleryDisplay'
import BasicInfo from './components/infoSection'
import Navbar from './components/navbar'
import PortfolioDisplay from './components/portfolioDisplay'
import ProjectSection from './components/projectSection'
import ShareButton from './components/shareButton'

function App() {
  return (
    <>
      <div className='max-w-xl mx-auto text-white m-8 rounded-2xl p-2 '>
        <PortfolioDisplay />
        {/* <BasicInfo /> */}
        <div className='p-4 flex gap-2'>
          <ShareButton iconName="twitter" />
          <ShareButton iconName="github" />
          <ShareButton iconName="youtube" />
        </div>
        <div className='p-4'>
          <ProjectSection />
          <BlogSection />
          <GalleryGrid />
        </div>

      </div>
    </>
  )
}

export default App
