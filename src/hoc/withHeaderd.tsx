import React, {ReactNode} from 'react';

const withHeader = (Screen: any, actions?: ReactNode) => (props: Object) => {
  return (
    <>
      <Screen {...props} />
    </>
  );
};
export default withHeader;
