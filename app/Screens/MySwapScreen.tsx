import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { icons, COLORS, SIZES, FONTS } from '../constants';

const MySwapScreen = ({ navigation }: any) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.gray, paddingVertical: SIZES.padding * 2 }}>
            <View style={{ marginHorizontal: SIZES.padding }}>
                <View
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image
                            source={icons.vector}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('CreateSwapScreen')}>
                        <Image
                            source={icons.plus}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: SIZES.padding }}>
                    <Text style={{ ...FONTS.h1, color: COLORS.black }}>My Swaps</Text>
                    <Text style={{ ...FONTS.body4, color: COLORS.black }}>Tuesday, 18th October 2022</Text>
                </View>








                <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <View>
                            <Text style={{ ...FONTS.h4, marginVertical: SIZES.padding / 8 }}>Sat, 22nd Oct 2022</Text>
                            <Text style={{ ...FONTS.h3, marginVertical: SIZES.padding / 8, color: COLORS.black, fontWeight: '600' }}>
                                FA0 - BRS - FAO - VLC - FAO
                            </Text>
                            <Image
                                style={{
                                    marginVertical: SIZES.padding / 8
                                }}
                                source={icons.combinedShape}
                            />
                            <Text style={{ ...FONTS.h4, marginVertical: SIZES.padding / 8, color: COLORS.black, }}>
                                OFF
                            </Text>
                        </View>
                        <View>
                            <Image source={icons.greenCircleRight} />
                        </View>
                    </View>
                    {
                        isOpen && (
                            <View style={{
                                marginVertical: SIZES.padding,
                                flexDirection: 'row',
                                justifyContent: 'space-around'
                            }}>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                        <Image style={{ tintColor: COLORS.blue, marginHorizontal: SIZES.padding }} source={icons.user} />
                                        <Text style={{ ...FONTS.h3, color: COLORS.blue }}>ESTIMP</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                        <Text style={{ ...FONTS.h3, color: COLORS.black }}>DELETE</Text>
                                        <Image style={{ tintColor: COLORS.black, marginHorizontal: SIZES.padding }} source={icons.x} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                </TouchableOpacity>
                <View style={{
                    borderWidth: .5,
                    borderColor: COLORS.darkGray,
                    marginVertical: SIZES.padding / 2
                }}></View>

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
                            style={{
                                marginVertical: SIZES.padding / 8
                            }}
                            source={icons.combinedShape}
                        />
                        <Text style={{ ...FONTS.h4, marginVertical: SIZES.padding / 8, color: COLORS.black, }}>
                            STANDBY
                        </Text>
                    </View>

                </View>
            </View>
        </View>
    );
};

export default MySwapScreen;
