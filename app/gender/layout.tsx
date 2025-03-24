import React from 'react';

type Props = {
    children: React.ReactNode;
  }  

const GenderLayout: React.FC<Props> = ({ children }) => {
    return <div className='px-4 md:px-16'>{children}</div>
}

export default GenderLayout;