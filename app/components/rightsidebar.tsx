interface RightSidebarProps{
  onExport: () => void
}

export default function RightSidebar({onExport}:RightSidebarProps) {
  return (
    <div
      className="w-52 bg-[#151414] text-white p-4  shadow-lg overflow-y-auto rounded-2xl"
      style={{ height: "calc(100vh - 1rem)", margin: "0.5rem" }}
    >
      <button 
      onClick={onExport}
      className="bg-[#232f3a] p-2 m-2 rounded-2xl cursor-pointer border-2">
        Export
      </button>
    </div>
  );
}
