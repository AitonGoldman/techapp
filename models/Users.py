class UserOperations():
    def __init__(self,sqlAlchemyHandle):
        self.user_model=generate_user_model(sqlAlchemyHandle)
        self.sqlAlchemyHandle = sqlAlchemyHandle
        
    def get_user(self,event_id=None,username=None,user_id=None):
        query = self.user_model.query
        if username:
            query = query.filter_by(username=username)
        else:
            query = query.filter_by(user_id=user_id)            
        return query.first()
    
    def get_users(self, event_id=None):
        return self.user_model.query.all()
    
    def add_user(self, username, event_id=None, commit=False):
        new_user = self.user_model()
        new_user.username=username
        self.sqlAlchemyHandle.session.add(new_user)
        if commit:
            self.sqlAlchemyHandle.session.commit()
        return new_user
    
def generate_user_model(db):
    class User(db.Model):
        user_id = db.Column(db.Integer, primary_key=True)
        username = db.Column(db.String(80), unique=True, nullable=False)        

        def __repr__(self):
            return '<User %r>' % self.username
    return User

