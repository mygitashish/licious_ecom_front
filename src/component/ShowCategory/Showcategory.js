
import Navbar from "../navbar/Navbar";
import Card from "../section/best_sell/Card";
import Category from "../section/category";
import Footer from "../section/footer/Footer";
import Recipes from "../section/recipes/Recipes";
import { cat_recipes_array } from "./cat_recipes_array";
import Review from "../section/review/Review";


function ShowCategory() {
  return (
    <>
        <>
        <Navbar/>
        <Category/>
        <Card array={cat_recipes_array} filter={true}/>                       
        <Recipes/>
        <Review />
        <Footer/>
        </>
    </>
  );
}

export default ShowCategory;
