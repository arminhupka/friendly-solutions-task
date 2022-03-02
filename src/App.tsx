import React, { ReactElement } from 'react';

import Table from './components/Table/Table';
import useFakeData from './hooks/useFakeData';

const App = (): ReactElement => {
  const { data, loading } = useFakeData();

  if (loading) {
    return <h1>Loading</h1>;
  }

  return <div>{!loading && data && <Table data={data} />}</div>;
};

export default App;
