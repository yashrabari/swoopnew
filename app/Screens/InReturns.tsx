import React, {
    useContext,
    useState
} from 'react'
import { Image, Text, TextInput, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';
import DatePicker from 'react-native-date-picker'
import { ThemeContext } from '../Contexts/ThemeContext';
import CustomDropDown from '../Components/CustomDropDown';

export default function InReturns({ navigation }: any) {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const { isDark } = useContext(ThemeContext)

    return (
        <ScrollView style={{ flex: 1, backgroundColor: COLORS.gray, paddingVertical: SIZES.padding * 2, }}>
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
                    <Text style={{ ...FONTS.h1, color: COLORS.black }}>In Return</Text>
                    <Text style={{ ...FONTS.body4, color: COLORS.black }}>Tuesday, 18th October 2022</Text>
                </View>
            </View>
            <View style={styles.midPart}>
                <View style={styles.form}>

                    <View
                        style={styles.inputFieldComponent}>
                        <Image
                            source={isDark ? icons.ic_duty_dark : icons.ic_duty_light}
                            style={{ width: 27, height: 27 }}
                        />
                        <Text style={{ color: COLORS.darkGray, ...FONTS.h3, ...styles.inputField }}>Duty Type</Text>
                        <Image
                            style={{ width: 16, height: 16, marginLeft: SIZES.padding * 2 }}
                            source={isDark ? icons.ic_down_dark : icons.ic_down_light}
                        />

                    </View>


                </View>

            </View>
            <View style={{
                flex: 1,
                paddingHorizontal: SIZES.padding,
                marginVertical: SIZES.padding
            }}>
                <View style={{
                    marginVertical: SIZES.padding / 2,

                    flexDirection: 'row',
                }}>
                    <View>
                        <Image
                            source={isDark ? icons.ic_planline_dark : icons.ic_planline_light}
                            style={{ width: 27, height: 27 }}
                        />
                    </View>
                    <View style={{
                        marginHorizontal: SIZES.padding
                    }}>
                        <View>
                            <Text style={{
                                fontSize: SIZES.h3,
                                color: COLORS.black,
                                fontWeight: '500'
                            }}>FR8249</Text>
                        </View>
                        <View style={{ marginVertical: SIZES.padding / 4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ alignItems: 'flex-start' }}>
                                <Text style={{ color: COLORS.black, fontWeight: '500' }}>FAO</Text>
                                <Text style={{ color: COLORS.black }}>13:05z</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, width: SIZES.width / 12, borderColor: COLORS.darkGray, marginHorizontal: SIZES.padding / 2 }}></View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={isDark ? icons.ic_logo_icon_dark : icons.ic_logo_icon_light}
                                    style={{ width: 18, height: 18 }}
                                />
                                <Text style={{ color: COLORS.black }}>Duration: 2:35h</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, width: SIZES.width / 12, borderColor: COLORS.darkGray, marginHorizontal: SIZES.padding / 2 }}></View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={{ color: COLORS.black, fontWeight: '500' }}>BRS</Text>
                                <Text style={{ color: COLORS.black }}>15:40z</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    marginVertical: SIZES.padding / 2,

                    flexDirection: 'row',
                }}>
                    <View>
                        <Image
                            source={isDark ? icons.ic_planline_dark : icons.ic_planline_light}
                            style={{ width: 27, height: 27 }}
                        />
                    </View>
                    <View style={{
                        marginHorizontal: SIZES.padding
                    }}>
                        <View>
                            <Text style={{
                                fontSize: SIZES.h3,
                                color: COLORS.black,
                                fontWeight: '500'
                            }}>FR8248</Text>
                        </View>
                        <View style={{ marginVertical: SIZES.padding / 4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ alignItems: 'flex-start' }}>
                                <Text style={{ color: COLORS.black, fontWeight: '500' }}>BRS</Text>
                                <Text style={{ color: COLORS.black }}>16:05z</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, width: SIZES.width / 12, borderColor: COLORS.darkGray, marginHorizontal: SIZES.padding / 2 }}></View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={isDark ? icons.ic_logo_icon_dark : icons.ic_logo_icon_light}
                                    style={{ width: 18, height: 18 }}
                                />
                                <Text style={{ color: COLORS.black }}>Duration: 2:35h</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, width: SIZES.width / 12, borderColor: COLORS.darkGray, marginHorizontal: SIZES.padding / 2 }}></View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={{ color: COLORS.black, fontWeight: '500' }}>FAO</Text>
                                <Text style={{ color: COLORS.black }}>18:40z</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    marginVertical: SIZES.padding / 2,

                    flexDirection: 'row',
                }}>
                    <View>
                        <Image
                            source={isDark ? icons.ic_planline_dark : icons.ic_planline_light}
                            style={{ width: 27, height: 27 }}
                        />
                    </View>
                    <View style={{
                        marginHorizontal: SIZES.padding
                    }}>
                        <View>
                            <Text style={{
                                fontSize: SIZES.h3,
                                color: COLORS.black,
                                fontWeight: '500'
                            }}>FR8930</Text>
                        </View>
                        <View style={{ marginVertical: SIZES.padding / 4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ alignItems: 'flex-start' }}>
                                <Text style={{ color: COLORS.black, fontWeight: '500' }}>FAO</Text>
                                <Text style={{ color: COLORS.black }}>19:05z</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, width: SIZES.width / 12, borderColor: COLORS.darkGray, marginHorizontal: SIZES.padding / 2 }}></View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={isDark ? icons.ic_logo_icon_dark : icons.ic_logo_icon_light}
                                    style={{ width: 18, height: 18 }}
                                />
                                <Text style={{ color: COLORS.black }}>Duration: 2:35h</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, width: SIZES.width / 12, borderColor: COLORS.darkGray, marginHorizontal: SIZES.padding / 2 }}></View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={{ color: COLORS.black, fontWeight: '500' }}>VLC</Text>
                                <Text style={{ color: COLORS.black }}>20:30z</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    marginVertical: SIZES.padding / 2,

                    flexDirection: 'row',
                }}>
                    <View>
                        <Image
                            source={isDark ? icons.ic_planline_dark : icons.ic_planline_light}
                            style={{ width: 27, height: 27 }}
                        />
                    </View>
                    <View style={{
                        marginHorizontal: SIZES.padding
                    }}>
                        <View>
                            <Text style={{
                                fontSize: SIZES.h3,
                                color: COLORS.darkGray,
                            }}>4th Sector Flight Number</Text>
                        </View>

                    </View>
                </View>
            </View>
            <View style={{ marginHorizontal: SIZES.padding, flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                <Image
                    source={isDark ? icons.ic_comment_dark : icons.ic_comment_light}
                    style={{ width: 27, height: 27 }}
                />
                <TextInput
                    placeholder="Commnet"
                    style={{ ...FONTS.h3, marginLeft: SIZES.padding }}
                    placeholderTextColor={COLORS.black}
                />
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    midPart: {
        flexDirection: 'row',
    },
    form: {
        flex: 1,
        marginHorizontal: SIZES.padding,
    },
    inputFieldComponent: {
        marginVertical: SIZES.padding / 2,
        flexDirection: 'row',
        alignItems: 'center',
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


