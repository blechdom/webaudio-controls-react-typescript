import initStoryshots from "@storybook/addon-storyshots";
import { AudioContext } from "standardized-audio-context-mock";

jest.mock("../utils/core", () => () => {
  return {
    on: jest.fn(),
  };
});

global.AudioContext = AudioContext;
initStoryshots();
