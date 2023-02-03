import { buildLegacyTheme } from "sanity";

const props = {
    "--my-white": "#fff",
    "--my-black": "#000",
    "--hot": "#f4a445",
    "--my-red": "#f44654",
    "--my-yellow": "#f0f467",
    "--my-green": "#4af446",
};

export const myTheme = buildLegacyTheme({
    /* Base theme colors */
    "--black": props["--my-black"],
    "--white": props["--my-white"],

    "--gray": "#666",
    "--gray-base": "#666",
    "--component-bg": props["--my-black"],
    "--component-text-color": props ["--my-white"],

    /* Brand */
    "--brand-primary": props["--hot"],

    // Default button
    "--default-button-color": "#666",
    "--default-button-primary-color": props["--hot"],
    "--default-button-success-color": props["--my-green"],
    "--default-button-warning-color": props["--my-yellow"],
    "--default-button-danger-color": props["--my-red"],

    /* State */
    "--state-info-color": props["--hot"],
    "--state-success-color": props["--my-green"],
    "--state-warning-color": props["--my-yellow"],
    "--state-danger-color": props["--my-red"],

    /* NavBar */
    "--main-navigation-color": props["--my-black"],
    "--main-navigation-color--inverted": props["--my-white"],

    "--focus-color": props["--hot"],
});

