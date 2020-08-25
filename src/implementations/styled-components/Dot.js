import styled from 'styled-components';
import View from './View';

// Styled components yields warning like below if users creates too many
// classes. Thus, I'll consider this code as realistic scenario.
//
//   main.js:32812 Over 200 classes were generated for component View with the id of "View-sc-9o5veo-0".
//   Consider using the attrs method, together with a style object for frequently changed styles.
//   Example:
//     const Component = styled.div.attrs(props => ({
//       style: {
//         background: props.background,
//       },
//     }))`width: 100%;`
//
//     <Component />
const Dot = styled(View).attrs(props => ({
  style: {
    marginLeft: `${props.x}px`,
    marginTop: `${props.y}px`,
    borderRightWidth: `${props.size / 2}px`,
    borderBottomWidth: `${props.size / 2}px`,
    borderLeftWidth: `${props.size / 2}px`,
    borderBottomColor: `${props.color}`
  }
}))`
  position: absolute;
  cursor: pointer;
  width: 0;
  height: 0;
  transform: translate(50%, 50%);
  border-style: solid;
  border-top-width: 0;
`;

export default Dot;
