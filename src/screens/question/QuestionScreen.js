/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import style from '../../styles/style';
import themeStyle from '../../styles/theme.style';
import QuestionContainer from '../components/QuestionContainer';
import AsyncDataStore from '../../services/store/AsyncDataStore';
import AnswerContainer from '../components/AnswerContainer';
import ResultContainer from '../components/ResultContainer';
import QuestionService from '../../services/question/QuestionService';

const QuestionScreen = () => {
  const [questionInfo, setQuestionInfo] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  useEffect(() => {
    console.log("In useEffect of QuestionScreen")
    const questionInfo = QuestionService.generateQuestion()
    setQuestionInfo(questionInfo)
  }, []);

  async function handleAnswer(answer){
    const lastQuestionInfo =  {
      questionWithAnswer: `${questionInfo.question} = ${answer}`,
      correctAnswer: questionInfo.correctAnswer
    }

    if (answer == questionInfo.correctAnswer) {
      setIsAnswerCorrect(true)
      lastQuestionInfo.isCorrect = true
    } else {
      setIsAnswerCorrect(false)
      lastQuestionInfo.isCorrect = false
    }

    await AsyncDataStore.setItem("last_answered_question",lastQuestionInfo)
  }

  if (questionInfo == null) {
    return <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator />
    </View>
  } 

  return (
    <View style={{display: 'flex', alignItems: 'center'}}>
      <Text
        testID="title"
        style={[
          {
            color: themeStyle.SECONDARY_COLOR,
          },
          style.largeText,
        ]}>
        Question?
      </Text>

      <QuestionContainer question={questionInfo.question} />
      <AnswerContainer onAnswer={handleAnswer}/>
      <ResultContainer result={isAnswerCorrect} />
    </View>
  );
};

export default QuestionScreen;
