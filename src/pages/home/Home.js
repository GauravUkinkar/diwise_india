import React from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import Herosection from '../../components/herosection/Herosection';
import AboutC from '../../components/about/AboutC';
import Hook from '../../components/hook/Hook';
import Whychoose from '../../components/whychoose/Whychoose';
import Hservice from '../../components/hservice/Hservice';
import Hcounter from '../../components/counter/Hcounter';
import LogoMarque from '../../components/logoMarque/LogoMarque';

function Home() {
  return (
    <>
      <Helmet>
        <title>DIwise is a cutting-edge Digital Media Marketing Firm</title>
        <meta name="description" content="DIwise is a PR Marketing Firm with expertise in research & technology that will understand your needs and surpass your expectations." />
        <meta name="keywords" content="technology, www di, technology solutions, technical team, integrity, honesty, fairness, continuous improvement, power of internet, 
                                 journey towards success, pr and brand building" />
      </Helmet>

      {/* Page Components */}
      <Herosection />
      <AboutC />
      <Hcounter />
      <Hservice />
      <Hook />
    </>
  );
}

export default Home;
