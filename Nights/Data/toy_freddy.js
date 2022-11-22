let tfRandom = Math.floor(Math.random() * (TF_MAX_CD - TF_MIN_CD + 1)) + TF_MIN_CD;


let randomCam3 = Math.floor(Math.random() * (TF_MAX_CAM - TF_MIN_CAM + 1)) + TF_MIN_CAM;

let interval1226

function toyFreddyActivate()
{
    interval1226 = setInterval(() => {
        toyFreddy()
        tfRandom = Math.floor(Math.random() * (TF_MAX_CD - TF_MIN_CD + 1)) + TF_MIN_CD;
    }, tfRandom);
}
function toyFreddy()
{
    if(TOY_FREDDY[4][1])
    {
        previousCam = "09"
        TOY_FREDDY[4][1] = false;
        cameraEffects();
        animatronicMovement();   
    }
    if(randomCam3 == 1)
    {
        TOY_FREDDY[0][1] = true;
        for(let i=0; i < TOY_FREDDY.length; i++)if(i !== 0)TOY_FREDDY[i][1] = false;
        if(currentCam == previousCam)
        {
            snd_camera_metalwalk2.play();
            cameraEffects();
            animatronicMovement();   
        }
        if(currentCam == "10")
        {
            snd_camera_metalwalk2.play();
            cameraEffects();
            animatronicMovement();
        }
        previousCam = "10";
    }
    if (randomCam3 == 2)
    {
        clearInterval(interval1226);
        snd_hallway.play();
        TOY_FREDDY[1][1] = true;
        for(let i=0; i < TOY_FREDDY.length; i++)if(i !== 1)TOY_FREDDY[i][1] = false;
        if(currentCam == previousCam)
        {
            snd_camera_metalwalk2.play();
            cameraEffects();
            animatronicMovement();   
        }
        if(currentCam == "10")
        {
            snd_camera_metalwalk2.play();
            cameraEffects();
            animatronicMovement();
        }

        setTimeout(() => {
            TOY_FREDDY[2][1] = true;
            for(let i=0; i < TOY_FREDDY.length; i++)if(i !== 2)TOY_FREDDY[i][1] = false;

            setTimeout(() => {
                snd_hallway.pause();
                snd_hallway.load();
                officeStare("tf", TOY_FREDDY, TOY_ANIMATRONICS, "200px", "auto");
            }, tfRandom);
        }, tfRandom);
    }
    randomCam3 = Math.floor(Math.random() * (TF_MAX_CAM - TF_MIN_CAM + 1)) + TF_MIN_CAM;
}
