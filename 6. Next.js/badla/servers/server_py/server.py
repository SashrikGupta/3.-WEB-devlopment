# from flask import Flask, request, jsonify
# from flask_cors import CORS  # Add this import for CORS support
# from moviepy.editor import AudioFileClip
# import assemblyai as aai
# import os


# # Environment setup 


# gkey = "AIzaSyC2w_s0gzTC5bNkDeiOnloUdKf7RAIIlbM"
# aikey = "687063c7417345c4b8de68a676b60714"

# aai.settings.api_key = aikey
# transcriber = aai.Transcriber()

# # The description function 
# def aud_desc(video_path):
#     audioclip = AudioFileClip(video_path)
#     duration = audioclip.duration  
#     segment_length = 30000000
#     transcriptions = []
    
#     for start in range(0, int(duration), segment_length):
#         end = min(start + segment_length, duration)
#         segment = audioclip.subclip(start, end)
#         output_file = f"audio_{start}_{end}.mp3"
#         segment.write_audiofile(output_file)
#         transcript = transcriber.transcribe(output_file)
#         transcriptions.append(transcript.text)
#         os.remove(output_file)
    
#     full_transcript = " ".join(transcriptions)
#     return full_transcript

# app = Flask(__name__)
# CORS(app)  # Enable CORS for all routes

# @app.route('/upload', methods=['POST'])
# def upload_video():
#     if 'video' not in request.files:
#         return jsonify({'error': 'No video file provided'}), 400
    
#     video = request.files['video']
#     video_path = os.path.join('uploads', video.filename)
#     video.save(video_path)
    
#     try:
#         audio = aud_desc(video_path)
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500
#     finally:
#         os.remove(video_path)
    
#     return jsonify({'summary': summary}), 200

# if __name__ == '__main__':
#     if not os.path.exists('uploads'):
#         os.makedirs('uploads')
#     app.run(debug=True, port=5000, threaded=True)

from flask import Flask, request, jsonify, send_file
from flask_cors import CORS  # Import CORS from flask_cors
import os
from moviepy.editor import VideoFileClip

app = Flask(__name__)
CORS(app)  # Apply CORS to your Flask app

# Define global variables
vp = ""
ap = ""

def aud_desc(video_path):
    try:
        video = VideoFileClip(video_path)
        audio = video.audio
        audio_path = os.path.join('uploads', 'extracted_audio.mp3')
        audio.write_audiofile(audio_path, codec='mp3')
        video.reader.close()
        video.audio.reader.close_proc()
        return audio_path
    except Exception as e:
        return str(e)

@app.route('/upload_video', methods=['POST'])
def upload_video():
    global vp, ap
    if 'video' not in request.files:
        return jsonify({'error': 'No video file provided'}), 400
    
    video = request.files['video']
    if not os.path.exists('uploads'):
        os.makedirs('uploads')
    video_path = os.path.join('uploads', video.filename)
    video.save(video_path)
    
    try:
        audio_path = aud_desc(video_path)
        vp = video_path
        ap = audio_path
        return send_file(audio_path, as_attachment=True)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/delete', methods=['POST'])
def delete():
    global vp, ap
    try:
        if os.path.exists(vp):
            os.remove(vp)
        if os.path.exists(ap):
            os.remove(ap)
        vp, ap = "", ""
        return jsonify({'message': 'Files deleted successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)