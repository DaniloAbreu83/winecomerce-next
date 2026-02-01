export default function RoseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#4a141c] text-gray-100">
      {children}
    </div>
  );
}
