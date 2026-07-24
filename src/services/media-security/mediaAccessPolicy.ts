export type MediaPermission =
  | 'read'
  | 'write'
  | 'delete';

export interface MediaAccessRule {
  mediaId: string;
  permissions: MediaPermission[];
}

export function canAccessMedia(
  rule: MediaAccessRule,
  permission: MediaPermission
): boolean {
  return rule.permissions.includes(permission);
}
