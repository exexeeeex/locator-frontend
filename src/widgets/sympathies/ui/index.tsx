import { useSympathiesNavigation } from "../model";
import { SympathiesNavigation } from "./navigation";

export const Sympathies: React.FC = () => {
  const { activeLink, switchPage, links } = useSympathiesNavigation();

  return (
    <section className="h-full flex flex-col">
      <div>
        <SympathiesNavigation
          links={links}
          activePage={activeLink}
          onSwitch={switchPage}
        />
      </div>
      <section className="mt-15">
        {activeLink === "matches" ? <h1>matches</h1> : <h1>likes</h1>}
      </section>
    </section>
  );
};
