import React from 'react';
import { mount } from 'enzyme';
import Report from './Report';

import mockAxios from 'jest-mock-axios';

afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
});



it('renders welcome message', () => {

    const queryParams = {};
    const wrapper = mount(<Report queryParams={queryParams} />);

    mockAxios.mockResponse({ data: 'LAPTOP2' });

    // get the select input
    let select = wrapper.find("select")
    expect(select.props().value).toEqual('');
    select.simulate('change', { target: { value: 'LAPTOP_1' } });

    // update wrapper and check for change
    wrapper.update();
    select = wrapper.find("select")
    expect(select.props().value).toEqual('LAPTOP_1');
});