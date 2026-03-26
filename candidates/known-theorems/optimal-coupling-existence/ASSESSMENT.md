# Formalization Assessment: Existence of optimal couplings

## 1. Statement formalizability

The statement compiles. Definitions:

- `PseudoMetricSpace X`, `CompactSpace X`, `BorelSpace X`: all in Mathlib.
- `IsProbabilityMeasure μ`: present.
- `LowerSemicontinuous c`: `Mathlib.Topology.Semicontinuity.Basic`. Defined as `∀ x, ∀ᶠ y in nhds x, c x ≤ c y` (or equivalent).
- `∫⁻ xy, c xy ∂γ`: lintegral. `Mathlib.MeasureTheory.Integral.Lebesgue.Basic`.
- `Measure.map Prod.fst`: present.

Custom definitions: `IsCouplingOf`, `couplingsOf`, `transportCostMeasure`. All 2-3 lines.

## 2. Proof strategy

Step 1: Show `couplingsOf μ ν` is nonempty. The product measure `μ.prod ν` is a coupling. Mathlib has `Measure.prod` and `Measure.map_fst_prod`, `Measure.map_snd_prod` showing its marginals.

Step 2: Show `couplingsOf μ ν` is tight (compact in the weak-* topology). On compact spaces, all probability measures are tight (Prokhorov's theorem). Mathlib has `ProbabilityMeasure` with the weak-* topology.

Step 3: Show `couplingsOf μ ν` is closed in the weak-* topology. The marginal constraints are continuous with respect to weak convergence, so the coupling set is closed.

Step 4: Show the cost functional `γ ↦ ∫⁻ c dγ` is lower semicontinuous under weak convergence. This uses `LowerSemicontinuous c` and the Portmanteau theorem.

Step 5: A lower semicontinuous function on a compact set attains its minimum. Apply `IsCompact.exists_isMinOn`.

Mathlib has: `ProbabilityMeasure` with weak topology, `Measure.prod`, basic Portmanteau results (partially), `IsCompact.exists_isMinOn`.

## 3. Estimated proof length

800-1500 lines. The main work is:
- Prokhorov theorem (tightness = relative compactness): partially in Mathlib for `ProbabilityMeasure` on compact spaces.
- Portmanteau theorem (lsc integration under weak convergence): partially in Mathlib.
- Closedness of coupling set: ~100 lines.
- Applying IsCompact.exists_isMinOn: ~20 lines.

## 4. Dependencies not in Mathlib

- Full Portmanteau theorem: partially in Mathlib. The direction "weak convergence implies lsc integrals converge" may need development.
- Tightness on compact spaces: compact metric spaces have the property that all measures are tight. This should follow from CompactSpace but may need explicit proof.
- Weak convergence topology on `Measure X`: Mathlib has `ProbabilityMeasure` with its topology, but the connection to `Measure X` requires some glue.

## 5. Risks and blockers

The main risk is the interface between `Measure X` (used in the statement) and `ProbabilityMeasure X` (which has the weak topology in Mathlib). The statement uses `Measure X` with `[IsProbabilityMeasure]` rather than `ProbabilityMeasure X`. Converting between these may require boilerplate.

The Portmanteau theorem for lsc functions is the key analytical ingredient. If it's not fully in Mathlib, it needs 200-400 lines of development.

## 6. Verdict

**Feasible with work**. Statement compiles. The proof strategy uses compactness + lsc, all conceptually available in Mathlib. The Portmanteau theorem and some weak convergence glue may need 200-400 lines of new infrastructure. Estimated 800-1500 lines total.
