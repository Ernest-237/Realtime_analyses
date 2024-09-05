import sounddevice as sd
import numpy as np
import librosa

def analyze_realtime(duration=8, sr=44100):
    def callback(indata, frames, time, status):
        if status:
            print(f"Status: {status}")
        audio_data.extend(indata[:, 0])

    audio_data = []
    try:
        # Capture du son en temps réel
        with sd.InputStream(callback=callback, channels=1, samplerate=sr):
            sd.sleep(int(duration * 1000))  # Durée en millisecondes

        # Convertir les données capturées en un format utilisable par librosa
        y = np.array(audio_data)
        pitches, magnitudes = librosa.piptrack(y=y, sr=sr)

        # Extraire les notes
        notes = []
        for t in range(pitches.shape[1]):
            index = magnitudes[:, t].argmax()
            pitch = pitches[index, t]
            if pitch > 0:
                note = librosa.hz_to_note(pitch)
                notes.append(note)

        return notes

    except Exception as e:
        print(f"Erreur lors de la capture audio : {e}")
        return ["Erreur lors de l'analyse audio"]
