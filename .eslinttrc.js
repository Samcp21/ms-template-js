module.exports={
 "extends" : "airbnb-base",
  "env": {
    "node": true
  },
  "plugins": ["promise"],
  "rules": {
    "no-console": "error",
    "promise/always-return": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/catch-or-return": "error",
    "promise/no-native": "off",
    "promise/no-nesting": "error",
    "promise/no-promise-in-callback": "error",
    "promise/no-callback-in-promise": "error",
    "promise/no-return-in-finally": "error",
    "prefer-arrow-callback": "error"
  }
}