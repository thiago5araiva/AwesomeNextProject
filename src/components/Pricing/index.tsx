import React from "react";
import { IPriceType, PriceType } from "pages/api/types";
import styles from "./styles.module.scss";

export interface IPriceTableProps {
  prices: PriceType;
}

const PriceTableComponent = ({ prices }: IPriceTableProps): JSX.Element => {
  return (
    <div className="row justify-content-center">
      {prices.map((item: IPriceType, idx: number) => (
        <div
          key={idx}
          className="col-8 vcol-sm-9 col-md-7 col-lg-4 col-xl-3 col-xxl-3"
        >
          <div className={styles.item}>
            <div
              className={`${styles.item__value} d-flex flex-column align-items-center`}
            >
              <h2>{item.title}</h2>
              <div className="d-flex flex-column align-items-center">
                <span className={styles.item__currency}>R$</span>
                <h3 className={styles.item__value}>{item.price}</h3>
              </div>
            </div>
            <ul>
              {item.description.map((description: any, idx: number) => (
                <li key={idx}>{description}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PriceTableComponent;
