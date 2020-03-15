import React from 'react';
import renderer from 'react-test-renderer';
import { TechnologyFeed } from '../../src/components/TechnologyFeed';

test('Deve renderizar corretanmente', () => {
   const tree = renderer.create(<TechnologyFeed />).toJSON();

   expect(tree).toMatchSnapshot();
});