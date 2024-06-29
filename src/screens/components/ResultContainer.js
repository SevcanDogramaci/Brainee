/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import style from '../../styles/style';
import themeStyle from '../../styles/theme.style';
import SadIcon from '../../assets/sad_face_icon.svg';
import HappyIcon from '../../assets/happy_face_icon.svg';

const getResultTextColor = isQuestionCorrect => {
  if (isQuestionCorrect) {
    return themeStyle.SUCCESS_COLOR;
  }
  return themeStyle.DANGER_COLOR;
};
const getResultText = questionResult => (questionResult ? 'Correct' : 'Wrong');

const getQuestionIcon = isQuestionCorrect => {
  if (isQuestionCorrect === true) {
    return <HappyIcon testID="questionResultIcon" width={120} height={120} />;
  } else {
    return <SadIcon testID="questionResultIcon" width={120} height={120} />;
  }
};

const ResultContainer = ({result}) => {
  if (result == null) return <></>
  return (
    <View
      testID="questionResult"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        testID="questionResultText"
        style={[
          {color: getResultTextColor(result), marginTop: '10%'},
          style.largeText,
        ]}>
        {getResultText(result)}
      </Text>
      {getQuestionIcon(result)}
    </View>
  );
};

export default ResultContainer;
