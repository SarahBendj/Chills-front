import React from 'react';

const DecodedContent = ({ encodedContent }) => {
  const decodedContent = atob(encodedContent);

  return <div>{decodedContent}</div>;
};

export default DecodedContent;
