import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
const apiKey = "723eb7aa864d1055dc72e7edb2a213a7";

// pagination
const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isRefeshing, setIsRefeshing] = useState(false);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`
      );
      const json = await response.json();

      if (json.results) {
        // setMovies((prv) => [...prv, ...json.results]);

        // if (isRefeshing) {
            setMovies(json.results);
        // }else{
            // setMovies(json.results);
            // setMovies((prv) => [...prv, ...json.results]);
        // }
        
        // console.log(json.results[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);
  // 1
  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    //  fetchMovies()
  };

  const handleRefresh = async() => {
    console.log('refreshing');
    setIsRefeshing(true)
    setPage(1)
    await fetchMovies()
    setIsRefeshing(false)
  };

  const renderMovie = ({ item }) => (
    <View style={styles.card}>
      <Image
        style={styles.poster}
        source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
      ></Image>
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text numberOfLines={4}>{item.overview}</Text>
      </View>
    </View>
  );

  return (
    <View>
      <FlatList
        data={movies}
        keyExtractor={(movie) => movie.id.toString()}
        renderItem={renderMovie}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        onRefresh={handleRefresh}
        refreshing={isRefeshing}
        ListFooterComponent={<Text> No More Movies</Text>}
      ></FlatList>
    </View>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 8,
    backgroundColor: "#ccc",
  },
  card: {
    flexDirection: "row",
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "#f1f1f1",
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
});
