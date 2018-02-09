import React from 'react';
import { mount } from 'enzyme';
import ReportRoute from './ReportRoute';
import Report from './Report';
import { MemoryRouter, Route } from 'react-router-dom'

it('renders welcome message', () => {
    const queryParams = {};
    const wrapper = mount(<MemoryRouter
        initialEntries={['/reports/PART?PART=LAPTOP_1']}
        initialIndex={0}
    >
        <Route path="/reports/:reportId" component={ReportRoute} />
    </MemoryRouter>);

    let report = wrapper.find(Report);
    expect(report.props().queryParams).toEqual({ PART: "LAPTOP_1" });
    const reportRoute = wrapper.find(ReportRoute);
    reportRoute.instance().onChangeFilter({ PART: "LAPTOP_2" })
    wrapper.update();
    report = wrapper.find(Report);
    expect(report.props().queryParams).toEqual({ PART: "LAPTOP_2" });
});