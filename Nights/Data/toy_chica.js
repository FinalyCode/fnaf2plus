let tcRandom = Math.floor(Math.random() * (TC_MAX_CD - TC_MIN_CD + 1)) + TC_MIN_CD;


let randomCam2 = Math.floor(Math.random() * (TC_MAX_CAM - TC_MIN_CAM + 1)) + TC_MIN_CAM;

let interval1225

function toyChicaActivate()
{
    interval1225 = setInterval(() => {
        toyChica()
        tcRandom = Math.floor(Math.random() * (TC_MAX_CD - TC_MIN_CD + 1)) + TC_MIN_CD;
    }, tcRandom);
}
function toyChica()
{
    if(TOY_CHICA[4][1])
    {
        previousCam = "09"
        TOY_CHICA[4][1] = false;
        cameraEffects();
        animatronicMovement();   
    }
    if(randomCam2 == 1)
    {
        clearInterval(interval1225);
        TOY_CHICA[0][1] = true;
        for(let i=0; i < TOY_CHICA.length; i++)if(i !== 0)TOY_CHICA[i][1] = false;
        if(currentCam == previousCam)
        {
            snd_camera_metalwalk2.play();
            cameraEffects();
            animatronicMovement();   
        }
        if(currentCam == "01")
        {
            snd_camera_metalwalk2.play();
            cameraEffects();
            animatronicMovement();
        }
        previousCam = "01";

        setTimeout(() => {
            TOY_CHICA[3][1] = true;
            for(let i=0; i < TOY_CHICA.length; i++)if(i !== 3)TOY_CHICA[i][1] = false;
            if(currentCam == previousCam)
            {
                snd_camera_ventwalk1.play();
                cameraEffects();
                animatronicMovement();   
            }
            if(currentCam == "05")
            {
                snd_camera_ventwalk1.play();
                cameraEffects();
                animatronicMovement();
            }
            previousCam = "05";

            setTimeout(() => {
                TOY_CHICA[6][1] = true;
                for(let i=0; i < TOY_CHICA.length; i++)if(i !== 6)TOY_CHICA[i][1] = false;
                if(currentCam == previousCam)
                {
                    snd_camera_ventwalk1.play();
                    cameraEffects();
                    animatronicMovement();   
                }
                if(currentCam == "05")
                {
                    snd_camera_ventwalk1.play();
                    cameraEffects();
                    animatronicMovement();
                }
                previousCam = "05";

                setTimeout(() => {
                    officeStare("tc", TOY_CHICA, TOY_ANIMATRONICS, "auto", "-600px");
                }, tcRandom);
            }, tcRandom);
        }, tcRandom);
    }
    if (randomCam2 == 2)
    {
        TOY_CHICA[1][1] = true;
        for(let i=0; i < TOY_CHICA.length; i++)if(i !== 1)TOY_CHICA[i][1] = false;
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
    if (randomCam2 == 3)
    {
        TOY_CHICA[3][1] = true;
        for(let i=0; i < TOY_CHICA.length; i++)if(i !== 3)TOY_CHICA[i][1] = false;
        if(currentCam == previousCam)
        {
            snd_camera_metalwalk2.play();
            cameraEffects();
            animatronicMovement();   
        }
        if(currentCam == "07")
        {
            snd_camera_metalwalk2.play();
            cameraEffects();
            animatronicMovement();
        }
        previousCam = "07";

        if(!TOY_FREDDY[1][1] || !TOY_FREDDY[2][1])
        {
        clearInterval(interval1225);
        setTimeout(() => {
            snd_hallway.play();
            TOY_CHICA[5][1] = true;
            for(let i=0; i < TOY_CHICA.length; i++)if(i !== 5)TOY_CHICA[i][1] = false;
            if(currentCam == previousCam)
            {
                cameraEffects();
                animatronicMovement();   
            }
            if(currentCam == "07")
            {
                cameraEffects();
                animatronicMovement();
            }
            previousCam = "07";

            setTimeout(() => {
                snd_hallway.pause();
                snd_hallway.load();
                TOY_CHICA[4][1] = true;
                for(let i=0; i < TOY_CHICA.length; i++)if(i !== 4)TOY_CHICA[i][1] = false;
                toyChicaActivate();
                cameraEffects();
                animatronicMovement();
            }, tcRandom);
        }, tcRandom);
        }
    }
    randomCam2 = Math.floor(Math.random() * (TC_MAX_CAM - TC_MIN_CAM + 1)) + TC_MIN_CAM;
}
