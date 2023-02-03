import { useNavigation } from '@react-navigation/native';
import React, { useState, useContext } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, icons, images, SIZES } from '../constants';
import { ThemeContext } from '../Contexts/ThemeContext';

const LoginScreen = ({ navigation }: any) => {
    console.log(navigation, 'navigation');
    const [username, setUserName] = useState('');
    const [Password, setPassword] = useState('');

    // const navigation = useNavigation();


    const { isDark } = useContext(ThemeContext)



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
                    <Image source={isDark ? icons.ic_logo_dark : icons.ic_logo_light} style={{ width: 156, height: 70 }} />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: SIZES.padding / 2 }}>
                    <Image
                        source={isDark ? icons.ic_plan_dark : icons.ic_plan_light}
                        style={{ width: 50, height: 50 }}
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
                            alignItems: 'center',
                            marginVertical: SIZES.padding / 2
                        }}>
                        <Image
                            source={isDark ? icons.ic_user_dark : icons.ic_user_light}
                            style={{ width: 27, height: 27 }}
                        />
                        <TextInput
                            placeholder="Username"
                            style={{ ...FONTS.h3, marginLeft: SIZES.padding }}
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
                            alignItems: 'center',
                            marginVertical: SIZES.padding / 2
                        }}>
                        <Image
                            source={isDark ? icons.ic_lock_dark : icons.ic_lock_light}
                            style={{ width: 27, height: 27 }}
                        />
                        <TextInput
                            placeholder="Password"
                            style={{ ...FONTS.h3, marginLeft: SIZES.padding }}
                            secureTextEntry={true}
                            placeholderTextColor={COLORS.black}
                            onChangeText={value => {
                                setPassword(value);
                            }}
                        />
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
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
                                source={isDark ? icons.ic_google_dark : icons.ic_google_dark}
                                style={{ width: 36, height: 36 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: SIZES.padding }}>
                            <Image
                                source={isDark ? icons.ic_apple_dark : icons.ic_apple_light}
                                style={{ width: 36, height: 36 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: SIZES.padding }}>
                            <Image
                                source={isDark ? icons.ic_Facebook_dark : icons.ic_Facebook_light}
                                style={{ width: 36, height: 36 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: SIZES.padding, }}>
                        <Text style={{ ...FONTS.h4, color: COLORS.black, marginRight: SIZES.padding / 4 }}>
                            Not a member?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
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