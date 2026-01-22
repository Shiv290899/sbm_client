const BASE_GAS_URL =
  import.meta.env.VITE_UNIFIED_GAS_URL ||
  "https://script.google.com/macros/s/AKfycbxiwCHyrl1JztqHKwVbvb-W0mVuG38jhHqL_eo8Fprnu6FpAm0qXyyqUw5E0CstPo3b/exec";

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
