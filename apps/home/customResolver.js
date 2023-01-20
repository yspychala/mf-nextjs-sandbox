const path = require("path");
const resolverMap = require("../../jest-resolver-map.json");

module.exports = {
  async: async (request, opts) => {
    return opts.defaultResolver(request, opts);
  },
  sync: (request, opts) => {
    if (request in resolverMap) {
      const resolvedPath = resolverMap[request];
      return path.resolve(resolvedPath);
    }

    return opts.defaultResolver(request, opts);
  },
};
