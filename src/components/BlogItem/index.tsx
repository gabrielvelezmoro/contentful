import React from 'react';
import {StyledCounter, StyledH2, StyledA} from './styles';



const BlogItem: React.FC = () => {
  return (
  <article>
    <StyledCounter>
      <StyledH2><StyledA
       href="/hello-world/">Hello World</StyledA></StyledH2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione obcaecati veritatis vel. Deleniti explicabo dolores voluptates pariatur sit quos odit. Quod error id ad alias voluptate asperiores commodi harum perferendis.</p>
      <p >
        <img src="" alt="" />
        <i className='link-spacer'>Gabriel Velezmoro</i>
        <time className='post-date' dateTime='2023-01-05'> 2023-01-05 </time>
      </p>
    </StyledCounter>
  </article> 
);
}

export default BlogItem;
