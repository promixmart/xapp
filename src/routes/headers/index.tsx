import React, {ReactNode} from 'react';
import {Box, Text} from '../../constants/ltheme';
import Avatar from '../../components/avatar';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions, useNavigation} from '@react-navigation/native';

interface Props {
  rightActions?: ReactNode;
}

const Header: React.FC<Props> = ({rightActions}) => {
  const navigation = useNavigation();

  return (
    <Box backgroundColor={'light'}>
      <Box
        alignItems={'center'}
        flexDirection={'row'}
        marginHorizontal={'m'}
        marginBottom={'s'}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Avatar size={30} />
        </TouchableOpacity>
        <Box
          flex={1}
          padding={'s'}
          marginHorizontal={'sm'}
          flexDirection="row"
          borderRadius={5}
          backgroundColor={'background'}>
          <Box flexDirection="row" flex={1}>
            <Icon name={'magnify'} size={16} />
            <TouchableOpacity
              onPress={() => navigation.navigate('Search')}
              style={{flex: 1}}>
              <Text variant={'bold'} fontSize={12}>
                Search
              </Text>
            </TouchableOpacity>
          </Box>
          <Box>
            <Icon name={'barcode-scan'} size={16} />
          </Box>
        </Box>
        {rightActions}

        <Icon
          size={16}
          name={'message-processing'}
          onPress={() => navigation.navigate('Chat')}
        />
      </Box>
    </Box>
  );
};
export default Header;
