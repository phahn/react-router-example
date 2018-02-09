import React from "react";

import { getReportData } from './Report.api'

class Report extends React.Component {

    constructor(props) {
        super(props);

        this.onConfirmFilter = this.onConfirmFilter.bind(this);
        this.onResetFilter = this.onResetFilter.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.loadData = this.loadData.bind(this);

        this.state = {
            value: this.props.queryParams.PART || "",
            data: [],
            loading: false
        };
    }

    componentDidMount() {
        this.loadData(this.state.value);
    }

    componentDidUpdate(prevProps) {
        const { queryParams } = this.props;
        if (queryParams.PART !== prevProps.queryParams.PART) {
            console.log('getting new filter props', prevProps.queryParams, queryParams)
            this.setState({
                value: queryParams.PART
            });
            this.loadData(queryParams.PART);
        }
    }

    loadData(value) {

        console.log('loading new data..', value)

        this.setState({
            loading: true
        });

        const filter = {
            PART: value
        }

        getReportData(filter).then(response => {
            const result = response.data.content;
            this.setState({ data: result, loading: false })
        });

    }

    onSelect(event) {
        this.setState({
            value: event.target.value
        });
    }

    onResetFilter() {
        const { queryParams } = this.props;
        this.setState({
            value: queryParams.PART
        });
    }

    onConfirmFilter() {
        this.props.onConfirmFilter({
            PART: this.state.value
        });
    }

    render() {
        const { name } = this.props;
        const { value, data, loading } = this.state;

        const options = ["", "Processor", "Cable", "Hard Disk"];

        return (
            <div>
                <h3>{name}</h3>

                <select value={value} onChange={this.onSelect}>
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

                <button onClick={this.onConfirmFilter}>Confirm</button>
                <button onClick={this.onResetFilter}>Reset</button>
            </div>
        );
    }
}

export default Report;