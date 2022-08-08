import '../main/loader.css'

function Loader() {
    return (
        <div>
            <div className="overlay">
                <div className="absolute">
                    <div class="lds-default">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Loader