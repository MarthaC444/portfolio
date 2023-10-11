import { createRoot } from 'react-dom/client';
import Contact from './index';

describe("Contact component", () => {
  it("Should render the contact form", () => {
    const div = document.createElement("div");
    const root = createRoot(div); // createRoot(container!) if you use TypeScript
    root.render(<Contact />);
  });

  // Other style
  // it("should render the EditableList component", () => {
  //   render(<EditableList />);
  //   const h1 = screen.getByText("An Editable List");
  //   expect(h1).toBeInTheDocument();
  // });
});