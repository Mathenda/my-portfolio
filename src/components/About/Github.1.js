import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

export function Github() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                Days I <strong className="purple">Code</strong>
            </h1>
            <GitHubCalendar
                username="The1Don1"
                blockSize={15}
                blockMargin={7}
                // theme = "dark"
                color="#5f76f8"
                fontSize={16} />
        </Row>
    );
}
