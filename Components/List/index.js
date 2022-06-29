import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const List = ({ list, Children, listFunctions, filterList }) => {
  const renderItem = ({ item }) => (
    <>
      <Children info={item} listFunctions={listFunctions} list={list} />
      {/* {!item.idParent && (
        <List Children={Children} listFunctions={listFunctions} list={list} />
      )} */}
    </>
  );

  return (
    <View>
      <FlatList
        data={filterList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({});
