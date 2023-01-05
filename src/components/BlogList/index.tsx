import React from 'react';
import BlogItem from '../BlogItem';
import {StyledCounter} from './styles';



const BlogList: React.FC = () => {
  const posts = []
  for (let i=0; i<6; i++){
      posts.push(<BlogItem  key={i}/>)
  }
  return (
    <StyledCounter className='category-page-posts animated fadeIn'>
      <div className='animated fadeIN'>
        {posts}

      </div>

    </StyledCounter>
  );
}

export default BlogList;
