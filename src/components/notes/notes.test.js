// import React from 'react';
// import renderer from 'react-test-renderer';
// import Notes from './notes.component';
//
// test('Notes changes the class when hovered', () => {
//   const component = renderer.create(
//     <Notes />
//   );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
//
//   // manually trigger the callback
//   tree.props.onMouseEnter();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
//
//   // manually trigger the callback
//   tree.props.onMouseLeave();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
