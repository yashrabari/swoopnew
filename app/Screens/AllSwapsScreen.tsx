import React, { useState } from 'react';
import { Image, FlatList, Text, TouchableOpacity, View } from 'react-native';

import { icons, COLORS, SIZES, FONTS } from '../constants';







const AllSwapScreen = ({ navigation }: any) => {


    const [isOpen, setIsOpen] = useState(false)




    return (
        <View style={{ flex: 1, backgroundColor: COLORS.gray, paddingVertical: SIZES.padding * 2 }}>
            <View style={{ marginHorizontal: SIZES.padding }}>
                <View
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity >
                        <Image
                            source={icons.vector}
                        />
                    </TouchableOpacity>

                </View>
                <View style={{ marginVertical: SIZES.padding }}>
                    <Text style={{ ...FONTS.h1, color: COLORS.black }}>All Swaps</Text>
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
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <Text style={{ ...FONTS.h3, marginVertical: SIZES.padding / 8, color: COLORS.black, fontWeight: '600' }}>
                                    FA0 - BRS - FAO - VLC - FAO
                                </Text>
                                <View style={{
                                    marginLeft: SIZES.padding * 1.75,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text>13:05z</Text>
                                    <Image style={{ marginHorizontal: SIZES.padding / 4 }} source={icons.smallAeroplan} />
                                    <Text>22:25z</Text>

                                </View>
                            </View>
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

                    </View>
                </TouchableOpacity>

                {
                    isOpen && (
                        <View style={{
                            marginVertical: SIZES.padding,
                            flexDirection: 'row',
                            justifyContent: 'space-around'
                        }}>
                            <TouchableOpacity>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <Text style={{ ...FONTS.h3, color: COLORS.black }}>Decline</Text>
                                    <Image style={{ tintColor: COLORS.black, marginHorizontal: SIZES.padding }} source={icons.x} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <Text style={{ ...FONTS.h3, color: COLORS.black }}>Accept</Text>
                                    <Image style={{ tintColor: COLORS.black, marginHorizontal: SIZES.padding }} source={icons.right} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }

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
                        <Text style={{ ...FONTS.h4, marginVertical: SIZES.padding / 8 }}>Sat, 22nd Oct 2022</Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Text style={{ ...FONTS.h3, marginVertical: SIZES.padding / 8, color: COLORS.black, fontWeight: '600' }}>
                                FA0 - BRS - FAO - VLC - FAO
                            </Text>
                            <View style={{
                                marginLeft: SIZES.padding * 1.75,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text>13:05z</Text>
                                <Image style={{ marginHorizontal: SIZES.padding / 4 }} source={icons.smallAeroplan} />
                                <Text>22:25z</Text>

                            </View>
                        </View>
                        <Image
                            style={{
                                marginVertical: SIZES.padding / 8
                            }}
                            source={icons.combinedShape}
                        />
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Text style={{ ...FONTS.h3, marginVertical: SIZES.padding / 8, color: COLORS.black, fontWeight: '600' }}>
                                FA0 - BRS - FAO - VLC - FAO
                            </Text>
                            <View style={{
                                marginLeft: SIZES.padding * 1.75,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text>13:05z</Text>
                                <Image style={{ marginHorizontal: SIZES.padding / 4 }} source={icons.smallAeroplan} />
                                <Text>22:25z</Text>

                            </View>
                        </View>
                    </View>

                </View>






            </View>
        </View >
    );
};

export default AllSwapScreen;
