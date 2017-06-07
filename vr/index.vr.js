import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Box,
  Image,
  Sphere,
  AmbientLight
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('infinitemirrorspace_spherical.jpg')} />
        {/*<Pano source={asset('gridBW.png')}/>*/}
        <Text
          style={{
            backgroundColor: '#00446699',
            borderRadius: 0.05,
            borderWidth: 1,
            borderColor: '#00AA00',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{ translate: [0, 0, -5] }],
          }}>
          Bonjour
        </Text>

        <Text
          style={{
            backgroundColor: '#00223399',
            borderRadius: 0.05,
            borderWidth: 1,
            borderColor: '#00AA00',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{ translate: [5, 5, -10] }],
          }}>
          Dark jour
        </Text>

        <Text
          style={{
            backgroundColor: '#88223399',
            borderRadius: 0.05,
            borderWidth: 1,
            borderColor: '#00AA00',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{ translate: [0, -3, -8] }],
          }}>
          Red jour
        </Text>
        <Sphere
          radius={0.5}
          widthSegments={20}
          heightSegments={12}
          style={{ opacity: 0.1, transform: [{ translate: [-25, 0, -70] }, { scale: 0.05 }, { rotateY: -130 }, { rotateX: 20 }, { rotateZ: -10 }], }}
        lit={true} />
        <Image source={asset('pine-trees.jpg')}
       style={{width: 1, height: 1}} lit={true} />
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
