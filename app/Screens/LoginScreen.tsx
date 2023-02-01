import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, icons, images, SIZES } from '../constants';

const LoginScreen = ({ navigation }: any) => {
    console.log(navigation, 'navigation');
    const [username, setUserName] = useState('');
    const [Password, setPassword] = useState('');

    // const navigation = useNavigation();


    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.gray
            }}>
            <View style={{ flex: 2 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Image source={images.logo} />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={icons.plane}
                    />
                    <Text
                        style={{
                            ...FONTS.h3,
                            color: COLORS.black,
                            marginVertical: SIZES.padding
                        }}>
                        Welcome to Swoop!
                    </Text>
                </View>
            </View>
            <View style={{ flex: 3 }}>
                <View style={{ paddingHorizontal: SIZES.padding }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            width: '100%',
                            alignItems: 'center',
                            marginTop: 50,
                        }}>
                        <Image
                            style={{ height: 24, width: 24, position: 'absolute' }}
                            source={icons.user}
                        />
                        <TextInput
                            placeholder="Username"
                            style={{ ...FONTS.h3, marginLeft: SIZES.padding * 2 }}
                            //   secureTextEntry = {true}
                            placeholderTextColor={COLORS.black}
                            onChangeText={value => {
                                setUserName(value);
                            }}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            width: '100%',
                            alignItems: 'center',
                            marginTop: 30,
                        }}>
                        <Image
                            style={{ height: 24, width: 24, position: 'absolute' }}
                            source={icons.lock}
                        />
                        <TextInput
                            placeholder="Password"
                            style={{ ...FONTS.h3, marginLeft: SIZES.padding * 2 }}
                            secureTextEntry={true}
                            placeholderTextColor={COLORS.black}
                            onChangeText={value => {
                                setPassword(value);
                            }}
                        />
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <TouchableOpacity>
                            <Text
                                style={{
                                    ...FONTS.h4,
                                    color: COLORS.red,
                                    textDecorationLine: 'underline',
                                }}>
                                Forgot Password
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: SIZES.padding }}>
                        <TouchableOpacity
                            style={{
                            }}
                            onPress={() => navigation.navigate('MyCustomTabs')}
                        >
                            <Text style={{ ...FONTS.h2, color: COLORS.black }}>
                                Log In
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ borderColor: COLORS.darkGray, borderBottomWidth: 1, width: SIZES.width / 4 }}></View>
                        <Text style={{ marginHorizontal: SIZES.padding / 2, color: COLORS.darkGray, ...FONTS.body3 }}>or continue with</Text>
                        <View style={{ borderColor: COLORS.darkGray, borderBottomWidth: 1, width: SIZES.width / 4 }}></View>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginVertical: SIZES.padding
                        }}>
                        <TouchableOpacity style={{ marginHorizontal: SIZES.padding }}>
                            <Image
                                style={{ height: 27, width: 27 }}
                                source={icons.Google}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: SIZES.padding }}>
                            <Image
                                style={{ height: 32, width: 27, }}
                                source={icons.Apple}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: SIZES.padding }}>
                            <Image
                                style={{ height: 27, width: 27, }}
                                source={icons.Facebook}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: SIZES.padding, }}>
                        <Text style={{ ...FONTS.h4, color: COLORS.black, marginRight: SIZES.padding / 4 }}>
                            Not a member?
                        </Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('SignUpScreen')}>
                            <Text style={{ ...FONTS.h4, color: COLORS.red, textDecorationLine: 'underline' }}>
                                Create Account
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;
