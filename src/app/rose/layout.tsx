export default function RoseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f2d6d9] text-gray-900">
      {children}
    </div>
  );
}
