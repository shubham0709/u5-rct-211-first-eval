import React from "react";
import { updateCount } from "../../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import style from "../Shoes.module.css";

const ShoeCard = (props) => {
  let { id, image, name, cart_quantity } = props.elem;
  const dispatch = useDispatch();
  const handleUpdate = (elem, value) => {
    updateCount(elem, dispatch, value);
  };

  return (
    <div className={style.maincard} data-cy={`shoe-card-wrapper-${id}`}>
      <img
        data-cy="shoe-card-image"
        alt="shoe"
        src={image}
        className={style.pimage}
      />
      <div>
        <div data-cy="shoe-name">{name}</div>
        <div className={style.base}>
          In Cart:
          <div data-cy="shoe-count">{cart_quantity}</div>
          <button
            className={style.buttons}
            data-cy="increment-shoe-count-button"
            onClick={() => handleUpdate(props.elem, 1)}
          >
            +
          </button>
          <button
            className={style.buttons}
            data-cy="decrement-shoe-count-button"
            onClick={() => handleUpdate(props.elem, -1)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
