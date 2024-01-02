(() => {
  "use strict";
  const o = {
    randomUUID:
      "undefined" != typeof crypto &&
      crypto.randomUUID &&
      crypto.randomUUID.bind(crypto),
  };
  let t;
  const n = new Uint8Array(16);
  function r() {
    if (
      !t &&
      ((t =
        "undefined" != typeof crypto &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)),
      !t)
    )
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
      );
    return t(n);
  }
  const e = [];
  for (let o = 0; o < 256; ++o) e.push((o + 256).toString(16).slice(1));
  console.log("Joke 1"),
    console.log(
      (function (t, n, u) {
        if (o.randomUUID && !n && !t) return o.randomUUID();
        const c = (t = t || {}).random || (t.rng || r)();
        if (((c[6] = (15 & c[6]) | 64), (c[8] = (63 & c[8]) | 128), n)) {
          u = u || 0;
          for (let o = 0; o < 16; ++o) n[u + o] = c[o];
          return n;
        }
        return (function (o, t = 0) {
          return (
            e[o[t + 0]] +
            e[o[t + 1]] +
            e[o[t + 2]] +
            e[o[t + 3]] +
            "-" +
            e[o[t + 4]] +
            e[o[t + 5]] +
            "-" +
            e[o[t + 6]] +
            e[o[t + 7]] +
            "-" +
            e[o[t + 8]] +
            e[o[t + 9]] +
            "-" +
            e[o[t + 10]] +
            e[o[t + 11]] +
            e[o[t + 12]] +
            e[o[t + 13]] +
            e[o[t + 14]] +
            e[o[t + 15]]
          );
        })(c);
      })()
    );
})();
