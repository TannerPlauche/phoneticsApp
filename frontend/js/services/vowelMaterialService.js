var app = angular.module("Phonetica");

app.service("vowelMaterialService", function () {
  this.vowels = {
    i: {
      symbol: "/i/",
      sample: "audio/i.wav",
      height: "high",
      frontness: "front",
      rounding: "unrounded",
      tense: "tense"
    },
    I: {
      symbol: "/I/",
      sample: "audio/I.wav",
      height: "high",
      frontness: "front",
      rounding: "unrounded",
      tense: "lax"
    },
    e: {
      symbol: "/e/",
      sample: "audio/e.wav",
      height: "mid",
      frontness: "front",
      rounding: "unrounded",
      tense: "tense"
    },
    e: {
      symbol: "/e/",
      sample: "audio/e.wav",
      height: "mid",
      frontness: "front",
      rounding: "unrounded",
      tense: "tense"
    },
    ɛ: {
      symbol: "/ɛ/",
      sample: "audio/ɛ.wav",
      height: "mid",
      frontness: "front",
      rounding: "unrounded",
      tense: "lax"
    },
    æ: {
      symbol: "/æ/",
      sample: "audio/æ.wav",
      height: "low",
      frontness: "front",
      rounding: "unrounded",
      tense: "lax"
    },
    ə: {
      symbol: "/ə/",
      sample: "audio/ə.wav",
      height: "mid",
      frontness: "central",
      rounding: "unrounded",
      tense: "lax"
    },
    a: {
      symbol: "/a/",
      sample: "audio/a.wav",
      height: "mid",
      frontness: "front",
      rounding: "unrounded",
      tense: "lax"
    },
    ɔ: {
      symbol: "/ɔ/",
      sample: "audio/ɔ.wav",
      height: "mid",
      frontness: "front",
      rounding: "unrounded",
      tense: "lax"
    },
    o: {
      symbol: "/o/",
      sample: "audio/o.wav",
      height: "mid",
      frontness: "front",
      rounding: "unrounded",
      tense: "lax"
    },
    ʊ: {
      symbol: "/ʊ/",
      sample: "audio/ʊ.wav",
      height: "mid",
      frontness: "front",
      rounding: "unrounded",
      tense: "lax"
    },
    u: {
      symbol: "/u/",
      sample: "audio/u.wav",
      height: "mid",
      frontness: "front",
      rounding: "unrounded",
      tense: "lax"
    },
    ɹ: {
      symbol: "/r/",
      sample: "audio/r.wav",
      height: "mid",
      frontness: "front",
      rounding: "unrounded",
      tense: "lax"
    },
  }
})