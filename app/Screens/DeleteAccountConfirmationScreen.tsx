import React, { useContext, useState } from 'react';
import { Image, SafeAreaView, Text, TextInput, View, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';
import { ThemeContext } from '../Contexts/ThemeContext';

export default function DeleteAccountConfirmationScreen({ navigation }: any) {
    const { isDark } = useContext(ThemeContext)

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: isDark ? COLORS.bgBlack : COLORS.gray, paddingTop: SIZES.padding * 3 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ ...FONTS.h1, color: isDark ? COLORS.golden : COLORS.black }}>Are you sure?</Text>
                <Text style={{ ...FONTS.h4, textAlign: 'center', marginHorizontal: SIZES.padding * 2, marginVertical: SIZES.padding / 2, color: isDark ? COLORS.golden : COLORS.black }}>Do you  really want to delete these records?
                    This process cannot be undone.</Text>
                <View style={{
                    marginVertical: SIZES.padding,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: SIZES.width * 0.6
                }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ ...FONTS.h3, color: isDark ? COLORS.lightGolden : COLORS.black }}>No</Text>
                            <Image
                                source={isDark ? icons.ic_close_dark : icons.ic_close_light}
                                style={{ width: 27, height: 27, marginLeft: SIZES.padding }}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ ...FONTS.h3, color: isDark ? COLORS.lightGolden : COLORS.black }}>Yes</Text>
                            <Image
                                source={isDark ? icons.ic_check_light_dark : icons.ic_check_light}
                                style={{ width: 27, height: 27, marginLeft: SIZES.padding }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}