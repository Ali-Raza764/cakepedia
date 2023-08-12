import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const RecipeeCard = ({ data: { difficulty, id, image, title } }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col justify-center items-center w-64 border-2 border-gray-500 shadow-xl rounded-md cursor-pointer m-8 mt-2"
      onClick={() => {
        navigate(`/recipee/${id}`);
      }}
    >
      <LazyLoadImage src={image} alt="Image" />
      <p className="w-52 text-xl font-semibold">{title}</p>
      <p className="w-52">{difficulty}</p>
      <button className="bg-[#c93a59fe] text-white rounded-md my-5 hover:bg-gray-400 hover:text-black p-3">
        Start Making
      </button>
    </div>
  );
};

export default RecipeeCard;
