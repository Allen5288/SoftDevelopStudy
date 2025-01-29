import { Button, Tabs } from "devlifeui-react";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my home page!</p>
      <Button variant="primary" size="lg">
        Click me 2
      </Button>

      <Button variant="default" size="sm">
        Click me
      </Button>
      <Tabs
        tabs={[
          { id: "tab1", label: "Tab 1", content: "Content 1" },
          { id: "tab2", label: "Tab 2", content: "Content 2" },
        ]}
      />
    </div>
  );
}

export default Home;
