import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Repository } from './types';
import Text from './Text';
import theme from '../theme';
import Count from './Count';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingRight: 10,
  },
  upperContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  infoContainer: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-start',
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
  }
});

const RepositoryItem = ({ item }: { item: Repository }): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View>
          <Image
            style={styles.logo}
            source={{
              uri: item.ownerAvatarUrl,
            }}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText} fontWeight='bold' fontSize='subheading'>{item.fullName}</Text>
          <Text style={styles.infoText}>{item.description}</Text>
          <View>
            <Text style={styles.language} color='offWhite'>{item.language}</Text>
          </View>

        </View>
      </View>
      <View style={styles.lowerContainer}>
        <Count count={item.stargazersCount} name='Stars' />
        <Count count={item.forksCount} name='Forks' />
        <Count count={item.reviewCount} name='Reviews' />
        <Count count={item.ratingAverage} name='Rating' />
      </View>
    </View>
  );
};

export default RepositoryItem;