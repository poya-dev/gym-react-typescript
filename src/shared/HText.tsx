import React from 'react';

type Props = { children: React.ReactNode };

function HText({ children }: Props) {
  return (
    <div className="basis-3/5 font-montserrat text-3xl font-bold">
      {children}
    </div>
  );
}

export default HText;
