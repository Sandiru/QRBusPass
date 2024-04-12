import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Demo3 from '../DropdownMenu';
import RoutesMenu from '../DropdownMenu';
import {ScrollView} from 'react-native-gesture-handler';

const BusRegister = (a: any) => {
  const stack = a.navigation;
  return (
    <View style={sty.container}>
      <Text
        style={sty.headerText}>
        {'Bus\nRegistation'}
      </Text>
      <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
        <RegisterSection />
      </KeyboardAwareScrollView>
    </View>
  );
};

function RegisterSection(p: any) {
  const [userName, setUserName] = useState('');
  const [rNumber, setRnumber] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [bankName, setBankName] = useState('');
  const [branchName, setBranchName] = useState('');
  const [accNumber, setAccNumber] = useState('');

  const [tpNumber, setTpNumber] = useState('');
  const routes = ['132', '138', '170', '172', '353'];
  const banks = [
    "People's Bank",
    'Bank Of Cylon',
    'Sampath Bank',
    'Hatton National Bank',
    'Commersial Bank',
  ];

  return (
    <View style={{marginTop: 50}}>
      <InputFieldSection
        setText={'Bus Name'}
        setPlaceholder={'Enter name of the bus'}
        setOnChange={(v: React.SetStateAction<string>) => setUserName(v)}
      />
      <InputFieldSection
        setText={'Registation number'}
        setPlaceholder={'HB4245'}
        setOnChange={(v: React.SetStateAction<string>) => setRnumber(v)}
      />
      <View style={{}}>
        <Text style={sty.inputTextid}>Bus Route</Text>
        <RoutesMenu nameArray={routes} placeHolder={'Select Route'} />
      </View>

      <InputFieldSection
        setText={"Owner's Name"}
        setPlaceholder={"Enter owner's name of the bus"}
        setOnChange={(v: React.SetStateAction<string>) => setOwnerName(v)}
      />

      <View style={{}}>
        <Text style={sty.inputTextid}>Bank Name</Text>
        <RoutesMenu nameArray={banks} placeHolder={'Select Bank'} />
      </View>
      <InputFieldSection
        setText={'Branch name'}
        setPlaceholder={'Colombo'}
        setOnChange={(v: React.SetStateAction<string>) => setBranchName(v)}
      />
      <InputFieldSection
        setText={'Bank Account Number'}
        setPlaceholder={'Enter Number'}
        setOnChange={(v: React.SetStateAction<string>) => setAccNumber(v)}
      />

      <InputFieldSection
        setText={'Telephone Number'}
        setPlaceholder={'+94110000000'}
        setOnChange={(v: React.SetStateAction<string>) => setTpNumber(v)}
      />
    </View>
  );
}

function InputFieldSection(p: any) {
  const text = p.setText;
  const placeholder = p.setPlaceholder;
  const onChange = p.setOnChange;

  return (
    <View style={{marginBottom: 10}}>
      <Text style={sty.inputTextid}>{text}</Text>
      <View style={sty.inputField}>
        <TextInput
          style={sty.textInput}
          placeholder={placeholder}
          underlineColor="white"
          activeUnderlineColor="white"
          placeholderTextColor={'#90a6a5'}
          onChangeText={onChange}
        />
      </View>
    </View>
  );
}

const sty = StyleSheet.create({
  container:{
    flex: 1, backgroundColor: 'white'
  },
  headerText:{
     fontSize: 45,
          color: 'blue',
          fontWeight: '700',
          marginTop: 100,
          marginLeft: 20,
  },
  inputTextid: {
    fontSize: 18,
    color: 'black',
    left: 30,
    fontWeight: '500',
  },
  inputField: {
    borderRadius: 30,
    height: 50,
    width: 350,
    marginHorizontal: 30,
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 1,
    borderWidth: 1,
    borderColor: '#afc7c7',
  },
  textInput: {
    fontSize: 15,
    fontWeight: '100',
    width: 320,
    left: 10,
    height: 40,
    backgroundColor: 'white',
  },
});

export default BusRegister;
