import { useTheme } from '@/hooks/use-theme-color';
import { StyleSheet, Text, View } from 'react-native';

export default function TabTwoScreen() {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.text, { color: theme.text }]}>EXPLORE </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {},
});