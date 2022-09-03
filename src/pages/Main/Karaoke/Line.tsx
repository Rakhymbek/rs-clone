import React, { FC } from 'react';
import './Line.css'

interface ILineProps {
    text: string;
}

const Line: FC<ILineProps> = ({text}) => {
        console.log(text);
       
        return (
          <div className='WrapperStyle'>
            <div className='FontStyle'>{text}</div>
            <div className='ActiveStyle'>{text}</div>
          </div>
        );
};

export default Line;