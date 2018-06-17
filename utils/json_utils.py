import json

def getRequestData(request):
    if request.data:        
        return json.loads(request.data)['body']
    
