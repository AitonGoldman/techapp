from sqlalchemy_utils import create_database, database_exists, drop_database as sql_utils_drop_database
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from lib.TableProxy import TableProxy
import os,sys

if len(sys.argv) > 1:
    db_name=sys.argv[1]    
else:
    print "didn't specify db name..."
    sys.exit(1)


db_username=os.environ['db_username']
db_password=os.environ['db_password']
db_name='techapp'
    
db_url="postgresql://%s:%s@localhost/%s" % (db_username,db_password,db_name)    

flask_app = Flask('dummy')
flask_app.config['SQLALCHEMY_DATABASE_URI'] = db_url
flask_app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
if database_exists(db_url):        
    sql_utils_drop_database(db_url)
create_database(db_url)
db_handle = SQLAlchemy(flask_app)
table_proxy = TableProxy(db_handle)
db_handle.create_all()            

