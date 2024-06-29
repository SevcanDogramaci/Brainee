/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, BackHandler} from 'react-native';
import style from '../../styles/style';
import themeStyle from '../../styles/theme.style';
import QuestionContainer from '../components/QuestionContainer';
import ResultContainer from '../components/ResultContainer';
import AsyncDataStore from '../../services/store/AsyncDataStore';
import Button from '../components/Button';
import { useFocusEffect } from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  const [lastQuestionInfo, setLastQuestionInfo] = useState(null);

  const onBackPress = () => {
    AsyncDataStore
    .getItem("last_answered_question")
    .then(
      item => {
        console.log("Item:", item)
        setLastQuestionInfo(item)
      }
    )
  }

  useFocusEffect(
    React.useCallback(() => {
      onBackPress();

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => subscription.remove();
    }, [])
  );

  if (lastQuestionInfo == null) {
    return <View style={[{display: 'flex', alignItems: 'center'}, style.background]}>
      <Text style={[{color: themeStyle.SECONDARY_COLOR,}, style.mediumText]}>
        Not answered any question yet
      </Text>
      <Button title="Let's Brainee" onPress={() => navigation.navigate('Question')}/>
    </View>
  }

  return (
    <View style={[{display: 'flex', alignItems: 'center'}, style.background]}>
      <Text
        testID="title"
        style={[
          {
            color: themeStyle.SECONDARY_COLOR,
          },
          style.largeText,
        ]}>
        Last Time
      </Text>

      <QuestionContainer
        question={lastQuestionInfo.questionWithAnswer}
        correctAnswer={lastQuestionInfo.correctAnswer}
        isCorrect={lastQuestionInfo.isCorrect}
      />

      <ResultContainer result={lastQuestionInfo.isCorrect} />
    </View>
  );
};

export default HomeScreen;
