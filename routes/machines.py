from werkzeug.exceptions import BadRequest
from blueprints import techapp_bp,techapp_event_bp
from flask import current_app,jsonify, request, g
from flask_restless.helpers import to_dict
import json
from random import shuffle
import time
from utils.json_utils import getRequestData

def serialize_machine(machine):    
    machine_dict = to_dict(machine)
    machine_dict['problems'] = sorted([to_dict(problem) for problem in machine.problems],key= lambda e: e['problem_id'],reverse=True)
    return machine_dict

def get_machines_test(event_id):        
    machines = []
    for i in range(0,1000):
        machine=""
        for j in range(0,9999):
            machine = machine+str(j)
        machines.append(machine)
    return machines    

def get_machines(event_id):        
    return current_app.table_proxy.machines.get_machines(event_id)
    
@techapp_event_bp.route('/machines', methods=["GET"])
def get_machines_route():
    machines = get_machines(g.event_id)
    return jsonify({'data':[to_dict(machine) for machine in machines],'status':'success'}) 
    #machines = get_machines_test(g.event_id)
    #return jsonify({'data':machines,'status':'success'})
    

@techapp_event_bp.route('/machine/<machine_id>', methods=["GET"])
def get_machine_route(machine_id):
    machine = current_app.table_proxy.machines.get_machine(machine_id=machine_id)
    return jsonify({'data':serialize_machine(machine),'status':'success'}) 

def edit_machine(app,machine_info):
    machine = app.table_proxy.machines.edit_machine(machine_info,commit=True)
    if machine is None:
        raise BadRequest('Failed to edit machine')
    return machine

def swap_machines(app,event_id,machines_info):                
    return None

def force_backup_machine(app,machine_info):
    # force selection of a specific backup machine
    pass

def pick_backup_machine(app,machine_info,force_backup_machine=False):                    
    machines = app.table_proxy.machines.get_machines(g.event_id,backup_machine_era_type=machine_info['machine_era_type'],no_current_problems=True)
    machines = [machine for machine in machines if len([problem for problem in machine.problems if problem.resolved is False])==0]
    sorted_machines = sorted(machines, key= lambda e: e.backup_machine_play_count,reverse=True)        
    last_played_backup_machine = sorted_machines.pop(0)        
    highest_count = last_played_backup_machine.backup_machine_play_count
    
    if force_backup_machine:
        new_backup_machine = app.table_proxy.machines.get_machine(machine_id=machine_info['machine_id'])
        new_backup_machine.backup_machine_play_count=highest_count+1
    else:        
        new_backup_machine = sorted_machines.pop()
        new_backup_machine.backup_machine_play_count=highest_count+1        
    app.table_proxy.commit_changes()                    
    return new_backup_machine


def add_machine(app,event_id,machine_info):
    machine_four_digit_id=machine_info.get('machine_four_digit_id',None)            
    if current_app.table_proxy.machines.get_machine(machine_four_digit_id=machine_four_digit_id):        
        return None    
    return current_app.table_proxy.machines.add_machine(event_id,
                                                        machine_info,commit=True)
    
@techapp_event_bp.route('/machine', methods=["POST"])
def add_machine_route():
    input_data = getRequestData(request)
    new_machine = add_machine(current_app,g.event_id,input_data)                
    return jsonify({'data':to_dict(new_machine),
                    'status':'fail' if new_machine is None else 'success'})

@techapp_event_bp.route('/machine', methods=["PUT"])
def edit_machine_route():
    input_data = getRequestData(request)    
    action = request.args.get('action',None)
    if action == "edit" or action is None:
        edited_machine = edit_machine(current_app,input_data)                
    return jsonify({'data':serialize_machine(edited_machine),
                    'status':'success'})

@techapp_event_bp.route('/backup_machine', methods=["PUT"])
def get_backup_machine_route():
    input_data = getRequestData(request)             
    force_backup_machine=request.args.get('force',None) is not None
    backup_machine = pick_backup_machine(current_app,input_data,force_backup_machine)                
    return jsonify({'data':to_dict(backup_machine),
                    'status':'success'})

@techapp_event_bp.route('/machine_locations', methods=["GET"])
def get_machine_locations_route():                
    machine_locations=[]
    for i in range(1,64):
        machine_locations.append("Bank "+str(i))
    return jsonify({'data':machine_locations,
                    'status':'success'})

