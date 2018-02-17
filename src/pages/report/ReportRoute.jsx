import React from "react";
import { parse, stringify } from "query-string";

import Report from './Report'


import { ThemeContext } from '../../ThemeContext'

class ReportRoute extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeFilter = this.onChangeFilter.bind(this);
    }

    onChangeFilter(queryParams) {
        const { history, match } = this.props;
        const search = stringify(queryParams);
        history.push(`${match.url}?${search}`);
    }

    parseFilterFromUrl(location) {
        const queryParams = parse(location.search);
        return {
            PART: queryParams.PART || ''
        }
    }

    render() {
        const { match, location } = this.props;

        const queryParams = this.parseFilterFromUrl(location);
        const reportName = match.params.reportId;


        return (
            <ThemeContext.Consumer>
                {theme => (
                    <Report
                        name={reportName}
                        queryParams={queryParams}
                        onConfirmFilter={this.onChangeFilter}
                        theme={theme}
                    />
                )}
            </ThemeContext.Consumer>

        );
    }
}

export default ReportRoute;