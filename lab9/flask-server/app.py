from flask import Flask, request, json, jsonify
from flask_cors import CORS, cross_origin

from athlete import Athlete

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
    athletes.append(createAthlete(request.data))
    return jsonify([item.serialize() for item in athletes]), 200, {'ContentType': 'application/json'}

@app.route('/deleteAthlete')
@cross_origin()
def deleteAthlete():
    athletes.remove(createAthlete(request.data))
    # return jsonify([item.serialize() for item in athletes]), 200, {'ContentType': 'application/json'}

if __name__ == '__main__':
    app.run()


def createAthlete(data):
    athleteJson = json.loads(data)
    return Athlete(athleteJson.get('firstName'),
                   athleteJson.get('secondName'),
                   athleteJson.get('age'),
                   athleteJson.get('discipline'),
                   athleteJson.get('club'),
                   athleteJson.get('nationality'))
