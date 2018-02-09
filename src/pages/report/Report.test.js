import React from 'react';
import { mount } from 'enzyme';
import Report from './Report';

it('renders welcome message', () => {
    const queryParams = {};
    const wrapper = mount(<Report queryParams={queryParams} />);

    // get the select input
    let select = wrapper.find("select")
    expect(select.props().value).toEqual('');
    select.simulate('change', { target: { value: 'LAPTOP_1' } });

    // update wrapper and check for change
    wrapper.update();
    select = wrapper.find("select")
    expect(select.props().value).toEqual('LAPTOP_1');
});