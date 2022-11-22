getEle('-menu').remove();
getEle('-loader').remove();
snd_ambience.play();
snd_buzzlight.play();
snd_call_1.play();
snd_fansound.play();
snd_menu.pause();
snd_menu.volume = 0;

setTimeout(() => {
    toyBonnieActivate();
}, 40000);

setTimeout(() => {
    toyChicaActivate();
}, 100000);

setTimeout(() => {
    toyFreddyActivate();
}, 160000);

function emptyFunction()
{

};

function getEle(x)
{
    return(document.getElementById(x));
};
function querySel(x)
{
    return(document.querySelector(x));
};
function querySelAll(x)
{
    return(document.querySelectorAll(x));
};

$("#-left").mouseover(function()
{
    let add = setInterval(() =>
    {
        cameraDefault-=CAMERA_SPEED;
        getEle('-camera').style.right = `${cameraDefault}%`;
        if(cameraDefault <= SCREEN_EDGE_LEFT)
        {
            clearInterval(add);
            cameraDefault = SCREEN_EDGE_LEFT;
            getEle('-camera').style.right = `${cameraDefault}%`;
        }
    }, INTERVAL_FREQUENCY);
    $("#-left").mouseleave(function() {clearInterval(add);}
    );
});

$("#-right").mouseover(function()
{
    let add = setInterval(() =>
    {
        cameraDefault+=CAMERA_SPEED;
        getEle('-camera').style.right = `${cameraDefault}%`;
        if(cameraDefault >= SCREEN_EDGE_RIGHT)
        {
            clearInterval(add);
            cameraDefault = SCREEN_EDGE_RIGHT;
            getEle('-camera').style.right = `${cameraDefault}%`;}
    }, INTERVAL_FREQUENCY);
    $("#-right").mouseleave(function(){clearInterval(add);});
});

$("#-cam_left").mousedown(function()
{
    snd_camera_turn.volume = 1;
    if(currentCam==="07"||currentCam==="08"||currentCam==="09"||currentCam==="10"||currentCam==="11"||currentCam==="12")
    {
        getEle("-cam_bg").style.filter = "blur(20px)";
        let adddd = setInterval(() =>
        {
            cameraTabletDefault--;
            getEle('-cam_bg').style.right = `${cameraTabletDefault}%`;
            if(cameraTabletDefault < 1)
            {
                clearInterval(adddd);
                cameraTabletDefault = 1;
            }
        }, 2);
        $("#-cam_left").mouseup(function()
        {
            snd_camera_turn.volume = 0;
            let blur = 20;
            let inter2 = setInterval(function () 
            {
                getEle("-cam_bg").style.filter = `blur(${blur}px)`;
                blur--; 
            }, MOVEMENT_BLUR_TIMEOUT);
        
            setTimeout(() => {
                clearInterval(inter2);
            }, BLUR_TIMEOUT_PAN);
            clearInterval(adddd);
        }
        );
    }
    else
    {
        cameraTabletDefault = 0;
        getEle('-cam_bg').style.right = `${cameraTabletDefault}%`;
    }
})

$("#-cam_right").mousedown(function()
{
    snd_camera_turn.volume = 1;
    if(currentCam==="07"||currentCam==="08"||currentCam==="09"||currentCam==="10"||currentCam==="11"||currentCam==="12")
    {
        getEle("-cam_bg").style.filter = "blur(20px)";
        let adddd = setInterval(() =>
        {
            cameraTabletDefault++;
            getEle('-cam_bg').style.right = `${cameraTabletDefault}%`;
            if(cameraTabletDefault > SCREEN_EDGE_RIGHT)
            {
                clearInterval(adddd);cameraTabletDefault = SCREEN_EDGE_RIGHT;
            }
        }, 2);
        $("#-cam_right").mouseup(function()
        {
            snd_camera_turn.volume = 0;
            let blur = 20;
            let inter2 = setInterval(function () 
            {
                getEle("-cam_bg").style.filter = `blur(${blur}px)`;
                blur--; 
            }, MOVEMENT_BLUR_TIMEOUT);
        
            setTimeout(() => {
                clearInterval(inter2);
            }, BLUR_TIMEOUT_PAN);
            clearInterval(adddd);
        });
    }
    else
    {
        cameraTabletDefault = 0;
        getEle('-cam_bg').style.right = `${cameraTabletDefault}%`;
    }
})

$('#-c_light').mousedown(function(){office[0][1] = true;officeLightsToggle(3);});
$('#-c_light').mouseup(function(){office[0][1] = false;officeLightsToggle(3);});

$('#-l_light').mousedown(function(){office[1][1] = true;officeLightsToggle(1);});
$('#-l_light').mouseup(function(){office[1][1] = false;officeLightsToggle(1);});

$('#-r_light').mousedown(function(){office[2][1] = true;officeLightsToggle(2);});
$('#-r_light').mouseup(function(){office[2][1] = false;officeLightsToggle(2);});

$('#-cam_flash').mousedown(function(){camLight = true;officeLightsToggle(4);});
$('#-cam_flash').mouseup(function(){camLight = false;officeLightsToggle(4);});

$('button[alt="panning"]').click(function()
{
    const SELECT = querySelAll("button[name='movement']");
    for (var i = 0; i < SELECT.length; i++)SELECT[i].style.display = 'block';
})

$('button[alt="not_panning"]').click(function()
{
    const SELECT = querySelAll("button[name='movement']");
    for (var i = 0; i < SELECT.length; i++)SELECT[i].style.display = 'none';
})

function disableHints()
{
    const SELECT = querySelAll("img[class='-hints']");
    for (var i = 0; i < SELECT.length; i++)SELECT[i].remove();
    getEle("-hints_tggl").remove();
}

setTimeout(() => {
    disableHints();
}, 60000);

function getJumpscared(x)
{
    snd_jumpscare.play();
    let VARIABLES = [];
    for (let i = 0; i < 1; i++)
    {

        VARIABLES[i] = document.createElement("img");
        VARIABLES[i].setAttribute("draggable", "false");
        VARIABLES[i].setAttribute("id", "-jumpscare");
        VARIABLES[i].setAttribute("src", `${CAMERA_BACKGROUND_PATH}/${x}/jumpscare.png`);
        getEle("-mask").after(VARIABLES[i]);
    }

    for (let i = 0; i < sounds.length; i++)
    {
        sounds[i].volume = 0;
    }

    setTimeout(() => {
        getEle("-jumpscare").src = `${CAMERA_BACKGROUND_PATH}/${x}/jumpscare_last.png`;
    }, 500);

    setTimeout(() => {
        
        let x = setInterval(() => {
            
            bloodAnimation+=BLOOD_FALL_SPEED
            getEle("-death").style.top = `${bloodAnimation}%`;

            if(bloodAnimation >= BLOOD_LIMIT)
            {
                clearInterval(x);
                bloodAnimation = BLOOD_LIMIT;
                getEle("-death").style.top = `${bloodAnimation}%`;
            }

        }, INTERVAL_FREQUENCY);

    }, BLOOD_START_TIME);

    setTimeout(() => {

        let y = setInterval(() => {
            
            fadeAnimation+=FADE_AWAY_SPEED;
            getEle("-death_overlay").style.opacity = `${fadeAnimation}%`;

            if(fadeAnimation >= FADE_LIMIT)
            {
                clearInterval(y);
                fadeAnimation = FADE_LIMIT;
                getEle("-death_overlay").style.opacity = `${fadeAnimation}%`;
            }

        }, INTERVAL_FREQUENCY);

    }, FADE_START_TIME);

    setTimeout(() => {
        
        lullaby.play();
        let z = setInterval(() => {
            
            goFadeAnimation+=GAME_OVER_FADE_AWAY_SPEED;
            getEle("-game_over").style.opacity = `${goFadeAnimation}%`;

            if(goFadeAnimation >= FADE_LIMIT)
            {
                clearInterval(z);
                goFadeAnimation = FADE_LIMIT;
                getEle("-game_over").style.opacity = `${goFadeAnimation}%`;
            }

        }, INTERVAL_FREQUENCY);

    }, LULLABY_DELAY);

    setTimeout(() => {
        
        let c = setInterval(() => {
            
            goFadeAnimation-=GAME_OVER_FADE_AWAY_SPEED;
            getEle("-game_over").style.opacity = `${goFadeAnimation}%`;
            lullaby.volume = lullabyFade;

            if(goFadeAnimation >= FADE_LIMIT)
            {
                clearInterval(c);
                goFadeAnimation = FADE_LIMIT;
                getEle("-game_over").style.opacity = `${goFadeAnimation}%`;
            }
        }, INTERVAL_FREQUENCY);

        let v = setInterval(() => {
            lullabyFade-=LULLABY_FADE_SPEED;
            lullabyFade = Math.round(lullabyFade * 10) / 10;

            if(lullabyFade <= LULLABY_LIMIT)
            {
                clearInterval(v);
                lullaby.volume = LULLABY_LIMIT;
            }
        }, LULLABY_FADE_OUT);

        setTimeout(() => {
            window.location.replace("../Nights/1.html");
        }, 6000);

    }, GAME_OVER_SCREEN_TIME);
    
}
function officeStare(x, y, z, right, left)
{
    if(y == TOY_BONNIE)
    {
        y[6][1] = true;
        for(let i=0; i < TOY_BONNIE.length; i++)if(i !== 6)y[i][1] = false;
    }
    if(y == TOY_CHICA)
    {
        y[7][1] = true;
        for(let i=0; i < TOY_CHICA.length; i++)if(i !== 6)y[i][1] = false;
    }
    if(y == TOY_FREDDY)
    {
        y[3][1] = true;
        for(let i=0; i < TOY_FREDDY.length; i++)if(i !== 6)y[i][1] = false;
    }

    snd_stare.play();

    let VARIABLES = [];
    for (let i = 0; i < 1; i++)
    {
        VARIABLES[i] = document.createElement("img");
        VARIABLES[i].setAttribute("draggable", "false");
        VARIABLES[i].setAttribute("id", "-office_flicker");
        VARIABLES[i].setAttribute("src", "../Assets/fade.png");
        querySel(".-office_dsk").after(VARIABLES[i]);
    }

    if(z== TOY_ANIMATRONICS)
    {
        let VARIABLES2 = [];
        for (let i = 0; i < 1; i++)
        {
            VARIABLES2[i] = document.createElement("img");
            VARIABLES2[i].setAttribute("draggable", "false");
            VARIABLES2[i].setAttribute("id", "-toy_office");
            VARIABLES2[i].setAttribute("style", `right:${right};left:${left};`);
            VARIABLES2[i].setAttribute("src", `${CAMERA_BACKGROUND_PATH}/${x}/office.png`);
            querySel(".-office_dsk").after(VARIABLES2[i]);
        }
    }
    else
    {
        getEle("-office_bg").src = `${CAMERA_BACKGROUND_PATH}/${x}/office.png`
    }

    let FLICKER_FREQUENCY = Math.floor(Math.random() * (FLICKER_FREQUENCY_MAX - FLICKER_FREQUENCY_MIN + 1)) + FLICKER_FREQUENCY_MIN;

    let MASK_ON_CHECKER = 0;
    let MASK_OFF_CHECKER = 0

    let checker = setInterval(() => {
        if(mask) 
        {
            MASK_ON_CHECKER++;
        }
        else
        {
            MASK_OFF_CHECKER++;
        }
    }, INTERVAL_FREQUENCY);

    let m = setInterval(() =>
    {
        setTimeout(() => {
            if(!flicker)
            {
                getEle('-office_flicker').style.display = 'block';
                flicker = true;
            }
            else
            {
                getEle('-office_flicker').style.display = 'none';
                flicker = false;
            }
            FLICKER_FREQUENCY = Math.floor(Math.random() * (FLICKER_FREQUENCY_MAX - FLICKER_FREQUENCY_MIN + 1)) + FLICKER_FREQUENCY_MIN;
        }, FLICKER_FREQUENCY);
    }, INTERVAL_FREQUENCY);

    if(y !== TOY_FREDDY)animatronicPosition = -500;
    else animatronicPosition = 200;

    if(z == TOY_ANIMATRONICS)
    {
        let b = setInterval(() => {

            animatronicPosition+=ANIMATRIONIC_MOVEMENT_DISTANCE
            if(left == "auto") getEle("-toy_office").style.right = `${animatronicPosition}px`;
            else getEle("-toy_office").style.left = `${animatronicPosition}px`;

            if(animatronicPosition >= ANIMATRONIC_POSITION_LIMIT_A)
            {
                clearInterval(b);
                animatronicPosition = ANIMATRONIC_POSITION_LIMIT_A;
                if(left == "auto") getEle("-toy_office").style.right = `${animatronicPosition}px`;
                else getEle("-toy_office").style.left = `${animatronicPosition}px`;

                setTimeout(() => {
                    let n = setInterval(() => {
                        animatronicPosition-=ANIMATRIONIC_MOVEMENT_DISTANCE
                        if(left == "auto") getEle("-toy_office").style.right = `${animatronicPosition}px`;
                        else getEle("-toy_office").style.left = `${animatronicPosition}px`;

                        if(animatronicPosition <= ANIMATRONIC_POSITION_LIMIT_B)
                        {
                            if(MASK_ON_CHECKER < MASK_OFF_CHECKER)
                            {
                                snd_stare.pause();
                                snd_stare.load();
                                clearInterval(checker);
                                clearInterval(n);
                                clearInterval(m);
                                getJumpscared(x);
                            }
                            else
                            {
                                y[4][1] = true;
                                for(let i=0; i < y.length; i++)if(i !== 4)y[i][1] = false;
                                if(y == TOY_BONNIE)toyBonnieActivate();
                                if(y == TOY_CHICA)toyChicaActivate();
                                if(y == TOY_FREDDY)toyFreddyActivate();
                                cameraEffects();
                                animatronicMovement();
                                clearInterval(checker);
                                clearInterval(n);
                                clearInterval(m);
                                snd_stare.pause();
                                snd_stare.load();
                                animatronicPosition = ANIMATRONIC_POSITION_LIMIT_B;
                                getEle("-toy_office").remove();
                                getEle('-office_flicker').remove();
                            }
                        }
                    }, INTERVAL_FREQUENCY);
                }, ANIMATRONIC_WAIT_TIME);
            }

        }, INTERVAL_FREQUENCY);
    }

}