module.exports = {
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/FadeInOutExample/"
  ],
  coverageReporters: [
    "lcov",
    "text-summary"
  ],
  modulePathIgnorePatterns: ["<rootDir>/FadeInOutExample/"],
  preset: "react-native",
  setupFilesAfterEnv: [
    "<rootDir>/setupTests.js",
    "<rootDir>/node_modules/jest-enzyme/lib/index.js"
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testEnvironment: "enzyme",
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/FadeInOutExample/"
  ],
};