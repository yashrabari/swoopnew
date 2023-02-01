import { useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MySwapScreen from '../Screens/MySwapScreen';
import { icons, COLORS, SIZES, FONTS } from '../constants';




import SettingsScreens from '../Screens/SettingsScreens';
import AllSwapScreen from '../Screens/AllSwapsScreen';
import InReturns from '../Screens/InReturns';

const Tab = createBottomTabNavigator();


function CustomBottomTab({ state, descriptors, navigation }: any) {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <View>

            {
                isOpen && (
                    <View style={{
                        zIndex: -1,
                        flexDirection: 'row',
                        position: 'absolute',
                        bottom: SIZES.padding * 2,
                        backgroundColor: COLORS.black,
                        borderRadius: SIZES.base * 5,
                        right: SIZES.padding * 2,
                        width: SIZES.width * .8,
                        justifyContent: 'space-around',
                        paddingHorizontal: SIZES.padding,
                        paddingVertical: SIZES.padding / 1.5,
                        elevation: 15
                    }}>
                        <TouchableOpacity
                            onPress={() => {
                            }}>
                            <Image
                                style={{ tintColor: 'white' }}
                                source={icons.search}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('InReturns')
                            }}>
                            <Image
                                style={{ tintColor: 'white' }}
                                source={icons.repeat}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('MySwapScreen')}>

                            <Image
                                style={{ tintColor: 'white' }}
                                source={icons.user}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SettingScreen')}>
                            <Image
                                style={{ tintColor: 'white' }}
                                source={icons.settings}
                            />
                        </TouchableOpacity>
                    </View>
                )
            }
            <View style={{
                zIndex: 1,
                position: 'absolute',
                bottom: SIZES.padding * 3,
                right: SIZES.padding,
            }}>
                <TouchableOpacity
                    onPress={() => setIsOpen(!isOpen)}
                >
                    <Image
                        style={{}}
                        source={isOpen ? icons.close : icons.group}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}



export default function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='Home'
            tabBar={props => <CustomBottomTab {...props} />}
        >
            <Tab.Screen name="Home" component={AllSwapScreen} />
            <Tab.Screen name="MySwapScreen" component={MySwapScreen} />
            <Tab.Screen name="SettingScreen" component={SettingsScreens} />
            <Tab.Screen name="InReturns" component={InReturns} />
        </Tab.Navigator>
    );
}