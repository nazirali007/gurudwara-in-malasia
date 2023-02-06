// ̄import "./App.css";
import Navbar from "./component/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./component/homePage/Home";
import About from "./component/aboutPage/About";
import Photograp from "./component/photographsPage/Photographs";

import ContactUs from "./component/ContactUsPage/ContactUs";
import FeedBack from "./component/feedback/Feedback";
import LiveTeleCast from "./component/telecast/LiveTeleCast";
import Maingurudwara from "./component/gurudwarsSahib/Maingurudwara";
import Colleges from "./component/gurudwarsSahib/Colleges";

import OurContributorsPage from "./component/contributorsPage/ourContributors/OurContributorsPage";
import DonationPage from "./component/contributorsPage/donation/DonationPage";
import UpcomingEvent from "./component/contributorsPage/upcomingEventes/UpcomingEvent";
import Footer from "./component/footer/Footer";
import BasicArticls from "./component/sikhism/basicArticles/BasicArticls";
import MainArticle from "./component/sikhism/basicArticles/MainArticle";
import SwordInSikhisms from "./component/sikhism/swordInSikhism/SwordInSikhisms";
import DutiesoftheKhalsa from "./component/sikhism/dutiesOfTheKhalsa/DutiesoftheKhalsa";
import Gurpurbs from "./component/sikhism/gurpurbs/Gurpurbs";
import Glossary from "./component/sikhism/glossary/Glossary";
import GuruSahib from "./component/dharmPrachar/GuruSahib";
import PanjTakht from "./component/dharmPrachar/PanjTakhts";
import PanjKakars from "./component/dharmPrachar/PanjKakars";
import Donate from "./component/donation/donate/Donate";
import AkhandPathRegistration from "./component/donation/akhand_path_registration/AkhandPathRegistration";
import GeneralInformation from "./component/donation/general_information/GeneralInformation";
// import GuruSahibSidePanel from "./component/reusableComponents/buttons/GuruSahibSidePanel";

import GuruAmarDasJi from "./component/dharmPrachar/gurusahib/GuruAmarDasJi";
import GuruNanakDevJi from "./component/dharmPrachar/gurusahib/GuruNanakDevJi";
import GuruAngadDevJi from "./component/dharmPrachar/gurusahib/GuruAngadDevJi";
import GuruRamdasJi from "./component/dharmPrachar/gurusahib/GuruRamdasJi";
import GuruArjanDevJi from "./component/dharmPrachar/gurusahib/GuruArjanDevJi";
import GuruHargobindJi from "./component/dharmPrachar/gurusahib/GuruHargobindJi";
import GuruHarRaiJi from "./component/dharmPrachar/gurusahib/GuruHarRaiJi";
import GuruKrishanJi from "./component/dharmPrachar/gurusahib/GuruKrishanJi";
import GuruTegBahadurJi from "./component/dharmPrachar/gurusahib/GuruTegBahadurJi";
import GuruGobindSinghJi from "./component/dharmPrachar/gurusahib/GuruGobindSinghJi";
import PrivacyPolicy from "./component/privacyPolicy/PrivacyPolicy";
import TermsConditions from "./component/termsConditions/TermsConditions";

import DonationPdfDownload from "./component/donation/donate/DonationPdfDownload";
import HukamnamaImg from "./component/homePage/HukamnamaImg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{}}></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hukamnama/:img" element={<HukamnamaImg />} />

        <Route path="/About" element={<About />} />
        {/* Basic Articles */}
        <Route path="/Basic_Articles" element={<BasicArticls />} />
        <Route path="/Main_Article" element={<MainArticle />} />
        <Route path="/Sword_in_Sikhism" element={<SwordInSikhisms />} />
        <Route path="/Duties_of_the_Khalsa" element={<DutiesoftheKhalsa />} />
        <Route path="/Gurpurbs" element={<Gurpurbs />} />
        <Route path="/Glossary" element={<Glossary />} />

        <Route path="/pdf-download/:id" element={<DonationPdfDownload />} />

        {/* Dharam Parchar */}

        <Route path="/Guru_Sahiban" element={<GuruSahib />} />
        <Route path="/Panj_Takht" element={<PanjTakht />} />
        <Route path="/Panj_Kakars" element={<PanjKakars />} />

        {/* Donation */}

        <Route path="/Donate" element={<Donate />} />
        <Route
          path="/Akhand_Path_Registration"
          element={<AkhandPathRegistration />}
        />
        <Route path="/General_Information" element={<GeneralInformation />} />

        <Route path="/Photographs" element={<Photograp />} />

        <Route path="/Contact_Us" element={<ContactUs />} />

        <Route path="/feedback" element={<FeedBack />} />
        <Route path="/live_telecast" element={<LiveTeleCast />} />

        <Route path="/maingurudwara" element={<Maingurudwara />} />
        <Route path="/colleges" element={<Colleges />} />

        <Route path="/OurContributors" element={<OurContributorsPage />} />
        <Route path="/Donation" element={<DonationPage />} />
        <Route path="UpcomingEvent" element={<UpcomingEvent />} />

        <Route path="/sri-guru-nanak-ji" element={<GuruNanakDevJi />} />

        <Route path="/Sri-guru-angad-ji" element={<GuruAngadDevJi />} />
        <Route path="/sri-guru-amardas-ji" element={<GuruAmarDasJi />} />

        <Route path="/sri-guru-ramdas-ji" element={<GuruRamdasJi />} />
        <Route path="/sri-guru-arjan-dev-ji" element={<GuruArjanDevJi />} />
        <Route
          path="/sri-guru-hargobind-sahib-ji"
          element={<GuruHargobindJi />}
        />
        <Route path="/sri-guru-har-rai-ji" element={<GuruHarRaiJi />} />
        <Route path="/sri-guru-har-krishna-ji" element={<GuruKrishanJi />} />
        <Route
          path="/sri-guru-tegh-bahadur-ji"
          element={<GuruTegBahadurJi />}
        />
        <Route
          path="/Sri-guru-gobind-singh-ji"
          element={<GuruGobindSinghJi />}
        />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/terms-&-conditions" element={<TermsConditions />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
