import Header from "../layout/Header";
import Navbar from "../layout/Navbar";
import TranslationIntro from "../components/Translationpagecomponents/TranslationIntro";
import TranslationCards from "../components/Translationpagecomponents/TranslationCards";
import LegalTranslation from "../components/Translationpagecomponents/LegalTranslation";
import Footer from "../layout/Footer";


const TranslationPage = () => {
    return (
        <>
            <Header />
            <Navbar />
            <TranslationIntro />
            <TranslationCards />
            <LegalTranslation />
            <Footer />
        </>
    );
};

export default TranslationPage;