export default
`import assert from 'assert';
import example from './index';

describe('example', () => {

  it('should return hello world', () => {
    const actual = example();
    const expected = 'hello world';
    assert.equal(actual, expected);
  });
});
`;
