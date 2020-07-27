import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
} from 'react-native';

const Card = props => {
  const { children, elevation, opacity, cornerRadius } = props;

  const cardStyle = Platform.select({
    ios: () => 
      StyleSheet.create({
        container: {
          shadowRadius:elevation, 
          shadowOpacity:opacity, 
          shadowOffset:{ width: 0, height: elevation },
          borderRadius:cornerRadius,
          backgroundColor: props.backgroundColor,
          width: "90%",
        }
      }),
    android: () => 
      StyleSheet.create({
        container: {
          elevation:elevation,
          borderRadius:cornerRadius, 
          backgroundColor: props.backgroundColor,
          width: "90%",
        }
      })
  })();

  return(
    <View style={[cardStyle.container, props.style]}>
      {children}
    </View>
  )

}

Card.defaultProps = {
  backgroundColor: '#ffffff',
  elevation: 3,
  cornerRadius: 5,
  opacity: .5
}

export default Card;