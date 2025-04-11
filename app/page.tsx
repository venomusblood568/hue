import Canvabox from "./components/canvabox";
import Leftsidebar from "./components/leftsidebar";
import RightSidebar from "./components/rightsidebar";


export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Leftsidebar />
      <Canvabox />
      <RightSidebar />
    </div>
  );
}
