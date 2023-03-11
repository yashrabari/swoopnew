import React, { useContext, useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { icons, COLORS, SIZES, FONTS } from '../constants';
import { ThemeContext } from '../Contexts/ThemeContext';

const MySwapScreen = ({ navigation }: any) => {
    const [isOpen, setIsOpen] = useState(false)



    const { isDark } = useContext(ThemeContext)



    return (
        <View style={{ flex: 1, backgroundColor: isDark ? COLORS.bgBlack : COLORS.gray, paddingTop: SIZES.padding * 3 }}>
            <View style={{ marginHorizontal: SIZES.padding }}>
                <View
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity onPress={() => navigation.navigate('MySwapScreen')}>
                        <Image
                            source={isDark ? icons.ic_swoop_icon_dark : icons.ic_swoop_icon_light}
                            style={{ width: 28, height: 28 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('CreateSwapScreen')}>
                        <Image
                            source={isDark ? icons.ic_plus_dark : icons.ic_plus_light}
                            style={{ width: 28, height: 28 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: SIZES.padding }}>
                    <Text style={{ ...FONTS.h1, color: isDark ? COLORS.golden : COLORS.black }}>My Swaps</Text>
                    <Text style={{ ...FONTS.body4, color: isDark ? COLORS.golden : COLORS.black }}>Tuesday, 18th October 2022</Text>
                </View>








                <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <View style={{}}>
                            {/* <View > */}
                            <Text style={{ ...FONTS.h4, marginVertical: SIZES.padding / 8, color: isDark ? COLORS.lightGolden : COLORS.darkGray }}>Sat, 22nd Oct 2022</Text>
                            <Text style={{ ...FONTS.h3, marginVertical: SIZES.padding / 8, color: isDark ? COLORS.golden : COLORS.black, fontWeight: '600' }}>
                                FA0 - BRS - FAO - VLC - FAO
                            </Text>
                            <Image
                                source={isDark ? icons.ic_exchange_dark : icons.ic_exchange_light}
                                style={{ width: 16, height: 16, marginVertical: SIZES.padding / 8 }}
                            />
                            <Text style={{ ...FONTS.h4, marginVertical: SIZES.padding / 8, color: isDark ? COLORS.golden : COLORS.black, }}>
                                OFF
                            </Text>
                        </View>
                        <View>
                            <Image
                                source={isDark ? icons.ic_check_green_dark : icons.ic_check_green_light}
                                style={{ width: 27, height: 27, marginVertical: SIZES.padding / 8 }}
                            />
                        </View>
                    </View>
                    {
                        isOpen && (
                            <View style={{
                                marginVertical: SIZES.padding,
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                        <Image
                                            source={isDark ? icons.ic_user_blue_dark : icons.ic_user_blue_light}
                                            style={{ width: 27, height: 27 }}
                                        />
                                        <Text style={{ ...FONTS.h3, color: COLORS.blue, fontWeight: '500', marginHorizontal: SIZES.padding / 2 }}>ESTIMP</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                        <Text style={{ ...FONTS.h3, color: isDark ? COLORS.lightGolden : COLORS.black, fontWeight: '500', marginHorizontal: SIZES.padding / 2 }}>DELETE</Text>
                                        <Image
                                            source={isDark ? icons.ic_close_dark : icons.ic_close_light}
                                            style={{ width: 27, height: 27 }}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                </TouchableOpacity>
                <View style={{
                    borderWidth: .5,
                    borderColor: isDark ? COLORS.lightGolden : COLORS.darkGray,
                    marginVertical: SIZES.padding / 2
                }}></View>

                <TouchableOpacity onPress={() => navigation.navigate('MySwapDetails')}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <View>
                            <Text style={{ ...FONTS.h4, marginVertical: SIZES.padding / 8, color: isDark ? COLORS.lightGolden : COLORS.darkGray }}>Sun, 23nd Oct 2022</Text>
                            <Text style={{ ...FONTS.h3, marginVertical: SIZES.padding / 8, color: isDark ? COLORS.golden : COLORS.black, fontWeight: '600' }}>
                                FA0 - BRS - FAO - VLC - FAO
                            </Text>
                            <Image
                                source={isDark ? icons.ic_exchange_dark : icons.ic_exchange_light}
                                style={{ width: 16, height: 16, marginVertical: SIZES.padding / 8 }}
                            />
                            <Text style={{ ...FONTS.h4, marginVertical: SIZES.padding / 8, color: isDark ? COLORS.golden : COLORS.black, }}>
                                STANDBY
                            </Text>
                        </View>
                        <View>
                            <Image
                                source={isDark ? icons.ic_alert_dark : icons.ic_alert_light}
                                style={{ width: 27, height: 27, marginVertical: SIZES.padding / 8 }}
                            />
                        </View>

                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MySwapScreen;
