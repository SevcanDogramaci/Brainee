/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import appStyle from '../../styles/style';
import themeStyle from '../../styles/theme.style';

const getQuestionTextColor = isQuestionCorrect => {
  if (isQuestionCorrect === undefined) {
    return themeStyle.PRIMARY_FONT_COLOR;
  } else if (isQuestionCorrect === true) {
    return themeStyle.SUCCESS_COLOR;
  } else {
    return themeStyle.DANGER_COLOR;
  }
};

const QuestionContainer = ({question, isCorrect, correctAnswer}) => {
  return (
    <View
      testID="questionInfo"
      style={[
        {
          borderRadius: 20,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          paddingVertical: 50,
          marginHorizontal: 30,
          marginTop: 5,
          alignSelf: 'stretch',
        },
        appStyle.container,
      ]}>
      <Text
        style={[{color: getQuestionTextColor(isCorrect)}, appStyle.largeText]}>
        {question}
      </Text>
      {correctAnswer && (
        <Text
          style={[{color: themeStyle.PRIMARY_FONT_COLOR}, appStyle.smallText]}>
          Correct Answer: {correctAnswer}
        </Text>
      )}
    </View>
  );
};

export default QuestionContainer;
