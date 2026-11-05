type UnitSystem = "si" | "gauss"

const STORAGE_KEY = "unit-system"
const isUnit = (v: unknown): v is UnitSystem => v === "si" || v === "gauss"

// localStorage kann im privaten Modus oder bei blockierten Website-Daten werfen
const readStored = (): UnitSystem => {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    return isUnit(v) ? v : "si"
  } catch {
    return "si"
  }
}

const writeStored = (unit: UnitSystem) => {
  try {
    localStorage.setItem(STORAGE_KEY, unit)
  } catch {}
}

// Vor dem ersten Rendern setzen, damit keine falsche Variante aufblitzt
document.documentElement.setAttribute("data-unit-system", readStored())

const currentUnit = (): UnitSystem => {
  const v = document.documentElement.getAttribute("data-unit-system")
  return isUnit(v) ? v : "si"
}

const updateButtons = (unit: UnitSystem) => {
  for (const el of document.querySelectorAll(".unit-btn")) {
    const active = el.getAttribute("data-unit-target") === unit
    el.classList.toggle("active", active)
    el.setAttribute("aria-pressed", String(active))
  }
}

const setUnit = (unit: UnitSystem) => {
  document.documentElement.setAttribute("data-unit-system", unit)
  writeStored(unit)
  updateButtons(unit)
  document.dispatchEvent(new CustomEvent("unitchange", { detail: { unit } }))
}

document.addEventListener("nav", () => {
  updateButtons(currentUnit())

  for (const btn of document.querySelectorAll(".unit-btn")) {
    const clickHandler = (e: Event) => {
      e.preventDefault()
      const target = btn.getAttribute("data-unit-target")
      if (isUnit(target)) setUnit(target)
    }
    btn.addEventListener("click", clickHandler)
    window.addCleanup(() => btn.removeEventListener("click", clickHandler))
  }
})

// Umschalten in einem anderen Tab übernehmen
window.addEventListener("storage", (e) => {
  if (e.key === STORAGE_KEY && isUnit(e.newValue)) {
    document.documentElement.setAttribute("data-unit-system", e.newValue)
    updateButtons(e.newValue)
  }
})
