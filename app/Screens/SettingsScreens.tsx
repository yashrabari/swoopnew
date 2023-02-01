import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { COLORS, FONTS, icons, SIZES } from '../constants';

const SettingScreen = ({ navigation }: any) => {
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
              source={icons.chevronLeft}
            />
            <TouchableOpacity onPress={() => navigation.navigate('MySwapScreen')}>
              <Image
                source={icons.right}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: SIZES.padding }}>
            <Text style={{ ...FONTS.h1, color: COLORS.black }}>Settings</Text>
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
                <Image source={icons.sun} />
              </TouchableOpacity>
              <Text
                style={styles.inputField}
              >Dark mode</Text>
            </View>
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
            <Text style={{ ...FONTS.h1, color: COLORS.black }}>Settings</Text>
          </View>
        </View>
        <View style={styles.midPart}>
          <View style={styles.form}>
            <View
              style={styles.inputFieldComponent}>
              <Image
                style={{}}
                source={icons.mail}
              />
              <TextInput
                placeholder="Email"
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

                source={icons.lock}
              />
              <TextInput
                placeholder="Password"
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
                placeholder="Confirm Password"
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

                  source={icons.feed}
                />
                <Text style={styles.inputField} >Subscription</Text>
              </View>
              <View style={{ marginHorizontal: SIZES.padding * 2 }}>
                <View style={styles.checkBoxContainer}>
                  <View>
                    <Text style={{color:COLORS.black,fontWeight:'500'}}>Free Trial</Text>
                    <Text>3 months</Text>

                  </View>
                  <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
                    <Image source={isChecked ? icons.circle : icons.rightRound} />
                  </TouchableOpacity>
                </View>
                <View style={styles.checkBoxContainer}>
                <View>
                    <Text style={{color:COLORS.black,fontWeight:'500'}}>Monthly Subscrition</Text>
                    <Text>TBD</Text>

                  </View>
                  <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
                    <Image source={!isChecked ? icons.circle : icons.rightRound} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
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

export default SettingScreen;


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






