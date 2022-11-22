let menuRotate = 0;
let cameraMenuDefault = 72;
const CAMERA_SPEED_MENU = .3;
const CAMERA_ANIMATION_SPEED_MENU = 2;
const SCREEN_EDGE_LEFT_MENU = 1;
const SCREEN_EDGE_RIGHT_MENU = 144;
const MENU_ASSETS_PATH_MENU = "Data/Assets/Menu";

function loadJS(x)
{
    let VARIABLES = [];
    for (let i = 0; i < x.length; i++)
    {
        VARIABLES[i] = document.createElement("script");
        VARIABLES[i].setAttribute("src", `Data/${x[i]}`);
        document.body.appendChild(VARIABLES[i]);
    }
}

$("#-load").click(function()
{
    snd_menu.play();
    snd_camera_turn.play();
    document.getElementById("-warning").remove();
    const SELECT = document.querySelectorAll("span[name='menu_blur'] > *");
    for (var i = 0; i < SELECT.length; i++)SELECT[i].style.filter = 'blur(0px)';
})

$("#-menu_left").mousedown(function()
{
    snd_camera_turn.volume = 1;
    let adddd = setInterval(() =>
    {
        cameraMenuDefault-=CAMERA_SPEED_MENU;
        document.getElementById('-menu_bg').style.right = `${cameraMenuDefault}%`;
        if(cameraMenuDefault < SCREEN_EDGE_LEFT_MENU)
        {
            clearInterval(adddd);
            cameraMenuDefault = SCREEN_EDGE_LEFT_MENU;
            document.getElementById('-menu_bg').style.right = `${cameraMenuDefault}%`;
        }
    }, CAMERA_ANIMATION_SPEED_MENU);
    $("#-menu_left").mouseup(function()
    {
        snd_camera_turn.volume = 0;
        clearInterval(adddd);
    });
})

$("#-menu_right").mousedown(function()
{
    snd_camera_turn.volume = 1;
    let adddd = setInterval(() =>
    {
        cameraMenuDefault+=CAMERA_SPEED_MENU;
        document.getElementById('-menu_bg').style.right = `${cameraMenuDefault}%`;
        if(cameraMenuDefault > SCREEN_EDGE_RIGHT_MENU)
        {
            clearInterval(adddd);
            cameraMenuDefault = SCREEN_EDGE_RIGHT_MENU;
            document.getElementById('-menu_bg').style.right = `${cameraMenuDefault}%`;
        }
    }, CAMERA_ANIMATION_SPEED_MENU);
    $("#-menu_right").mouseup(function()
    {
        snd_camera_turn.volume = 0;
        clearInterval(adddd);
    });
})

$("#-play").mouseover(function(){document.getElementById('-play').src = `${MENU_ASSETS_PATH_MENU}/start_hover.png`});
$("#-play").mouseleave(function(){document.getElementById('-play').src = `${MENU_ASSETS_PATH_MENU}/start.png`});

function fadeIn()
    {
        let fadeAnimation = 100;
        const FADE_AWAY_SPEED = 1;
        const FADE_LIMIT = 0;
        const INTERVAL_FREQUENCY = 2;

        setTimeout(() => {
            let x = setInterval(() => {
            
                fadeAnimation-=FADE_AWAY_SPEED;
                document.getElementById("-fade_in").style.opacity = `${fadeAnimation}%`;
                if(fadeAnimation <= FADE_LIMIT)
                {
                    clearInterval(x);
                    fadeAnimation = FADE_LIMIT;
                    document.getElementById("-fade_in").style.opacity = `${fadeAnimation}%`;
                    document.getElementById("-fade_in").remove();
                }
            }, INTERVAL_FREQUENCY);
        }, 1500);
    }