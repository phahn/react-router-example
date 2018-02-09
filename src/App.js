import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { parse, stringify } from "query-string";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Command = () => (
  <div>
    <h2>Command</h2>
  </div>
);

class Report extends React.Component {
  render() {
    const { name, value, data, loading } = this.props;

    const options = ["", "LAPTOP_1", "LAPTOP_2", "LAPTOP_3"];

    return (
      <div>
        <h3>{name}</h3>

        <select value={value} onChange={this.props.onSelect}>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <pre>
          {loading && "LOADING"}
          {!loading && JSON.stringify(data)}
        </pre>

        <button onClick={this.props.onChangeFilter}>Confirm</button>
        <button onClick={this.props.resetFilters}>Reset</button>
      </div>
    );
  }
}

class ReportRoute extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeFilter = this.onChangeFilter.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.loadData = this.loadData.bind(this);

    const queryParams = parse(props.location.search);
    this.state = {
      value: queryParams.PART || "",
      data: [],
      loading: false
    };
  }

  componentDidMount() {
    this.loadData(this.state.value);
  }

  componentDidUpdate(prevProps) {
    const { match, location } = this.props;
    if (location !== prevProps.location) {
      const queryParams = parse(location.search);
      this.setState({
        value: queryParams.PART
      });
      this.loadData(queryParams.PART);
    }
  }

  loadData(value) {
    this.setState({
      loading: true
    });

    const data = ["LAPTOP_1", "LAPTOP_1", "LAPTOP_2", "LAPTOP_3", "LAPTOP_1"];
    const filteredData = data.filter(entry => entry === value);

    setTimeout(
      () => this.setState({ data: filteredData, loading: false }),
      1000
    );
  }

  onSelect(event) {
    this.setState({
      value: event.target.value
    });
  }

  resetFilters() {
    const queryParams = parse(this.props.location.search);
    this.setState({
      value: queryParams.PART
    });
  }

  onChangeFilter() {
    const { history, match } = this.props;
    const search = stringify({ PART: this.state.value });
    history.push(`${match.url}?${search}`);

    this.loadData(this.state.value);
  }

  render() {
    const { match, location } = this.props;

    const queryParams = parse(location.search);
    const reportName = match.params.reportId;
    return (
      <Report
        name={reportName}
        queryParams={queryParams}
        value={this.state.value}
        onChangeFilter={this.onChangeFilter}
        resetFilters={this.resetFilters}
        onSelect={this.onSelect}
        data={this.state.data}
        loading={this.state.loading}
      />
    );
  }
}

const Reports = ({ match }) => (
  <div>
    <h2>Reports</h2>
    <ul>
      <li>
        <Link to={`${match.url}/PART`}>PART</Link>
      </li>
      <li>
        <Link to={`${match.url}/PART?PART=LAPTOP_1`}>PART with Filter 1</Link>
      </li>
      <li>
        <Link to={`${match.url}/PART?PART=LAPTOP_2`}>PART with Filter 2</Link>
      </li>
      <li>
        <Link to={`${match.url}/DEPOT`}>DEPOT</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:reportId`} component={ReportRoute} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a report.</h3>}
    />
  </div>
);

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/commands">Commands</Link>
        </li>
        <li>
          <Link to="/reports">Reports</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/commands" component={Command} />
      <Route path="/reports" component={Reports} />
    </div>
  </Router>
);
export default BasicExample;
