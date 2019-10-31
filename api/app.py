from flask import Flask
import json


app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/questions', methods=["GET"])
def get_questions():

    file = open("resources/questions.json", "r")
    questions = json.load(file)

    return questions


if __name__ == '__main__':
    app.run()
