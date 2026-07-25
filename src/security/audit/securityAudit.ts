export type SecurityEventType =
  | 'consent-granted'
  | 'consent-revoked'
  | 'media-stored'
  | 'media-deleted'
  | 'security-warning';

export interface SecurityAuditEntry {
  id: string;
  type: SecurityEventType;
  timestamp: string;
  details?: string;
}

export class SecurityAuditLog {
  private entries: SecurityAuditEntry[] = [];

  add(type: SecurityEventType, details?: string): void {
    this.entries.push({
      id: crypto.randomUUID(),
      type,
      timestamp: new Date().toISOString(),
      details,
    });
  }

  getAll(): SecurityAuditEntry[] {
    return [...this.entries];
  }
}
