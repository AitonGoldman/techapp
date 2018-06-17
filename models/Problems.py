class ProblemOperations():
    def __init__(self,tableProxy):
        self.problem_model=generate_problem_model(tableProxy.sqlAlchemyHandle)
        #self.sqlAlchemyHandle = sqlAlchemyHandle
        self.tableProxy=tableProxy
        
    def get_problems(self,event_id,machine_id=None):
        query = self.problem_model.query.join(self.tableProxy.machines.machine_model).filter_by(event_id=event_id)
        if(machine_id):
            query = query.filter_by(machine_id=machine_id)
        return query.all()

    def get_problem(self,problem_id):
        return self.problem_model.query.filter_by(problem_id=problem_id).first()                            
    
    def edit_problem(self,problem_info,commit=False):
        problem = self.get_problem(problem_info['problem_id'])
        if problem is None:
            return None
        for field in ["problem_type","resolved","description"]:
            if field in problem_info:                
                setattr(problem,field,problem_info[field])                
        if commit:
            self.tableProxy.sqlAlchemyHandle.session.commit()
        return problem
            
    def add_problem(self,problem_info,commit=False):
        machine = self.tableProxy.machines.get_machine(machine_id=problem_info['machine_id'])
        if machine is None:
            return None
        new_problem = self.problem_model()                
        for field in ["problem_type","user_id"]:
            if field not in problem_info:
                return None
            setattr(new_problem,field,problem_info[field])            
            if field == "stuck ball":
                setattr(new_problem,"resolved",True)
        for field in ["resolved","description"]:
            if field in problem_info:                
                setattr(new_problem,field,problem_info[field])                
        self.tableProxy.sqlAlchemyHandle.session.add(new_problem)
        machine.problems.append(new_problem)
        if commit:
            self.tableProxy.sqlAlchemyHandle.session.commit()
        return new_problem
    
def generate_problem_model(db):
    class Problem(db.Model):
        problem_id = db.Column(db.Integer, primary_key=True)
        user_id = db.Column('user_id',db.Integer,db.ForeignKey('user.user_id'))
        problem_type = db.Column(db.String(80), nullable=False)
        machine_id = db.Column('machine_id',db.Integer,db.ForeignKey('machine.machine_id'))
        resolved = db.Column(db.Boolean, default=False)
        description = db.Column(db.String(1000))
    return Problem

