import random
from flask import Flask, render_template

app = Flask(__name__, static_folder="../static/dist", template_folder="../static")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/hello")
def hello():
    return get_hello()

def get_hello():
    greeting_list = ['Bonjour', 'Ciao', 'Hei', 'สวัสดี', 'Salut', 'Hola', 'Hallo', 'Hej', '你好', 'Yoo', 'こんにちは', '안녕하세요']
    return random.choice(greeting_list)

if __name__ == "__main__":
    app.run()
