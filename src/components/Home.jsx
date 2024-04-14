import React, { useState } from 'react'
import Header from './Header'
import { data } from '../data'

const Home = () => {
  const [pages] = useState(data)
  return (
    <div>
      <Header title='404 - Bad Work-Life Balance Not Found' />
    </div>
  );
}

export default Home