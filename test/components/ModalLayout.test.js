import React from 'react';
import renderer from 'react-test-renderer';
import { ModalLayout } from '../../src/components/ModalLayout';

test('Deve renderizar corretanmente', () => {
   const tree = renderer.create(<ModalLayout />).toJSON();

   expect(tree).toMatchSnapshot();
});

