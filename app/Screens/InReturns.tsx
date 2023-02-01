import React, {
    useState
} from 'react'
import { Image, Text, TextInput, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';
import DatePicker from 'react-native-date-picker'

export default function InReturns({ navigation }: any) {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: COLORS.gray, paddingVertical: SIZES.padding * 2 }}>
            <View style={{ marginHorizontal: SIZES.padding, }}>
                <View
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={icons.chevronLeft}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Image
                            source={icons.right}
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

                            source={icons.ribbon}
                        />
                        <Text style={{ color: COLORS.darkGray, ...FONTS.h3, ...styles.inputField }}>Duty Type</Text>
                        <Image
                            style={{ marginLeft: SIZES.padding / 2 }}
                            source={icons.down}
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
                        <Image source={icons.takeoff} />
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
                                <Text>13:05z</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, width: SIZES.width / 12, borderColor: COLORS.darkGray, marginHorizontal: SIZES.padding / 2 }}></View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={icons.smallAeroplan} />
                                <Text>Duration: 2:35h</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, width: SIZES.width / 12, borderColor: COLORS.darkGray, marginHorizontal: SIZES.padding / 2 }}></View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={{ color: COLORS.black, fontWeight: '500' }}>BRS</Text>
                                <Text>15:40z</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    marginVertical: SIZES.padding / 2,

                    flexDirection: 'row',
                }}>
                    <View>
                        <Image source={icons.takeoff} />
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
                                <Text>16:05z</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, width: SIZES.width / 12, borderColor: COLORS.darkGray, marginHorizontal: SIZES.padding / 2 }}></View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={icons.smallAeroplan} />
                                <Text>Duration: 2:35h</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, width: SIZES.width / 12, borderColor: COLORS.darkGray, marginHorizontal: SIZES.padding / 2 }}></View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={{ color: COLORS.black, fontWeight: '500' }}>FAO</Text>
                                <Text>18:40z</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    marginVertical: SIZES.padding / 2,

                    flexDirection: 'row',
                }}>
                    <View>
                        <Image source={icons.takeoff} />
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
                                <Text>19:05z</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, width: SIZES.width / 12, borderColor: COLORS.darkGray, marginHorizontal: SIZES.padding / 2 }}></View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={icons.smallAeroplan} />
                                <Text>Duration: 2:35h</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, width: SIZES.width / 12, borderColor: COLORS.darkGray, marginHorizontal: SIZES.padding / 2 }}></View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={{ color: COLORS.black, fontWeight: '500' }}>VLC</Text>
                                <Text>20:30z</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    marginVertical: SIZES.padding / 2,

                    flexDirection: 'row',
                }}>
                    <View>
                        <Image source={icons.takeoff} />
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
                <Image source={icons.comment} />
                <TextInput
                    placeholder="Commnet"
                    style={{ ...FONTS.h3, marginLeft: SIZES.padding }}
                    placeholderTextColor={COLORS.black}
                />
            </View>
        </KeyboardAvoidingView>
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


