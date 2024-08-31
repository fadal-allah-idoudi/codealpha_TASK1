import { StyleSheet, Text, View, Pressable } from 'react-native';

function PrimaryButton({ children, cliked, style, color,buttoncolor }) {
  return (
    <View style={[styles.Bottoncontainer, { backgroundColor: buttoncolor }]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.Container, styles.pressed, style]
            : [styles.Container, style]
        }
        onPress={cliked}
        android_ripple={{ color: color }}
      >
        <Text style={[styles.ButtonTxt]}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  Container: {
    
    paddingVertical: 8,
    paddingHorizontal: 16,
    
    borderRadius: 30,
    overflow: 'hidden', // Ensure ripple is contained
  },
  ButtonTxt: {
    color: 'white',
    fontSize: 20,textAlign:'center'
  },
  Bottoncontainer: {
    margin: 4,
    borderRadius: 20,
    overflow: 'hidden',
   backgroundColor: '#A7BEAE',
   width:'40%',elevation: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});
