import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const useQueryParams = (value) => {
  const [queryParams] = useSearchParams();
  const [queryParameter, setQueryParameter] = useState('');

  useEffect(() => {
    const parameter = queryParams.get(value) || '';
    setQueryParameter(parameter);
  }, [value, queryParams]);

  return [queryParameter];
};

export default useQueryParams;
