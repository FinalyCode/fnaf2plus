function animatronicMovement()
{
    switch(currentCam) {
        case "01":
            if(camLight)
            {
                if (TOY_CHICA[0][1])getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/tc/${currentCam}_tc.png`;
                else getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/${currentCam}_l.png`;
            }
            else getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/${currentCam}.png`;
            break;
        case "02":
            if (camLight)
            {
                if (TOY_BONNIE[0][1])getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/tb/${currentCam}_tb.png`;
                else getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/${currentCam}_l.png`;
            }
            else getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/${currentCam}.png`;
            break;
        case "03":
            if (TOY_BONNIE[1][1])
            {
                if (camLight)getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/tb/${currentCam}_tb_l.png`;
                else getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/tb/${currentCam}_tb.png`; 
            }
            else if (TOY_CHICA[1][1])
            {
                if (camLight)getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/tc/${currentCam}_tc.png`;
                else getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/${currentCam}.png`;
            }
            else
            {
                if (camLight)getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/${currentCam}_l.png`;
                else getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/${currentCam}.png`; 
            }
            break;
        case "04":
            if (camLight)
            {
                if (TOY_BONNIE[2][1])getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/tb/${currentCam}_tb.png`;
                else getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/${currentCam}_l.png`;
            }
            else getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/${currentCam}.png`;
            break;
        case "05":
            if(camLight)
            {
                if (TOY_CHICA[3][1])getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/tc/${currentCam}_tc.png`;
                else getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/${currentCam}_l.png`;
            }
            else getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/${currentCam}.png`;
            break;
        case "06":
            if (camLight)
            {
                if (TOY_BONNIE[3][1])getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/tb/${currentCam}_tb.png`;
                else getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/${currentCam}_l.png`;
            }
            else getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/${currentCam}.png`;
            break;
        case "07":
            if (TOY_CHICA[3][1])
            {
                if (camLight)getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/tc/${currentCam}_tc_l.png`;
                else getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/tc/${currentCam}_tc.png`; 
            }
            else
            {
                if (camLight)getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/${currentCam}_l.png`;
                else getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/${currentCam}.png`; 
            }
            break;
        case "08":
            if (camLight)getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/${currentCam}_l.png`;
            else getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/${currentCam}.png`;
            break;
        case "09":
            if (!TOY_BONNIE[4][1] && !TOY_CHICA[4][1] && !TOY_FREDDY[4][1])
            {
                if (camLight)getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/tf/${currentCam}_none.png`;
                else getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/tf/${currentCam}_none.png`; 
            }
            else if(!TOY_BONNIE[4][1])
            {
                if (camLight)getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/tb/${currentCam}_tb_l.png`;
                else getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/tb/${currentCam}_tb.png`; 
            }
            else if(!TOY_BONNIE[4][1] && !TOY_CHICA[4][1])
            {
                if (camLight)getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/tc/${currentCam}_tbtc_l.png`;
                else getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/tc/${currentCam}_tbtc.png`; 
            }
            else
            {
                if (camLight)getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/${currentCam}_l.png`;
                else getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/${currentCam}.png`; 
            }
            break;
        case "10":
            if(camLight)
            {
                if (TOY_FREDDY[0][1])getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/tf/${currentCam}_tf.png`;
                else getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/${currentCam}_l.png`;
            }
            else getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/${currentCam}.png`;
            break;
        case "11":
            if (camLight)getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/${currentCam}_l.png`;
            else getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/${currentCam}.png`;
            break;
        case "12":
            if (camLight)getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/${currentCam}_l.png`;
            else getEle("-cam_bg").src = `${CAMERA_BACKGROUND_PATH}/${currentCam}.png`;
            break;
        } 
}

function cameraEffects()
{
    getEle("-cam_bg").style.filter = 'blur(30px)';
    let static = 100;
    let inter = setInterval(function () 
        {
            getEle("-static").style.opacity = `${static}%`;
            static--;
        }, STATIC_TIMEOUT);
    
        setTimeout(() =>
        {
            clearInterval(inter);
            if(static !== 20) 
            {
                static = 20;
                getEle("-static").style.opacity = `${static}%`;
            }
        }, CAMERA_SWITCH_STATIC);

    setTimeout(() => {
        let blur = 30;
        let inter2 = setInterval(function () 
        {
            getEle("-cam_bg").style.filter = `blur(${blur}px)`;
            blur--;
        }, BLUR_TIMEOUT);
    
        setTimeout(() =>
        {
            clearInterval(inter2);
            if(blur !== 3) 
            {
                blur = 3;
                getEle("-cam_bg").style.filter = `blur(${blur}px)`;
            }
        }, CAMERA_SWITCH_BLUR);
    }, BLUR_DELAY);    
    
}