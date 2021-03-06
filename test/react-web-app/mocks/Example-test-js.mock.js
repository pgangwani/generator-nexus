export default
`import assert from 'assert';
import React from 'react/addons';
const {TestUtils} = React.addons;
import Example from './Example';

describe('Example', () => {

  const shallowRenderer = TestUtils.createRenderer();

  describe('default rendering', () => {

    it('should render the correct root element', () => {
      shallowRenderer.render(<Example someProp='hello world' />);
      const result = shallowRenderer.getRenderOutput();
      assert.equal(result.type, 'section');
    });

    it('should render the correct children', () => {
      shallowRenderer.render(<Example someProp='hello world' />);
      const result = shallowRenderer.getRenderOutput();
      assert.equal(result.props.children, 'hello world');
    });
  });
});
`;
