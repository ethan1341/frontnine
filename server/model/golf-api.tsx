export interface Tour {
    id: string;
    alias: string;
    name: string;
    currency: string;
}

export interface Season {
    id: string;
    year: number;
}

export interface Player {
    id: string;
    first_name: string;
    last_name: string;
    height: number;
    weight: number;
    birthday: string;
    country: string;
    residence: string;
    birth_place: string;
    college: string;
    turned_pro: number;
    member: boolean;
    updated: string;
    handedness: string;
    abbr_name: string;
    name: string;
}

export interface LivPlayers {
    tour: Tour;
    season: Season;
    players: Player[];
}
