import ProfilePage from "@/app/profile/page";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { describe, expect, it } from "@jest/globals";

describe("Page", () => {
  it("renders a heading", () => {
    const { container } = render(<ProfilePage />);
    expect(container.getElementsByClassName("profilePic").length).toBe(1);
  });
});
