import { useState, useEffect } from 'react';
import axios from 'axios';

let api_url = `https://mfwasdjpuvjgzkkjlnrx.supabase.co/rest/v1/card_31?select=*`;

//import { supabase } from '../db/clinetSupabase';

const SupaGetBlog_31 = () => {
  const [name, setName] = useState('BingShih Cai');
  const [id, setId] = useState(211410831);
  const [blogs, setBlogs] = useState([]);

  const fetchBlogsFromSupabase = async () => {
    try {
      // const response = await fetch(api_url);
      // const data = await response.json();

      //let { data, error } = await supabase.from('card_31').select('*');

      const response = await axios.get(api_url, {
        headers: {
          apikey:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1md2FzZGpwdXZqZ3pra2psbnJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3NTMwNjAsImV4cCI6MTk5MzMyOTA2MH0.jCKkCu80pun9MFbANf2_fYGhx-74H3jmBQdkQHyqaUE',
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1md2FzZGpwdXZqZ3pra2psbnJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3NTMwNjAsImV4cCI6MTk5MzMyOTA2MH0.jCKkCu80pun9MFbANf2_fYGhx-74H3jmBQdkQHyqaUE',
        },
      });

      console.log('blogs data', response.data);
      //setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogsFromSupabase();
  }, []);

  return (
    <section className='blogs'>
      <div className='section-title'>
        <h2> Get Blogs Using Base </h2>
        <h3>
          {name}, {id}
        </h3>
      </div>
      <div className='blogs-center'>
        {blogs.map((item) => {
          const { id, img, remote_url, title, category, descrip } = item;
          return (
            <article key={id} className='blog'>
              <img src={img} alt='Coffee photo' className='img blog-img' />
              <div className='blog-content'>
                <span>
                  {' '}
                  {category} <i className='fa-solid fa-mug-saucer'></i>
                </span>
                <h3>{title}</h3>
                <p>{descrip}</p>
                <a href='#'>read more</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default SupaGetBlog_31;
