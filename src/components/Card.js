import { Link } from "react-router-dom";
import Button from "./Button";
import Panel from "./Panel";

function Card({ title, text, image, buttonTxt, link }) {
  return (
    <Panel className="bg-white shadow-lg border-stone-300 flex flex-col md:max-w-xs">
      {image && (
        <div className="h-28">
          <img
            src={image}
            alt="decor of the card"
            className="w-full h-full object-cover rounded-md brightness-75"
          />
        </div>
      )}
      <div className="p-5 flex-col items-center gap-3 flex-auto">
        <h3
          className="font-semibold text-2xl overflow overflow-ellipsis whitespace-nowrap text-indigo-900 text-center"
          title={title}
        >
          {title}
        </h3>
        <p className="text-md text-center text-orange-500">{text}</p>
      </div>
      <Link to={link || `/${title.toLowerCase()}`}>
        <Button primary rounded className="w-full">
          {buttonTxt || "Check it out"}
        </Button>
      </Link>
    </Panel>
  );
}

export default Card;
