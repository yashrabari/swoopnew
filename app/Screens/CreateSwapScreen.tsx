import React, {
    useState,
    useContext
} from 'react'
import { Image, Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';
import DatePicker from 'react-native-date-picker'
import { ThemeContext } from '../Contexts/ThemeContext';

export default function CreateSwapScreen({ navigation }: any) {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)


    const { isDark } = useContext(ThemeContext)


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
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Image
                            source={isDark ? icons.ic_check_dark : icons.ic_check_light}
                            style={{ width: 28, height: 28 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: SIZES.padding }}>
                    <Text style={{ ...FONTS.h1, color: isDark ? COLORS.golden : COLORS.black }}>Create Swap</Text>
                    <Text style={{ ...FONTS.body4, color: isDark ? COLORS.golden : COLORS.black }}>Tuesday, 18th October 2022</Text>
                </View>
            </View>
            <View style={styles.midPart}>
                <View style={styles.form}>
                    <TouchableOpacity onPress={() => setOpen(true)}>
                        <View
                            style={styles.inputFieldComponent}>
                            <Image
                                source={isDark ? icons.ic_date_dark : icons.ic_date_light}
                                style={{ width: 27, height: 27 }}
                            />
                            <Text style={{ color: isDark ? COLORS.lightGolden : COLORS.darkGray, ...FONTS.h3, ...styles.inputField }}>Date</Text>

                        </View>
                    </TouchableOpacity>
                    <DatePicker

                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                    <View
                        style={{ ...styles.inputFieldComponent, alignItems: 'center' }}>
                        <Image
                            source={isDark ? icons.ic_duty_dark : icons.ic_duty_light}
                            style={{ width: 27, height: 27 }}
                        />
                        <Text style={{ color: isDark ? COLORS.lightGolden : COLORS.darkGray, ...FONTS.h3, ...styles.inputField }}>Duty Type</Text>
                        <Image
                            source={isDark ? icons.ic_down_dark : icons.ic_down_light}
                            style={{ marginHorizontal: SIZES.padding * 2, width: 16, height: 16 }}
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
                                color: isDark ? COLORS.golden : COLORS.black,
                                fontWeight: '500'
                            }}>FR8249</Text>
                        </View>
                        <View style={{ marginVertical: SIZES.padding / 4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ alignItems: 'flex-start' }}>
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black, fontWeight: '500' }}>FAO</Text>
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black }}>13:05z</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, width: SIZES.width / 12, borderColor: COLORS.darkGray, marginHorizontal: SIZES.padding / 2 }}></View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={isDark ? icons.ic_plan_dark : icons.ic_plan_light}
                                    style={{ width: 27, height: 27 }}
                                />
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black }}>Duration: 2:35h</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, width: SIZES.width / 12, borderColor: COLORS.darkGray, marginHorizontal: SIZES.padding / 2 }}></View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black, fontWeight: '500' }}>BRS</Text>
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black }}>15:40z</Text>
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
                                color: isDark ? COLORS.golden : COLORS.black,
                                fontWeight: '500'
                            }}>FR8248</Text>
                        </View>
                        <View style={{ marginVertical: SIZES.padding / 4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ alignItems: 'flex-start' }}>
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black, fontWeight: '500' }}>BRS</Text>
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black }}>16:05z</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, width: SIZES.width / 12, borderColor: COLORS.darkGray, marginHorizontal: SIZES.padding / 2 }}></View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={isDark ? icons.ic_plan_dark : icons.ic_plan_light}
                                    style={{ width: 27, height: 27 }}
                                />
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black }}>Duration: 2:35h</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, width: SIZES.width / 12, borderColor: COLORS.darkGray, marginHorizontal: SIZES.padding / 2 }}></View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black, fontWeight: '500' }}>FAO</Text>
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black }}>18:40z</Text>
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
                                color: isDark ? COLORS.golden : COLORS.black,
                                fontWeight: '500'
                            }}>FR8930</Text>
                        </View>
                        <View style={{ marginVertical: SIZES.padding / 4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ alignItems: 'flex-start' }}>
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black, fontWeight: '500' }}>FAO</Text>
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black }}>19:05z</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, width: SIZES.width / 12, borderColor: COLORS.darkGray, marginHorizontal: SIZES.padding / 2 }}></View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={isDark ? icons.ic_plan_dark : icons.ic_plan_light}
                                    style={{ width: 27, height: 27 }}
                                />
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black }}>Duration: 2:35h</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, width: SIZES.width / 12, borderColor: COLORS.darkGray, marginHorizontal: SIZES.padding / 2 }}></View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black, fontWeight: '500' }}>VLC</Text>
                                <Text style={{ color: isDark ? COLORS.golden : COLORS.black }}>20:30z</Text>
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
                                color: isDark ? COLORS.lightGolden : COLORS.darkGray,
                            }}>4th Sector Flight Number</Text>
                        </View>

                    </View>
                </View>
            </View>
        </View>
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


