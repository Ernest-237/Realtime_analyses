from flask import Flask, request, jsonify, render_template
from audio_analysis.analyze_file import analyze_audio_file
from audio_analysis.realtime_analysis import analyze_realtime

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/analyze', methods=['POST'])
def analyze():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    file = request.files['file']
    filepath = f"uploads/{file.filename}"
    file.save(filepath)

    notes = analyze_audio_file(filepath)
    return jsonify({'notes': notes})

@app.route('/realtime', methods=['POST'])
def realtime():
    notes = analyze_realtime()
    return jsonify({'notes': notes})

if __name__ == '__main__':
    app.run(debug=True)
