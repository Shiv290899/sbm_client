const BASE_GAS_URL =
  import.meta.env.VITE_UNIFIED_GAS_URL ||
  "https://script.google.com/macros/s/AKfycbzDbmJ-DXA2nTfKaKl2-GjUPSd9AxmNmjlaJUH53JOQQVrOGoEy1KqdiiCkVK-2_8Tr/exec";

const ensureModuleParam = (base, moduleName) => {
  if (!moduleName) return base;
  const normalizedBase = base.trim();
  const delimiter = normalizedBase.includes("?") ? "&" : "?";
  return `${normalizedBase}${delimiter}module=${encodeURIComponent(moduleName)}`;
};

export const buildModuleUrl = (moduleName, overrideUrl) => {
  const base = (overrideUrl && String(overrideUrl).trim()) || BASE_GAS_URL;
  return ensureModuleParam(base, moduleName);
};

export const GAS_BASE_URL = (overrideUrl) => (overrideUrl && String(overrideUrl).trim()) || BASE_GAS_URL;
