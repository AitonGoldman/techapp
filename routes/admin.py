from blueprints import techapp_bp
from flask import current_app,jsonify
from flask_restless.helpers import to_dict

@techapp_bp.route('/admin/create_db', methods=["POST"])
def create_db():
    current_app.table_proxy.create_db()    
    return jsonify({'status':'success'})
