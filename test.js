'use strict';

//Only test the configurable keys

const assert = require('better-assert');
const nativeAssert = require('assert');

const createConfigurationVariant = require('./create-configuration-variant');

assert(typeof createConfigurationVariant === 'function');

const defaultConf = createConfigurationVariant();

assert(typeof defaultConf === 'object');
assert(defaultConf.env.node === true);

/*--------------------------*/

const customConf = createConfigurationVariant({
	envNode: 'customEnvNode'
});

assert(typeof customConf === 'object');
assert(customConf.env.node === 'customEnvNode');

/*--------------------------*/

const envNode = require('./env-node');

assert(typeof envNode === 'object');
assert(envNode.env.node === true);
assert(envNode.parserOptions.ecmaVersion === 8);

/*--------------------------*/

const index = require('./index');
nativeAssert.deepEqual(index, envNode);