import * as React from "react";

 const NotFound = () => {
  return (
    <section className="hero is-danger is-medium">
      <div className="hero-body">
        <div className="container">
          <label
            className="label "
            style={{ verticalAlign: "center"}}
          >
            NOT MATCHED SYMBOL
          </label>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
