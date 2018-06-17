from blueprints import techapp_bp, techapp_event_bp
from flask import current_app,jsonify,g
from flask_restless.helpers import to_dict
from routes.machines import get_machines
from routes.events import get_events
from routes.users import get_users

@techapp_bp.route('/startup', methods=["GET"])
def get_startup_info_route():
    events = get_events()
    users = get_users()
    machines = get_machines(g.event_id)        
    return jsonify({'data':{'machines':[to_dict(machine) for machine in machines],
                            'events':[to_dict(event) for event in events],
                            'users':[to_dict(event) for user in users]},
                    'status':'success'}) 

