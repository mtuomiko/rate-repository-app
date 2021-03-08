import React from 'react';
import { useParams } from 'react-router-native';

import RepositoryItem from './RepositoryItem';
import useOneRepository from '../hooks/useOneRepository';

const RepositoryDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { repository } = useOneRepository(id);

  if (repository) {
    return <RepositoryItem item={repository} showLink={true} />;
  }
  return null;
};

export default RepositoryDetail;