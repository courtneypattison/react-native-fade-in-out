[![Build Status][travis-img]][travis-url] [![Coverage Status][codecov-img]][codecov-url] [![NPM Version][npm-img]][npm-url]

# [react-native][react-native-url]-fade-in-out

> A React Native component that uses a boolean prop to fade children in and out

![FadeInOut Example][fade-in-out-img]

## Installation
Install with [yarn][yarn-url] or [npm][npm-home-url]:
```
$ yarn add react-native-fade-in-out
```
```
$ npm i react-native-fade-in-out
```

## Example usage
[Example snack][example-snack-url]
```jsx
import React, { useState } from "react";
import {Button, Text, StyleSheet, View} from 'react-native';
import FadeInOut from 'react-native-fade-in-out';

const App = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    setVisible(!visible);
  }

  return (
    <View style={styles.container}>
      <FadeInOut visible={visible}>
        <Text>Default duration</Text>
      </FadeInOut>
      <FadeInOut visible={visible} duration={1000}>
        <Text>Duration = 100</Text>
      </FadeInOut>
      <FadeInOut visible={visible} rotate={true}>
        <Text>Rotate</Text>
      </FadeInOut>
      <FadeInOut visible={visible} scale={true}>
        <Text>Scale</Text>
      </FadeInOut>
      <Button onPress={toggleVisible} title="Start Fade" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default App;

```
For an example that uses the optional props, see the FadeInOutExample project in this repository.
```
$ cd FadeInOutExample
$ yarn start
```

## Props
### `visible`
Determines whether the child fades in or out. The child will fade in when `true` and out when `false`. 

| Type       | Required |
|:-----------|----------|
| Function   | Yes      |

### `duration`
Sets the duration of animation in milliseconds. The default duration is 300 ms.

| Type       | Required |
|:-----------|----------|
| Number     | No       |

### `rotate`
Adds a 360° rotation to the fade, clockwise on fade in and counterclockwise on fade out.

| Type       | Required |
|:-----------|----------|
| Boolean    | No       |

### `scale`
Adds scaling from %0 to %100 on fade in and %100 to %0 on fade out.

| Type       | Required |
|:-----------|----------|
| Boolean    | No       |

### `style`
| Type                          | Required |
|:------------------------------|----------|
| [View styles][view-styles-url]| No       |

### `useNativeDriver`
Sets useNativeDriver for the animation. The default value is `true`. See [React Native blog post][react-native-blog] for more details.

| Type       | Required |
|:-----------|----------|
| Boolean    | No       |

## Typescript
This package contains built-in TypeScript declarations.

## License

MIT © [Courtney Pattison][courtney-url]

[codecov-img]: https://img.shields.io/codecov/c/github/courtneypattison/react-native-fade-in-out.svg
[codecov-url]: https://codecov.io/gh/courtneypattison/react-native-fade-in-out

[courtney-url]: https://courtneypattison.com/

[example-snack-url]: https://snack.expo.io/@courtneypattison/react-native-fade-in-out-example

[fade-in-out-img]: https://raw.githubusercontent.com/courtneypattison/react-native-fade-in-out/master/src/images/FadeInOut.gif

[npm-home-url]: https://www.npmjs.com/
[npm-img]: https://img.shields.io/npm/v/react-native-fade-in-out.svg
[npm-url]: https://www.npmjs.com/package/react-native-fade-in-out

[react-native-blog]: https://reactnative.dev/blog/2017/02/14/using-native-driver-for-animated#caveats
[react-native-url]: https://facebook.github.io/react-native/

[travis-img]: https://img.shields.io/travis/courtneypattison/react-native-fade-in-out.svg
[travis-url]: https://travis-ci.org/courtneypattison/react-native-fade-in-out

[view-styles-url]: https://facebook.github.io/react-native/docs/view-style-props

[yarn-url]: https://yarnpkg.com/
