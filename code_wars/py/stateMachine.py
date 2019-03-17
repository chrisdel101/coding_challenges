class Automaton(object):

    def __init__(self):
        self.state = "q1"
        self.dict = dict = {
            'q1': {
                "1": "q2",
                "0": "q1",
            },
            'q2': {
                "0": "q3",
                "1": "q2",
            },
            'q3':{
                "0":"q2",
                "1": "q2"
            }
        }

    def read_commands(self, commands):
        for (i,command) in enumerate(commands):
            key = self.dict[self.state]
            self.state = key[command]
            
        return True if self.state == 'q2' else False
        # if self.state == 'q2':
        #     return True
        # else:
        #     return False
my_automaton = Automaton()
my_automaton.read_commands(["1", "0", "0", "1"])



    # eventList.forEach(event => {
    #     let key = obj[state]
    #     if(!key) return 'ERROR'
    #     state = key[event]
    # })
