import {
  TASK_OPTION_KEYS,
  type TaskOptionKey,
  type TaskOptions
} from '@/types';

/**
 * Legacy or alternate API keys mapped onto the canonical option names used by
 * the UI and exported types.
 */
const TASK_OPTION_KEY_ALIASES: Record<string, TaskOptionKey> = {
  publishing: 'publish'
};

const taskOptionKeySet = new Set<string>(TASK_OPTION_KEYS);

/**
 * Converts a raw API option key into a supported canonical task option key.
 *
 * @param optionKey - Raw option key from the API or form state.
 * @returns The canonical option key when supported, otherwise `null`.
 */
export const normalizeTaskOptionKey = (
  optionKey: string
): TaskOptionKey | null => {
  // Accept canonical keys directly so typed callers round-trip without remapping.
  if (taskOptionKeySet.has(optionKey)) {
    return optionKey as TaskOptionKey;
  }

  // Fold known legacy keys into the canonical set used by the UI.
  return TASK_OPTION_KEY_ALIASES[optionKey] ?? null;
};

/**
 * Removes unsupported or malformed task option entries from an unknown input.
 *
 * @param options - Raw options payload from the API or form state.
 * @returns A sanitized task options object containing only known boolean flags.
 */
export const sanitizeTaskOptions = (options: unknown): TaskOptions => {
  // Ignore non-object payloads so consumers always receive a stable object shape.
  if (!options || typeof options !== 'object' || Array.isArray(options)) {
    return {};
  }

  const sanitizedOptions: TaskOptions = {};

  for (const [optionKey, optionValue] of Object.entries(
    options as Record<string, unknown>
  )) {
    const normalizedOptionKey = normalizeTaskOptionKey(optionKey);

    // Only preserve explicitly supported boolean flags.
    if (!normalizedOptionKey || typeof optionValue !== 'boolean') {
      continue;
    }

    sanitizedOptions[normalizedOptionKey] = optionValue;
  }

  return sanitizedOptions;
};

/**
 * Returns ordered task option entries suitable for deterministic rendering.
 *
 * @param options - Task options to read.
 * @returns Known task options in canonical display order.
 */
export const getTaskOptionEntries = (
  options?: TaskOptions | null
): [TaskOptionKey, boolean][] => {
  return TASK_OPTION_KEYS.flatMap(optionKey => {
    const optionValue = options?.[optionKey];

    // Skip omitted options instead of emitting undefined values to the UI.
    return typeof optionValue === 'boolean' ? [[optionKey, optionValue]] : [];
  });
};
