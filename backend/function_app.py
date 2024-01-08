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
    params = {'input': '神奈川県川崎市幸区大宮町', 'key': api_token, 'inputtype': 'textquery'}
    query = parse.urlencode(params)
    url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json"

    logging.info(query + url)

    # Geocoding APIへのリクエスト
    response = request.urlopen(url + query)

    logging.info(response)

    # レスポンスの解析
    if response.status_code == 200:
        data = response.json()
        return func.HttpResponse(data)
    else:
        return func.HttpResponse("Error: {}".format(res.status_code), status_code=res.status_code)