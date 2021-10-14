import React from "react";
import {ICPFooterBlock} from "./icp";
import {render} from '@testing-library/react'

test("icp demo", async () => {
    const ui = render(<ICPFooterBlock icp_num={0}/>)
    expect(ui).toBeTruthy()
})
