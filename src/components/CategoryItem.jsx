export const CategoryItem = ({ label, icon, active = false }) => (
  <div className="flex flex-col items-center gap-2 min-w-[75px]">
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all ${
      active ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-white border border-gray-100 shadow-sm'
    }`}>
      {icon}
    </div>
    <span className={`text-xs font-medium ${active ? 'text-primary' : 'text-gray-500'}`}>{label}</span>
  </div>
);