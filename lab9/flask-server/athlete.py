class Athlete:
    def __init__(self, id, firstName, secondName, age, disc, club, nationality):
        self.id = id
        self.firstName = firstName
        self.secondName = secondName
        self.age = age
        self.disc = disc
        self.club = club
        self.nationality = nationality

    def serialize(self):
        return {
            'id': self.id,
            'firstName': self.firstName,
            'secondName': self.secondName,
            'age': self.age,
            'disc': self.disc,
            'club': self.club,
            'nationality': self.nationality
        }