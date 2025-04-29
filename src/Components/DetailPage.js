import React from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const {slug} = useParams();
  return (
    <div>
      {slug}
    </div>
  )
}

export default DetailPage
