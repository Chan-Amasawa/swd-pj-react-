import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loader/Loading";
import Card from "../Card";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  const getMeals = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    // console.log(data.meals);
    setMeals(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    getMeals();
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex justify-center flex-wrap gap-5 py-10">
          {meals?.map((meal) => (
            <Card key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </>
  );
};

export default Meals;
