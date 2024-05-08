import React from 'react';

import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ProfileInput from '../components/Input/ProfileInput';
import {
  EMAIL,
  FIRST_NAME,
  LAST_NAME,
  PHONE,
  ORDER_STATUSES,
  PASSWORD_CHANGES,
  SPECIAL_OFFERS,
  NEWSLETTER,
  AVATAR_IMAGE,
  PHONE_MASK,
} from '../utils';
import Checkbox from '../components/Checkbox/Checkbox';
import PlainButton from '../components/Button/PlainButton';
import Avatar from '../components/Avatar/Avatar';

import { DARK, LIGHT, YELLOW } from '../styles';

const personalInformationTitle = 'Personal Information';
const emailNotificationsTitle = 'Email Notifications';
const logOutButtonTitle = 'Log Out';
const saveButtonTitle = 'Save changes';
const discardButtonTitle = 'Discard changes';

const profileSchema = [
  {
    label: 'First Name',
    placeholder: 'Enter your first Name',
    key: FIRST_NAME,
  },
  { label: 'Last Name', placeholder: 'Enter your last name', key: LAST_NAME },
  { label: 'Email', placeholder: 'Enter your email', key: EMAIL },
  {
    label: 'Phone number',
    placeholder: 'Enter your phone number',
    key: PHONE,
    keyboardType: 'numeric',
    mask: PHONE_MASK,
  },
];

const emailNotificationsSchema = [
  {
    label: 'Order Statuses',
    key: ORDER_STATUSES,
  },
  {
    label: 'Password Changes',
    key: PASSWORD_CHANGES,
  },
  {
    label: 'Special Offers',
    key: SPECIAL_OFFERS,
  },
  {
    label: 'Newsletter',
    key: NEWSLETTER,
  },
];

const avatarSchema = [{ label: 'Avatar', key: AVATAR_IMAGE }];

const ProfileScreen = ({ preferences, savePreferences, clearPreferences }) => {
  const [fields, setFields] = React.useState({});

  React.useEffect(() => {
    handleResetFields();
  }, []);

  const handleChanges = (key) => (value) => {
    setFields({ ...fields, [key]: value });
  };

  const handleResetFields = () => {
    const fieldPreferences = [
      ...profileSchema,
      ...emailNotificationsSchema,
      ...avatarSchema,
    ].reduce((acc, field) => {
      return { ...acc, [field.key]: preferences[field.key] };
    }, {});

    setFields(fieldPreferences);
  };

  const handleSavePreferences = async () => {
    await savePreferences(fields);
  };

  return (
    <ScrollView style={profileStyles.container}>
      <Text style={profileStyles.sectionTitle}>{personalInformationTitle}</Text>
      <Avatar
        label={avatarSchema[0].label}
        firstName={fields[FIRST_NAME]}
        lastName={fields[LAST_NAME]}
        image={fields[AVATAR_IMAGE]}
        updateImage={handleChanges(AVATAR_IMAGE)}
      />
      {profileSchema.map((field) => (
        <ProfileInput
          key={field.key}
          label={field.label}
          placeholder={field.placeholder}
          onChange={handleChanges(field.key)}
          value={fields[field.key] || ''}
          keyboardType={field.keyboardType || 'default'}
          mask={field.mask}
        />
      ))}
      <Text style={profileStyles.sectionTitle}>{emailNotificationsTitle}</Text>
      {emailNotificationsSchema.map((item) => (
        <Checkbox
          key={item.key}
          label={item.label}
          onChange={handleChanges(item.key)}
          value={fields[item.key] || ''}
        />
      ))}
      <PlainButton
        type={YELLOW}
        overrideButtonStyles={profileStyles.logOutButton}
        overrideLabelStyles={profileStyles.logOutLabel}
        title={logOutButtonTitle}
        onPress={() => {
          clearPreferences();
        }}
      />
      <View style={profileStyles.saveDiscardSection}>
        <PlainButton
          type={LIGHT}
          title={discardButtonTitle}
          overrideButtonStyles={profileStyles.saveDiscardButton}
          overrideLabelStyles={profileStyles.saveDiscardButtonLabel}
          onPress={handleResetFields}
        />
        <PlainButton
          type={DARK}
          title={saveButtonTitle}
          overrideButtonStyles={profileStyles.saveDiscardButton}
          overrideLabelStyles={profileStyles.saveDiscardButtonLabel}
          onPress={handleSavePreferences}
        />
      </View>
    </ScrollView>
  );
};

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
  },
  logOutButton: {
    marginLeft: 0,
    width: '100%',
    height: 45,
    borderRadius: 10,
  },
  logOutLabel: {
    fontSize: 16,
  },
  saveDiscardButton: {
    height: 40,
    borderRadius: 5,
  },
  saveDiscardButtonLabel: {
    fontSize: 14,
  },
  saveDiscardSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ProfileScreen;
