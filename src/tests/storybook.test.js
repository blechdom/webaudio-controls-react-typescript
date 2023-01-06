import initStoryshots from "@storybook/addon-storyshots";
import { AudioContext } from "standardized-audio-context-mock";

global.AudioContext = AudioContext;
initStoryshots();
