import { useEffect, useState } from "react";
import Fetch from "../api/Fetch";
import { useParams } from "react-router-dom";
import LoadingIcon from "../assets/loading.gif";

const RecipeeDetails = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const fetchdata = async () => {
    setLoading(true);
    const response = await Fetch(`${id}`);
    setData(response.data);
    setLoading(false);
  };

  const scrollToTop = () => {
    window.scroll(0, 0);
  };

  useEffect(() => {
    fetchdata();
    if (data) {
      document.title = `${data.title}`;
    } else {
      document.title = "Details";
    }
    scrollToTop()
  }, []);

  if (loading == false) {
    return (
      <div className="flex flex-col px-5 py-4">
        {/* <button className="inline-block m-left my-3 border-2 border-[#c93a59fe] hover:bg-[#c93a59fe]  rounded-md w-24 p-2">
          Go back
        </button> */}
        <div></div>
        {data != null ? (
          <>
            <div className="flex flex-col justify-center items-center w-full">
              <img
                src={data.image}
                alt="Recipee Image"
                className="w-[25rem] h-auto rounded-md"
              />
              <h1 className="text-2xl font-semibold my-5 text-center text-gray-800">
                {data.title}
              </h1>
            </div>
            <div>
              <details>
                <summary>Click for Description</summary>
                <p>{data.description}</p>
              </details>
            </div>
            <div className="my-3">
              <h1 className="block text-2xl font-semibold text-black">Time:</h1>
              <p className="text-md font-cursive">{data.time}</p>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl my-3 font-semibold text-black">
                Ingredients:
              </h2>
              <ol type="" className="text-gray-800">
                {data.ingredients.map((item, i) => (
                  <li key={i}>
                    <h1 className="font-bold inline-block mr-2">{i + 1}.</h1>{" "}
                    {item}.
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Method:</h2>
              <ol>
                {data.method.map((stepObj, index) => {
                  // Extract the step number and description from the object
                  const stepNumber = Object.keys(stepObj)[0];
                  const stepDescription = stepObj[stepNumber];

                  return (
                    <li key={index} className="my-2 mx-1">
                      <h3 className="font-bold inline-block mr-2">
                        {stepNumber}:
                      </h3>
                      {stepDescription}
                    </li>
                  );
                })}
              </ol>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    );
  } else {
    return (
      <div className="w-full  h-screen flex items-cetner justify-center">
        <img
          src={LoadingIcon}
          alt="Loading"
          className="block m-auto w-32 h-auto"
        />
      </div>
    );
  }
};

export default RecipeeDetails;
