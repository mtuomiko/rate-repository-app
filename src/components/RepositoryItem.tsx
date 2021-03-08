import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import * as Linking from 'expo-linking';

import { Repository } from '../types';
import Text from './Text';
import theme from '../theme';
import Count from './Count';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  upperContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  infoContainer: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-start',
    paddingRight: 5,
  },
  lowerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  logo: {
    marginLeft: 15,
    marginRight: 15,
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  infoText: {
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  language: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 5,
  },
  link: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    alignItems: 'center',
  }
});

interface Props {
  item: Repository;
  showLink?: boolean;
}

const RepositoryItem = ({ item, showLink }: Props): JSX.Element => {
  const openLink = () => {
    const url = `https://github.com/${item.fullName}`;
    Linking.openURL(url);
  };

  return (
    <View testID='repositoryItem' style={styles.container}>
      <View style={styles.upperContainer}>
        <View>
          <Image
            testID='repositoryImage'
            style={styles.logo}
            source={{
              uri: item.ownerAvatarUrl,
            }}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text
            testID='repositoryFullName'
            style={styles.infoText}
            fontWeight='bold'
            fontSize='subheading'
          >
            {item.fullName}
          </Text>
          <Text
            testID='repositoryDescription'
            style={styles.infoText}
          >
            {item.description}
          </Text>
          <View>
            <Text
              testID='repositoryLanguage'
              style={styles.language}
              color='offWhite'
            >
              {item.language}
            </Text>
          </View>

        </View>
      </View>
      <View style={styles.lowerContainer}>
        <Count testID='repositoryStars' count={item.stargazersCount} name='Stars' />
        <Count testID='repositoryForks' count={item.forksCount} name='Forks' />
        <Count testID='repositoryReviews' count={item.reviewCount} name='Reviews' />
        <Count testID='repositoryRating' count={item.ratingAverage} name='Rating' />
      </View>
      {showLink &&
        <View style={styles.link}>
          <Text
            testID='repositoryLink'
            color='offWhite'
            fontSize='subheading'
            fontWeight='bold'
            onPress={openLink}
          >Open in GitHub</Text>
        </View>}
    </View>
  );
};

export default RepositoryItem;