from flask import Blueprint,g

techapp_bp = Blueprint('techapp_bp', __name__)
techapp_event_bp = Blueprint('techapp_event_bp', __name__, url_prefix='/<event_id>')

@techapp_event_bp.url_value_preprocessor
def pull_event_id(endpoint, values):
    g.event_id = values.pop('event_id')
