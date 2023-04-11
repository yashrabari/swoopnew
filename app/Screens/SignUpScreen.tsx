import React, { useContext, useState } from 'react';
import { Image, SafeAreaView, Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { signUp } from '../apis/auth';
import { COLORS, FONTS, icons, SIZES } from '../constants';
import { ThemeContext } from '../Contexts/ThemeContext';

const SignUpScreen = ({ navigation }: any) => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [index, setIndex] = useState(0)
    const [position, setPosition] = useState("")
    const [isTCChecked, setIsTCChecked] = useState(false)

    const { isDark } = useContext(ThemeContext)


    const [dotIndex, setDotIndex] = useState({
        firstIndex: false,
        secondIndex: false,
        thirdIndex: false,
        fourthIndex: false,
        fifthIndex: false,
        sixthIndex: false,
        seventhIndex: false,
        eighthIndex: false
    })


    return (
        <Swiper
            index={index}
            loop={false}
            activeDot={<View style={{ backgroundColor: COLORS.white, marginHorizontal: SIZES.padding / 2, width: SIZES.base, height: SIZES.base, borderRadius: SIZES.base, }} />}
            dot={<View style={{ backgroundColor: COLORS.black, marginHorizontal: SIZES.padding / 2, width: SIZES.base, height: SIZES.base, borderRadius: SIZES.base, }} />}
        >
            <View style={{ flex: 1, backgroundColor: isDark ? COLORS.bgBlack : COLORS.gray, paddingTop: SIZES.padding * 3 }}>
                <View style={{ marginHorizontal: SIZES.padding, }}>
                    <View
                        style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                        }}>
                        <Image
                            source={isDark ? icons.ic_swoop_icon_dark : icons.ic_swoop_icon_light}
                            style={{ width: 28, height: 28 }}
                        />
                        <TouchableOpacity onPress={() => setIndex(index + 1)}>
                            <Image
                                source={isDark ? icons.ic_check_dark : icons.ic_check_light}
                                style={{ width: 28, height: 28 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginVertical: SIZES.padding }}>
                        <Text style={{ ...FONTS.h1, color: isDark ? COLORS.golden : COLORS.black }}>Create Account</Text>
                    </View>
                </View>
                <View style={styles.midPart}>
                    <View style={styles.form}>
                        <View
                            style={styles.inputFieldComponent}>
                            <Image
                                source={isDark ? icons.ic_user_dark : icons.ic_user_light}
                                style={{ width: 24, height: 24 }}
                            />
                            <TextInput
                                placeholder="Username"
                                cursorColor={isDark ? COLORS.gray : COLORS.black}
                                style={[styles.inputField, { color: isDark ? COLORS.gray : COLORS.black }]}
                                placeholderTextColor={isDark ? COLORS.gray : COLORS.black}
                                onChangeText={value => {
                                    setUserName(value);
                                    if (value) {
                                        setDotIndex({ ...dotIndex, firstIndex: true })
                                    } else {
                                        setDotIndex({ ...dotIndex, firstIndex: false })
                                    }
                                }}
                            />
                        </View>
                        <View
                            style={styles.inputFieldComponent}>
                            <Image
                                source={isDark ? icons.ic_email_dark : icons.ic_email_light}
                                style={{ width: 24, height: 24 }}
                            />
                            <TextInput
                                placeholder="Email"
                                cursorColor={isDark ? COLORS.gray : COLORS.black}
                                style={[styles.inputField, { color: isDark ? COLORS.gray : COLORS.black }]}
                                placeholderTextColor={isDark ? COLORS.gray : COLORS.black}
                                onChangeText={value => {
                                    setEmail(value);
                                    if (value) {
                                        setDotIndex({ ...dotIndex, secondIndex: true })
                                    } else {
                                        setDotIndex({ ...dotIndex, secondIndex: false })
                                    }
                                }}
                            />
                        </View>

                        <View
                            style={styles.inputFieldComponent}>
                            <Image
                                source={isDark ? icons.ic_lock_dark : icons.ic_lock_light}
                                style={{ width: 24, height: 24 }}
                            />
                            <TextInput
                                placeholder="Password"

                                secureTextEntry={true}
                                cursorColor={isDark ? COLORS.gray : COLORS.black}
                                style={[styles.inputField, { color: isDark ? COLORS.gray : COLORS.black }]}
                                placeholderTextColor={isDark ? COLORS.gray : COLORS.black}
                                onChangeText={value => {
                                    setPassword(value);
                                    if (value) {
                                        setDotIndex({ ...dotIndex, thirdIndex: true })
                                    } else {
                                        setDotIndex({ ...dotIndex, thirdIndex: false })
                                    }
                                }}
                            />
                        </View>
                        <View
                            style={styles.inputFieldComponent}>
                            <Image
                                source={isDark ? icons.ic_lock_dark : icons.ic_lock_light}
                                style={{ width: 24, height: 24 }}
                            />
                            <TextInput
                                placeholder="Confirm Password"
                                secureTextEntry={true}
                                cursorColor={isDark ? COLORS.gray : COLORS.black}
                                style={[styles.inputField, { color: isDark ? COLORS.gray : COLORS.black }]}
                                placeholderTextColor={isDark ? COLORS.gray : COLORS.black}
                                onChangeText={value => {
                                    setConfirmPassword(value);
                                    if (value) {
                                        setDotIndex({ ...dotIndex, fourthIndex: true })
                                    } else {
                                        setDotIndex({ ...dotIndex, fourthIndex: false })
                                    }
                                }}
                            />
                        </View>
                        <View
                            style={styles.inputFieldComponent}>
                            <TouchableOpacity onPress={() => setIsTCChecked(!isTCChecked)}>
                                <Image style={{ width: 27, height: 27 }} source={!isTCChecked ? (isDark ? icons.ic_check_off_dark : icons.ic_check_off_light) : (isDark ? icons.ic_check_on_dark : icons.ic_check_on_light)} />
                            </TouchableOpacity>
                            <Text
                                style={{ ...styles.inputField, color: isDark ? COLORS.lightGolden : COLORS.darkGray }}
                            >I agree to the </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('TermsNCondition')}>
                                <Text style={{ textDecorationLine: 'underline', color: isDark ? COLORS.lightGolden : COLORS.darkGray }}>Terms & Conditions</Text>

                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.elipsPart}>
                        <View
                            style={{ ...styles.elips, backgroundColor: dotIndex.firstIndex ? COLORS.white : COLORS.black }}
                        >
                        </View>
                        <View style={{ ...styles.elips, backgroundColor: dotIndex.secondIndex ? COLORS.white : COLORS.black }}></View>
                        <View style={{ ...styles.elips, backgroundColor: dotIndex.thirdIndex ? COLORS.white : COLORS.black }}></View>
                        <View style={{ ...styles.elips, backgroundColor: dotIndex.fourthIndex ? COLORS.white : COLORS.black }}></View>
                    </View>
                </View>
                <View style={styles.bottomPart}>


                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: isDark ? COLORS.bgBlack : COLORS.gray, paddingTop: SIZES.padding * 3 }}>
                <View style={{ marginHorizontal: SIZES.padding, }}>
                    <View
                        style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                        }}>
                        <TouchableOpacity onPress={() => setIndex(index - 1)}>
                            <Image
                                source={isDark ? icons.ic_back_dark : icons.ic_back_light}
                                style={{ width: 28, height: 28 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => signUp("hello")}>
                            <Image
                                source={isDark ? icons.ic_check_dark : icons.ic_check_light}
                                style={{ width: 28, height: 28 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginVertical: SIZES.padding }}>
                        <Text style={{ ...FONTS.h1, color: isDark ? COLORS.golden : COLORS.black }}>Create Account</Text>
                    </View>
                </View>
                <View style={styles.midPart}>
                    <View style={styles.form}>
                        <View
                            style={[styles.inputFieldComponent,]}>
                            <Image
                                style={{ width: 27, height: 27 }}
                                source={isDark ? icons.ic_airline_dark : icons.ic_airline_light}
                            />
                            <Text style={[styles.inputField, { color: isDark ? COLORS.lightGolden : COLORS.darkGray }]} >Airlines</Text>

                            <Image
                                style={{ width: 16, height: 16, marginLeft: SIZES.padding * 2 }}
                                source={isDark ? icons.ic_down_dark : icons.ic_down_light}
                            />
                        </View>
                        <View
                            style={styles.inputFieldComponent}>
                            <Image
                                style={{ width: 27, height: 27 }}
                                source={isDark ? icons.ic_location_dark : icons.ic_location_light}
                            />
                            <TextInput
                                placeholder="Homebase"
                                style={[styles.inputField, { color: isDark ? COLORS.lightGolden : COLORS.darkGray }]}
                                placeholderTextColor={isDark ? COLORS.lightGolden : COLORS.darkGray}
                                onChangeText={value => {
                                    setUserName(value);
                                    if (value) {
                                        setDotIndex({ ...dotIndex, sixthIndex: true })
                                    } else {
                                        setDotIndex({ ...dotIndex, sixthIndex: false })
                                    }
                                }}
                            />
                        </View>
                        <View
                            style={styles.inputFieldComponent}>
                            <Image
                                source={isDark ? icons.ic_user_dark : icons.ic_user_light}
                                style={{ width: 27, height: 27 }}
                            />
                            <TextInput
                                placeholder="Crewcode"
                                style={[styles.inputField, { color: isDark ? COLORS.lightGolden : COLORS.darkGray }]}
                                placeholderTextColor={isDark ? COLORS.lightGolden : COLORS.darkGray}
                                onChangeText={value => {
                                    setEmail(value);
                                    if (value) {
                                        setDotIndex({ ...dotIndex, seventhIndex: true })
                                    } else {
                                        setDotIndex({ ...dotIndex, seventhIndex: false })
                                    }
                                }}
                            />
                        </View>

                        <View>
                            <View style={styles.inputFieldComponent}>
                                <Image
                                    source={isDark ? icons.ic_position_dark : icons.ic_position_light}
                                    style={{ width: 27, height: 27 }}
                                />
                                <Text style={[styles.inputField, { color: isDark ? COLORS.lightGolden : COLORS.darkGray }]} >Position</Text>
                            </View>
                            <View style={{ marginHorizontal: SIZES.padding * 2 }}>
                                <View style={styles.checkBoxContainer}>
                                    <Text style={{ color: isDark ? COLORS.golden : COLORS.black }}>Captain</Text>
                                    <TouchableOpacity onPress={() => {
                                        setPosition("captain")
                                        setDotIndex({ ...dotIndex, eighthIndex: true })
                                    }}>
                                        <Image style={{ width: 24, height: 24 }} source={position === "captain" ? (isDark ? icons.ic_check_on_dark : icons.ic_check_on_light) : (isDark ? icons.ic_check_off_dark : icons.ic_check_off_light)} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.checkBoxContainer}>
                                    <Text style={{ color: isDark ? COLORS.golden : COLORS.black }}>First Officer</Text>
                                    <TouchableOpacity onPress={() => {
                                        setPosition("firstOfficer")
                                        setDotIndex({ ...dotIndex, eighthIndex: true })
                                    }}>
                                        <Image style={{ width: 24, height: 24 }} source={position === "firstOfficer" ? (isDark ? icons.ic_check_on_dark : icons.ic_check_on_light) : (isDark ? icons.ic_check_off_dark : icons.ic_check_off_light)} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>
                    <View style={styles.elipsPart}>

                        <View style={{ ...styles.elips, backgroundColor: dotIndex.fifthIndex ? COLORS.white : COLORS.black }}></View>
                        <View style={{ ...styles.elips, backgroundColor: dotIndex.sixthIndex ? COLORS.white : COLORS.black }}></View>
                        <View style={{ ...styles.elips, backgroundColor: dotIndex.seventhIndex ? COLORS.white : COLORS.black }}></View>
                        <View style={{ ...styles.elips, backgroundColor: dotIndex.eighthIndex ? COLORS.white : COLORS.black }}></View>
                    </View>
                </View>
                <View style={styles.bottomPart}>


                </View>
            </View>
        </Swiper>
    );
};

export default SignUpScreen;


const styles = StyleSheet.create({
    midPart: {
        flex: 4,
        flexDirection: 'row',

    },
    form: {
        flex: 4,
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
        color: COLORS.darkGray
    },
    elipsPart: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    elips: {
        marginVertical: SIZES.padding,
        height: SIZES.base,
        width: SIZES.base,
        borderRadius: SIZES.base,
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
        width: SIZES.width * .6,
        marginTop: SIZES.padding / 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})






// <View>
// <Image
//     style={{ height: 5.5, width: 5, marginTop: 17, marginLeft: 380 }}
//     source={icons.ellipseBlack}
// />
// <Image
//     style={{ height: 5.5, width: 5, marginTop: 17, marginLeft: 380 }}
//     source={icons.ellipseBlack}
// />
// <Image
//     style={{ height: 5.5, width: 5, marginTop: 17, marginLeft: 380 }}
//     source={icons.ellipseBlack}
// />
// <Image
//     style={{ height: 5.5, width: 5, marginTop: 17, marginLeft: 380 }}
//     source={icons.ellipseBlack}
// />
// </View>


{/* <View
style={{
  
    flexDirection: 'row',
    justifyContent: 'space-around',
  
}}>
<Image
    source={icons.ellipse}
/>
<Image
    source={icons.ellipseBlack}
/>
</View> */}