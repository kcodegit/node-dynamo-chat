"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDynamoClient = getDynamoClient;

var _logger = require("../../commons/util/logger");

var _DynamoClient = require("./DynamoClient");

const config = require('config');

const p = (0, _logger.logD)(__filename);
/**
 * Provider of DynamoClient.
 * @param instance
 */

function getDynamoClient() {
  const endpoint = config.aws.endpoint;
  const conf = {
    sslEnabled: config.aws.sslEnabled,
    accessKeyId: config.aws.accessKeyId,
    secretAccessKey: config.aws.secretAccessKey,
    region: config.aws.region,
    endpoint
  };
  const dax = config.aws.dax.endpoints.length ? {
    endpoints: config.aws.dax.endpoints,
    region: config.aws.region
  } : undefined;
  return new _DynamoClient.DynamoClient(conf, dax);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kcml2ZXJzL2R5bmFtby9keW5hbW9DbGllbnRQcm92aWRlci50cyJdLCJuYW1lcyI6WyJjb25maWciLCJyZXF1aXJlIiwicCIsIl9fZmlsZW5hbWUiLCJnZXREeW5hbW9DbGllbnQiLCJlbmRwb2ludCIsImF3cyIsImNvbmYiLCJzc2xFbmFibGVkIiwiYWNjZXNzS2V5SWQiLCJzZWNyZXRBY2Nlc3NLZXkiLCJyZWdpb24iLCJkYXgiLCJlbmRwb2ludHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJEeW5hbW9DbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxNQUFNQSxNQUFvQixHQUFHQyxPQUFPLENBQUMsUUFBRCxDQUFwQzs7QUFDQSxNQUFNQyxDQUFDLEdBQUcsa0JBQUtDLFVBQUwsQ0FBVjtBQUVBOzs7OztBQUlPLFNBQVNDLGVBQVQsR0FBeUM7QUFDOUMsUUFBTUMsUUFBUSxHQUFHTCxNQUFNLENBQUNNLEdBQVAsQ0FBV0QsUUFBNUI7QUFDQSxRQUFNRSxJQUFJLEdBQUc7QUFDWEMsSUFBQUEsVUFBVSxFQUFFUixNQUFNLENBQUNNLEdBQVAsQ0FBV0UsVUFEWjtBQUVYQyxJQUFBQSxXQUFXLEVBQUVULE1BQU0sQ0FBQ00sR0FBUCxDQUFXRyxXQUZiO0FBR1hDLElBQUFBLGVBQWUsRUFBRVYsTUFBTSxDQUFDTSxHQUFQLENBQVdJLGVBSGpCO0FBSVhDLElBQUFBLE1BQU0sRUFBRVgsTUFBTSxDQUFDTSxHQUFQLENBQVdLLE1BSlI7QUFLWE4sSUFBQUE7QUFMVyxHQUFiO0FBUUEsUUFBTU8sR0FBRyxHQUFHWixNQUFNLENBQUNNLEdBQVAsQ0FBV00sR0FBWCxDQUFlQyxTQUFmLENBQXlCQyxNQUF6QixHQUNSO0FBQUVELElBQUFBLFNBQVMsRUFBRWIsTUFBTSxDQUFDTSxHQUFQLENBQVdNLEdBQVgsQ0FBZUMsU0FBNUI7QUFBdUNGLElBQUFBLE1BQU0sRUFBRVgsTUFBTSxDQUFDTSxHQUFQLENBQVdLO0FBQTFELEdBRFEsR0FFUkksU0FGSjtBQUlBLFNBQU8sSUFBSUMsMEJBQUosQ0FBaUJULElBQWpCLEVBQXVCSyxHQUF2QixDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2csIGxvZ0UsIGxvZ0QgfSBmcm9tICcuLi8uLi9jb21tb25zL3V0aWwvbG9nZ2VyJztcbmltcG9ydCB7IER5bmFtb0NsaWVudCB9IGZyb20gJy4vRHluYW1vQ2xpZW50JztcbmltcG9ydCB7IENvbmZpZ1NjaGVtYSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvQ29uZmlnU2NoZW1hJztcbmNvbnN0IGNvbmZpZzogQ29uZmlnU2NoZW1hID0gcmVxdWlyZSgnY29uZmlnJyk7XG5jb25zdCBwID0gbG9nRChfX2ZpbGVuYW1lKTtcblxuLyoqXG4gKiBQcm92aWRlciBvZiBEeW5hbW9DbGllbnQuXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldER5bmFtb0NsaWVudCgpOiBEeW5hbW9DbGllbnQge1xuICBjb25zdCBlbmRwb2ludCA9IGNvbmZpZy5hd3MuZW5kcG9pbnQ7XG4gIGNvbnN0IGNvbmYgPSB7XG4gICAgc3NsRW5hYmxlZDogY29uZmlnLmF3cy5zc2xFbmFibGVkLFxuICAgIGFjY2Vzc0tleUlkOiBjb25maWcuYXdzLmFjY2Vzc0tleUlkLFxuICAgIHNlY3JldEFjY2Vzc0tleTogY29uZmlnLmF3cy5zZWNyZXRBY2Nlc3NLZXksXG4gICAgcmVnaW9uOiBjb25maWcuYXdzLnJlZ2lvbixcbiAgICBlbmRwb2ludCxcbiAgfTtcblxuICBjb25zdCBkYXggPSBjb25maWcuYXdzLmRheC5lbmRwb2ludHMubGVuZ3RoXG4gICAgPyB7IGVuZHBvaW50czogY29uZmlnLmF3cy5kYXguZW5kcG9pbnRzLCByZWdpb246IGNvbmZpZy5hd3MucmVnaW9uIH1cbiAgICA6IHVuZGVmaW5lZDtcblxuICByZXR1cm4gbmV3IER5bmFtb0NsaWVudChjb25mLCBkYXgpO1xufVxuIl19