require('dotenv').config();

import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';
import * as awsx from '@pulumi/awsx';

import * as cdnWebsite from './modules/cdn-website';

// create cdn website
cdnWebsite.create();
