import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillYoutube } from "react-icons/ai";
import Loading from "../Loader/Loading";

const Details = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const getDetailMeal = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    setDetailMeal(data?.meals[0]);
    setIsLoading(false);
  };

  useEffect(() => {
    getDetailMeal();
  }, []);

  const [detailMeal, setDetailMeal] = useState({});

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-5">
          <img
            src={detailMeal.strMealThumb}
            width="500"
            alt=""
            className="rounded-xl shadow-xl"
          />
          <div className="text-white bg-pink-500 text-center text-sm rounded-lg w-20">
            {detailMeal.strCategory}
          </div>
          <h1 className="text-2xl">{detailMeal.strMeal}</h1>
          <div>
            <h2 className="text-2xl mb-2">Instructions</h2>
            <p className="tracking-wider leading-6 text-gray-500">
              {detailMeal.strInstructions}
            </p>
          </div>
          <div className="flex gap-5 items-center">
            <a href={detailMeal.strYoutube} target="_blank">
              <AiFillYoutube className="text-red-600 text-5xl cursor-pointer" />
            </a>
            <p className="text-gray-500">Watch on youtube</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
