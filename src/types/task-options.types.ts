/**
 * Canonical task option keys supported by the UI and API payloads.
 *
 * This list is used as the single source of truth for typing, sanitization,
 * and ordered rendering of task options across the application.
 */
export const TASK_OPTION_KEYS = ['doi_minting', 'publish'] as const;

/**
 * Union of supported task option keys.
 */
export type TaskOptionKey = (typeof TASK_OPTION_KEYS)[number];

/**
 * Task option flags accepted by the importer.
 *
 * The shape is partial because the API may omit options that are not available
 * for a given record type.
 */
export type TaskOptions = Partial<Record<TaskOptionKey, boolean>>;
