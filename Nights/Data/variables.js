// paths
const CAMERA_BACKGROUND_PATH = "Data/Assets/Cams";
const IMAGE_PATH = "Data/Assets";
const MENU_ASSETS_PATH = "Data/Assets/Menu";

// mask and cameras
const CAMERA_SPEED = 2; // += ammount
const INTERVAL_FREQUENCY = 2; // interval speed
const TOGGLE_DELAY = 350; // mask / camera animation delay
const MOVEMENT_BLUR_TIMEOUT = 5; // pan blur animation
const CAMERA_SWITCH_STATIC = 1250; // camera switch static animation
const BLUR_TIMEOUT_PAN = 270; // how long the blur lasts panning
const BLUR_DELAY = 1200; // delay the blur after the static
const CAMERA_SWITCH_BLUR = 460;// camera switch blur animation
const STATIC_TIMEOUT = 10; // pan static animation
const BLUR_TIMEOUT = 10; // pan blur animation
const SCREEN_EDGE_LEFT = 1; // left screen edge hitbox
const SCREEN_EDGE_RIGHT = 55; // right screen edge hitbox
const CAM_LIGHT = 4; // id of camera flashlight
let camLight = false;
let currentCam = "09";
let previousCam;
let cameraDefault = 28; // centers the office camera
let cameraTabletDefault = 28; // centers the tablet camera
let mask = false;
let cameras = false;

//office
let animatronicPosition = -500;
const ANIMATRIONIC_MOVEMENT_DISTANCE = 8;
const ANIMATRONIC_POSITION_LIMIT_A = 200;
const ANIMATRONIC_POSITION_LIMIT_B = -600;
const ANIMATRONIC_WAIT_TIME = 3000;
let faceFadeAnimation = 100;
const FACE_FADE_SPEED = 3;
const FACE_FADE_LIMIT = 0;
let flicker = false;
const FLICKER_FREQUENCY_MAX = 450;
const FLICKER_FREQUENCY_MIN = 150;
const TOY_ANIMATRONICS = 0;
const WITHERED_ANIMATRONICS = 1;
let office =
[
    ["light", false],
    ["leftLight", false],
    ["rightLight", false]
];
const BATTERY_PRECENTAGES =
[
    80, 60, 40, 20
];
const LEFT_LIGHT = 1; // id of left vent light
const RIGHT_LIGHT = 2; // id of right vent light
const CENTER_LIGHT = 3; // id of hallway light
const POWER_USSAGE = 2000; // interval frequency
let flashlightPower = 100;
let power = true; // checks if power consuming sources are on or off

// Toy Bonnie
let TOY_BONNIE =
[
    ["01", false], //0
    ["03", false], //1
    ["04", false], //2
    ["05", false], //3
    ["09", true], //4
    ["office_vents", false], //5
    ["office", false], //6
];
const TB_MIN_CD = 30000; // minimum time for tb's cooldown
const TB_MAX_CD = 70000; // maximum time for tb's cooldown
const TB_MIN_CAM = 1; // minimum ammount of cameras tb can be on
const TB_MAX_CAM = 3; // maximum ammount of cameras tb can be on

// toy chica
let TOY_CHICA =
[
    ["01", false], //0
    ["03", false], //1
    ["05", false], //2
    ["07", false], //3
    ["09", true], //4
    ["hallway", false], //5
    ["office_vents", false], //6
    ["office", false], //7
];
const TC_MIN_CD = 45000;
const TC_MAX_CD = 85000;
const TC_MIN_CAM = 1;
const TC_MAX_CAM = 3;

// toy freddy
let TOY_FREDDY =
[
    ["10", false], //0
    ["hallway", false], //1
    ["hallway_2", false], //2
    ["office", false], //3
    ["09", true], //4
];
const TF_MIN_CD = 75000;
const TF_MAX_CD = 115000;
const TF_MIN_CAM = 1;
const TF_MAX_CAM = 2;

193
194
415
499
511
513

// game over
let bloodAnimation = -250; // position of blood
const BLOOD_FALL_SPEED = 1;
let fadeAnimation = 0; // how transparent the black game over screen is
let goFadeAnimation = 0;
const FADE_AWAY_SPEED = 1;
const GAME_OVER_FADE_AWAY_SPEED = .3;
const FADE_LIMIT = 100;
const BLOOD_START_TIME = 1000; // after how much time will the blood animation start
const FADE_START_TIME = 3300; // after how much time will the fading start
const BLOOD_LIMIT = 200;
const LULLABY_DELAY = 5600;
const LULLABY_FADE_OUT = 500;
const LULLABY_LIMIT = 0;
let lullabyFade = 1;
const LULLABY_FADE_SPEED = 0.1;
const GAME_OVER_SCREEN_TIME = 20000; // how long the gameover screen will be visible

// audio and sounds
snd_menu = new Audio("Data/Sounds/menu.wav");
snd_ambience = new Audio("Data/Sounds/ambience.wav");
snd_buzzlight = new Audio("Data/Sounds/buzzlight.wav");
snd_call_1 = new Audio("Data/Sounds/call_1.wav");
snd_error = new Audio("Data/Sounds/error.wav");
snd_fansound = new Audio("Data/Sounds/fansound.wav");
snd_mask_off = new Audio("Data/Sounds/mask_off.wav");
snd_stare = new Audio("Data/Sounds/stare.wav");
snd_mask_on = new Audio("Data/Sounds/mask_on.wav");
snd_mask = new Audio("Data/Sounds/mask.wav");
snd_camera_ambience = new Audio("Data/Sounds/camera_ambience.wav");
snd_button_move = new Audio("Data/Sounds/button_move.wav");
snd_camera_close = new Audio("Data/Sounds/camera_close.wav");
snd_camera_open = new Audio("Data/Sounds/camera_open.wav");
snd_camera_turn = new Audio("Data/Sounds/camera_turn.wav");
snd_camera_switch = new Audio("Data/Sounds/camera_switch.wav");
snd_camera_metalwalk1 = new Audio("Data/Sounds/metalwalk1.wav");
snd_camera_metalwalk2 = new Audio("Data/Sounds/metalwalk2.wav");
snd_camera_metalwalk3 = new Audio("Data/Sounds/metalwalk3.wav");
snd_camera_ventwalk1 = new Audio("Data/Sounds/ventwalk1.wav");
snd_hallway = new Audio("Data/Sounds/hallway.mp3");
lullaby = new Audio("Data/Sounds/lullaby.mp3");
snd_jumpscare = new Audio("Data/Sounds/jumpscare.wav");
let sounds =
[
    snd_menu, snd_ambience, snd_buzzlight, snd_call_1, snd_error, snd_fansound,
    snd_mask_off, snd_mask_off, snd_mask, snd_camera_ambience, snd_button_move,
    snd_camera_close, snd_camera_open, snd_camera_turn, snd_camera_switch, snd_camera_metalwalk1,
    snd_camera_metalwalk2, snd_camera_metalwalk3, snd_camera_ventwalk1, snd_stare, snd_hallway
];
snd_hallway.loop = true;
snd_buzzlight.volume = 0;
snd_camera_turn.volume = 0;
snd_buzzlight.loop = true;
snd_fansound.loop = true;
snd_fansound.loop = true;
snd_ambience.loop = true;
snd_camera_ambience.loop = true;
snd_camera_turn.loop = true;
snd_mask.loop = true;
lullaby.loop = true;