import React from 'react';
import renderer from 'react-test-renderer';
import { ScienceFeed } from '../../src/components/ScienceFeed';

test('Deve renderizar corretanmente', () => {
   const tree = renderer.create(<ScienceFeed />).toJSON();

   expect(tree).toMatchSnapshot();
});