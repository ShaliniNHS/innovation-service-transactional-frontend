import { getAppInsightsClient } from '../globals';
import { SeverityLevel } from 'applicationinsights/out/Declarations/Contracts';

export const exceptionLoggingMiddleware = (err: any, req: any, res: any, next: any) => {

  const client = getAppInsightsClient(req);

  client.trackException({
    exception: err,
    severity: SeverityLevel.Error,
    properties: {
      params: req.params,
      query: req.query,
      path: req.path,
      route: req.route,
      authenticatedUser: req.user?.oid,
      stack: err.stack,
    }
  });

  next();
};