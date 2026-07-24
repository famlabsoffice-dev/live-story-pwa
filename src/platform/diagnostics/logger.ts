export type LogLevel =
  | "info"
  | "warning"
  | "error";

export interface DiagnosticLog {
  level: LogLevel;
  message: string;
  timestamp: string;
}

export function createLog(
  level: LogLevel,
  message: string,
): DiagnosticLog {
  return {
    level,
    message,
    timestamp: new Date().toISOString(),
  };
}
