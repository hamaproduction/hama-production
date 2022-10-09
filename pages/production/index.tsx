import Footer from '@components/layout/Footer' 
import Meta from '@components/Meta'
import Animation from '@components/production/Animation'
import Header from '@components/production/Header' 
import OurServices from '@components/production/OurServices'
import ProductionServicing from '@components/production/ProductionServicing'
import SecondSlider from '@components/production/SecondSlider'
import SectionFour from '@components/production/SectionFour' 
import SectionOne from '@components/production/SectionOne'
import SectionThree from '@components/production/SectionThree'
import SectionTwo from '@components/production/SectionTwo'
import Slider from '@components/production/Slider'
import Sound from '@components/production/Sound'
import VFX from '@components/production/VFX'
import VideoProduction from '@components/production/VideoProduction'
import Works from '@components/Works'


const Production = () => {
  return (
    <>
      <Meta
        description="Production equipment rentals production house examples of work kurdistan and iraq, KRG and KRI, best production quality"
        pageTitle="Production"
      />
      <div >
         <Header />
        {/* <SectionOne />
        <SectionTwo />
        <Slider />
        <SectionThree />
        <Works />
        <SectionFour /> */}
        {/* <OurServices /> */}
        <VideoProduction />
        {/* <PostProduction /> */}
        <VFX />
        {/* <Coloring /> */}
        <Animation />
        {/* <ProductionServicing /> */}
        {/* <Rental /> */}
        <Sound />
        <SecondSlider />
        <Footer />
      </div>
    </>
  )
}

export default Production
