import {Route, Routes, Navigate} from "react-router-dom"
import Autorization from "../page/Autorization";
import MainPage from "../page/MainPage";

const Router = () => {
    return (
        <Routes>
            <Route path={"/autorization"} element={<Autorization />}/>
            <Route path={"/chat"} element={<MainPage />} />
            <Route path="*" element={<Navigate to={"/autorization"} replace />} />
        </Routes>
    )
}

export default Router;