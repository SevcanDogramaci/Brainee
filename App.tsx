import React from 'react';
import { SafeAreaView } from 'react-native';
import appStyle from './src/styles/style';
import Navigator from './src/components/navigator/Navigator';

function App(): React.JSX.Element {  
  return (
    <SafeAreaView style={[
      appStyle.background,
      {
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
      },
    ]}>
      <Navigator/>
    </SafeAreaView>
  );
}

export default App;
