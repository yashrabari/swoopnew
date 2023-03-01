import React, { useContext, useState } from 'react';
import { Image, SafeAreaView, Text, TextInput, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';
import { ThemeContext } from '../Contexts/ThemeContext';

export default function ContactUsScreen({ navigation }: any) {

    const { isDark } = useContext(ThemeContext)

    return (
        <View style={{ flex: 1, backgroundColor: isDark ? COLORS.bgBlack : COLORS.gray, paddingTop: SIZES.padding * 3 }}>
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
                    <Text style={{ ...FONTS.h1, color: isDark ? COLORS.golden : COLORS.black }}>Contact Us</Text>
                </View>
            </View>
            <View style={styles.midPart}>
                <View style={styles.form}>
                    <View
                        style={styles.inputFieldComponent}>
                        <Image
                            style={{ width: 27, height: 27 }}
                            source={isDark ? icons.ic_user_dark : icons.ic_user_light}
                        />
                        <TextInput
                            placeholder="Name"
                            style={styles.inputField}
                            placeholderTextColor={isDark ? COLORS.golden : COLORS.darkGray}

                        />
                    </View>
                    <View
                        style={styles.inputFieldComponent}>
                        <Image
                            style={{ width: 27, height: 27 }}
                            source={isDark ? icons.ic_email_dark : icons.ic_email_light}
                        />
                        <TextInput
                            placeholder="Email"
                            style={styles.inputField}
                            placeholderTextColor={isDark ? COLORS.golden : COLORS.darkGray}

                        />
                    </View>
                    <View
                        style={styles.inputFieldComponent}>
                        <Image
                            source={isDark ? icons.ic_lock_dark : icons.ic_lock_light}
                            style={{ width: 27, height: 27 }}
                        />
                        <TextInput
                            placeholder="Subject"
                            style={styles.inputField}
                            placeholderTextColor={isDark ? COLORS.golden : COLORS.darkGray}

                        />
                    </View>

                    <View
                        style={styles.inputFieldComponent}>
                        <Image
                            source={isDark ? icons.ic_comment_dark : icons.ic_comment_light}
                            style={{ width: 27, height: 27 }}
                        />
                        <TextInput
                            placeholder="Message"
                            style={styles.inputField}
                            placeholderTextColor={isDark ? COLORS.golden : COLORS.darkGray}

                        />
                    </View>

                </View>

            </View>
            <View style={styles.bottomPart}>


            </View>
        </View>

    )
}


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






