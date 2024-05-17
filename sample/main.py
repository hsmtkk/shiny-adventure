import dateutil


def handler(event, context):
    parsed = dateutil.parser.parse("Sat Oct 11 17:13:46 UTC 2003")
    return {"status": 200, "result": str(parsed)}
