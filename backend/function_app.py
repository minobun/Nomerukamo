import azure.functions as func
import logging
import os

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

@app.route(route="http_trigger")
def http_trigger(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    api_token = os.environ('AzureAPI')

    # パラメータの構築
    params = {'address': '神奈川県川崎市幸区大宮町', 'key': api_token}

    # Geocoding APIへのリクエスト
    res = req.get("https://maps.googleapis.com/maps/api/place/findplacefromtext/output?",params=params)

    # レスポンスの解析
    if res.status_code == 200:
        data = res.json()
        return func.HttpResponse(data)
    else:
        return func.HttpResponse("This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.")