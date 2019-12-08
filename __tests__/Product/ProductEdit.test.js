import ProductEdit from '../../src/components/Product/ProductEdit.js'
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<ProductEdit />);

describe('ProductEdit', () => {
  it('matches snapshot properly', () => {
    const jsonProductEdit = renderer.create(<ProductEdit />).toJSON();
    expect(jsonProductEdit).toMatchSnapshot();
  });
});