import { verticalRhythm } from 'constants/styles';

const marginKeys = ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'];

// Extract the margin-* style properties from the component
// props that are passed.
// Margin props are passed as multiples of our vertical-rhythm.
export const getMarginProps = (props: any) => {
  const marginProps = {} as any;
  Object.keys(props).forEach(key => {
    const value = props[key];
    if (marginKeys.includes(key)) {
      marginProps[key] = value * verticalRhythm + 'px';
    }
  });
  return marginProps;
};
