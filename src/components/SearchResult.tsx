import * as React from "react";

interface IProps {
  symbol: string;
  price: string;
}

const SearchResult: React.StatelessComponent<IProps> = (props: IProps) => {
  //console.log(props.price);
  return (
    <section className="hero is-success is-medium">
      <div className="hero-body">
        <div className="container">
          <label className="label">COIN SYMBOL : {props.symbol}</label>
          <label className="label">
            COIN PRICE :
            {props.price != undefined ? parseFloat(props.price).toFixed(3) : ""}
            $
          </label>
        </div>
      </div>
    </section>
  );
};

export default SearchResult;
