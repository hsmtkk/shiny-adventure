import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as lambda_python from '@aws-cdk/aws-lambda-python-alpha';

export class ShinyAdventureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda_python.PythonFunction(this, 'sample', {
      bundling: {
        assetExcludes: ['.venv'],
      },
      entry: './sample',
      index: 'main.py',
      handler: 'handler',
      runtime: lambda.Runtime.PYTHON_3_11,
    });
  }
}
