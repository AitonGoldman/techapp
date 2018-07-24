import os
from lib.TableProxy import TableProxy
from flask import Flask,current_app,Blueprint, request, g
import routes
import blueprints
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

def generate_extract_user_from_params():
    def extract_user_from_params():
        if 'user_id' in request.args:
            g.user_id=request.args['user_id']
    return extract_user_from_params

def generate_extract_event_from_params():
    def extract_event_from_params():
        if 'event_id' in request.args:
            g.event_id=request.args['event_id']
    return extract_event_from_params


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)    
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'techapp.sqlite')        
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass
    #app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////%s/test.db' % app.instance_path
    db_username=os.environ['db_username']
    db_password=os.environ['db_password']
    db_name='techapp'

    app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://%s:%s@localhost/%s" % (db_username,db_password,db_name)
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    CORS(
        app,
        headers=['Content-Type', 'Accept'],
        vary_header=False,
        #send_wildcard=False,        
        supports_credentials=True
    )    

    app.db = SQLAlchemy(app)
    app.table_proxy = TableProxy(app.db)
    techapp_user_bp = Blueprint('techapp_user', __name__)
    app.register_blueprint(blueprints.techapp_bp)
    app.register_blueprint(blueprints.techapp_event_bp)    
    app.before_request(generate_extract_user_from_params())
    app.before_request(generate_extract_event_from_params())

                    
    return app

