import tasks from 'data/tasks.json';
import { useEffect, useState } from 'react';

import { ApiResponse } from '../interface/response';

const apiPromise = new Promise<ApiResponse>((resolve) => {
  setTimeout(() => {
    resolve(tasks);
  }, 3000);
});

const useFakeData = () => {
  const [data, setData] = useState<ApiResponse | null>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchApi = async () => {
    setLoading(true);
    const response = await apiPromise;
    setData(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return {
    loading,
    data,
  };
};

export default useFakeData;
