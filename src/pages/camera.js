import './style.css';

const Camera = () => {

    return(
        <div className="cameraPage">
            <div class="cameraTitle">
                <h1 class="cameraTitleText">Bedroom Camera</h1>
            </div>
            <img src="http://nathanjohnthedom.com:8000/stream.mjpg" width="1232" height="640" class="stream" alt="Live camera feed"/>
            
        </div>
    )
}

export default Camera;