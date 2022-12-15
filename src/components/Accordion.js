import React, {useState} from 'react';
import {Colors} from './Colors';

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  Image,
  Linking,
} from 'react-native';

const Accordion = props => {
  const [expanded, setExpanded] = useState(false);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const handleToggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };
  return (
    <View>
      <TouchableOpacity style={styles.row} onPress={() => handleToggleExpand()}>
        <Text style={[styles.title]}>{props.title}</Text>
      </TouchableOpacity>
      <View style={styles.parentHr} />
      {expanded && (
        <View style={[styles.detailWrapper]}>
          <Image
            style={styles.catLogo}
            source={{
              uri: `https://cdn2.thecatapi.com/images/${props.image}.jpg`,
            }}
          />
          <Text>Name: {props.title}</Text>
          <Text>Origin: {props.origin}</Text>
          <Text>Life Span: {props.lifeSpan} years</Text>
          <Text>Temperament: {props.temperament}</Text>
          <Text>Description: {props.description}</Text>
          <Text>
            Weight: {props.weightImperial} (Imperial), {props.weightMetric}{' '}
            (Metric)
          </Text>
          <Text>
            Wikipedia:{' '}
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{color: 'blue'}}
              onPress={() => Linking.openURL('http://google.com')}>
              {props.wikipediaURL}
            </Text>
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: 54,
    alignItems: 'center',
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DARKGRAY,
  },
  detailWrapper: {
    padding: 10,
  },
  catLogo: {
    width: 150,
    height: 150,
  },
  itemActive: {
    fontSize: 12,
    color: Colors.GREEN,
  },
  itemInActive: {
    fontSize: 12,
    color: Colors.DARKGRAY,
  },
  btnActive: {
    borderColor: Colors.GREEN,
  },
  btnInActive: {
    borderColor: Colors.DARKGRAY,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
    backgroundColor: Colors.CGRAY,
  },
  childRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.GRAY,
  },
  parentHr: {
    height: 1,
    color: Colors.WHITE,
    width: '100%',
  },
  childHr: {
    height: 1,
    backgroundColor: Colors.LIGHTGRAY,
    width: '100%',
  },
  colorActive: {
    borderColor: Colors.GREEN,
  },
  colorInActive: {
    borderColor: Colors.DARKGRAY,
  },
});

export default Accordion;
