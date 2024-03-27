import React, {useEffect, useRef, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Platform, TouchableOpacity} from 'react-native';
import {SearchBar} from '@rneui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';

const SearchBarComponent = ({navigation}) => {
  const [search, setSearch] = useState('');
  const updateSearch = searchValue => {
    setSearch(searchValue);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    // Focus input element when component mounts
    inputRef.current.focus();
  }, []);

  return (
    <SafeAreaView className="m-1 pl-3 flex flex-row gap-x-3 items-center ">
      <TouchableOpacity onPress={() => navigation.goBack()} className="mr-1">
        <AntDesign name="arrowleft" size={24} color="#86939E" />
      </TouchableOpacity>
      <SearchBar
        ref={inputRef}
        lightTheme
        placeholder="Cari Kebutuhan Anda"
        containerStyle={{
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          borderBottomWidth: 0,
          flexGrow: 1,
        }}
        inputContainerStyle={{
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderBottomWidth: 1,
          borderRadius: 8,
          height: 40,
        }}
        inputStyle={{fontSize: 14}}
        style={Platform.OS === 'web' && {outlineStyle: 'none'}}
        onChangeText={updateSearch}
        value={search}
      />
    </SafeAreaView>
  );
};

export default SearchBarComponent;
