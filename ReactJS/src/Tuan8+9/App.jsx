import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import DiscoverChefify from "./components/DiscoverChefify";
import LoginModal from "./components/LoginModal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import RecipeBox from "./components/RecipeBox";
import CatalogPage from "./components/CatalogPage";
import SubscriptionPage from "./components/SubcriptionPage";
import DashboardPage from "./components/DashboardPage";
import RecipeHomePage from "./components/RecipeHomePage";
import CookingGuidePage from "./components/CookingGuidePage";

DiscoverChefify;
LoginModal;
Header;
Footer;
Filter;
RecipeBox;
CatalogPage;
DashboardPage;
RecipeHomePage;
CookingGuidePage;
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <DiscoverChefify></DiscoverChefify>
      <LoginModal></LoginModal>
      <Filter></Filter>
      <RecipeBox></RecipeBox>
      <CatalogPage></CatalogPage>
      <SubscriptionPage></SubscriptionPage>
      <DashboardPage></DashboardPage>
      <RecipeHomePage> </RecipeHomePage>
      <CookingGuidePage></CookingGuidePage>
      <Footer></Footer>
    </>
  );
}

export default App;
