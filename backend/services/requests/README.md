# Service Requests API

###### Service Information

service: requests

stage: dev

region: us-west-2

stack: my-request-requests-stack

endpoints:

    ANY - https://y05btwgzvf.execute-api.us-west-2.amazonaws.com/dev/requests
    
#### Requests Data Model

`id` & `date_created` are auto generated by the backend, when making PUT request be sure to exclude those fields.

    {
        "artist": "Outkast",
        "song": "Roses",
        "memo": "Birthday!!!",
        "type": "Not Sure on value",
        "status": "pending",
        "event_id": "705346f8-c9da-4dc4-b0b8-6898595dcaaf",
        "requester_id": "Not Sure on value",
        "original_request_id": "Not Sure on value",
        "id": "8707cb60-560d-11ea-b23e-b109773942df",
        "date_created": "2020-02-23"
    }

Successfully published your service to the [Serverless Dashboard](https://dashboard.serverless.com/tenants/softstack/applications/my-request/services/requests/stage/dev/region/us-west-2)

# Endpoint Test Using Postman

We'll be using Postman to populate our new table with test data using a PUT request.

##### Postman Configuration:
- Endpoint: https://y05btwgzvf.execute-api.us-west-2.amazonaws.com/dev/requests
- Authorization: no auth

##### Populate with sample data
- From the body tab select 'raw' of type JSON
- Provide Payload

        {
            "artist": "Outkast",
            "song": "Roses",
            "memo": "Birthday!!!",
            "type": "Not Sure on value",
            "status": "pending",
            "event_id": "705346f8-c9da-4dc4-b0b8-6898595dcaaf",
            "requester_id": "Not Sure on value",
            "original_request_id": "Not Sure on value"
        }

Successful PUT Response:

    {
        "success": "Successfully added item to the requests table!",
        "record": {
            "artist": "Outkast",
            "song": "Roses",
            "memo": "Birthday!!!",
            "type": "Not Sure on value",
            "status": "pending",
            "event_id": "705346f8-c9da-4dc4-b0b8-6898595dcaaf",
            "requester_id": "Not Sure on value",
            "original_request_id": "Not Sure on value",
            "id": "8707cb60-560d-11ea-b23e-b109773942df",
            "date_created": "2020-02-23"
        }
    }

##### Check record with GET Request:
- From the body tab select 'none'
- Currently ALL GET requests require a id
- From the params tab provide the following key & value
    - Key: id
    - Value: 8707cb60-560d-11ea-b23e-b109773942df

Successful GET Request

    {
        "success": "Successfully found item in the events table!",
        "response": {
            "artist": "Outkast",
            "song": "Roses",
            "original_request_id": "Not Sure on value",
            "status": "pending",
            "event_id": "705346f8-c9da-4dc4-b0b8-6898595dcaaf",
            "memo": "Birthday!!!",
            "requester_id": "Not Sure on value",
            "date_created": "2020-02-23",
            "id": "8707cb60-560d-11ea-b23e-b109773942df",
            "type": "Not Sure on value"
        }
    }


    
aws dynamodb get-item \
    --table-name my-request-requests-table \
    --key-condition-expression "id = :id" \
    --expression-attribute-values  '{":id":{"S":"8707cb60-560d-11ea-b23e-b109773942df"}}'


aws dynamodb get-item \
    --table-name my-request-requests-table \
    --key file://key.json
    
aws dynamodb scan \
     --table-name my-request-requests-table \
     --filter-expression "event_id = :id" \
     --expression-attribute-values '{":id":{"S":"705346f8-c9da-4dc4-b0b8-6898595dcaaf"}}'