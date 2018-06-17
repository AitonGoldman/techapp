export class ProblemModelBuilder {
    machine_id: number = null;
    problem_type: string = null;
    description: string = null;
    resolved: boolean = false;
    problem_id: number = null;
    user_id: number = null;
    
    setMachineId(value: number): ProblemModelBuilder {
        this.machine_id=value;
        return this;
    }
    setProblemType(value: string): ProblemModelBuilder {
        this.problem_type=value;
        return this;
    }

    setDescription(value: string): ProblemModelBuilder {
        this.description=value;
        return this;
    }
    
    setResolved(value: boolean): ProblemModelBuilder {
        this.resolved=value;
        return this;
    }    
    setUserId(value: number): ProblemModelBuilder {
        this.user_id=value;
        return this;
    }
    
    buildFromJson(value: any){        
        this.machine_id=value['first_name'] as number
        this.problem_id=value['problem_id'] as number
        this.problem_type=value['problem_type']
        this.description=value['description']
        this.resolved=value['resolved'] as boolean
        this.user_id=value['user_id'] as number
        return this;
    }
    
    build(): ProblemModel {
        return new ProblemModel(this);
    }
    
}

export class ProblemModel {
    machine_id: number = null;
    problem_type: string = null;
    description: string = null;
    resolved: boolean = false;
    problem_id: number = null;
    user_id: number = null;
    
    constructor(problemModelBuilder: ProblemModelBuilder ){
        this.machine_id=problemModelBuilder.machine_id
        this.problem_id=problemModelBuilder.problem_id
        this.problem_type=problemModelBuilder.problem_type
        this.description=problemModelBuilder.description
        this.resolved=problemModelBuilder.resolved
        this.user_id=problemModelBuilder.user_id
    }           
}
