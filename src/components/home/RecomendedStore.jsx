import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';

// import {Entypo} from '@expo/vector-icons';

const listStore = [
  {title: 'Kios Jajan', location: 'Bandung'},
  {title: 'Tokozstore', location: 'Aceh Utara'},
  {title: 'HCS-Collection', location: 'Sleman'},
  {title: 'Sentra Konveksi Kolor', location: 'Jepara'},
  {title: 'Berkah Furniture', location: 'Bantul'},
  {title: 'Kiraina Ms Glow', location: 'Malang'},
  {title: 'OurShoes_2', location: 'Bekasi'},
];

const RecomendedStore = () => {
  return (
    <View className=" my-3">
      <Text className="font-bold text-lg bg-white pl-3 pt-2">
        Toko Terbaru Untukmu
      </Text>
      <ScrollView
        className="w-100 bg-white py-3 px-3 gap-x-3 "
        horizontal={true}>
        {listStore.map((store, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {}}
            className="flex flex-col justify-between w-[120px] p-2 border border-slate-300 rounded-lg ">
            <View className="mb-2 mt-2 mx-auto text-center text-slate-400">
              <Image
                style={{width: 80, height: 80}}
                source={require('../../../assets/images/store.png')}
              />
            </View>
            <Text className=" text-xs  mb-3 ">{store.title}</Text>

            <View className="flex-row items-center">
              <Entypo name="location-pin" size={18} color="black" />

              <Text className=" text-xs  ">{store.location}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
export default RecomendedStore;
