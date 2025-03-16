import { BiomeCondition, SurfaceRules } from "./src/condition.ts";
import {
    BlockSurfaceRule,
    ConditionSurfaceRule,
    SequenceSurfaceRule,
} from "./src/surface_rule.ts";

console.log(JSON.stringify(
    ConditionSurfaceRule(
        BiomeCondition("wwizardry:fungal_forest"),
        SequenceSurfaceRule(
            ConditionSurfaceRule(
                SurfaceRules.AboveWater,
                ConditionSurfaceRule(
                    SurfaceRules.OnFloor,
                    BlockSurfaceRule("wwizardry:mycelial_sand"),
                ),
            ),
            ConditionSurfaceRule(
                SurfaceRules.OnFloor,
                BlockSurfaceRule("sand"),
            ),
            ConditionSurfaceRule(
                SurfaceRules.UnderFloor,
                BlockSurfaceRule("sand"),
            ),
            ConditionSurfaceRule(
                SurfaceRules.DeepUnderFloor,
                BlockSurfaceRule("sandstone"),
            ),
        ),
    ),
    undefined,
    4,
));
