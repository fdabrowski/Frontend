class Athlete:
    def __init__(self, firstName, secondName, age, discipline, club, nationality):
        self.firstName = firstName
        self.secondName = secondName
        self.age = age
        self.discipline = discipline
        self.club = club
        self.nationality = nationality

    def serialize(self):
        return {
            'firstName': self.firstName,
            'secondName': self.secondName,
            'age': self.age,
            'discipline': self.discipline,
            'club': self.club,
            'nationality': self.nationality
        }