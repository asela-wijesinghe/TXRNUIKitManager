import React from 'react';
import { Button } from 'react-native-elements';

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#ffffff',
    borderRadius: 30,
    flexDirection: 'row',
    borderWidth: 2,
    borderStyle: 'solid'
  },

  gradientStyle: {
    flex: 1,
    borderRadius: 30,
    paddingLeft: -15,
    paddingRight: -15,
    marginTop: 20,
    marginBottom: 20
  }
};

const { buttonStyle, gradientStyle } = styles;

const SetColors = (btnColor, transparent) => {
  // default button is transparent - light blue border
  let backgroundColor = 'rgba(0,0,0,0)';
  let borderColor = 'rgba(255,255,255,1)';
  let color = 'rgba(255,255,255,1)';

  // gradient
  if (btnColor === 'blue') {
    backgroundColor = 'rgba(0,0,0,0)';
    borderColor = 'rgba(255,255,255,1)';
    color = 'rgba(255,255,255,1)';
  }

  // blue border
  if (btnColor === 'white') {
    backgroundColor = 'rgb(255,255,255)';
    borderColor = 'rgb(58,161,214)';
    color = 'rgb(58,161,214)';
  }

  // light blue border
  if (transparent) {
    backgroundColor = 'rgb(255,255,255)';

    if (btnColor === 'white') {
      backgroundColor = 'rgb(255,255,255)';
      borderColor = 'rgb(24,201,228)';
      color = 'rgb(24,201,228)';
    } else if (btnColor === 'blue') {
      // white border
      backgroundColor = 'rgba(0,0,0,0)';
      borderColor = 'rgb(255,255,255)';
      color = 'rgb(255,255,255)';
    }
  }

  return { backgroundColor, borderColor, color };
};

const RxButton = ({ btnColor, size = 'large', title, icon, transparent = false, onPress, loading, textStyle }) => {
  const { backgroundColor, borderColor, color } = SetColors(btnColor, transparent);

  let btnSize = 56;
  let fntSize = 18;

  switch (size) {
    case 'large':
      btnSize = 56;
      fntSize = 18;
      break;
    case 'small':
      btnSize = 40;
      fntSize = 14;
      break;
    case 'extrasmall':
      btnSize = 35;
      fntSize = 13;
      break;
  }

  if (btnColor === 'blue') {
    return (
      <LinearGradient
        start={[0.0, 0.5]} end={[0.7, 1.0]}
        locations={[0, 0.9]}
        colors={['#18bee6', '#18e6e0']}
        style={gradientStyle}
      >
        <Button
          fontFamily="ProximaNova-Bold"
          buttonStyle={[buttonStyle,
            {
              height: btnSize,
              backgroundColor,
              borderColor
            }]
          }
          textStyle={[textStyle, {
            fontSize: fntSize,
            color
          }]}
          title={title}
          icon={icon}
          onPress={onPress}
          loading={loading}
        />
      </LinearGradient>
    );
  } else {
    return (
      <Button
        fontFamily="ProximaNova-Bold"
        buttonStyle={[buttonStyle, {
          height: btnSize,
          backgroundColor,
          borderColor
        }]
        }
        textStyle={{
          fontSize: fntSize,
          color
        }}
        title={title}
        icon={icon}
        onPress={onPress}
        loading={loading}
      />
    );
  }
};

export { RxButton };
