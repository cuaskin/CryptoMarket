import React = require("react");
import { connect } from "react-redux";

import { NotFound, SearchResult, SearchBar } from "src/components";
import { CryptoMarketData } from "src/store/app/types";
import { ApplicationState } from "src/store";

const mapStateToProps = ({ cryptoMarkets }: ApplicationState) => {
  const { cryptoLoading, data } = cryptoMarkets;
  return { cryptoLoading, data };
};

type ReduxType = ReturnType<typeof mapStateToProps>;

interface PropsFromState {
  cryptoLoading: boolean;
  data: CryptoMarketData[];
}

const panelStyle: any = {
  border: "1px solid gray",
  color: "black",
  width: "571px",
  marginLeft: "%30",
  marginRight: "%30",
  marginTop: "50px"
};

class CryptoMarketContainer extends React.Component<ReduxType> {
  public state: PropsFromState = {
    cryptoLoading: false,
    data: []
  };
  public render() {
    const { cryptoLoading, data } = this.props;
    return (
      <div className="container is-widescreen" style={panelStyle}>
        <nav className="panel">
          <p className="panel-heading">Crypto Market</p>
          <SearchBar />
          {cryptoLoading && <div>Searching</div>}
          {data["status"] === "error" ? (
            <NotFound />
          ) : (
            <SearchResult symbol={data["symbol"]} price={data["price"]} />
          )}
        </nav>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CryptoMarketContainer);
