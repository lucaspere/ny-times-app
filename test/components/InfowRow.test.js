import React from 'react';
import renderer from 'react-test-renderer';
import { InfoRow } from '../../src/components/InfoRow';

test('Deve renderizar corretanmente', () => {
   const tree = renderer.create(<InfoRow />).toJSON();

   expect(tree).toMatchSnapshot();
});


