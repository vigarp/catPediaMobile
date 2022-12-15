import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {getAllCats, getCatByName} from '../redux/actions/catActions';
import Accordion from '../components/Accordion';
import {useDispatch, useSelector} from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const allDataCats = useSelector(state => state.CatReducers);
  const dataCatByName = useSelector(state => state.CatReducersByName);

  useEffect(() => {
    dispatch(getAllCats(page));
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(getCatByName(searchQuery));
  }, [dispatch, searchQuery]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  const renderHeader = () => {
    <Text>CatPedia</Text>;
  };

  const renderFooter = () => (
    <View style={styles.footerText}>
      {!allDataCats.isListEnd && <ActivityIndicator />}
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setSearchQuery}
          value={searchQuery}
          placeholder="Search..."
        />
        {searchQuery !== '' ? (
          <FlatList
            data={dataCatByName?.data}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => (
              <Accordion
                image={item?.reference_image_id}
                title={item?.name}
                origin={item?.origin}
                lifeSpan={item?.life_span}
                temperament={item?.temperament}
                description={item?.description}
                weightImperial={item?.weight?.imperial}
                weightMetric={item?.weight?.metric}
                wikipediaURL={item?.wikipedia_url}
                key={index}
              />
            )}
          />
        ) : (
          <FlatList
            data={allDataCats?.data}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => (
              <Accordion
                image={item?.reference_image_id}
                title={item?.name}
                origin={item?.origin}
                lifeSpan={item?.life_span}
                temperament={item?.temperament}
                description={item?.description}
                weightImperial={item?.weight?.imperial}
                weightMetric={item?.weight?.metric}
                wikipediaURL={item?.wikipedia_url}
                key={index}
              />
            )}
            ListHeaderComponent={renderHeader}
            ListFooterComponent={renderFooter}
            onEndReachedThreshold={0.2}
            onEndReached={fetchMoreData}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
