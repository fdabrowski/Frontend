from flask import Flask, request, json
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
athletes = []


@app.route('/')
@cross_origin()
def hello_world():
    return 'Hello World!'


@app.route('/athletes', methods=['GET', 'POST'])
@cross_origin()
def getAthlete():
    athlete = request.data
    athleteJson = json.loads(athlete)
    athletes.append(athleteJson)
    print(athletes)
    return json.dumps({'success': True}), 200, {'ContentType': 'application/json'}


if __name__ == '__main__':
    app.run()
