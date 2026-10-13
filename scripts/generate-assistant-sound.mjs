// Minimal WAV generator for a short chime written to public/sounds/assistant-open.wav
// Usage: node scripts/generate-assistant-sound.mjs
import fs from 'fs'
import path from 'path'

function ensureDirSync(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

function writeWavPCM16Mono(samples, sampleRate) {
  const numChannels = 1
  const bitsPerSample = 16
  const blockAlign = (numChannels * bitsPerSample) / 8
  const byteRate = sampleRate * blockAlign
  const dataSize = samples.length * 2
  const buffer = Buffer.alloc(44 + dataSize)

  // RIFF header
  buffer.write('RIFF', 0)
  buffer.writeUInt32LE(36 + dataSize, 4)
  buffer.write('WAVE', 8)

  // fmt chunk
  buffer.write('fmt ', 12)
  buffer.writeUInt32LE(16, 16) // PCM chunk size
  buffer.writeUInt16LE(1, 20) // audio format = PCM
  buffer.writeUInt16LE(numChannels, 22)
  buffer.writeUInt32LE(sampleRate, 24)
  buffer.writeUInt32LE(byteRate, 28)
  buffer.writeUInt16LE(blockAlign, 32)
  buffer.writeUInt16LE(bitsPerSample, 34)

  // data chunk
  buffer.write('data', 36)
  buffer.writeUInt32LE(dataSize, 40)

  // PCM samples
  let offset = 44
  for (let i = 0; i < samples.length; i++) {
    // Clamp and convert to 16-bit signed integer
    const s = Math.max(-1, Math.min(1, samples[i]))
    buffer.writeInt16LE(Math.floor(s * 32767), offset)
    offset += 2
  }

  return buffer
}

function generateChime({
  sampleRate = 44100,
  durationSeconds = 0.8,
  tones = [523.25, 783.99], // C5 then G5
  toneSwitchAt = 0.35,
  volume = 0.35
} = {}) {
  const totalSamples = Math.floor(durationSeconds * sampleRate)
  const switchSample = Math.floor(toneSwitchAt * sampleRate)
  const samples = new Float32Array(totalSamples)

  for (let i = 0; i < totalSamples; i++) {
    const t = i / sampleRate
    const freq = i < switchSample ? tones[0] : tones[1]
    // Simple ADSR-like envelope: quick attack, gentle decay
    let env
    const attack = 0.02
    const decay = durationSeconds - attack
    if (t < attack) {
      env = t / attack
    } else {
      const dt = (t - attack) / decay
      env = Math.pow(1 - dt, 1.2)
    }
    const sample = Math.sin(2 * Math.PI * freq * t) * env * volume
    samples[i] = sample
  }

  return writeWavPCM16Mono(samples, sampleRate)
}

function main() {
  const outDir = path.join(process.cwd(), 'public', 'sounds')
  ensureDirSync(outDir)
  const outPath = path.join(outDir, 'assistant-open.wav')
  const wav = generateChime()
  fs.writeFileSync(outPath, wav)
  console.log(`Generated: ${outPath}`)
}

main()


