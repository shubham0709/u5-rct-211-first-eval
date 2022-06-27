import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getShoesFailure,
  getShoesRequest,
  getShoesSuccess,
} from "../../Redux/action";
import ShoeCard from "./ShoeCard/ShoeCard";
import { fetchshoes } from "../../Redux/action";
import style from "./Shoes.module.css";

const Shoes = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    fetchshoes(dispatch);
  }, []);

  return (
    <div className={style.grid}>
      {state.shoes ? (
        state.shoes.map((elem) => <ShoeCard elem={elem} key={elem.id} />)
      ) : (
        <></>
      )}
    </div>
  );
};

export default Shoes;
