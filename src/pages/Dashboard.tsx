import NovaChat from "../components/NovaChat";

export default function Dashboard() {
  return (
    <section className="container page">

      <h1>
        Nova Workspace
      </h1>

      <p>
        Your AI creation environment.
      </p>

      <NovaChat />

    </section>
  );
}
