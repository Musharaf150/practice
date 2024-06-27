import React from "react";
import { Button } from "./ui/button";

const Card = (props) => {
  return (
    <div className="rounded-md w-2/4 md:w-96 h-auto bg-slate-200 border-b-2 border-b-black pb-6">
      <div>
        <img src={props.img} alt="img" className="w-96 h-44 rounded-t-md" />
      </div>
      <div className="px-4 ">
        <h1 className="font-bold text-2xl">
            {props.title}
        </h1>
        <p className="py-3">{props.des}</p>
        <Button >Read More</Button>
      </div>
      
    </div>
  );
};

export default Card;
