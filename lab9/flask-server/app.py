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


@app.route('/addAthlete', methods=['GET', 'POST'])
@cross_origin()
def addAthlete():
    athletes.append(createAthlete(request.data))
    return jsonify([item.serialize() for item in athletes]), 200, {'ContentType': 'application/json'}

@app.route('/deleteAthlete', methods=['GET', 'POST'])
@cross_origin()
def deleteAthlete():
    athleteJson = json.loads(request.data)
    removeAthlete(athleteJson.get('id'))
    return jsonify([item.serialize() for item in athletes]), 200, {'ContentType': 'application/json'}

@app.route('/athletesList', methods=['GET'])
@cross_origin()
def getAthletesList():
    return jsonify([item.serialize() for item in athletes]), 200, {'ContentType': 'application/json'}

if __name__ == '__main__':
    app.run()

def createAthlete(data):
    athleteJson = json.loads(data)
    return Athlete(athleteJson.get('id'),
                   athleteJson.get('firstName'),
                   athleteJson.get('secondName'),
                   athleteJson.get('age'),
                   athleteJson.get('disc'),
                   athleteJson.get('club'),
                   athleteJson.get('nationality'))

def removeAthlete(removeId):
    for athlete in athletes:
        if athlete.id == removeId:
            athletes.remove(athlete);