import React from 'react';
import {ScrollView} from 'react-native';
import {Box, Text} from '../../constants/ltheme';
import Avatar from '../../components/avatar';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/AntDesign';
import LinkGroup from './linkGroup';

const LeftDrawer: React.FC<DrawerContentComponentProps> = ({navigation}) => {
  return (
    <>
      <Box
        paddingVertical={'l'}
        paddingHorizontal={'s'}
        backgroundColor={'background'}>
        <Box>
          <Box
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-around'}>
            <Avatar />
            <Box alignItems={'center'}>
              <Text
                variant={'bold'}
                fontWeight={'bold'}
                paddingVertical={'s'}
                fontSize={20}
                numberOfLines={1}>
                Xorgs World
              </Text>
              <Box flexDirection={'row'} alignItems={'center'}>
                <Text
                  color={'primary'}
                  paddingLeft={'s'}
                  variant={'bold'}
                  fontWeight={'bold'}
                  fontSize={17}>
                  View Profile
                </Text>
                <Icon name={'checkbox-blank-circle'} size={8} />
                <Text
                  color={'primary'}
                  paddingLeft={'s'}
                  variant={'bold'}
                  fontWeight={'bold'}
                  fontSize={17}>
                  Chat
                </Text>
              </Box>
            </Box>
            <Icon name={'close'} size={30} onPress={navigation.closeDrawer} />
          </Box>
        </Box>
      </Box>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box>
          <LinkGroup
            title={'X-Products & Services'}
            initialLinkCount={3}
            links={[
              {
                icon: 'users',
                title: 'XAssist',
                onPress: () => navigation.navigate('Xassist'),
              },
              {
                icon: 'globe',
                title: 'XWorld',
                onPress: () => false,
              },
              {
                icon: 'hash',
                title: 'XTechs',
                onPress: () => false,
              },
              {
                icon: 'link',
                title: 'XConnect',
                onPress: () => false,
              },
              {
                icon: 'heart',
                title: 'XFaiths',
                onPress: () => false,
              },
              {
                icon: 'speaker',
                title: 'XStudios',
                onPress: () => false,
              },
              {
                icon: 'book',
                title: 'XSchools',
                onPress: () => false,
              },
              {
                icon: 'bell',
                title: 'XADS',
                onPress: () => false,
              },
              {
                icon: 'settings',
                title: 'XCDPC',
                onPress: () => false,
              },
              {
                icon: 'eye',
                title: 'XFoundations',
                onPress: () => false,
              },
            ]}
          />

          <Box
            paddingTop={'m'}
            marginBottom={'l'}
            borderTopColor={'background'}
            borderTopWidth={1}>
            <Text color={'primary'}>Discover More</Text>
          </Box>
        </Box>
      </ScrollView>
    </>
  );
};

export default LeftDrawer;
