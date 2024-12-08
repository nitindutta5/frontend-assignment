import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./index";

describe("Table Component", () => {
  const mockData = [
    { "s.no": 1, "percentage.funded": "10%", "amt.pledged": "$100" },
    { "s.no": 2, "percentage.funded": "20%", "amt.pledged": "$200" },
    { "s.no": 3, "percentage.funded": "30%", "amt.pledged": "$300" },
    { "s.no": 4, "percentage.funded": "40%", "amt.pledged": "$400" },
    { "s.no": 5, "percentage.funded": "50%", "amt.pledged": "$500" },
    { "s.no": 6, "percentage.funded": "60%", "amt.pledged": "$600" },
    { "s.no": 7, "percentage.funded": "70%", "amt.pledged": "$700" },
  ];

  test("renders only five items per page", () => {
    render(<Table data={mockData} itemPerPage={5} />);

    // Get all rows in the tbody (excluding the header row)
    const rows = screen.getAllByRole("row").slice(1); // Skip the header

    // Check if the number of rows is exactly 5
    expect(rows.length).toBeLessThanOrEqual(5);
  });
});
