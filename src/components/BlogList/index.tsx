import React, {useEffect, useState}from 'react';
import BlogItem from '../BlogItem';
import {StyledCounter} from './styles';
var contentful = require('contentful')


const BlogList: React.FC = () => {

  const [data, setData] = useState<any>();
  
  const posts = []

  const connectContentful = async () => {
      const client = contentful.createClient({
       space: "srzlwc3or4mg",
       accessToken: "0AmslYmvltUHQH23nNPUwF6mqk5SyuGPG2Zs646oYr0"
     });

     console.log('tentei pegar os conteudos')
     
     client?.getEntries().then((response: any) => {
       console.log('resposta: ', response.items)
       setData(response.items )
      })
  
  }

  useEffect(() => {
     connectContentful()
  }, []);

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
