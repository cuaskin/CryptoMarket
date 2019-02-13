import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { AppActions } from "src/store/app/types";
import * as asyncactions from "../store/app/async-actions";
import * as actions from "../store/app/actions";

const mapDispatcherToProps = (dispatch: Dispatch<AppActions>) => ({
  //cryptoMarket
  fetchRequest: (searchSymbol: string) =>
    asyncactions.getData(dispatch, searchSymbol),
  searchSymbol: (searchSymbol: string) =>
    dispatch(actions.searchSymbol(searchSymbol))
});

type ReduxType = ReturnType<typeof mapDispatcherToProps>;

interface IState {
  searchSymbol: string;
}

class SearchBar extends React.Component<ReduxType> {
  public state: IState = {
    searchSymbol: ""
  };

  public onInputSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let upperCase: string = event.target.value.toUpperCase();
    this.setState({ searchSymbol: upperCase });

    this.props.searchSymbol(upperCase);
    if (upperCase !== "") this.props.fetchRequest(upperCase);
  };

  public onResetClick = () => {
    this.setState({ searchSymbol: "" });
    this.props.searchSymbol(this.state.searchSymbol);
  };

  render() {
    return (
      <div className="panel-block">
        <p className="control has-icons-left has-icons-right">
          <input
            className="input is-rounded is-focused is-loading"
            type="text"
            placeholder="Search a symbol"
            autoFocus
            value={this.state.searchSymbol}
            onChange={this.onInputSearchChange}
          />
          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true" />
          </span>
          <span className="icon is-right">
            <button className="delete is-small" onClick={this.onResetClick} />
          </span>
        </p>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatcherToProps
)(SearchBar);
