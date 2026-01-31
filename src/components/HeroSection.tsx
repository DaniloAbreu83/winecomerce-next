type Props = {
  backgroundImage: string;
};

export default function HeroSection({ backgroundImage }: Props) {
  return (
    <section
      className="h-screen flex items-center justify-center bg-cover bg-center text-center px-6"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="max-w-3xl bg-black/60 p-10 rounded-lg">
        <h2 className="text-5xl font-extrabold mb-6">
          O vinho perfeito para cada momento
        </h2>

        <p className="text-xl text-gray-300">
          Explore nossa curadoria de vinhos tintos, brancos e rosés selecionados
          para transformar sua experiência.
        </p>
      </div>
    </section>
  );
}
