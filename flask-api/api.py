from flask import Flask
import time
import os

app = Flask(__name__)
if __name__ == "__main__":
    app.run(debug=True)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    return app.send_static_file('index.html')


@app.route('/api/time')
def get_current_time():
    return {
        'time': time.time()
    }


@app.route('/api/secret')
def get_secret():
    return {
        'secret': os.environ.get('SECRET_KEY')
    }
