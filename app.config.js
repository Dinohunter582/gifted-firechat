export default {
  expo: {
    name: "gifted-firechat",
    slug: "gifted-firechat",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: 
      ['**/*']
    ,
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF"
      }
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra: {
      apiKey: "AIzaSyBjuc-Juh51a0yPsj1Rn9s5F8BTqT190iU",
      authDomain: "gifted-firechat-4bc95.firebaseapp.com",
      projectId: "gifted-firechat-4bc95",
      storageBucket: "gifted-firechat-4bc95.appspot.com",
      messagingSenderId: "40944812970",
      appId: "1:40944812970:web:08b8465be45f26dce661d3"
    }
  }
};
