import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { COLORS, FONTS, icons, SIZES } from '../constants';

const SignUpScreen = ({ navigation }: any) => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isChecked, setIsChecked] = useState(false)
    const [isTCChecked, setIsTCChecked] = useState(false)


    return (
        <Swiper loop={false} showsPagination={false}>
            <View style={{ flex: 1, backgroundColor: COLORS.gray, paddingVertical: SIZES.padding * 2 }}>
                <View style={{ marginHorizontal: SIZES.padding, }}>
                    <View
                        style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                        }}>
                        <Image
                            source={icons.vector}
                        />
                        <Image
                            source={icons.right}
                        />
                    </View>
                    <View style={{ marginVertical: SIZES.padding }}>
                        <Text style={{ ...FONTS.h1, color: COLORS.black }}>Create Account</Text>
                    </View>
                </View>
                <View style={styles.midPart}>
                    <View style={styles.form}>
                        <View
                            style={styles.inputFieldComponent}>
                            <Image
                                style={{}}
                                source={icons.user}
                            />
                            <TextInput
                                placeholder="Username"
                                style={styles.inputField}
                                placeholderTextColor={COLORS.black}
                                onChangeText={value => {
                                    setUserName(value);
                                }}
                            />
                        </View>
                        <View
                            style={styles.inputFieldComponent}>
                            <Image

                                source={icons.mail}
                            />
                            <TextInput
                                placeholder="Email"
                                style={styles.inputField}
                                placeholderTextColor={COLORS.black}
                                onChangeText={value => {
                                    setEmail(value);
                                }}
                            />
                        </View>

                        <View
                            style={styles.inputFieldComponent}>
                            <Image

                                source={icons.lock}
                            />
                            <TextInput
                                placeholder="Password"
                                style={styles.inputField}
                                secureTextEntry={true}
                                placeholderTextColor={COLORS.black}
                                onChangeText={value => {
                                    setPassword(value);
                                }}
                            />
                        </View>
                        <View
                            style={styles.inputFieldComponent}>
                            <Image

                                source={icons.lock}
                            />
                            <TextInput
                                placeholder="Confirm Password"
                                style={styles.inputField}
                                secureTextEntry={true}
                                placeholderTextColor={COLORS.black}
                                onChangeText={value => {
                                    setConfirmPassword(value);
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.elipsPart}>
                        <Image
                            style={styles.elips}
                            source={icons.ellipse}
                        />
                        <Image
                            style={styles.elips}
                            source={icons.ellipse}
                        />
                        <Image
                            style={styles.elips}
                            source={icons.ellipseBlack}
                        />
                        <Image
                            style={styles.elips}
                            source={icons.ellipseBlack}
                        />
                    </View>
                </View>
                <View style={styles.bottomPart}>

                    <Image
                        style={styles.horizontalElips}
                        source={icons.ellipse}
                    />
                    <Image
                        style={styles.horizontalElips}
                        source={icons.ellipseBlack}
                    />
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: COLORS.gray, paddingVertical: SIZES.padding * 2 }}>
                <View style={{ marginHorizontal: SIZES.padding, }}>
                    <View
                        style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                        }}>
                        <Image
                            source={icons.chevronLeft}
                        />
                        <TouchableOpacity onPress={() => navigation.navigate('MySwapScreen')}>
                            <Image
                                source={icons.right}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginVertical: SIZES.padding }}>
                        <Text style={{ ...FONTS.h1, color: COLORS.black }}>Create Account</Text>
                    </View>
                </View>
                <View style={styles.midPart}>
                    <View style={styles.form}>
                        <View
                            style={styles.inputFieldComponent}>
                            <Image
                                style={{}}
                                source={icons.mapPin}
                            />
                            <TextInput
                                placeholder="Homebase"
                                style={styles.inputField}
                                placeholderTextColor={COLORS.black}
                                onChangeText={value => {
                                    setUserName(value);
                                }}
                            />
                        </View>
                        <View
                            style={styles.inputFieldComponent}>
                            <Image

                                source={icons.user}
                            />
                            <TextInput
                                placeholder="Crewcode"
                                style={styles.inputField}
                                placeholderTextColor={COLORS.black}
                                onChangeText={value => {
                                    setEmail(value);
                                }}
                            />
                        </View>

                        <View>
                            <View style={styles.inputFieldComponent}>
                                <Image

                                    source={icons.star}
                                />
                                <Text style={styles.inputField} >Position</Text>
                            </View>
                            <View style={{ marginHorizontal: SIZES.padding * 2 }}>
                                <View style={styles.checkBoxContainer}>
                                    <Text>Captaine</Text>
                                    <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
                                        <Image source={isChecked ? icons.circle : icons.rightRound} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.checkBoxContainer}>
                                    <Text>First Officer</Text>
                                    <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
                                        <Image source={!isChecked ? icons.circle : icons.rightRound} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View
                            style={styles.inputFieldComponent}>
                            <TouchableOpacity onPress={() => setIsTCChecked(!isTCChecked)}>
                                <Image source={!isTCChecked ? icons.circle : icons.rightRound} />
                            </TouchableOpacity>
                            <Text
                                style={styles.inputField}
                            >I agree to the Terms & Conditions</Text>
                        </View>
                    </View>
                    <View style={styles.elipsPart}>

                        <Image
                            style={styles.elips}
                            source={icons.ellipseBlack}
                        />
                        <Image
                            style={styles.elips}
                            source={icons.ellipseBlack}
                        />
                        <Image
                            style={styles.elips}
                            source={icons.ellipse}
                        />
                        <Image
                            style={styles.elips}
                            source={icons.ellipse}
                        />
                    </View>
                </View>
                <View style={styles.bottomPart}>

                    <Image
                        style={styles.horizontalElips}
                        source={icons.ellipseBlack}
                    />
                    <Image
                        style={styles.horizontalElips}
                        source={icons.ellipse}
                    />
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
        marginVertical: SIZES.padding
    },
    bottomPart: {
        flex: 2,
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