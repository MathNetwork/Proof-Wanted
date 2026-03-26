# Formalization Candidates

A curated collection of mathematical theorems and conjectures proposed for formalization in **Lean 4 + Mathlib**. Each candidate includes a precise mathematical description, a Lean 4 statement verified to type-check against current Mathlib, and an assessment of proof complexity and Mathlib readiness.

## Candidates

| Candidate | Type | Area | Status | Statement |
|-----------|------|------|--------|-----------|
| [SL(2,ℝ) trace classification](candidates/sl2r-trace-classification/) | known-theorem | Hyperbolic Geometry | ✅ compiles | [Lean](candidates/sl2r-trace-classification/Statement.lean) |
| [SL(2,ℝ)/SO(2) homogeneous space](candidates/sl2r-homogeneous-space/) | known-theorem | Hyperbolic Geometry | ✅ compiles | [Lean](candidates/sl2r-homogeneous-space/Statement.lean) |
| [Cayley transform](candidates/cayley-transform/) | known-theorem | Complex Analysis | ✅ compiles | [Lean](candidates/cayley-transform/Statement.lean) |
| [Cantor set Hausdorff dimension](candidates/cantor-set-dimh/) | known-theorem | Geometric Measure Theory | ✅ compiles | [Lean](candidates/cantor-set-dimh/Statement.lean) |
| [Besicovitch covering theorem](candidates/besicovitch-covering/) | known-theorem | Geometric Measure Theory | ✅ compiles | [Lean](candidates/besicovitch-covering/Statement.lean) |
| [Sard's theorem](candidates/sard-theorem/) | known-theorem | Differential Topology | ✅ compiles | [Lean](candidates/sard-theorem/Statement.lean) |
| [Coarea formula](candidates/coarea-formula/) | known-theorem | Geometric Measure Theory | ✅ compiles | [Lean](candidates/coarea-formula/Statement.lean) |
| [Frankl's conjecture (semimodular)](candidates/frankl-semimodular/) | open-conjecture | Combinatorics | ✅ compiles | [Lean](candidates/frankl-semimodular/Statement.lean) |
| [Davenport constant of ℤₙ²](candidates/davenport-rank-two/) | open-conjecture | Additive Combinatorics | ✅ compiles | [Lean](candidates/davenport-rank-two/Statement.lean) |

**Status key:** ✅ compiles = statement type-checks with `sorry` proofs against current Mathlib

## Building / Verifying

Prerequisites: [elan](https://github.com/leanprover/elan) and [lake](https://github.com/leanprover/lean4/tree/master/src/lake).

```bash
git clone https://github.com/MathNetwork/formalization-candidates.git
cd formalization-candidates
lake exe cache get    # download prebuilt Mathlib oleans
lake build SL2RTraceClassification SL2RHomogeneousSpace CayleyTransform \
  CantorSetDimH BesicovitchCovering SardTheorem CoareaFormula \
  FranklSemimodular DavenportRankTwo
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
├── candidates/            # one folder per candidate
│   ├── <candidate-name>/
│   │   ├── README.md      # mathematical description
│   │   └── Statement.lean # Lean 4 statement
│   └── ...
├── lakefile.lean          # Lake build configuration
├── lean-toolchain         # Lean version
└── .gitignore
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). In short:

1. Copy `TEMPLATE/` to `candidates/<your-candidate>/`
2. Fill in the README and Statement.lean
3. Verify it compiles: `lake build <YourLibName>`
4. Open a PR

## Related Projects

- [Mathlib4](https://github.com/leanprover-community/mathlib4) — the Lean 4 mathematics library
- [1000 theorems](https://github.com/Formal-Mathematics/1000-theorems) — tracking formalization of famous theorems
- [Lean Zulip](https://leanprover.zulipchat.com/) — community chat
