import test, { describe } from "node:test"
import assert from "node:assert"
import { resolveUnits, hasUnitMacro } from "./unitVariants"

describe("resolveUnits", () => {
  test("einfaches Makro", () => {
    const tex = "\\nabla\\cdot E = \\sg{\\rho/\\varepsilon_0}{4\\pi\\rho}"
    assert.strictEqual(resolveUnits(tex, "si"), "\\nabla\\cdot E = \\rho/\\varepsilon_0")
    assert.strictEqual(resolveUnits(tex, "gauss"), "\\nabla\\cdot E = 4\\pi\\rho")
  })
  test("verschachtelte Klammern und mehrere Makros", () => {
    const tex = "\\sg{\\frac{1}{4\\pi\\varepsilon_0}}{} \\frac{q}{r} + \\sg {a}  {b}"
    assert.strictEqual(resolveUnits(tex, "si"), "\\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{r} + a")
    assert.strictEqual(resolveUnits(tex, "gauss"), " \\frac{q}{r} + b")
  })
  test("verschachteltes \\sg", () => {
    assert.strictEqual(resolveUnits("\\sg{x\\sg{a}{b}}{y}", "si"), "xa")
  })
  test("escapte Klammern zählen nicht", () => {
    assert.strictEqual(resolveUnits("\\sg{\\{a}{b}", "si"), "\\{a")
  })
  test("\\sgn und unvollständige Makros bleiben stehen", () => {
    assert.strictEqual(hasUnitMacro("\\sgn(x)"), false)
    assert.strictEqual(hasUnitMacro("\\sg{a}"), false)
    assert.strictEqual(hasUnitMacro("x^2"), false)
  })
})
