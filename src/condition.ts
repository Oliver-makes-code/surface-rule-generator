import { EnumObject, EnumOf } from "./enum.ts";

export const ConditionType = EnumObject(
    "above_preliminary_surface",
    "biome",
    "hole",
    "noise_threshold",
    "not",
    "steep",
    "stone_depth",
    "temperature",
    "vertical_gradient",
    "water",
    "y_above",
);
export type ConditionType = EnumOf<typeof ConditionType>;

export type Condition =
    & { type: ConditionType }
    & (
        | AbovePreliminarySurfaceCondition
        | BiomeCondition
        | HoleCondition
        | NoiseThresholdCondition
        | NotCondition
        | SteepCondition
        | StoneDepthSurfaceRule
        | TemperatureCondition
        | VerticalGradientCondition
        | WaterCondition
        | YAboveCondition
    );

export type AbovePreliminarySurfaceCondition = {
    type: typeof ConditionType.above_preliminary_surface;
};

export const AbovePreliminarySurfaceCondition:
    AbovePreliminarySurfaceCondition = {
        type: ConditionType.above_preliminary_surface,
    };

export type BiomeCondition = {
    type: typeof ConditionType.biome;
    biome_is: string[];
};

export function BiomeCondition(...biome_is: string[]): BiomeCondition {
    return {
        type: ConditionType.biome,
        biome_is,
    };
}

export type HoleCondition = {
    type: typeof ConditionType.hole;
};

export const HoleCondition: HoleCondition = { type: ConditionType.hole };

export const BuiltinNoise = EnumObject(
    "badlands_pillar_roof",
    "noodle_thickness",
    "badlands_surface",
    "spaghetti_3d_2",
    "spaghetti_roughness",
    "cave_cheese",
    "iceberg_surface",
    "iceberg_pillar",
    "spaghetti_3d_thickness",
    "iceberg_pillar_roof",
    "spaghetti_3d_1",
    "noodle",
    "erosion",
    "temperature",
    "soul_sand_layer",
    "ridge",
    "spaghetti_roughness_modulator",
    "powder_snow",
    "aquifer_lava",
    "ice",
    "aquifer_fluid_level_floodedness",
    "patch",
    "spaghetti_3d_rarity",
    "continentalness_large",
    "ore_gap",
    "surface_secondary",
    "ore_vein_b",
    "calcite",
    "pillar_thickness",
    "ore_vein_a",
    "cave_entrance",
    "netherrack",
    "jagged",
    "gravel",
    "nether_wart",
    "offset",
    "noodle_ridge_b",
    "spaghetti_2d_modulator",
    "badlands_pillar",
    "ore_veininess",
    "vegetation",
    "spaghetti_2d",
    "aquifer_barrier",
    "vegetation_large",
    "spaghetti_2d_elevation",
    "packed_ice",
    "spaghetti_2d_thickness",
    "continentalness",
    "gravel_layer",
    "pillar",
    "noodle_ridge_a",
    "surface_swamp",
    "cave_layer",
    "erosion_large",
    "aquifer_fluid_level_spread",
    "clay_bands_offset",
    "temperature_large",
    "pillar_rareness",
    "nether_state_selector",
    "surface",
);

export type NoiseThresholdCondition = {
    type: typeof ConditionType.noise_threshold;
    noise: string;
    min_threshold: number;
    max_threshold: number;
};

export function NoiseThresholdCondition(
    noise: string,
    min_threshold: number,
    max_threshold: number,
): NoiseThresholdCondition {
    return {
        type: ConditionType.noise_threshold,
        noise,
        min_threshold,
        max_threshold,
    };
}

export type NotCondition = {
    type: typeof ConditionType.not;
    invert: Condition;
};

export function NotCondition(invert: Condition): NotCondition {
    return {
        type: ConditionType.not,
        invert: invert,
    };
}

export type SteepCondition = {
    type: typeof ConditionType.steep;
};

export const SteepCondition: SteepCondition = { type: ConditionType.steep };

export const SurfaceType = EnumObject("floor", "ceiling");
export type SurfaceType = EnumOf<typeof SurfaceType>;

export type StoneDepthSurfaceRule = {
    type: typeof ConditionType.stone_depth;
    surface_type: SurfaceType;
    offset: number;
    add_surface_depth: boolean;
    secondary_depth_range: number;
};

export function StoneDepthSurfaceRule(surface_type: SurfaceType, options: {
    offset: number;
    add_surface_depth: boolean;
    secondary_depth_range: number;
}): StoneDepthSurfaceRule {
    return {
        type: ConditionType.stone_depth,
        surface_type,
        ...options,
    };
}

export type TemperatureCondition = {
    type: typeof ConditionType.temperature;
};

export const TemperatureCondition: TemperatureCondition = {
    type: ConditionType.temperature,
};

export type RelativePosition =
    | { above_bottom: number }
    | { below_top: number }
    | { absolute: number };

export function AboveBottom(above_bottom: number): RelativePosition {
    return { above_bottom };
}

export function BelowTop(below_top: number): RelativePosition {
    return { below_top };
}

export function Absolute(absolute: number): RelativePosition {
    return { absolute };
}

export type VerticalGradientCondition = {
    type: typeof ConditionType.vertical_gradient;
    random_name: string;
    true_at_and_below: RelativePosition;
    false_at_and_above: RelativePosition;
};

export function VerticalGradientCondition(random_name: string, options: {
    true_at_and_below: RelativePosition;
    false_at_and_above: RelativePosition;
}): VerticalGradientCondition {
    return {
        type: ConditionType.vertical_gradient,
        random_name,
        ...options,
    };
}

export type WaterCondition = {
    type: typeof ConditionType.water;
    offset: number;
    surface_depth_multiplier: number;
    add_stone_depth: boolean;
};

export function WaterCondition(options: {
    offset: number;
    surface_depth_multiplier: number;
    add_stone_depth: boolean;
}): WaterCondition {
    return {
        type: ConditionType.water,
        ...options,
    };
}

export type YAboveCondition = {
    type: typeof ConditionType.y_above;
    anchor: RelativePosition;
    surface_depth_multiplier: number;
    add_stone_depth: boolean;
};

export function YAboveCondition(options: {
    anchor: RelativePosition;
    surface_depth_multiplier: number;
    add_stone_depth: boolean;
}): YAboveCondition {
    return {
        type: ConditionType.y_above,
        ...options,
    };
}

export const SurfaceRules = {
    OnFloor: StoneDepthSurfaceRule(SurfaceType.floor, {
        offset: 0,
        add_surface_depth: false,
        secondary_depth_range: 0,
    }),
    UnderFloor: StoneDepthSurfaceRule(SurfaceType.floor, {
        offset: 0,
        add_surface_depth: true,
        secondary_depth_range: 0,
    }),
    DeepUnderFloor: StoneDepthSurfaceRule(SurfaceType.floor, {
        offset: 0,
        add_surface_depth: true,
        secondary_depth_range: 6,
    }),
    VeryDeepUnderFloor: StoneDepthSurfaceRule(SurfaceType.floor, {
        offset: 0,
        add_surface_depth: true,
        secondary_depth_range: 30,
    }),

    OnCeiling: StoneDepthSurfaceRule(SurfaceType.ceiling, {
        offset: 0,
        add_surface_depth: false,
        secondary_depth_range: 0,
    }),
    UnderCeiling: StoneDepthSurfaceRule(SurfaceType.ceiling, {
        offset: 0,
        add_surface_depth: true,
        secondary_depth_range: 0,
    }),

    AboveWater: WaterCondition({
        offset: -1,
        surface_depth_multiplier: 0,
        add_stone_depth: false,
    }),
} as const;
