from blueprints import techapp_bp
from flask import current_app,jsonify
from flask_restless.helpers import to_dict

def get_events():
    return current_app.table_proxy.events.get_events()    
    
@techapp_bp.route('/events', methods=["GET"])
def get_events_route():
    events = get_events()
    return jsonify({'data':[to_dict(event) for event in events],'status':'success'}) 

def add_event(app,event_name):    
    if app.table_proxy.events.get_event(event_name=event_name):        
        return None    
    return current_app.table_proxy.events.add_event(event_name,commit=True)
    
@techapp_bp.route('/event/<event_name>', methods=["POST"])
def add_event_route(event_name):
    new_event = add_event(current_app,event_name)                
    return jsonify({'data':to_dict(new_event),
                    'status':'fail' if new_event is None else 'success'})
