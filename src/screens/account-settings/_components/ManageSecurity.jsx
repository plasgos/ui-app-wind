import {View, Text, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import {useDispatch, useSelector} from 'react-redux';
import {getInfoProfile} from '../../../redux/modules/user/reducer';

import {Skeleton} from '@rneui/themed';
import EditEmailModal from './modal/EditEmailModal';
import EditPhoneNumberModal from './modal/EditPhoneNumberModal';

export default function ManageSecurity({navigation}) {
  const [openModalEmail, setOpenModalEmail] = useState(false);
  const [openModalPhoneNumber, setOpenModalPhoneNumber] = useState(false);

  const {user} = useSelector(state => state.user);
  const {token} = useSelector(state => state.login);
  const dispatch = useDispatch();

  const getInfoUser = async () => {
    await dispatch(getInfoProfile({token}));
  };

  useEffect(() => {
    getInfoUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleModalEmail = useCallback(() => {
    setOpenModalEmail(false);
  }, [setOpenModalEmail]);

  const toggleModalPhoneNumber = useCallback(() => {
    setOpenModalPhoneNumber(false);
  }, [setOpenModalPhoneNumber]);

  return (
    <View className="flex-1 bg-white p-5">
      <TouchableOpacity
        onPress={() => setOpenModalEmail(true)}
        className="flex flex-row items-center py-3 border-b-[0.5px] border-slate-400">
        <View className="flex-grow">
          <Text className="font-bold mb-1 ">Email :</Text>
          {!user.data?.data ? (
            <Skeleton
              skeletonStyle={{backgroundColor: '#CBD5E1'}}
              animation="wave"
              width={200}
              height={20}
            />
          ) : (
            <View className="flex flex-row ">
              <Text className="mr-2">{user.data?.data?.email}</Text>

              {user.data?.data?.email_verified ? (
                <Octicons color={'green'} name="verified" size={18} />
              ) : (
                <Octicons color={'#CBD5E1'} name="unverified" size={18} />
              )}
            </View>
          )}
        </View>

        <View>
          <Octicons name="pencil" size={18} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setOpenModalPhoneNumber(true)}
        className="flex flex-row items-center py-3 border-b-[0.5px]  border-slate-400">
        <View className="flex-grow">
          <Text className="font-bold mb-1 ">Nomor Ponsel :</Text>
          {!user.data?.data ? (
            <Skeleton
              skeletonStyle={{backgroundColor: '#CBD5E1'}}
              animation="wave"
              width={200}
              height={20}
            />
          ) : (
            <View className="flex flex-row ">
              <Text className="mr-2">
                {user.data?.data?.phone_number
                  ? user.data?.data?.phone_number
                  : '-'}
              </Text>

              {user.data?.data?.phone_number_verified ? (
                <Octicons color={'green'} name="verified" size={18} />
              ) : (
                <Octicons color={'#CBD5E1'} name="unverified" size={18} />
              )}
            </View>
          )}
        </View>

        <View>
          <Octicons name="pencil" size={18} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="flex flex-row items-center py-3 border-b-[0.5px] border-slate-400">
        <View className="flex-grow">
          <Text className="font-bold mb-1 ">Kata Sandi:</Text>
          <Text className="">*******</Text>
        </View>

        <View>
          <Octicons name="pencil" size={18} />
        </View>
      </TouchableOpacity>

      {openModalEmail ? (
        <EditEmailModal
          token={token}
          user={user}
          openModal={openModalEmail}
          toggleModal={toggleModalEmail}
          navigation={navigation}
          type="changeEmail"
        />
      ) : (
        <EditPhoneNumberModal
          token={token}
          user={user}
          openModal={openModalPhoneNumber}
          toggleModal={toggleModalPhoneNumber}
          navigation={navigation}
          type="changePhoneNumber"
        />
      )}
    </View>
  );
}
