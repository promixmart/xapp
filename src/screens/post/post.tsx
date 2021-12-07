import React, {useEffect} from 'react';
import {Box, Text} from '../../constants/ltheme';
import Avatar from '../../components/avatar';
import {TextInput} from 'react-native-gesture-handler';
import {BottomTabList} from '../../routes/tabNavigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import BottomSheet, {ActionItem} from '../../components/sheets/bottom';
import {Modalize} from 'react-native-modalize';
import withHost from '../../hoc/withHost';
type PostScreenNavigationProp = BottomTabNavigationProp<BottomTabList>;

type Props = {
  navigation: PostScreenNavigationProp;
};

const Post: React.FC<Props> = ({navigation}) => {
  const ref = React.useRef<Modalize>(null);

  useEffect(() => {
    setTimeout(() => {
      ref.current?.open();
    }, 1000);
  }, []);

  return (
    <Box flex={1} backgroundColor={'light'}>
      <Box
        marginTop={'s'}
        flexDirection={'row'}
        alignItems={'center'}
        paddingHorizontal={'m'}
        justifyContent={'space-between'}
        borderBottomWidth={1}
        borderBottomColor={'background'}
        paddingBottom={'m'}>
        <Box flexDirection={'row'} alignItems={'center'}>
          <Icon name={'close'} size={30} onPress={() => navigation.goBack()} />
          <Text variant={'bold'} fontSize={20} marginLeft={'sm'}>
            Create
          </Text>
        </Box>
        <Text>Post</Text>
      </Box>
      <Box flex={1} paddingHorizontal={'m'}>
        <Box marginTop={'m'} flexDirection={'row'}>
          <Avatar />
          <Box marginLeft={'m'}>
            <Text variant={'bold'}>Vajid Khan</Text>
            <Box
              marginTop={'s'}
              flexDirection={'row'}
              alignItems={'center'}
              borderWidth={1}
              borderColor={'background'}
              paddingVertical={'s'}
              paddingHorizontal={'m'}
              borderRadius={100}>
              <Icon name={'earth'} size={20} />
              <Box paddingHorizontal={'s'}>
                <Text>Anyone</Text>
              </Box>
              <Icon name={'arrow-down-drop-circle'} size={20} />
            </Box>
          </Box>
        </Box>

        <TextInput
          placeholder={'What do you want to talk about?'}
          multiline
          style={{
            flex: 1,
            fontSize: 20,
            textAlignVertical: 'top',
            color: 'primary',
          }}
        />
        <Text fontSize={18} color={'primary'}>
          # Add hashtag
        </Text>
        <Box flexDirection={'row'} justifyContent={'space-between'}>
          <Box flexDirection={'row'}>
            <Box padding={'s'}>
              <Icon name={'camera'} size={20} />
            </Box>
            <Box padding={'s'}>
              <Icon name={'video'} size={20} />
            </Box>
            <Box padding={'s'}>
              <Icon name={'image'} size={20} />
            </Box>
            <Box padding={'s'}>
              <Icon name={'dots-horizontal'} size={20} />
            </Box>
          </Box>
          <Box padding={'s'} flexDirection={'row'}>
            <Icon name={'message-outline'} size={20} />
            <Text>Anyone</Text>
          </Box>
        </Box>
      </Box>
      <BottomSheet ref={ref}>
        <ActionItem icon={'plus'} title={'Fashion Post'} />
        <ActionItem icon={'home'} title={'Live Events'} />
        <ActionItem icon={'home'} title={'Fashion Brands'} />
        <ActionItem icon={'home'} title={'Fashion Groups'} />
        <ActionItem icon={'home'} title={'Ads'} />
        <ActionItem icon={'home'} title={'Offers'} />
        <ActionItem icon={'home'} title={'Update Wardrobe'} />
      </BottomSheet>
    </Box>
  );
};
export default withHost(Post);
