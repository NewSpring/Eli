# needed because something is trying to use ViewStylePropTypes
# https://github.com/shoutem/ui/issues/424
cp ./node_modules/react-native/Libraries/DeprecatedPropTypes/DeprecatedViewStylePropTypes.js ./node_modules/react-native/Libraries/Components/View/ViewStylePropTypes.js
cp ./node_modules/react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType.js ./node_modules/react-native/Libraries/StyleSheet/ColorPropType.js
cp ./node_modules/react-native/Libraries/DeprecatedPropTypes/DeprecatedImageStylePropTypes.js ./node_modules/react-native/Libraries/Image/ImageStylePropTypes.js
