import React, {useEffect, useState}from 'react';
import BlogItem from '../BlogItem';
import {StyledCounter} from './styles';
var contentful = require('contentful')


const BlogList: React.FC = () => {

  const [data, setData] = useState<any>();
//  const [posts, setPosts] = useState<any>();
  
  
  const connectContentful = async () => {
     
    const client = contentful.createClient({
       space: "srzlwc3or4mg",
       accessToken: "0AmslYmvltUHQH23nNPUwF6mqk5SyuGPG2Zs646oYr0"
     });

     client?.getEntries().then((response: any) => {
       setData(response.items)
      })
    }

    console.log('data: ', data)
    
    useEffect(() => {
      connectContentful()
    }, []);
    
  return (
    <StyledCounter className='category-page-posts animated fadeIn'>
      <div className='animated fadeIN'>
         {! data ?  null : data.map((post: any)=>{
          return (<BlogItem  data={post}/>)
        })} 

      </div>

    </StyledCounter>
  );
}

export default BlogList;
