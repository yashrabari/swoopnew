import React, { useContext, useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { icons, COLORS, SIZES, FONTS } from '../constants';
import { ThemeContext } from '../Contexts/ThemeContext';

const MySwapDetailsScreen = ({ navigation }: any) => {
    const [isOpen, setIsOpen] = useState(false)



    const { isDark } = useContext(ThemeContext)



    return (
        <View style={{ flex: 1, backgroundColor: COLORS.gray, paddingVertical: SIZES.padding * 2 }}>
            <View style={{ marginHorizontal: SIZES.padding }}>
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

                </View>
                <View style={{ marginVertical: SIZES.padding }}>
                    <Text style={{ ...FONTS.h1, color: COLORS.black }}>My Swaps</Text>
                    <Text style={{ ...FONTS.body4, color: COLORS.black }}>Tuesday, 18th October 2022</Text>
                </View>


                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <View>
                        <Text style={{ ...FONTS.h4, marginVertical: SIZES.padding / 8 }}>Sun, 23nd Oct 2022</Text>
                        <Text style={{ ...FONTS.h3, marginVertical: SIZES.padding / 8, color: COLORS.black, fontWeight: '600' }}>
                            FA0 - BRS - FAO - VLC - FAO
                        </Text>
                        <Image
                            source={isDark ? icons.ic_exchange_dark : icons.ic_exchange_light}
                            style={{ width: 16, height: 16, marginVertical: SIZES.padding / 8 }}
                        />
                        <Text style={{ ...FONTS.h4, marginVertical: SIZES.padding / 8, color: COLORS.black, }}>
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
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: SIZES.padding }}>
                    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', }}>
                        <View style={{ width: SIZES.base, height: SIZES.base, borderRadius: SIZES.base, backgroundColor: COLORS.white }}></View>
                        <Text style={{ ...FONTS.h4, color: COLORS.red, marginLeft: SIZES.padding }}>STANDBY</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Text style={{ color: COLORS.red }}>13:00z</Text>
                        <Image source={icons.ic_plan_red_light} style={{ width: 24, height: 24, marginHorizontal: SIZES.padding / 2 }} />
                        <Text style={{ color: COLORS.red }}>23:00z</Text>
                    </View>
                </View>
                <View style={{
                    marginVertical: SIZES.padding / 2,
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Text style={{ ...FONTS.h3, color: COLORS.black }}>Decline</Text>
                            <Image
                                source={isDark ? icons.ic_close_dark : icons.ic_close_light}
                                style={{ width: 27, height: 27, marginHorizontal: SIZES.padding }}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Text style={{ ...FONTS.h3, color: COLORS.black }}>Accept</Text>
                            <Image
                                source={isDark ? icons.ic_check_dark : icons.ic_check_light}
                                style={{ width: 27, height: 27, marginHorizontal: SIZES.padding }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default MySwapDetailsScreen;
