export default function RoseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f7f4ee] text-gray-900">
      {children}
    </div>
  );
}
