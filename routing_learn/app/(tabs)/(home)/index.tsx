import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  // 入力値を状態管理
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter ID"
        value={inputValue}
        onChangeText={setInputValue}
      />

      <Link
        href={{
          pathname: '/details/[id]',
          params: { id: inputValue || 'unknown' }, // 空のとき用デフォルト値もOK
        }}
        style={styles.dynamicLink}
      >
        View user details
      </Link>

      <Text style={styles.text}>静的なルーティング</Text>
      <Link href="/details/test" style={styles.normalLink}>リンク</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 8,
    padding: 8,
    width: 200,
    marginVertical: 10,
  },
  text: {
    marginTop: 20,
  },
  dynamicLink: {
    marginTop: 5,
    color: 'blue',
  },
  normalLink: {
    color: 'blue',
  }
});
// 参考: https://reactnative.dev/docs/textinput