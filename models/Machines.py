class MachineOperations():
    def __init__(self,sqlAlchemyHandle):
        self.machine_model=generate_machine_model(sqlAlchemyHandle)
        self.sqlAlchemyHandle = sqlAlchemyHandle

    def machine_has_no_problems(self,machine):
        return len([problem for problem in machine.problems if problem.resolved is True])==0
    
    def get_machines(self,event_id,backup_machine_era_type=None,no_current_problems=False):
        query = self.machine_model.query.filter_by(event_id=event_id)
        if backup_machine_era_type:
            query = query.filter_by(machine_era_type=backup_machine_era_type).filter_by(backup_machine=True)
        if no_current_problems:
            return [machine for machine in query.all() if self.machine_has_no_problems(machine)]
        return query.all()
    
    def get_machine(self, machine_id=None,machine_name=None,machine_four_digit_id=None):
        query = self.machine_model.query
        if machine_id:
            query = query.filter_by(machine_id=machine_id)            
        if machine_name:            
            query = query.filter_by(machine_name=machine_name)            
        if machine_four_digit_id:
            query = query.filter_by(machine_four_digit_id=machine_four_digit_id)            
        return query.first()

    def edit_machine(self,machine_info,commit=False):
        machine = self.get_machine(machine_id=machine_info['machine_id'])
        if machine is None:
            return None
        for field in ["machine_location","backup_machine","backup_machine_play_count"]:
            if field in machine_info:                
                setattr(machine,field,machine_info[field])                
        if commit:
            self.sqlAlchemyHandle.session.commit()
        return machine
            
    def add_machine(self,event_id,machine_info,commit=False):
        new_machine = self.machine_model()
        new_machine.event_id=event_id
        for field in ["machine_name","machine_four_digit_id","machine_era_type"]:
            if field not in machine_info:
                return None
            setattr(new_machine,field,machine_info[field])
        for field in ["machine_location","backup_machine"]:
            if field in machine_info:                
                setattr(new_machine,field,machine_info[field])                
        self.sqlAlchemyHandle.session.add(new_machine)
        if commit:
            self.sqlAlchemyHandle.session.commit()
        return new_machine
    
def generate_machine_model(db):
    class Machine(db.Model):
        machine_id = db.Column(db.Integer, primary_key=True)
        machine_era_type = db.Column(db.Integer)
        machine_name = db.Column(db.String(80), nullable=False)
        machine_four_digit_id = db.Column(db.Integer, unique=True)        
        event_id = db.Column('event_id',db.Integer,db.ForeignKey('event.event_id'))
        machine_location = db.Column(db.String(255))
        backup_machine = db.Column(db.Boolean,default=False)
        backup_machine_play_count = db.Column(db.Integer,default=0)
        problems = db.relationship(
            'Problem', cascade='all'
        )

        def __repr__(self):
            return '<Machine %r>' % self.machine_name
    return Machine

