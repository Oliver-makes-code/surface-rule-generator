import { Condition } from "./condition.ts";
import { EnumObject, EnumOf } from "./enum.ts";

export const SurfaceRuleType = EnumObject(
    "badlands",
    "block",
    "condition",
    "sequence",
);
export type SurfaceRuleType = EnumOf<typeof SurfaceRuleType>;

export type SurfaceRule =
    & { type: SurfaceRuleType }
    & (
        | BadlandsSurfaceRule
        | BlockSurfaceRule
        | ConditionSurfaceRule
        | SequenceSurfaceRule
    );

export type BadlandsSurfaceRule = {
    type: typeof SurfaceRuleType.badlands;
};
export const BadlandsSurfaceRule: BadlandsSurfaceRule = {
    type: SurfaceRuleType.badlands,
};

export type BlockState = {
    Name: string;
    Properties?: { [k in string]: string };
};

export type BlockSurfaceRule = {
    type: typeof SurfaceRuleType.block;
    result_state: BlockState;
};

export function BlockSurfaceRule(
    Name: string,
    Properties?: { [k in string]: string },
): BlockSurfaceRule {
    return {
        type: SurfaceRuleType.block,
        result_state: {
            Name,
            Properties,
        },
    };
}

export type ConditionSurfaceRule = {
    type: typeof SurfaceRuleType.condition;
    if_true: Condition;
    then_run: SurfaceRule;
};

export function ConditionSurfaceRule(
    if_true: Condition,
    ...then_run: SurfaceRule[]
): ConditionSurfaceRule {
    if (then_run.length == 1) {
        return {
            type: SurfaceRuleType.condition,
            if_true,
            then_run: then_run[0],
        };
    }
    return {
        type: SurfaceRuleType.condition,
        if_true,
        then_run: SequenceSurfaceRule(...then_run),
    };
}

export type SequenceSurfaceRule = {
    type: typeof SurfaceRuleType.sequence;
    sequence: SurfaceRule[];
};

export function SequenceSurfaceRule(
    ...sequence: SurfaceRule[]
): SequenceSurfaceRule {
    return {
        type: SurfaceRuleType.sequence,
        sequence,
    };
}
