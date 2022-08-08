
function UserCourses() {
    return (
        <>
        <div className="row">
            <div className="userHead col-3 py-3 px-5 d-flex">
                <div className="userIcon"></div>
                <div>
                    <div className="userName mx-2 text-white">Ibrohim Fayzullayev</div>
                    <div className="d-flex">
                        <div className="mx-2 text-white">Setting</div>
                        <div className="text-white">Log out</div>
                    </div>
                </div>
            </div>
            <div className="userSearch col-9 d-flex justify-content-end px-5">
                <div className="d-flex align-items-center">
                   <div>
                    <a href="#" className="text-decoration-none text-white mx-4">Courses</a>
                   </div>
                   <div>
                    <a href="#" className="text-decoration-none text-white">About Us</a>
                   </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="courseContent col-3">
            <div className="text-white my-4 mx-3">1. lorem and you head like this</div>
            <div className="text-white my-4 mx-3">2. lorem and you head like this</div>
            <div className="text-white my-4 mx-3">3. lorem and you head like this</div>
            <div className="text-white my-4 mx-3">4. lorem and you head like this</div>
            <div className="text-white my-4 mx-3">5. lorem and you head like this</div>
            <div className="text-white my-4 mx-3">6. lorem and you head like this</div>
            <div className="text-white my-4 mx-3">7. lorem and you head like this</div>
            <div className="text-white my-4 mx-3">8. lorem and you head like this</div>
            <div className="text-white my-4 mx-3">9. lorem and you head like this</div>
            <div className="text-white my-4 mx-3">10. lorem and you head like this</div>
            </div>
        </div>
        </>
    )
}
export default UserCourses