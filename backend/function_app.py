import azure.functions as func
import logging

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

@app.route(route="http_trigger")
def http_trigger(req: func.HttpRequest) -> func.HttpResponse:
    import os
    from urllib import request
    from urllib import parse
    import json
    
    logging.info('Python HTTP trigger function processed a request.')

    api_token = os.environ['AzureAPI']

    # パラメータの構築
    params = {'location': '35.53152243,139.69696947', 'key': api_token, 'radius': 1500 ,'keyword':'居酒屋'}
    query = parse.urlencode(params)
    url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?"

    # logging.info(url + query)

    # Geocoding APIへのリクエスト
    response = request.urlopen(url + query)

    data = json.loads(response.read().decode("utf-8"))

    logging.info(data)

    # レスポンスの解析
    if data["status"] == "OK":
        return func.HttpResponse(data)
    else:
        return func.HttpResponse("Error: {}".format(data["status"]), status_code=500)