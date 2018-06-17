from blueprints import techapp_bp, techapp_event_bp
from flask import current_app,jsonify,g
from flask_restless.helpers import to_dict
from utils.json_utils import getRequestData

def get_users():
    return current_app.table_proxy.users.get_users(event_id=g.event_id)    

@techapp_event_bp.route('/users', methods=["GET"])
def get_users_route():
    users = get_users()
    return jsonify({'data':[to_dict(user) for user in users],
                    'status':'success'}) 

def add_user(app,username,event_id):    
    if app.table_proxy.users.get_user(username=username,event_id=event_id):        
        return None    
    return current_app.table_proxy.users.add_user(username, commit=True)
    
@techapp_event_bp.route('/user/<username>', methods=["POST"])
def add_user_route(username):
    new_user = add_user(current_app,username,event_id=g.event_id)                
    return jsonify({'data':to_dict(new_user),
                    'status':'fail' if new_user is None else 'success'})
