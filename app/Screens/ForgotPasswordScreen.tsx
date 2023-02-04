import React, { useContext, useState } from 'react';
import { Image, SafeAreaView, Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { COLORS, FONTS, icons, SIZES } from '../constants';
import { ThemeContext } from '../Contexts/ThemeContext';

const ForgotPasswordScreen = ({ navigation }: any) => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isChecked, setIsChecked] = useState(false)
    const [isTCChecked, setIsTCChecked] = useState(false)

    const { isDark, toggleDark } = useContext(ThemeContext)

    return (
        <View style={{ flex: 1, backgroundColor: isDark ? COLORS.bgBlack : COLORS.gray, paddingVertical: SIZES.padding * 2 }}>
            <View style={{ marginHorizontal: SIZES.padding, }}>
                <View
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={isDark ? icons.ic_back_dark : icons.ic_back_light}
                            style={{ width: 28, height: 28 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Image
                            source={isDark ? icons.ic_check_dark : icons.ic_check_light}
                            style={{ width: 28, height: 28 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: SIZES.padding }}>
                    <Text style={{ ...FONTS.h1, color: isDark ? COLORS.golden : COLORS.black }}>Forgot Password</Text>
                    <Text style={{ ...FONTS.body5, color: isDark ? COLORS.golden : COLORS.black }}>Please enter your email address to receive a verification code.
                    </Text>
                </View>
            </View>
            <Swiper
                style={{ marginHorizontal: SIZES.padding, }}
                loop={false}
                showsPagination={false}
                scrollEnabled={false}
            >



                <View style={{ flex: 1 }}>
                    <View
                        style={styles.inputFieldComponent}>
                        <Image
                            source={isDark ? icons.ic_email_dark : icons.ic_email_light}
                            style={{ width: 24, height: 24 }}
                        />
                        <TextInput
                            placeholder="Email"
                            cursorColor={isDark ? COLORS.golden : COLORS.black}
                            style={[styles.inputField, { color: isDark ? COLORS.golden : COLORS.black }]}
                            placeholderTextColor={isDark ? COLORS.golden : COLORS.black}
                        />
                    </View>
                </View>
                <View style={{ flex: 1 }}>

                </View>
                <View style={{ flex: 1 }}><Text>This is line3.</Text></View>

            </Swiper>
            <View style={styles.bottomPart}>
                <Text style={{ ...FONTS.body4, color: isDark ? COLORS.golden : COLORS.black }}>You remember your password? </Text>
                <Text style={{ ...FONTS.body4, color: COLORS.red, textDecorationLine: 'underline' }}>Login</Text>
            </View>
        </View>
    );
};

export default ForgotPasswordScreen;


const styles = StyleSheet.create({
    midPart: {
        flex: 4,
        flexDirection: 'row',

    },
    form: {
        flex: 1,
        marginHorizontal: SIZES.padding,
        justifyContent: 'space-around'
    },
    inputFieldComponent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputField: {
        marginLeft: SIZES.padding,
        ...FONTS.h3,
    },
    elipsPart: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    elips: {
        marginVertical: SIZES.padding
    },
    bottomPart: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    horizontalElips: {
        marginHorizontal: SIZES.padding
    },


    checkBoxContainer: {
        marginTop: SIZES.padding / 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})






