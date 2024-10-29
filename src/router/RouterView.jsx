import { Navigate, Route, Routes } from "react-router-dom";
import QuickStartPage from "../components/pages/QuickStart";
import CreatingAndNestingComponentsPage from "../components/pages/CreatingAndNestingComponents";
import WritingMarkupWithJSXPage from "../components/pages/WritingMarkupWithJSX";
import DisplayingDataPage from "../components/pages/DisplayingData";
import RenderAndConditionListPage from "../components/pages/RenderConditionAndList";
import RespondToEventsAndUpdateTheScreenPage from "../components/pages/RespondToEventsAndUpdateTheScreen";


function RouterView() {
  return (
    <div className="p-5 ml-[250px]">
      <Routes>
        <Route path="/quick-start" element={<QuickStartPage />} />
        <Route path="/creating-and-nesting-components" element={<CreatingAndNestingComponentsPage />} />
        <Route path="/writing-markup-with-JSX" element={<WritingMarkupWithJSXPage />} />
        <Route path="/displaying-data" element={<DisplayingDataPage />} />
        <Route path="/render-condotion-and-list" element={<RenderAndConditionListPage />} />
        <Route path="/respond-to-events-and-update-the-screen" element={<RespondToEventsAndUpdateTheScreenPage />} />
        <Route path="/render-condotion-and-list" element={<RenderAndConditionListPage />} />
        
        <Route path="*" element={<Navigate to="/quick-start" replace/>} />
      </Routes>
    </div>
  )
}

export default RouterView;