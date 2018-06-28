import React from 'react';
import TagsList from './TagsList';
import TestRenderer from 'react-test-renderer';

describe('TagList', () => {

  it('Should render as expected', () => {
    const tree = TestRenderer
      .create(<TagsList tags={[`css`, `html`, `python`]}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  })
})
