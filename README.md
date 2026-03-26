# Formalization Candidates

A curated collection of mathematical theorems and conjectures proposed for formalization in **Lean 4 + Mathlib**. Each candidate includes a precise mathematical description, a Lean 4 statement verified to type-check against current Mathlib, and an assessment of proof complexity and Mathlib readiness.

## Candidates

### Known Theorems

| Candidate | Area | Status | Statement |
|-----------|------|--------|-----------|
| [SL(2,ℝ) trace classification](candidates/known-theorems/sl2r-trace-classification/) | Hyperbolic Geometry | ✅ compiles | [Lean](candidates/known-theorems/sl2r-trace-classification/Statement.lean) |
| [SL(2,ℝ)/SO(2) homogeneous space](candidates/known-theorems/sl2r-homogeneous-space/) | Hyperbolic Geometry | ✅ compiles | [Lean](candidates/known-theorems/sl2r-homogeneous-space/Statement.lean) |
| [Cayley transform](candidates/known-theorems/cayley-transform/) | Complex Analysis | ✅ compiles | [Lean](candidates/known-theorems/cayley-transform/Statement.lean) |
| [Cantor set Hausdorff dimension](candidates/known-theorems/cantor-set-dimh/) | Geometric Measure Theory | ✅ compiles | [Lean](candidates/known-theorems/cantor-set-dimh/Statement.lean) |
| [Besicovitch covering theorem](candidates/known-theorems/besicovitch-covering/) | Geometric Measure Theory | ✅ compiles | [Lean](candidates/known-theorems/besicovitch-covering/Statement.lean) |
| [Sard's theorem](candidates/known-theorems/sard-theorem/) | Differential Topology | ✅ compiles | [Lean](candidates/known-theorems/sard-theorem/Statement.lean) |
| [Coarea formula](candidates/known-theorems/coarea-formula/) | Geometric Measure Theory | ✅ compiles | [Lean](candidates/known-theorems/coarea-formula/Statement.lean) |
| [Azuma-Hoeffding inequality](candidates/known-theorems/azuma-hoeffding/) | Probability Theory | ✅ compiles | [Lean](candidates/known-theorems/azuma-hoeffding/Statement.lean) |
| [Kolmogorov zero-one law](candidates/known-theorems/kolmogorov-01/) | Probability Theory | ✅ compiles | [Lean](candidates/known-theorems/kolmogorov-01/Statement.lean) |
| [Poincaré inequality](candidates/known-theorems/poincare-inequality/) | PDE | ✅ compiles | [Lean](candidates/known-theorems/poincare-inequality/Statement.lean) |
| [Lax-Milgram theorem](candidates/known-theorems/lax-milgram/) | Functional Analysis | ✅ compiles | [Lean](candidates/known-theorems/lax-milgram/Statement.lean) |
| [Rellich-Kondrachov compactness](candidates/known-theorems/rellich-kondrachov/) | PDE | ⚠️ partial | [Lean](candidates/known-theorems/rellich-kondrachov/Statement.lean) |
| [Maximum principle (complex)](candidates/known-theorems/maximum-principle-harmonic/) | Complex Analysis | ✅ compiles | [Lean](candidates/known-theorems/maximum-principle-harmonic/Statement.lean) |
| [Wasserstein metric](candidates/known-theorems/wasserstein-metric/) | Optimal Transport | ✅ compiles | [Lean](candidates/known-theorems/wasserstein-metric/Statement.lean) |
| [Kantorovich duality (discrete)](candidates/known-theorems/kantorovich-duality-discrete/) | Optimal Transport | ✅ compiles | [Lean](candidates/known-theorems/kantorovich-duality-discrete/Statement.lean) |
| [Optimal coupling existence](candidates/known-theorems/optimal-coupling-existence/) | Optimal Transport | ✅ compiles | [Lean](candidates/known-theorems/optimal-coupling-existence/Statement.lean) |

### Open Conjectures

| Candidate | Area | Status | Statement |
|-----------|------|--------|-----------|
| [Frankl's conjecture (semimodular)](candidates/open-conjectures/frankl-semimodular/) | Combinatorics | ✅ compiles | [Lean](candidates/open-conjectures/frankl-semimodular/Statement.lean) |
| [Davenport constant of ℤₙ²](candidates/open-conjectures/davenport-rank-two/) | Additive Combinatorics | ✅ compiles | [Lean](candidates/open-conjectures/davenport-rank-two/Statement.lean) |
| [Erdos-Straus conjecture](candidates/open-conjectures/erdos-straus/) | Number Theory | ✅ compiles | [Lean](candidates/open-conjectures/erdos-straus/Statement.lean) |
| [Sunflower conjecture](candidates/open-conjectures/sunflower-conjecture/) | Combinatorics | ✅ compiles | [Lean](candidates/open-conjectures/sunflower-conjecture/Statement.lean) |
| [Chvatal's conjecture](candidates/open-conjectures/chvatal-conjecture/) | Combinatorics | ✅ compiles | [Lean](candidates/open-conjectures/chvatal-conjecture/Statement.lean) |
| [Erdos matching conjecture](candidates/open-conjectures/erdos-matching/) | Combinatorics | ✅ compiles | [Lean](candidates/open-conjectures/erdos-matching/Statement.lean) |
| [Sensitivity conjecture (tight)](candidates/open-conjectures/sensitivity-conjecture-tight/) | Combinatorics | ✅ compiles | [Lean](candidates/open-conjectures/sensitivity-conjecture-tight/Statement.lean) |
| [Equational theories (samples)](candidates/open-conjectures/equational-theories-samples/) | Universal Algebra | ✅ compiles | [Lean](candidates/open-conjectures/equational-theories-samples/Statement.lean) |

**Status key:** ✅ compiles = statement type-checks with `sorry` proofs against current Mathlib | ⚠️ partial = fallback statement due to missing Mathlib definitions

## Building / Verifying

Prerequisites: [elan](https://github.com/leanprover/elan) and [lake](https://github.com/leanprover/lean4/tree/master/src/lake).

```bash
git clone https://github.com/MathNetwork/formalization-candidates.git
cd formalization-candidates
lake exe cache get    # download prebuilt Mathlib oleans
lake build SL2RTraceClassification SL2RHomogeneousSpace CayleyTransform \
  CantorSetDimH BesicovitchCovering SardTheorem CoareaFormula \
  AzumaHoeffding Kolmogorov01 PoincareInequality LaxMilgram \
  RellichKondrachov MaximumPrincipleHarmonic WassersteinMetric \
  KantorovichDualityDiscrete OptimalCouplingExistence FranklSemimodular DavenportRankTwo
```

Each candidate is a separate `lean_lib` target. Build individually with e.g. `lake build SardTheorem`.

## Repository Structure

```
├── README.md              # this file
├── CONTRIBUTING.md        # contribution guidelines
├── REPORT.md              # verification report
├── TEMPLATE/              # template for new candidates
│   ├── README.md
│   └── Statement.lean
├── candidates/
│   ├── known-theorems/    # proven results not yet in Lean
│   │   ├── <name>/
│   │   │   ├── README.md
│   │   │   └── Statement.lean
│   │   └── ...
│   └── open-conjectures/  # mathematically unproven
│       ├── <name>/
│       │   ├── README.md
│       │   └── Statement.lean
│       └── ...
├── lakefile.lean
├── lean-toolchain
└── .gitignore
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). In short:

1. Copy `TEMPLATE/` to `candidates/known-theorems/<your-candidate>/` or `candidates/open-conjectures/<your-candidate>/`
2. Fill in the README and Statement.lean
3. Verify it compiles: `lake build <YourLibName>`
4. Open a PR

## Related Projects

- [Mathlib4](https://github.com/leanprover-community/mathlib4) — the Lean 4 mathematics library
- [1000 theorems](https://github.com/Formal-Mathematics/1000-theorems) — tracking formalization of famous theorems
- [Lean Zulip](https://leanprover.zulipchat.com/) — community chat
