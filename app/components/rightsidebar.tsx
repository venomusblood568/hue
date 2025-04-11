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
        className="flex items-center justify-center w-full px-6 py-3 bg-[#1e1e1e] rounded-2xl shadow-md cursor-pointer hover:bg-[#616060]"
      >
        Export
      </button>
    </div>
  );
}
