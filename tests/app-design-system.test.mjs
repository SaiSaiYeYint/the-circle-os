import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const app = readFileSync("app/os/os-app.css", "utf8");
const global = readFileSync("app/globals.css", "utf8");
const appBase = global.slice(global.indexOf("/* The Circle OS ---"));
const declarations = (app + appBase).replace(/\/\*[\s\S]*?\*\//g, "");

test("app typography declarations use shared roles and only normal or bold", () => {
  for (const [, property, value] of declarations.matchAll(/\b(font-size|font-weight|font-family):\s*([^;{}]+);/g)) {
    if (property === "font-size") assert.match(value, /^(var\(--(?:os-(?:type-|writing-|page-main-font-size)|text-)[\w-]*\)|inherit)(?:\s*!important)?$/, value);
    if (property === "font-weight") assert.match(value, /^(var\(--os-weight-(?:normal|bold)\)|inherit)$/, value);
    if (property === "font-family") assert.doesNotMatch(value, /--font-display|(?<!sans-)serif/, value);
  }
  for (const [, value] of declarations.matchAll(/\bfont:\s*([^;{}]+);/g)) {
    assert.match(value, /^(?:inherit|var\(--os-weight-(?:normal|bold)\) var\(--(?:text-|os-type-)[\w-]+\)\/[^ ]+ var\(--font-sans\), Arial, sans-serif)$/, value);
  }
});

test("app layout spacing uses the four-pixel grid", () => {
  for (const [, property, value] of declarations.matchAll(/\b((?:row-|column-)?gap|margin(?:-[\w]+)?|padding(?:-[\w]+)?):\s*([^;{}]+);/g)) {
    for (const [, raw, unit] of value.matchAll(/(-?[\d.]+)(px|rem|em)\b/g)) {
      const size = Number(raw) * (unit === "px" ? 1 : 16);
      assert.equal(size % 4, 0, `${property}: ${value} leaves the four-pixel grid`);
    }
    assert.doesNotMatch(value, /-?[\d.]+(?:px|rem|em)\b/, `${property}: use a shared spacing token`);
  }
});
