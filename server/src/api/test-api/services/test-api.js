'use strict';

/**
 * test-api service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-api.test-api');
