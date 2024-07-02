import { AppSection } from "~/components/AppSection";
import { ProgressBar } from "~/components/progressBar";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen px-12 md:px-44 pt-12 max-w-[1512px] m-auto">
        <ProgressBar />

        <header className="flex justify-between items-center mb-16">
          <p>LIVAI STUDIO</p>
          <a
            href="mailto:livaistudio@gmail.com"
            className="text-sm xl:text-xl text-yellow  uppercase font-semibold hover:underline xl:hover:no-underline xl:border-2 xl:rounded-xl xl:py-2 xl:px-9"
          >
            Nous contacter
          </a>
        </header>

        <p className="text-2xl md:text-8xl/normal font-semibold text-center px-6  mb-14 md:mb-28 font-title leading-relaxed">
          LE STUDIO DE CRÉATION{" "}
          <span className="text-white rotating-background md:text-8xl">
            D’APPLICATIONS
          </span>{" "}
          MOBILE DE DIVERTISSEMENTS
        </p>

        <AppSection
          name="EuroQuiz 2024"
          logo="euroquiz"
          description="Si vous êtes à la recherche d'une application qui vous permettra de
        redécouvrir votre relation amoureuse, de renforcer votre lien émotionnel
        et de briser la routine quotidienne, vous serez ravis de découvrir Bae,
        l'application de quiz pour couples !"
          iosLink=""
          androidLink=""
        />

        <div className="md:flex md:justify-between md:mb-32 mb-12">
          <h3 className="font-medium text-3xl mb-12 leading-normal md:w-1/2 md:text-4xl">
            Une{" "}
            <span className="font-extrabold">
              demande <span className="text-yellow">?</span>
            </span>{" "}
            Une{" "}
            <span className="font-extrabold">
              question <span className="text-yellow">?</span>
            </span>{" "}
            Des idées{" "}
            <span className="font-extrabold">
              d’amélioration <span className="text-yellow">?</span>
            </span>
          </h3>

          <a
            href="mailto:livaistudio@gmail.com"
            className="bg-black md:w-1/2  text-white w-full text-xl font-semibold uppercase py-3 px-4 rounded-xl mb-24 md:mb-28 md:max-w-72 text-center"
          >
            Nous contacter
          </a>
        </div>
      </div>
      <footer className="bg-black px-12 py-9 flex justify-between items-start md:px-44 pt-12 m-auto">
        <div className="md:flex md:gap-24">
          <div className="md:flex-col">
            <p className="text-white text-xl font-bold mb-2">Etha</p>
            <div className="flex flex-col gap-1 mb-8">
              <a
                href="mailto:livaistudio@gmail.com"
                className="underline text-white"
              >
                Nous contacter
              </a>
            </div>
          </div>
          <div className="md:flex-col">
            <p className="text-white text-xl font-bold mb-2">
              Nos applications
            </p>

            <div className="flex flex-col gap-1">
              <a href="" className="underline text-white">
                EuroQuiz 2024
              </a>
            </div>
          </div>
        </div>
        <img src="/logo-white.svg" alt="" className="w-16" />
      </footer>
    </main>
  );
}
