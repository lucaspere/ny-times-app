import React from 'react';
import renderer from 'react-test-renderer';
import { ArticleList } from '../../src/components/ArticleList';

test('Deve renderizar corretanmente', () => {
   const tree = renderer.create(<ArticleList />).toJSON();

   expect(tree).toMatchSnapshot();
});


