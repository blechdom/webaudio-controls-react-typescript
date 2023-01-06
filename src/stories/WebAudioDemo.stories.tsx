import React, { useEffect, useState } from "react";
import { WebAudioKeyboard } from "../WebAudioKeyboard";
import { WebAudioSwitch } from "../WebAudioSwitch";
import { WebAudioKnob } from "../WebAudioKnob";
import { WebAudioParam } from "../WebAudioParam";
import "../style.css";

const audioCtx: AudioContext = new window.AudioContext();
const oscillator: OscillatorNode = audioCtx.createOscillator();
oscillator.type = "sine";
const gainNode: GainNode = audioCtx.createGain();
export default {
  title: "Examples/KeyboardSineWaveDemo",
};

export const SineControl = () => {
  const [frequency, setFrequency] = useState<number>(60);
  const [gain, setGain] = useState<number>(0.5);
  const [gate, setGate] = useState<number>(0);

  useEffect(() => {
    oscillator.connect(gainNode).connect(audioCtx.destination);
    oscillator.start();
    return () => {
      if (audioCtx.state === "running") {
        audioCtx.suspend();
      }
    };
  }, []);
  useEffect(() => {
    const convertedFreq = Math.pow(2, (frequency - 69) / 12) * 440;
    oscillator.frequency.setValueAtTime(convertedFreq, audioCtx.currentTime);
  }, [frequency]);

  useEffect(() => {
    gainNode.gain.setValueAtTime(gain * gate, audioCtx.currentTime);
  }, [gain, gate]);

  async function toggleAudioContext(audioState: boolean) {
    if (audioCtx.state === "running") {
      await audioCtx.suspend();
    } else {
      await audioCtx.resume();
    }
  }
  function updateNote(note: [number, number]) {
    setFrequency(note[1]);
    setGate(note[0]);
  }
  return (
    <div className="flex-controls">
      <WebAudioSwitch diameter={150} onSwitchChange={toggleAudioContext} />
      <WebAudioKnob
        id="knob"
        value={gain}
        diameter={110}
        min={0}
        max={1}
        step={0.01}
        bodyColor="#000"
        highlightColor="#fff"
        indicatorColor="#e00"
        onKnobInput={setGain}
      />
      <WebAudioParam
        width={120}
        height={50}
        fontsize={50}
        link="knob"
        colors={"#000;#FF0000"}
      />
      <WebAudioKeyboard min={60} onKeyboardChangeNote={updateNote} />
    </div>
  );
};
