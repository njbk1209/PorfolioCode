import Aboutme from "../components/Aboutme";
import Contacts from "../components/Contacts";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Layout from "../components/layout";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";


export default function Home() {
  return (
    <Layout>
      <Portfolio/>
      <Skills/>
      <Experience/>
      <Contacts/>
      <Footer/>
    </Layout>
  )
}
