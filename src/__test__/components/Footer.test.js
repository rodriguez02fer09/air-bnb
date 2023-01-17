import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer/Footer.jsx';

describe('<Footer />', () => {
  const footer = mount(<Footer/>);

  test('Render del componente Footer', () => {
    expect(footer.length).toEqual(1);
  });
  test('Render del titulo', () => {
    expect(footer.find('mainFooter').text()).toEqual('©2022 Digital Booking');
  });
});