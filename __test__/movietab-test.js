jest.dontMock('../index.js');

describe('index', function() {
  it('expect shows', function() {
    var React = require('react/addons');
    var MovieTab = require('../index.js');
    var TestUtils = React.addons.TestUtils;

    // Render a checkbox with label in the document
    var movietab = TestUtils.renderIntoDocument(
      <MovieTab data={} />
    );

    var data = TestUtils.findRenderedDOMComponentWithTag(movietab, 'data');
    expect(label.getDOMNode().textContent).toEqual({});

  });
});
