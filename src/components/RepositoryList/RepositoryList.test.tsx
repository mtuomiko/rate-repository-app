import React from 'react';
import { render, within } from '@testing-library/react-native';

import { RepositoryListContainer } from './';
import numberFormat from '../../utils/numberFormat';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const testRepositories = repositories.edges.map(e => e.node);

      // @ts-ignore: The component has also other props which are not relative for this test
      const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);

      const repositoryItems = getAllByTestId('repositoryItem');

      repositoryItems.forEach((r, i) => {
        const testRepo = testRepositories[i];

        const image = within(r).getByTestId('repositoryImage');
        expect(image.props.source.uri).toEqual(testRepo.ownerAvatarUrl);

        const fullName = within(r).getByTestId('repositoryFullName');
        expect(fullName).toHaveTextContent(testRepo.fullName);

        const description = within(r).getByTestId('repositoryDescription');
        expect(description).toHaveTextContent(testRepo.description);

        const language = within(r).getByTestId('repositoryLanguage');
        expect(language).toHaveTextContent(testRepo.language);

        const stars = within(r).getByTestId('repositoryStars');
        expect(stars).toHaveTextContent(numberFormat(testRepo.stargazersCount));

        const forks = within(r).getByTestId('repositoryForks');
        expect(forks).toHaveTextContent(numberFormat(testRepo.forksCount));

        const reviews = within(r).getByTestId('repositoryReviews');
        expect(reviews).toHaveTextContent(numberFormat(testRepo.reviewCount));

        const rating = within(r).getByTestId('repositoryRating');
        expect(rating).toHaveTextContent(numberFormat(testRepo.ratingAverage));
      });

    });
  });
});