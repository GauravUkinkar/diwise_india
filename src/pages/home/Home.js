import React from 'react'
import Herosection from '../../components/herosection/Herosection'
import About from '../../components/about/AboutC'
import Hook from '../../components/hook/Hook'
import Whychoose from '../../components/whychoose/Whychoose'
import Hservice from '../../components/hservice/Hservice';
import AboutC from '../../components/about/AboutC';
import Hcounter from '../../components/counter/Hcounter'
import LogoMarque from '../../components/logoMarque/LogoMarque'

function Home() {
  return (
   <>
<Herosection/>
{/* <Abou


*/}
<AboutC />
<Hcounter/>
<Hservice/>
<Hook/>


   </>
  )
}

export default Home