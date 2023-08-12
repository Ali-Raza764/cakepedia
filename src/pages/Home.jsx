import { useEffect, useState } from "react";
import RecipeeCard from "../components/RecipeeCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Fetch from "../api/Fetch";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  
  const fetchdata = async () => {
    
    setLoading(true);
    try {
      const response = await Fetch(""); // Assuming Fetch is an async function
      setData(response.data); // Directly set the array of objects to the data state
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
 
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      {loading === false && data !== null ? (
        <>
          <div className="flex items-center justify-center flex-col text-center w-full mt-3">
            <h1 className="text-gray-900 font-semibold text-4xl">
              Welcome to CakePedia
            </h1>
            <p className="mb-5 font-medium">
              We are providing delicious cake recipees
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center content-center">
            {data.map((item, i) => (
              <RecipeeCard key={i} data={item} />
              // console.log(item)
            ))}
          </div>
        </>
      ) : (
        <div className="w-full flex flex-wrap justify-center items-center">
          {new Array(8).fill().map((d, i) => {
            {
              console.log(i);
            }
            return (
              <div className="flex flex-col m-5" key={i}>
                <Skeleton count={1} height={190} className="w-44" />
                <Skeleton count={1} height={20} className="w-44 mt-5" />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
  ``;
};

export default Home;
