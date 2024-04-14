import Navbar from "./navbar/Navbar";
import Banner from "./section/banner/Banner";
import Category from "./section/category";
import About from "./section/about/About";
import WhyShop from "./section/why_shop/WhyShop";
import Best_sell from "./section/best_sell/Best_sell";
import Today_deal from "./section/today_deal/Today_deal";
import Recipes from "./section/recipes/Recipes";
import Footer from "./section/footer/Footer";
import Review from "./section/review/Review";

function Home() {
  const heading = "Your Heading Here";
  const bg = "";
  return (
    <>
      <Navbar />
      <Banner />
      <Category heading={heading} bg={bg} />
      <About />
      <WhyShop />
      <Best_sell />
      <Today_deal />
      <Recipes />
      <Review />
      <Footer />
    </>
  );
}

export default Home;
