require('dotenv').config();

import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource (S3 Bucket)
// https://www.pulumi.com/docs/intro/concepts/resources/#autonaming

const bucketArgs: aws.s3.BucketArgs = {
    bucket: process.env.BUCKET_NAME!
}

const bucket = new aws.s3.Bucket(process.env.BUCKET_NAME!, bucketArgs);

// Export the name of the bucket
exports.bucketName = bucket.id;
