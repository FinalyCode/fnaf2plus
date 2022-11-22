let tbRandom = Math.floor(Math.random() * (TB_MAX_CD - TB_MIN_CD + 1)) + TB_MIN_CD;


let randomCam = Math.floor(Math.random() * (TB_MAX_CAM - TB_MIN_CAM + 1)) + TB_MIN_CAM;

let interval1224

function toyBonnieActivate()
{
    interval1224 = setInterval(() => {
        toyBonnie()
        tbRandom = Math.floor(Math.random() * (TB_MAX_CD - TB_MIN_CD + 1)) + TB_MIN_CD;
    }, tbRandom);
}
function toyBonnie()
{
    if(TOY_BONNIE[4][1])
    {
        previousCam = "09"
        TOY_BONNIE[4][1] = false;
    }

    if(randomCam == 1)
    {
        clearInterval(interval1224);
        TOY_BONNIE[0][1] = true;
        for(let i=0; i <= TOY_BONNIE.length; i++)if(i !== 0)TOY_BONNIE[i][1] = false;
        if(currentCam == previousCam)
        {
            snd_camera_metalwalk2.play();
            cameraEffects();
            animatronicMovement();   
        }
        if(currentCam == "02")
        {
            snd_camera_metalwalk2.play();
            cameraEffects();
            animatronicMovement();
        }
        previousCam = "02";

        setTimeout(() => {
            TOY_BONNIE[3][1] = true;
            for(let i=0; i <= TOY_BONNIE.length; i++)if(i !== 3)TOY_BONNIE[i][1] = false;
            if(currentCam == previousCam)
            {
                snd_camera_ventwalk1.play();
                cameraEffects();
                animatronicMovement();   
            }
            if(currentCam == "06")
            {
                snd_camera_ventwalk1.play();
                cameraEffects();
                animatronicMovement();
            }
            previousCam = "06";

            setTimeout(() => {
                TOY_BONNIE[5][1] = true;
                for(let i=0; i <= TOY_BONNIE.length; i++)if(i !== 5)TOY_BONNIE[i][1] = false;
                if(currentCam == previousCam)
                {
                    snd_camera_ventwalk1.play();
                    cameraEffects();
                    animatronicMovement();   
                }
                if(currentCam == "06")
                {
                    snd_camera_ventwalk1.play();
                    cameraEffects();
                    animatronicMovement();
                }
                previousCam = "06";

                setTimeout(() => {
                    officeStare("tb", TOY_BONNIE, TOY_ANIMATRONICS, "-600px", "auto");
                }, tbRandom);
            }, tbRandom);
        }, tbRandom);
    }
    if (randomCam == 2)
    {
        TOY_BONNIE[1][1] = true;
        for(let i=0; i <= TOY_BONNIE.length; i++)if(i !== 1)TOY_BONNIE[i][1] = false;
        if(currentCam == previousCam)
        {
            snd_camera_metalwalk2.play();
            cameraEffects();
            animatronicMovement();   
        }
        if(currentCam == "03")
        {
            snd_camera_metalwalk2.play();
            cameraEffects();
            animatronicMovement();
        }
        previousCam = "03";
    }
    if (randomCam == 3)
    {
        TOY_BONNIE[2][1] = true;
        for(let i=0; i <= TOY_BONNIE.length; i++)if(i !== 2)TOY_BONNIE[i][1] = false;
        if(currentCam == previousCam)
        {
            snd_camera_metalwalk2.play();
            cameraEffects();
            animatronicMovement();   
        }
        if(currentCam == "04")
        {
            snd_camera_metalwalk2.play();
            cameraEffects();
            animatronicMovement();
        }
        previousCam = "04";
    }
    randomCam = Math.floor(Math.random() * (TB_MAX_CAM - TB_MIN_CAM + 1)) + TB_MIN_CAM;
}
