import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';

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
            <View
                style={{
                    flexDirection: 'row',
                    height: 65,
                    width: 135,
                    marginTop: 137,
                    marginLeft: 129,
                }}>
                <Text style={{ fontSize: 50, color: COLORS.black }}>Sw</Text>
                <Image
                    style={{ height: 25, width: 43, marginTop: 25 }}
                    source={icons.vector}
                />
                <Text style={{ fontSize: 50, color: COLORS.black }}>p</Text>
            </View>
            <Image
                style={{ height: 25, width: 27, marginTop: 90, marginLeft: 190 }}
                source={icons.plane}
            />
            <Text
                style={{
                    fontSize: 15,
                    color: COLORS.black,
                    textAlign: 'center',
                    marginTop: 20,
                }}>
                Welcome to Swoop!
            </Text>
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
                <TouchableOpacity style={{ alignItems: 'flex-end' }} >
                    <Text
                        style={{
                            ...FONTS.h4,
                            color: COLORS.red,
                            textDecorationLine: 'underline',
                        }}>
                        Forgot Password
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                    }}
                    onPress={() => navigation.navigate('CreateAccountScreen')}
                >
                    <Text style={{ fontSize: 15, textAlign: 'center', color: COLORS.black }}>
                        Log In
                    </Text>
                </TouchableOpacity>
                {/* <View style={{ flexDirection: 'row', marginLeft: 75 }}>
                    <View
                        style={{ height: 3, width: 70, backgroundColor: COLORS.darkGray, right: 30 }}
                    />
                    <Text
                        style={{
                            fontSize: 15,
                            textAlign: 'center',
                            color: COLORS.darkGray,
                            bottom: 10,
                        }}>
                        or continue with
                    </Text>
                    <View
                        style={{ height: 3, width: 70, backgroundColor: COLORS.darkGray, left: 30 }}
                    />
                </View> */}
                <View
                    style={{
                        flexDirection: 'row',
                        height: 40,
                        width: 240,
                        marginLeft: 80,
                        justifyContent: 'space-between',
                    }}>
                    <TouchableOpacity>
                        <Image
                            style={{ height: 27, width: 27, top: 7 }}
                            source={icons.Google}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{ height: 32, width: 27, top: 3 }}
                            source={icons.Apple}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{ height: 27, width: 27, top: 7 }}
                            source={icons.Facebook}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: SIZES.padding * 2, }}>
                    <Text style={{ ...FONTS.h4, color: COLORS.black, marginRight: SIZES.padding / 2 }}>
                        Not a member?
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ ...FONTS.h4, color: COLORS.red, textDecorationLine: 'underline' }}>
                            Create Account
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;
