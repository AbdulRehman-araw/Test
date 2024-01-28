import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import dynamicFormFields from '../../utils/FormData/Form-data.json';
import {styles} from './styles/styles';
import {colors} from '../../utils/colors/colors';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import {updateFormData} from '../../redux/slices/userDataSlice';
import {useDispatch} from 'react-redux';
import {StackActions} from '@react-navigation/native';

const FormScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDropdownValue, setSelectedDropdownValue] = useState(null);

  const renderFormField = field => {
    return (
      <View style={styles.fieldContainer} key={field.id}>
        <Text style={styles.label}>{field.label}</Text>
        {field.type === 'text' || field.type === 'email' ? (
          <>
            <TextInput
              style={styles.input}
              placeholder={field.placeholder}
              placeholderTextColor={'grey'}
              keyboardType={
                field.type === 'email' ? 'email-address' : 'default'
              }
              onChangeText={text =>
                field.id === 'firstName'
                  ? setFirstName(text)
                  : field.id === 'lastName'
                  ? setLastName(text)
                  : setEmail(text)
              }
            />
          </>
        ) : field.type === 'dropdown' ? (
          <>
            <View style={styles.pickerContainer}>
              <Picker
                itemStyle={styles.pickerItem}
                selectedValue={selectedDropdownValue} // You need to manage the selected value state
                onValueChange={itemValue =>
                  setSelectedDropdownValue(itemValue)
                }>
                {field?.options?.map(option => (
                  <Picker.Item
                    key={option}
                    label={option}
                    value={option}
                    color={colors.black}
                    style={styles.picker}
                  />
                ))}
              </Picker>
            </View>
          </>
        ) : field.type === 'date' ? (
          <>
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Text style={styles.datePickerLabel}>Select Date</Text>
            </TouchableOpacity>
            <View style={styles.datePickerContainer}>
              {open && (
                <DatePicker
                  modal
                  mode="date"
                  open={open}
                  date={date}
                  onConfirm={selectedDate => {
                    setOpen(false);
                    setDate(selectedDate);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              )}
              <Text style={styles.selectedDate}>{date.toDateString()}</Text>
            </View>
          </>
        ) : null}
      </View>
    );
  };

  const handleValidation = () => {
    // Validate first name
    if (!firstName.trim()) {
      showToast('Please enter your first name.');
      return false;
    }

    // Validate last name
    if (!lastName.trim()) {
      showToast('Please enter your last name.');
      return false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      showToast('Please enter a valid email address.');
      return false;
    }

    // Validate dropdown
    if (
      dynamicFormFields.fields.some(
        field => field.type === 'dropdown' && !selectedDropdownValue,
      )
    ) {
      showToast('Please select a value from the dropdown.');
      return false;
    }

    // Validate date
    if (
      dynamicFormFields.fields.some(field => field.type === 'date' && !date)
    ) {
      showToast('Please select a date.');
      return false;
    }

    // Add more validation logic as needed

    showToast('Form validation successful!', ToastAndroid.LONG);
    return true;
  };

  const handleSubmit = () => {
    if (handleValidation()) {
      // Implement your form submission logic here
      dispatch(
        updateFormData({
          firstName,
          lastName,
          email,
          selectedDropdownValue,
          date,
        }),
      );
      showToast('Form submission successful!', ToastAndroid.LONG);
      navigation.dispatch(StackActions.replace('home'));
    } else {
      showToast('Form validation failed. Please check the fields.');
    }
  };

  const showToast = (message, duration = ToastAndroid.SHORT) => {
    ToastAndroid.show(message, duration);
  };

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Dynamic Form</Text>
      {dynamicFormFields?.fields?.map(field => renderFormField(field))}
      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormScreen;
