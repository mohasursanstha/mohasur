
import { GoogleGenAI, Type, Modality } from "@google/genai";

// Always initialize with process.env.API_KEY directly as per guidelines.
// Assume process.env.API_KEY is pre-configured and valid.
// export const getAIClient = () => {
//   return new GoogleGenAI({ apiKey: process.env.API_KEY as string });
// };

export const getAIClient = () => {
  return new GoogleGenAI({ apiKey: "" });
};

// PCM Audio Decoding Helper
export async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

// PCM Audio Encoding Helper
export function encodePCM(bytes: Uint8Array): string {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export function decodePCM(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export const CHAT_MODEL = 'gemini-3-flash-preview';
export const VIDEO_MODEL = 'veo-3.1-fast-generate-preview';
export const IMAGE_MODEL = 'gemini-2.5-flash-image';
export const LIVE_MODEL = 'gemini-2.5-flash-native-audio-preview-09-2025';
