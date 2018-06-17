curl -X POST http://0.0.0.0:8000/admin/create_db
curl -X POST http://0.0.0.0:8000/event/test_event8
curl -X POST http://0.0.0.0:8000/event/test_event8
curl http://0.0.0.0:8000/events
curl -X POST http://0.0.0.0:8000/1/user/aiton2
curl -X POST http://0.0.0.0:8000/1/user/aiton2
curl -X POST http://0.0.0.0:8000/1/user/aiton3
curl -X POST http://0.0.0.0:8000/1/user/aiton4
curl http://0.0.0.0:8000/1/users
curl -X POST  -H "Content-Type: application/json" -d '{"body":{"machine_name":"centaur","machine_era_type":1,"machine_four_digit_id":"1234"}}' http://0.0.0.0:8000/1/machine
curl -X POST  -H "Content-Type: application/json" -d '{"body":{"machine_name":"centaur","machine_era_type":1,"machine_four_digit_id":"1234"}}' http://0.0.0.0:8000/1/machine
curl -X POST  -H "Content-Type: application/json" -d '{"body":{"machine_name":"centaur2","machine_era_type":1,"machine_four_digit_id":"1235"}}' http://0.0.0.0:8000/1/machine
curl -X POST  -H "Content-Type: application/json" -d '{"body":{"machine_name":"centaur3","machine_era_type":1,"machine_four_digit_id":"1236"}}' http://0.0.0.0:8000/1/machine
curl -X POST  -H "Content-Type: application/json" -d '{"body":{"machine_name":"centaur4","machine_era_type":1,"machine_four_digit_id":"1237"}}' http://0.0.0.0:8000/1/machine
curl http://0.0.0.0:8000/1/machines
curl http://0.0.0.0:8000/1/machine/1
curl -X PUT  -H "Content-Type: application/json" -d '{"body":{"backup_machine":true, "machine_location":"here","machine_id":"1"}}' http://0.0.0.0:8000/1/machine
curl -X PUT  -H "Content-Type: application/json" -d '{"body":{"backup_machine":true, "machine_location":"here","machine_id":"2"}}' http://0.0.0.0:8000/1/machine
curl -X PUT  -H "Content-Type: application/json" -d '{"body":{"backup_machine":true, "machine_location":"here","machine_id":"3"}}' http://0.0.0.0:8000/1/machine
curl -X PUT  -H "Content-Type: application/json" -d '{"body":{"backup_machine":true, "machine_location":"here","machine_id":"4"}}' http://0.0.0.0:8000/1/machine
curl -X POST  -H "Content-Type: application/json" -d '{"body":{"problem_type":"stuck ball","machine_id":"1","user_id":"1"}}' http://0.0.0.0:8000/1/problem
curl -X PUT  -H "Content-Type: application/json" -d '{"body":{"description":"blah blah blah blah","problem_id":"1"}}' http://0.0.0.0:8000/1/problem
curl -X GET  -H "Content-Type: application/json" http://0.0.0.0:8000/1/problems
curl -X GET  -H "Content-Type: application/json" -d '{"body":{"machine_name":"centaur","machine_era_type":1,"machine_four_digit_id":"1234","machine_id":"1"}}' http://0.0.0.0:8000/1/backup_machine
curl -X GET  -H "Content-Type: application/json" -d '{"body":{"machine_name":"centaur","machine_era_type":1,"machine_four_digit_id":"1234","machine_id":"1"}' http://0.0.0.0:8000/1/backup_machine?force=true
curl -X GET  -H "Content-Type: application/json" http://0.0.0.0:8000/1/startup

