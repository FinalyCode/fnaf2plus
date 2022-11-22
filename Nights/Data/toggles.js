function abc()
{
    power = false;
    if(office[0][1])
    {
        setTimeout(() => {
            flashlightPower--;

            if (flashlightPower <= BATTERY_PRECENTAGES[0]) getEle("-battery_meter").src = `${IMAGE_PATH}/battery_2.png`;
            if (flashlightPower <= BATTERY_PRECENTAGES[1]) getEle("-battery_meter").src = `${IMAGE_PATH}/battery_3.png`;
            if (flashlightPower <= BATTERY_PRECENTAGES[2]) getEle("-battery_meter").src = `${IMAGE_PATH}/battery_4.png`;
            if (flashlightPower <= BATTERY_PRECENTAGES[3]) getEle("-battery_meter").src = `${IMAGE_PATH}/battery_5.png`;
            abc();
        }, POWER_USSAGE); 
    }
    else
    {
        power = true;
    }
    
}

function officeLightsToggle(x)
{
    if(x === LEFT_LIGHT)
    {
        if(office[1][1])
        {
            snd_buzzlight.volume = 1;
            if(TOY_CHICA[6][1]) querySel('.-office_bg').src = `${CAMERA_BACKGROUND_PATH}/tc/office_toy_chica.png`;
            else querySel('.-office_bg').src = `${IMAGE_PATH}/office_left_light.png`;
            getEle('-l_light').style.backgroundImage = `url('${IMAGE_PATH}/left_light_on.png')`;
        }
        else
        {
            snd_buzzlight.volume = 0;
            querySel('.-office_bg').src = `${IMAGE_PATH}/office.png`;
            getEle('-l_light').style.backgroundImage = `url('${IMAGE_PATH}/left_light.png')`;
        }
    }
    if(x === RIGHT_LIGHT)
    {
        if(office[2][1])
        {
            snd_buzzlight.volume = 1;
            if(TOY_BONNIE[5][1]) querySel('.-office_bg').src = `${CAMERA_BACKGROUND_PATH}/tb/office_toy_bonnie.png`;            else querySel('.-office_bg').src = `${IMAGE_PATH}/office_right_light.png`;
            getEle('-r_light').style.backgroundImage = `url('${IMAGE_PATH}/right_light_on.png')`;
        }
        else
        {
            snd_buzzlight.volume = 0;
            querySel('.-office_bg').src = `${IMAGE_PATH}/office.png`;
            getEle('-r_light').style.backgroundImage = `url('${IMAGE_PATH}/right_light.png')`;
        }
    }
    if(x === CENTER_LIGHT)
    {
        if(office[0][1])
        {
            snd_buzzlight.volume = 1;
            if (TOY_FREDDY[1][1]) querySel('.-office_bg').src = `${CAMERA_BACKGROUND_PATH}/tf/hallway_toy_freddy.png`;
            else if (TOY_FREDDY[2][1]) querySel('.-office_bg').src = `${CAMERA_BACKGROUND_PATH}/tf/hallway_toy_freddy_2.png`;
            else if(TOY_CHICA[5][1]) querySel('.-office_bg').src = `${CAMERA_BACKGROUND_PATH}/tc/hallway_toy_chica.png`;
            else querySel('.-office_bg').src = `${IMAGE_PATH}/light.png`;
            getEle('-c_light').style.backgroundImage = `url('${IMAGE_PATH}/desk_light_on.png')`;
        }
        else
        {
            snd_buzzlight.volume = 0;
            querySel('.-office_bg').src = `${IMAGE_PATH}/office.png`;
            getEle('-c_light').style.backgroundImage = `url('${IMAGE_PATH}/desk_light.png')`;
        }
    }
    if(x === CAM_LIGHT)
    {
        if(camLight)
        {
            snd_buzzlight.volume = 1;
            animatronicMovement()
        }
        else
        {
            snd_buzzlight.volume = 0;
            animatronicMovement()
        }
    }
}

function maskToggle()
{
    if(!mask)
    {
        mask = true;
        snd_mask_on.play();
        getEle("-mask").src = `${IMAGE_PATH}/mask_on_anim.png`;
        getEle("-camera-btn").style.display = 'none';
        getEle("-mask-btn").style.pointerEvents = 'none';
        getEle("-mask-btn").style.display = 'none';
        getEle("-mask").style.zIndex = 3;
        getEle("-left").style.zIndex = 4;
        getEle("-right").style.zIndex = 4;
        getEle("-battery_meter").style.zIndex = 4;
        getEle("-mask").style.display = 'block';
        setTimeout(() => {
            snd_mask.play();
            getEle("-mask").src = `${IMAGE_PATH}/mask.png`;
            getEle("-mask-btn").style.display = 'block';
            setTimeout(() => {
                getEle("-mask-btn").style.pointerEvents = 'all';
            }, TOGGLE_DELAY);
        }, TOGGLE_DELAY);
    }
    else
    {
        mask = false;
        snd_mask_off.play();
        snd_mask.pause();
        snd_mask.load();
        getEle("-mask").src = `${IMAGE_PATH}/mask_off_anim.png`;
        getEle("-camera-btn").style.display = 'block';
        setTimeout(() => {
            getEle("-camera-btn").style.display = 'block';
            getEle("-mask").style.display = 'none';
            getEle("-mask").style.zIndex = 0;
            getEle("-left").style.zIndex = 1;
            getEle("-right").style.zIndex = 1;
            getEle("-battery_meter").style.zIndex = 1;
        }, TOGGLE_DELAY);
    }
}

function camerasToggle()
{
    if(!cameras)
    {
        cameras = true;
        snd_camera_open.play();
        snd_camera_ambience.play();
        snd_ambience.volume = .5;
        snd_fansound.volume = .5;
        getEle("-cameras").src = `${IMAGE_PATH}/camera_on_anim.png`;
        getEle("-mask-btn").style.display = 'none';
        getEle("-camera-btn").style.pointerEvents = 'none';
        getEle("-camera-btn").style.display = 'none';
        getEle("-cameras").style.zIndex = 3;
        getEle("-battery_meter").style.zIndex = 4;
        getEle("-cameras").style.display = 'block';
        setTimeout(() => {
            getEle("-tablet").style.display = "block";
            getEle("-camera-btn").style.display = 'block';
            currentCam = "09";
            cameraEffects();
            animatronicMovement();
            setTimeout(() => {
                getEle("-camera-btn").style.pointerEvents = 'all';
            }, TOGGLE_DELAY);
        }, TOGGLE_DELAY);
    }
    else
    {
        cameras = false;
        snd_camera_close.play();
        snd_camera_ambience.pause();
        snd_camera_ambience.load();
        snd_ambience.volume = 1;
        snd_fansound.volume = 1;
        getEle("-tablet").style.display = 'none';
        getEle("-cameras").src = `${IMAGE_PATH}/camera_off_anim.png`;
        getEle("-mask-btn").style.display = 'block';
        setTimeout(() => {
            getEle("-mask-btn").style.display = 'block';
            getEle("-cameras").style.display = 'none';
            getEle("-cameras").style.zIndex = 0;
            getEle("-battery_meter").style.zIndex = 1;
        }, TOGGLE_DELAY);
    }
}