from models.Events import EventOperations
from models.Users import UserOperations
from models.Machines import MachineOperations
from models.Problems import ProblemOperations

class TableProxy():
    def __init__(self,sqlAlchemyHandle):
        self.sqlAlchemyHandle = sqlAlchemyHandle
        self.events = EventOperations(sqlAlchemyHandle)
        self.users = UserOperations(sqlAlchemyHandle)
        self.problems = ProblemOperations(self)
        self.machines = MachineOperations(sqlAlchemyHandle)        
        
        
        
    def commit_changes(self):
        self.sqlAlchemyHandle.session.commit()
        
    def create_db(self):
        self.sqlAlchemyHandle.create_all()
    
