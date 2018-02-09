import React from 'react';
import { mount } from 'enzyme';
import Report from './Report';

it('renders welcome message', () => {
    const queryParams = {};
    const wrapper = mount(<Report queryParams={queryParams} />);
    console.log(wrapper.state());
    wrapper.instance().onSelect({ target: { value: 'TEST' } });
    console.log(wrapper.state());
});