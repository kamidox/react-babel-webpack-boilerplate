/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from '../app/components/App';

describe('<App />', () => {
  it('render Hello World', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1')).to.have.length(1);
    expect(wrapper.find('h1').childAt[0].text()).equal('Hello World');
  });
});
