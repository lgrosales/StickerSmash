import { version } from "react";

const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.leosh.StickerSmash.dev';
  }

  if (IS_PREVIEW) {
    return 'com.leosh.StickerSmash.preview';
  }

  return 'com.leosh.StickerSmash';
};

const getAppName = () => {
  if (IS_DEV) {
    return 'StickerSmash (Dev)';
  }

  if (IS_PREVIEW) {
    return 'StickerSmash (Preview)';
  }

  return 'StickerSmash: Emoji Stickers';
};

export default {
  name: getAppName(),
  slug: "StickerSmash",
  version: "1.0.0",
  ios: {
    bundleIdentifier: getUniqueIdentifier(),
    buildNumber: "1"
  },
  android: {
    package: getUniqueIdentifier(),
    versionCode: 1
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
      }
    ] 
  ],
  extra: {
    eas: {
      projectId: "6fa308a2-0d5e-492c-8ae9-deeb8385568e"
    }
  },
  updates: {
    "url": "https://u.expo.dev/6fa308a2-0d5e-492c-8ae9-deeb8385568e"
  },
  runtimeVersion: {
    "policy": "appVersion"
  }
};


// {
//   "expo": {
//     "name": "StickerSmash",
//     "slug": "StickerSmash",
//     "version": "1.0.0",
//     "orientation": "portrait",
//     "icon": "./assets/images/icon.png",
//     "scheme": "myapp",
//     "userInterfaceStyle": "automatic",
//     "newArchEnabled": true,
//     "ios": {
//       "supportsTablet": true,
//       "bundleIdentifier": "com.leosh.StickerSmash"
//     },
//     "android": {
//       "adaptiveIcon": {
//         "foregroundImage": "./assets/images/adaptive-icon.png",
//         "backgroundColor": "#ffffff"
//       },
//       "package": "com.leosh.StickerSmash"
//     },
//     "web": {
//       "bundler": "metro",
//       "output": "static",
//       "favicon": "./assets/images/favicon.png"
//     },
//     "plugins": [
//       "expo-router",
//       [
//         "expo-splash-screen",
//         {
//           "image": "./assets/images/splash-icon.png",
//           "imageWidth": 200,
//           "resizeMode": "contain",
//           "backgroundColor": "#ffffff"
//         }
//       ]
//     ],
//     "experiments": {
//       "typedRoutes": true
//     },
//     "extra": {
//       "router": {
//         "origin": false
//       },
//       "eas": {
//         "projectId": "6fa308a2-0d5e-492c-8ae9-deeb8385568e"
//       }
//     },
//     "owner": "leosh"
//   }
// }
