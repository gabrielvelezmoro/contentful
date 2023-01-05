import React from 'react';
import {StyledCounter, StyledH2, StyledA} from './styles';

interface Props  {
  data?:{ 
    fields: {
    internalName: string;
    pageDescription: string;
    }
  }
}

const BlogItem: React.FC<Props> = (post?: Props) => {
  return (
  <article>
    <StyledCounter>
      <StyledH2><StyledA
       href="/hello-world/">{post?.data?.fields.internalName}</StyledA></StyledH2>
      <p>{post?.data?.fields.pageDescription}</p>
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
