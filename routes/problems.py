from werkzeug.exceptions import BadRequest
from blueprints import techapp_bp,techapp_event_bp
from flask import current_app,jsonify, request, g
from flask_restless.helpers import to_dict
import json
from utils.json_utils import getRequestData

def serialize_problem(problem,machines):
    problem_dict = to_dict(problem)
    problem_dict['machine']=to_dict(machines[problem.machine_id])
    return problem_dict
    
    
@techapp_event_bp.route('/problems', methods=["GET"])
def get_all_problems_route():
    problems = current_app.table_proxy.problems.get_problems(g.event_id)
    machines = current_app.table_proxy.machines.get_machines(g.event_id)
    machines_dict = {machine.machine_id:to_dict(machine) for machine in machines}
    return jsonify({'data':[serialize_problem(problem,machines_dict) for problem in problems],'status':'success'}) 


def edit_problem(app,problem_info):
    problem = app.table_proxy.problems.edit_problem(problem_info,commit=True)
    if problem is None:
        raise BadRequest('Failed to edit problem')
    return problem

def add_problem(app,problem_info):                
    return app.table_proxy.problems.add_problem(problem_info,commit=True)
    
@techapp_event_bp.route('/problem', methods=["POST"])
def add_problem_route():
    input_data = getRequestData(request)    
    new_problem = add_problem(current_app,input_data)                
    return jsonify({'data':to_dict(new_problem),
                    'status':'fail' if new_problem is None else 'success'})

@techapp_event_bp.route('/problem', methods=["PUT"])
def edit_problem_route():
    input_data = getRequestData(request)    
    edited_problem = edit_problem(current_app,input_data)                
    return jsonify({'data':to_dict(edited_problem),
                    'status':'success'})

@techapp_event_bp.route('/problem_types', methods=["GET"])
def get_problem_types():
    problem_types=["stuck ball","flipper stops working","flipper stuck","flipper chattering","flipper weak", "game ends in middle of ball", "2 balls popped into shooter lane", "switch registering incorrectly","switch not registering","other"]
    return jsonify({'data':problem_types,
                    'status':'success'})
