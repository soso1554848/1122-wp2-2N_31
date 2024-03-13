import SingleItem_xx from './SingleItem_xx';

import { useQuery } from '@tanstack/react-query';

import customFetch_31 from './utils_31';

const Items_xx = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await customFetch_31.get('/');
      return data;
    },
  });
  console.log('data', data);
  if (isLoading) {
    return <p style={{ marginTop: '1rem' }}>Loading...</p>;
  }
  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem_xx key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items_xx;
