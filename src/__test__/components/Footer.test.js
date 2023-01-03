import React from "react";
import {mount} from 'enzyme'
import Footer from '../../components/Footer/Footer.jsx'


describe('<Footer/>', () => {
    test('render del componente footer', () => {
        const footer = mount(<Footer/>)
        expect(footer.length).toEqual(1)
       })
    
})