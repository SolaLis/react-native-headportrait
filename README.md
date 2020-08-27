
# react-native-headportrait

## Getting started

`$ npm install react-native-headportrait --save`

### Mostly automatic installation

`$ react-native link react-native-headportrait`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-headportrait` and add `RNHeadportrait.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNHeadportrait.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.FoundRN.headportrait.RNHeadportraitPackage;` to the imports at the top of the file
  - Add `new RNHeadportraitPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-headportrait'
  	project(':react-native-headportrait').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-headportrait/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-headportrait')
  	```


## Usage
```javascript
import RNHeadportrait from 'react-native-headportrait';

// TODO: What to do with the module?
RNHeadportrait;
```
  