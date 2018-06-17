class EventOperations():
    def __init__(self,sqlAlchemyHandle):
        self.event_model=generate_event_model(sqlAlchemyHandle)
        self.sqlAlchemyHandle = sqlAlchemyHandle
        
    def get_events(self):
        return self.event_model.query.all()
    
    def get_event(self,event_id=None,event_name=None):
        query = self.event_model.query
        if event_id:
            query = query.filter_by(event_id=event_id)            
        else:            
            query = query.filter_by(event_name=event_name)        
        return query.first()
    def add_event(self,event_name,commit=False):
        new_event = self.event_model()
        new_event.event_name=event_name
        self.sqlAlchemyHandle.session.add(new_event)
        if commit:
            self.sqlAlchemyHandle.session.commit()
        return new_event
    
def generate_event_model(db):
    class Event(db.Model):
        event_id = db.Column(db.Integer, primary_key=True)
        event_name = db.Column(db.String(80), unique=True, nullable=False)        

        def __repr__(self):
            return '<Event %r>' % self.event_name
    return Event

