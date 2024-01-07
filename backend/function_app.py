import azure.functions as func
import logging

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

@app.route(route="http_trigger")
def http_trigger(req: func.HttpRequest) -> func.HttpResponse:
    import os
    import requests
    
    logging.info('Python HTTP trigger function processed a request.')

    api_token = os.environ['AzureAPI']

    # パラメータの構築
    params = {'input': '神奈川県川崎市幸区大宮町', 'key': api_token, 'inputtype': 'textquery'}  # 修正

    # Geocoding APIへのリクエスト
    res = requests.get("https://maps.googleapis.com/maps/api/place/findplacefromtext/json", params=params)  # 修正

    # レスポンスの解析
    if res.status_code == 200:
        data = res.json()
        return func.HttpResponse(data)
    else:
        return func.HttpResponse("Error: {}".format(res.status_code), status_code=res.status_code)