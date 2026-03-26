import Mathlib.Topology.MetricSpace.HausdorffDimension
import Mathlib.Analysis.SpecialFunctions.Log.Basic

open MeasureTheory Set

noncomputable def cantorSet : Set ℝ := sorry

theorem dimH_cantorSet :
    dimH cantorSet = ENNReal.ofReal (Real.log 2 / Real.log 3) := by
  sorry
